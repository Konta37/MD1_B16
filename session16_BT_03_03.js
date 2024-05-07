let a = parseFloat(prompt("Nhập kí tự mong muốn: "));
function check(a) {
    if (Number.isFinite(a)==true) {
        document.write("Đây là số");
    }
    else{
        document.write("Đây không là số");
    }
}
check(a);