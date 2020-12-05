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
//Memberを継承する
class BusinessMember extends Member {
    Worker() {
        return this.getName() + 'は働いています。';
    }
}

let bm = new BusinessMember('太郎', '山田');
console.log(bm.getName());
console.log(bm.Worker());