let students1 = [
    [1, "Pi Chey", "10/10/1010", true, ["music", "watch a movie"]],
    [2, "Chuột Goss", "1/1/1110", true, ["gofl"]],
    [3, "Hà Tiêu Phương", "3/3/2023", true, ["Dj"]],
    [4, "Lemon", "29/02/2024", true, []]
]
// console.log(`Học sinh Pi Chey với ID ${students[0][0]}`);
let students = function (id, name, dob, gender, phone) {
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.gender = gender;
    this.phone = phone;
    this.hobbies = [];
    this.setHobbies = function (hobbies) {
        let check = true;
        for (let i = 0; i < hobbies.length; i++) {
            check = true;
            if (hobbies[i] == 'ma túy') {
                check = false;
            }
            if (check == true) {
                this.hobbies.push(hobbies[i]);
            } else {
                    console.log(`${hobbies[i]} Thông tin sở thích không hợp lệ`);
                }
        }
       
    }
    this.getHoubbies = function() {
        return this.hobbies;
    }
    this.getName = function () {
        return this.name;
    }
    this.getPhone = function () {
        // 0964006574 --> 096400XXX
        let str = this.phone.substring(0, this.phone.length - 3) + "XXX";
        return str;
    }
}
let a = new students(1, "Pi Chey", "10/10/1010", true, 099999999);
a.setHobbies(['ma túy',"music", "watch a movie"]);
console.log(a.getHoubbies());
console.log(a.getName());


//
