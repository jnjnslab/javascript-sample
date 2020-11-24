class Member {
    //コンストラクター
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //メソッド
    getName() {
        return this.lastName + this.firstName;
    }
}

let m = new Member('太郎', '山田');
console.log(m.getName());