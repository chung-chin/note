const fs = require('fs-extra');
const util = require('util');
const exec = util.promisify(require('child_process').exec);


exports.test = async () => {
    let result;
    try {
        result = await exec('ls');
    } catch(ex) {
        result = ex;
    }
    if ( Error[Symbol.hasInstance](result) )
        return ;

    return result;
}

exports.test2 = async () => {
    let result = await exec('ls');
    return result;
}

exports.test3 = async (dName) => {
    let result = await exec('ls');
    // let msg;

    let newResult = result.stdout.split(/\s/g);
    if (newResult.includes(dName)) {
        // console.log('Yes');
        return 'Yes';
    } else {
        // console.log('No');
        return 'No';
    }
}

exports.checkFolder = async (fullPath) => {
    let pathList = fullPath.split(/\//g);
    let newPath = '';
    
    for (let path of pathList) {
        newPath += path + '/';
        console.log(newPath);

        let result = await exec(`cd ${newPath} && ls`);
        console.log(result);

    }
}

exports.readDir = (fullPath) => {
    // let result = '';

    return new Promise((resolve, reject) => {
            fs.readdir(fullPath, (error, files) => {
            if (error) {
                // console.log(error);
                resolve(error);
            } else if (files.length == 0) {
                // console.log('No files.');
                resolve('No files');
            } else {
                // console.log('OK');
                resolve(files);
            }
        })
    });

    // return result;

}

// exports.checkFolder = (fullPath) => {
//     let pathList = fullPath.split('/');
//     console.log(pathList);
//     let newPath = ''

//     const createFolder = (path) => {
//         return new Promise ((resolve, reject) => {
//             exec( `cd ${path} && ls`, (error, stdout, stderr) => {
//                 if (error) {
//                     exec( `mkdir ${path}`, (error, stdout, stderr) => {
//                         if (error) {
//                             console.log(stderr);
//                             resolve();
//                         } else {
//                             console.log(`Created ${path}.`);
//                             resolve();
//                         }
//                     })
//                 } else {
//                     console.log(stdout);
//                     resolve();
//                 }
//             })
//         })
//     }


//     for(let e of pathList) {
//         newPath += e +'/'
//         createFolder(newPath)
//         .then(() => {
//             console.log(newPath)
//         })
//     }
    // pathList.forEach( (e) => {
    //     newPath += e +'/'
    //     createFolder(newPath)
    //     .then(() => {
    //         console.log(newPath)
    //     })
    // });
    // exec( `cd ${path + name}`, (error, stdout, stderr) => {
    //     if (error) {
    //         console.log(stderr);

    //         exec( `cd ${path} && mkdir ${name}`, (error, stdout, stderr) => {
    //             if (error) {
    //                 console.log(stderr);
    //             } else {
    //                 console.log(`${path + name} created.`);
    //             }
    //         })
    //     } else {
    //         console.log(`${path + name} exists.`);
    //     }
    // })
// }