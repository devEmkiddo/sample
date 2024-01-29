import React from 'react';
import './App.css'

const AddTokenButton = () => {
  const tokenContractAddress = '0xb7B6c677541E807b7B5ACE01D54D13D3FA472465';
  const tokenSymbol = 'TOKEN';

  const handleClick = async () => {
    if (window.ethereum) {
      try {
        const provider = window.ethereum;

        // Request to add the token
        const success = await provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: '0xb7B6c677541E807b7B5ACE01D54D13D3FA472465',
              symbol: 'TOKEN',
              decimals: 18,  // Replace with the actual number of decimals for your token
            },
          },
        });

        if (success) {
          console.log(`${tokenSymbol} token added to wallet`);
        } else {
          console.error(`${tokenSymbol} token addition failed`);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('MetaMask not detected');
    }
  };

  return (
    <button className='bu' onClick={handleClick} style={{
        border: '0',
    }}>
      Add {tokenSymbol} to Wallet
    </button>
  );
};

export default AddTokenButton;
