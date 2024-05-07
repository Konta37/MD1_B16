let arr=[1,2,3,4,5,6,7,8,9,10]
function Sum(a) {
    let sum=0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            if(a[i]+a[j]==10){
                document.write(`Có cặp số ${a[i]} và ${a[j]} là có tổng bằng 10<br>`);
            }            
        }
        
    }
}
Sum(arr);