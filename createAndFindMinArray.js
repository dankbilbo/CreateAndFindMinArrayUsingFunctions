let arr  = new Array();
function createArray(){
    let str = "";
    arr.push(document.getElementById("num").value);
    for(let i = 0; i < arr.length; i++){
        str += arr[i] + ",";
    }
    document.getElementById("1").innerHTML = str.substring(0,str.length -1);
}
function findMin(){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    document.getElementById("2").innerHTML = `So nho nhat trong mang la : ${min} .`;
}