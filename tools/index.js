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

let inputIP;

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

// if ( !testIP.eth0 && !testIP.eth1 ) {
//     inputIP = 'BothNone'
// } else if ( testIP.eth0 && testIP.eth1 ) {
//     inputIP = 'Both'
// } else if ( testIP.eth0 && !testIP.eth1 ) {
//     inputIP = 'Eth0'
// } else if ( !testIP.eth0 && testIP.eth1 ) {
//     inputIP = 'Eth0'
// }

// switch (inputIP) {
//     case 'BothNone':
//         console.log('Fail');
//         break;
//     case 'Eth0':
//         console.log('eth0');
//         break;
//     case 'Eth1':
//         console.log('eth1');
//         break;
//     case 'Both':
//         console.log('both');
//         break;
//     default:
//         console.log('error');
//         break;
// }


if ( !testIP.eth0 && !testIP.eth1 ) {
    console.log('Fail');
} else if ( testIP.eth0 && testIP.eth1 ) {
    console.log('both');
} else if ( testIP.eth0 && !testIP.eth1 ) {
    console.log('eth0');
} else if ( !testIP.eth0 && testIP.eth1 ) {
    console.log('eth1');
} else {
    console.log('error');
}