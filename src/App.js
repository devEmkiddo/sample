import React, { Component } from 'react'
import Web3 from 'web3';
import NavBar from './NavBar';
import Main from './Main';
import Token from './truffle_abis/Token.json'
import Airdrop from './truffle_abis/Airdrop.json'
import Footer from './Footer';

 class App extends Component {

   //Load up our data from our blockchain and connect with metamask
   async componentDidMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    await this.loadBalance()
  }

  //Load up metamask
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('No Ethereum browser available');
    }
  }
   //Load up our contract info from the block chain
  async loadBlockchainData(){
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts();
    this.setState({account: accounts[0]});
    const networkId = await web3.eth.net.getId();
    console.log(networkId);
    const tokenData =  Token.networks[networkId];
    const airdropData = Airdrop.networks[networkId];
    

    if (tokenData) {
      this.setState({loading: true});
      const tokenContract = new web3.eth.Contract(Token.abi, tokenData.address);
      this.setState({ tokenContract: tokenContract });
      //Load balance of user account
    }else{
      window.alert('not deployed to this network');
    }
    this.setState({loading: false});
    
    if (airdropData) {
      this.setState({loading: true});
      const airdropContract = new web3.eth.Contract(Airdrop.abi, airdropData.address);
      this.setState({ airdropContract: airdropContract });
    }else{
      window.alert('not deployed to this network');
    }
    this.setState({loading: false});
  }

  async loadBalance(){
      this.setState({loading: true});
      const web3 = window.web3
      const networkId = await web3.eth.net.getId();
      console.log(networkId);
      const tokenData =  Token.networks[networkId];
      const tokenContract = new web3.eth.Contract(Token.abi, tokenData.address);
      let balanceOf = await this.state.tokenContract.methods.balanceOf(this.state.account).call();
      let balance = web3.utils.fromWei(balanceOf, 'ether');
      this.setState({ balance: balance});
      this.setState({loading: false});
  }

  constructor(props) {
    super(props)
  
    this.state = {
       account: '',
       tokenContract: {},
       airdropContract: {},
       balance: '0',
       loading: true
    }
  }

  connect = async () =>{
    await this.loadWeb3();
    await this.loadBlockchainData();
    await this.loadBalance();
  };

  disconnect = () =>{
       this.setState({
        account: '',
        tokenContract: '',
        airdropContract: '',
        balance: '0'
       });
  };
  
  claim = async () => {
    try {
      if(this.state.account){
        this.setState({loading: true});
        const web3 = window.web3
        await this.state.airdropContract.methods.claim().send({ 
          from: this.state.account, 
          value: '5000000000000000'
        });
        let balanceOf = await this.state.tokenContract.methods.balanceOf(this.state.account).call();
        let balance = web3.utils.fromWei(balanceOf, 'ether');
        this.setState({ balance: balance});
      }else{
        window.alert('Please connect metamask')
      }
      
    } catch (e) {
      console.error(e);
    }
    this.setState({loading: false});
  }
  
  
  render() {
    return (
      <div>
        <NavBar account={this.state.account} connect = {this.connect} disconnect = {this.disconnect} />
        {this.state.loading ? (<h1 className='text-center' style={{
          marginTop: '8em',
          color: 'white'
        }}><strong>Loading Please wait....</strong></h1>): 
        (<Main claim = {this.claim} balance = {this.state.balance}/>)}

        <Footer />
      </div>
    )
  }
}

export default App
