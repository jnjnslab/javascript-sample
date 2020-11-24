class Member {
    //コンストラクター
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //firstNameプロパティ
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    //lastNameプロパティ
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    //メソッド
    getName() {
        return this.lastName + this.firstName;
    }
}

let m = new Member('太郎', '山田');
console.log(m.getName());

let m2 = new Member('', '');
m2.firstName = '一郎';
m2.lastName = '鈴木';
console.log(m2.firstName);
console.log(m2.lastName);