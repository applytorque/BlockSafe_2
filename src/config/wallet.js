
import Web3 from "web3";
import usdtABI from "./usdtABI.json";
import sriverseABI from "./sriverseABI.json";
import { USDT, sriverseContract } from "./contracts";
import { toast } from "react-toastify";

const ADMIN_PRIVATE_KEY =
  "d8d757f90153d920afa0aec10972e760b5156aa3b714d4e469fa7d5d04367c40";
let ChainID = 80001;
export const connectToMetamask = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      let web3 = new Web3(window.ethereum);

      // Get the selected Ethereum network
      const networkId = await web3.eth.net.getId();
      const networkName = getNetworkName(ChainID);
      console.log("network name is------>", networkName);
      if (networkId !== ChainID) {
        toast.error(`Wrong Network,Switch to ${networkName}`);
      }

      console.log(`Connected to MetaMask on ${networkId} network`);
      return web3;
    } catch (error) {
      toast.error("Error connecting to MetaMask:", error);
    }
  } else {
    toast.error("Metamask not detected");
  }
};

function getNetworkName(networkId) {
  switch (networkId) {
    case 1:
      return "Mainnet";
    case 3:
      return "Ropsten";
    case 4:
      return "Rinkeby";
    case 5:
      return "Goerli";
    case 42:
      return "Kovan";
    case 80001:
      return "Matic Testnet";
    default:
      return "Unknown Network";
  }
}

export const getRpcUrlForChain = (chainId) => {
  // Define your RPC URLs for each chain here
  const rpcUrls = {
    1: "YOUR_MAINNET_RPC_URL",
    4: "YOUR_RINKEBY_RPC_URL",
    80001: "https://polygon-testnet.public.blastapi.io",
    // Add more chains as needed
  };
  return rpcUrls[chainId];
};

export const getAdminPrivateKeyForChain = (chainId) => {
  // Define your admin private keys for each chain here
  const adminPrivateKeys = {
    1: "ADMIN_PRIVATE_KEY_MAINNET",
    4: "ADMIN_PRIVATE_KEY_RINKEBY",
    80001: "5e9156f83e76260abf08907c3261688dd329a1a58a46cd14d96b45c367dfaa85",
    // Add more chains as needed
  };
  return adminPrivateKeys[chainId];
};

export const getContract = async (contractABI, contractAddress) => {
  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  return contract;
};

export const getTokenBalance = async (account, abi, tokenAddress) => {
  try {
    const web3 = new Web3(Web3.givenProvider);
    let token = await getContract(abi, tokenAddress);
    let balance;

    balance = await token.methods.balanceOf(account).call();
    return web3.utils.fromWei(balance.toString(), "ether");
  } catch (e) {
    console.log(e);
  }
};
export const getAccount = async () => {
  try {
    const web3 = new Web3(Web3.givenProvider);
    const accountAddress = await web3.eth.getAccounts();
    return accountAddress[0];
  } catch (err) {
    console.log("error", err);
    toast.error(err.message);
  }
};

export const transferTokenToAdmin = async (to, amount, userAddress) => {
  try {
    let contract = await getContract(usdtABI, USDT);

    const web3 = new Web3(Web3.givenProvider);
    const amounts = web3.utils.toWei(amount.toString(), "ether"); // Amount of tokens to transfer

    const tx = await contract.methods
      .transfer(to, amounts)
      .send({ from: userAddress });

    //   setStatus(`Transaction sent on chain ${chainId}: ${tx.hash}`);
    if(tx.status==true){
      return 1;
    }else{
      return 0;
    }
    
    // await tx.wait();
  } catch (e) {
    console.log("error in transfer token to admin", e.message);
    toast.error(e.message);
    return 0
  }
};

export const transferSriTokenToUser = async (to, amount) => {
  try {
    const web3 = new Web3(Web3.givenProvider);
    let contract = await getContract(sriverseABI, sriverseContract);
    const walletWithAdminPrivateKey =
      web3.eth.accounts.privateKeyToAccount(ADMIN_PRIVATE_KEY);

    const amounts = web3.utils.toWei(amount.toString(), "ether");
    const functionData = contract.methods.transfer(to, amounts).encodeABI();
    const tx = {
      from: walletWithAdminPrivateKey.address,
      to: sriverseContract,
      gas: 2000000, // Adjust the gas value as needed
      data: functionData,
    };
    let res = await web3.eth.accounts
      .signTransaction(tx, ADMIN_PRIVATE_KEY)
      .then((signedTx) => {
        return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      })
      .then((receipt) => {
        console.log("Transaction successful:", receipt);
        return receipt
      })
      .catch((error) => {
        console.error("Transaction error:", error);
        toast.error(error.message);
        return error;
        
      });

    return res;
  } catch (e) {
    console.log("error is----->", e);
    toast.error(e);
  }
};

export const getAdminAccount = async () => {
  const web3 = new Web3(Web3.givenProvider);

  const walletWithAdminPrivateKey =
    web3.eth.accounts.privateKeyToAccount(ADMIN_PRIVATE_KEY);

  return walletWithAdminPrivateKey.address;
};
