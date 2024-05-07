let a = prompt("Nhập mảng")
// -1,-20,-3,1,2,3,-41,4,5
let b = a.split(",");
function BN(b) {
    let bn=b[0];
    for (let i = 1; i < b.length; i++) {
        if (bn>b[i]) {
            bn=b[i]
        }
    }
    console.log(bn);
}
BN(b);