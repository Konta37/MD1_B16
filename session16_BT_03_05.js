let a = [2,3];
document.write(`Chương trình có 2 số ${a}<br>`)
function switchPos(a) {
    let b=a[0];
    a[0]=a[1];
    a[1]=b;
    document.write(`Chương trình có 2 số được thay đổi vị trí ${a}<br>`)
}
switchPos(a);