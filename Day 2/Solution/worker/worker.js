console.log("started");
var summ = 0;
for(var i=0;i<100000000;i++){
    summ+=i;
}
// alert(summ)
postMessage(summ);