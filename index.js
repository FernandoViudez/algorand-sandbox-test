const algosdk = require('algosdk');

const App = {

    token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    server: 'http://localhost',
    port: 4001,
    algodClient: undefined,
    genesisAddrsOnlineWallet: 'Z2HAXOVLEOIBB3SBL7TN2Y7AUSUCAQJM5ONSVKLMDFZPPLG2ZNZJB6OFH4', // Genesis address

    load: async () => {
        await App.connectToNet();
        await App.generateAccount();
    },

    generateAccount: async () => {
        const account1 = algosdk.generateAccount();
        console.log(
            "Generated account \n",
            account1
        );

        console.log(
            "Mnemonic \n",
            algosdk.secretKeyToMnemonic(account1.sk)
        );

    },

    connectToNet: async () => {
        console.log('Connecting to algorand local-private network...');
        App.algodClient = new algosdk.Algodv2(App.token, App.server, App.port);
        console.log(
            await App.algodClient.status().do()
        );
        console.log(
            await App.algodClient.versionsCheck().do()
        );
    },

}

App.load();