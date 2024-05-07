let a = parseFloat(prompt("Nhập vào 1 số: "));
function check(a) {
    if (a>=0) {
        document.write(`${a} là số nguyên dương.`);
    }
    else
    {
        document.write(`${a} không là số nguyên dương.`);
    }
}
check(a);