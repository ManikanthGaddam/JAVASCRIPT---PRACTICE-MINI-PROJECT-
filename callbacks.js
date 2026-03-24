function download(source,cb){
    console.log("download starts from ", source);
    setTimeout(function f1(){
        const data = "Virat Kohli";
        console.log("download completed");
        cb(data);
    },5000);
};

function process(data,cb){
    console.log("processing data");
    setTimeout(function f2(){
        console.log("Data processed");
        const processedData = data + "is the GOAT";
        cb(processedData);
    },6000);
};

function writeToFile(data,cb){
    console.log("writing processed data to a file");
    setTimeout(function f2() {
        const filename = "Cricket.txt";
        console.log(`writing "${data}" to the file ${filename} is completed`);
        cb(filename);
    },5000);
};

function uploadToAnotherService(filename,url){
    console.log("uploading the file to another service...");
    setTimeout(function f3(){
        console.log(`file "${filename}" has been uploaded on ${url}`);
        return;
    },6000);
};


download("www.trial.com",function(data){
    process(data, function (data){
        writeToFile(data,function (val){
            uploadToAnotherService(val,"www.drive.google.com");
        });
    });
});
