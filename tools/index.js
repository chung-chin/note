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

apps.readDir(gemPath).then( res => {
    // console.log(res.message);

    if ( res.errno == -2) {
        console.log(res.message);
    } else if ( res === 'No files') {
        console.log(res);
    } else {
        console.log(res);
    }
})