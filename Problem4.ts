import Web3 from 'web3';

const web3 = new Web3('https://bsc-dataseed.binance.org/');

const addresses = [0xb5d4f343412dc8efb6ff599d790074d0f1e8d430,
    0x0020c5222a24e4a96b720c06b803fb8d34adc0af,
    0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392];

const swthToken = 0xc0ecb8499d8da2771abcbf4091db7f65158f1468;

const swthABI = [{
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "name": "balance",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}];

const swthContract = new web3.eth.Contract(swthABI, swthToken);

addresses.forEach(async (a) => {
    const balance = await swthContract.methods.balanceOf(a).call();
    console.log('${a} ${balance}');
}