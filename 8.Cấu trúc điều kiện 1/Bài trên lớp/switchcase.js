// cũng có thể dùng if else

if (months == 1 || months == 3 || months == 5 || months == 7 || months == 8 || months == 10 || months == 12) {
    console.log("Thnags có 31 ngày");
} else {
    if (months == 2) {
        console.log("Tháng có 28 ngày");
    } else {
        if (months == 4 || months == 6 || months == 9 || months == 11) {
            console.log("Tháng có 30 ngày");
        } else {
            console.log("Tháng không hợp lệ");
        }
    }
}
// đây là cách diễn giải switchcase
switch (months) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tháng có 31 ngày");
        break;
case 4:
case 6:
case 9:
case 11:
    console.log("Tháng có 30 ngày");
    default:
        break;
}
