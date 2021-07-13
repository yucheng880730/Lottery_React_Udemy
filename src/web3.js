import Web3 from 'web3';

// This is needed to allow this appication to interact with metamask
//window.ethereum.enable();
window.ethereum.request({ method: "eth_requestAccounts" });

// window.web3 coming from metamask
const web3 = new Web3(window.ethereum);

export default web3;