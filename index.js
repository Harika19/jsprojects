let arr = [];
let no = [];
let operator = [];

const btn = op => {
    document.getElementById("input").value += op;
    arr.push(op);
    console.log(arr);
};

document.getElementById("equal").addEventListener("click", () => {
    arr.forEach(val => {
        if (val.charCodeAt() >= 48 && val.charCodeAt() <= 59) {
            no.push(parseInt(val));
        } else {
            operator.push(val);
        }
    });
    console.log(no);
    console.log(operator);

    let x = no.shift();
    let y = no.shift();
    let oper = operator.shift();

    let res = calc(x, y, oper);
    if (no.length > 1) {
        let x = no.shift();
        let y = no.shift();
        let oper = operator.shift();

        let res = calc(x, y, oper);
    } else {
        document.getElementById("res").innerHTML = res;
    }
});

const calc = (a, b, sy) => {
    switch (sy) {
        case "+":
            no.unshift(a + b);

        case "-":
            //return a - b;
            no.unshift(a - b);
        case "*":
            //return a * b;
            no.unshift(a * b);
        case "/":
            //return a / b;
            no.unshift(a / b);
        case "%":
            //return a % b;
            no.unshift(a % b);
    }
};
