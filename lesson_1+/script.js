var num = 33721;
var pro = 1;
while(num > 0) {
    pro *= num % 10;
    num = Math.floor(num / 10);
}

console.log(pro);

document.write(pro ** 3);