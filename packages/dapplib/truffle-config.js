require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stool response rifle unfair hard light army gaze'; 
let testAccounts = [
"0x237dd06ed558475e995ff2936df31f9db37630494e38423786634b2ca3497457",
"0x2aa604eac3bd64669d5f282864178c6ac7c88fac4252d95964159f5a78424da1",
"0xb7efd9119842eacda8ca980451421fd029394500138f7dc42e20bd768ab5f1b9",
"0x15134813468e6ee2cb72806af03c4327da81deec830b239d6e5fe6c804d70639",
"0x71c30c53b4ec47caeccf26af81ef65a2414f07b4d01519a3dffbf117c998cc22",
"0x0fad794f930619e977e8dd2a132edd773ae53599c5c154490cc4767378eba6f4",
"0x321ef65557dbfb0ab6268cb3e3eeb140ebb9ddb4f35d86bcaa4a27129d1bc4d9",
"0x8178166ab9d134cabb2ca621601a80b90f736083b93285167482e3aff9796ccd",
"0x4a964db70a0b7846a6e303e3b8681ad3a30284de55726396bf67011e90221f83",
"0x448849e28ab15c47dce80cd7228ff5f0ad785083dfbfa7838e8fa6bff7d7f5a7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


