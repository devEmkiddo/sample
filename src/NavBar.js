import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import meme from './img/meme.png';

 class NavBar extends Component {
    
  render() {
    const displayedAccount = this.props.account ? `${this.props.account.slice(0, 5)}...${this.props.account.slice(-4)}` : '';
    return (
        
      <div>
         
            <Navbar expand="lg" className="bg-body-tertiary navv fixed-top" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#"><img src={meme} style={{width: '80px'}}></img><span style={{color: 'gold'}}><b>Trxxx</b></span> <strong>Coin</strong></Navbar.Brand>

                {this.props.account ?  (<Button size="sm" className = "btnnn" variant="danger" onClick={this.props.disconnect}>Disconnect {displayedAccount}</Button> 
                ) : (
                <Button size="sm" className = "btnnn" variant="success" onClick={this.props.connect}>Connect wallet</Button>)
                }

               
                </Container>
            </Navbar>
        
      </div>
    )
  }
}

export default NavBar
