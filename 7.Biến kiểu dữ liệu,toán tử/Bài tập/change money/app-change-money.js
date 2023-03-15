function Covert() {
    let amount = document.getElementById("Amount").value;
    let formC = document.getElementById("FromCurrency").value;
    let to = document.getElementById("ToCurrency").value;
    if (formC == "VietNam" && to == "USD") {
        document.getElementById("Result").innerHTML = "Result: " + Number(amount) / 23000 + "$";
    } else if (formC == "VietNam" && to == "VietNam") {
        document.getElementById("Result").innerHTML = "Result: " + Number(amount) + "Đ";
    } else if (formC == "USD" && to == "VietNam") {
        document.getElementById("Result").innerHTML = "Result: " + Number(amount)*23000 + "Đ";
    } else {
        document.getElementById("Result").innerHTML ="Result: " + Number(amount) + "$" ;
    }
}