require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski stomach curtain pitch unique harvest creek equal gate'; 
let testAccounts = [
"0x15ee5ef63b45b78f7137f54e2b792b9288770607ddaca7a92fd51d2eda6650a0",
"0xf3fab2d75631c17961019582772ce3fb444f5c488d869e9cc3448d86f9c2fd5d",
"0x2140ee9789cf3d229a26b0989675c3cda4e0cb051a7765cd025ba435fd3d34d0",
"0x83aec00cc0054bed70bce03930ca290e05e92a8e4193cff79a83bbc6a72c42c2",
"0x9d0127b8b02c177d2cfa71dd643de36e40bd619231e4a073fa777c89f62285fc",
"0x88cc16263d126c3e22d99539ea4198c4beb208470bd3cf71e214f5a0de9280d8",
"0x5f93accce348c8188ae45e3a45e7d5270dac9b5f5c6e4fd744dc8cfe667aa844",
"0x1d146835049660f6dc93dc3ec44c7351a05c52d05b7297ca6b034704c6dd6a14",
"0x1a151d92ba609ef514228a2a0ad4b80b60cc78badbaa108416f5cb6d34cc4c36",
"0xc76bb5bcdcebf33177f7c1b86307c05dcdffa5d1062e93fee30855f73d4209d8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
