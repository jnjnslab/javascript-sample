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
    constructor(firstName, lastName, clazz) {
        //基底クラスのコンストラクターを呼び出す
        super(firstName, lastName);
        this.clazz = clazz;
    }
    getName() {
        return super.getName() + ' 役職: ' + this.clazz;
    }
}

let bm = new BusinessMember('太郎', '山田', '課長');
console.log(bm.getName());
