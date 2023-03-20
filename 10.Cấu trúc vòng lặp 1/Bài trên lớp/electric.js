function calculate() {
    let kwh = Number(document.getElementById('kwh').value);
    let result;

if (kwh < 0) {
    result = "Invalid kwh";
}
else if (kwh <= 50) {
    result = kwh * 1678;
} else if (kwh <= 100) {
    result = 50 * 1678 + (kwh - 50) * 1734;
} else if (kwh <=200) {
    result = 50 * 1678 + 100 * 1734 + (kwh -100) *  2014;
}else if (kwh <= 300) {
    result = 50 * 1678 + 100 * 1734 + 200 * 2014 + (kwh - 200) * 2536;
}else if (kwh <= 400) {
    result = 50 * 1678 + 100 * 1734 + 200 * 2014 + 300 * 2536 + (kwh - 300) * 2834;
}else {
    result = 50 * 1678 + 100 * 1734 + 200 * 2014 + 300 * 2536 + 400 *2834 + (kwh - 400) * 2927;
}
//////////////////////////////////////////////// cách khác
// result = kwh < 0 ?"Invalid kwh":
//         (kwh <= 50) ? kwh * 1678 :
//         (kwh <= 100) ? 50 * 1678 + (kwh - 50) * 1734 :
//         (kwh <= 200) ? 50 * 1678 + 100 * 1734 + (kwh -100) :
//         (kwh <= 300) ? 50 * 1678 + 100 * 1734 + 200 * 2014 + (kwh - 200) * 2536 :
//         (kwh <= 400) ? 50 * 1678 + 100 * 1734 + 200 * 2014 + 300 * 2536 + (kwh - 300) * 2834 :
//          50 * 1678 + 100 * 1734 + 200 * 2014 + 300 * 2536 + 400 * 2834 + (kwh - 400) * 2927
//          'a'

// switch(true) {
//     case 
// }
document.querySelector("#amonut").value = result;
}

        