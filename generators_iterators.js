function random(max){
    return Math.floor(Math.random() * max);
};

function download(source){
    return new Promise(function executor(resolve,reject){
        console.log(`download from ${source} started ... `);
        setTimeout(function f1 (){
            const data = "Virat kohli is the GOAT";
            let num = random(10);
            if(num % 2 == 0){
                console.log("download complete");
                resolve(data);
            } else {
                reject("download failed");
            }
        },5000);
    });
};

function process(data){
    return new Promise(function executor(resolve,reject){
        console.log(`processing data...`);
        setTimeout(function f2(){
            let num = random(5);
            if(num % 2 == 0){
                console.log(`data processed`);
                resolve(data);
            } else{
                reject("data processing stopped due to unexpected error :(");
            }
        },3000);
    });
};

function writeToFile(data){
    return new Promise(function executor(resolve,reject) {
        console.log("writing data...");
        setTimeout(function f3(){
            let num = random(7);
            if(num % 2 == 0){
                const filename = "cricket.txt";
                console.log(`${data} is written to ${filename}`);
                resolve(filename);
            } else {
                reject("writing data failed :(");
            }
        },5000);
    });
};

function upload(filename){
    return new Promise(function executor(resolve,reject){
        console.log("uploading file...");
        setTimeout(function f4(){
            let num = random(8);
            if(num % 2 == 0){
                const newUrl = "www.drive.google.com";
                console.log(`${filename} has been uploaded on ${newUrl}`);
                resolve("OPERATION SUCCESSFUL");
            } else {
                reject("Uploading the file has failed :(");
            }
        },7000);
    });
};

function doAfterResponse(value){
    let future = iter.next(value);
    if(!future.done){
        future.value.then(doAfterResponse).catch((err)=>console.log(err));
    } else {
        return;
    }
}

function* steps() {
    console.log("step 1 :");
    const downloadedData = yield download("www.google.com");
    console.log("step 2 :");
    const processedData = yield process(downloadedData);
    console.log("step 3 :");
    const filename = yield writeToFile(processedData);
    console.log("step 4 :");
    const status = yield upload(filename);
    console.log(status);
}

let iter = steps(); // calling generator function, Nothing happens

const future = iter.next(); // future contains the promise object
future.value.then(doAfterResponse).catch((err)=>console.log(err));

