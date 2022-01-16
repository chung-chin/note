const apps = require('./public/javascripts/app');

const gemPath = 'test/001/GEM'

// apps.checkFolder(gemPath);

let dName = 'index.js';

// apps.test2().then( async res => {
//     let r = res.stdout.split(/\s/g);
//     console.log(r);

//     r.forEach( f => {
//         if( f === dName) {
//             console.log('Yes');
//         } else {
//             console.log('No');
//         }
//     })
// })

// apps.test3(dName).then( res => console.log(res));

// let re = apps.readDir(gemPath);
// console.log(re);

// apps.readDir(gemPath).then( res => {
//     // console.log(res.message);

//     if ( res.errno == -2) {
//         console.log(res.message);
//     } else if ( res === 'No files') {
//         console.log(res);
//     } else {
//         console.log(res);
//     }
// })
let test_;

const testIP = {
    "eth0": {
        "address": "192.168.8.3",
        "netmask": "255.255.255.0",
        "gateway": "192.168.8.1"
    },
    "eth1": {
        "address": "192.168.137.3",
        "netmask": "255.255.255.0",
        "gateway": ""
    }
}
// const testIP = {
//     "eth0": {
//         "address": "192.168.8.3",
//         "netmask": "255.255.255.0",
//         "gateway": "192.168.8.1"
//     }
// }
// const testIP = {
//     "eth1": {
//         "address": "192.168.137.3",
//         "netmask": "255.255.255.0",
//         "gateway": ""
//     }
// }

// class InputConfig {
//     constructor(eth) {
//         this.address = eth.address;
//         this.netmask = eth.netmask;
//         this.gateway = eth.gateway;
//     }
// }

// eth0 = new InputConfig(testIP.eth0);
// eth1 = new InputConfig(testIP.eth1);

const eth0 = {
    "address" : testIP.eth0.address,
    "netmask" : testIP.eth0.netmask,
    "gateway" : testIP.eth0.gateway
}
const eth1 = {
    "address" : testIP.eth1.address,
    "netmask" : testIP.eth1.netmask,
    "gateway" : testIP.eth1.gateway
}

const result = apps.checkIP(eth0, eth1);

if ( !eth0 && !eth1 ) {
    console.log('both error');
} else if (eth0 && eth1) {
    if ( !result[0] | !result[3] ) {
        console.log('Invalid address');
    } else if ( !result[1] | !result[4] ) {
        console.log('Invalid netmask');
    } else if ( !result[2] && !result[5] ) {
        console.log('Invalid gateway');
    } else {
        console.log('both ok');
    }
} else if ( eth0 && !eth1 ) {
    if ( !result[0] ) {
        console.log('Invalid address');
    } else if ( !result[1] ) {
        console.log('Invalid netmask');
    } else if ( !result[2] ) {
        console.log('Invalid netmask');
    } else {
        console.log('eth0 ok');
    }
} else if ( !eth0 && eth1 ) {
    if ( !result[3] ) {
        console.log('Invalid address');
    } else if ( !result[4] ) {
        console.log('Invalid netmask');
    } else if ( !result[5] ) {
        console.log('Invalid netmask');
    } else {
        console.log('eth1 ok');
    }
} else {
    console.log('system error');
}