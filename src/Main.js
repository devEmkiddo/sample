import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './App.css';
import Add from './Add';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import air from './img/air.png';
import meme from './img/meme.png';

 class Main extends Component {
  render() {
    return (
      <div className='first'>
        <div className='container main'>
            <div className='container main-child'>
                <div className='container about'>
                    <h1 className = "text-center"><span style={{color: 'gold'}}><b>Trxxx</b></span> <strong>Coin</strong></h1>
                    <p className ="my-5">A community driven token with a based dev and comunity, with proper liquidity management, no hidden fee, renounced ownership and lots of vc fundings and backings </p>
                    <Button className = "btnn " variant="primary" onClick={this.props.claim}>Claim airdrop</Button>
                    <p className="pt-3 text-center"><strong>Airdrop balance {this.props.balance} Tokens</strong></p>
                    <div className='container'>
                      <div className='container'>
                        <Add />
                      </div>
          
                    </div>
                </div>
                
                <div className='container claim'>
                    <h2 className='text-center' style={{color: 'black'}}><strong>Tokenomics and distribution</strong></h2>
                    <div className='air container pt-3'>
                      <img src={meme} style={{width: '95px'}}></img>
                      <h5 style={{color: 'black'}}>Total supply: 1,000,000 TOKENS</h5>
                    </div>
                   <div className='air container'>
                    <img src={air} style={{width: '80px'}}></img>
                    <h5 className='text-center' style={{color: 'black'}}>Airdrops and reward 40%</h5>
                   </div>

                   <div>
                   <h3 className='text-center my-3' style={{color: 'black'}}><strong>Join the community</strong></h3>
                        <div className='container socials'>
                           <a href="#">Follow us <BsTwitterX /></a>
                           <a href="#">Telegram <FaTelegramPlane /></a>
                        </div>
                  </div>
                </div>

            </div>
        </div> 
      </div>
    )
  }
}

export default Main
