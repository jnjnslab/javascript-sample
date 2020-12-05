class Area {
    //静的メソッド
    static getTriangle(base,height) {
        return base * height / 2;
    }
}

console.log(Area.getTriangle(10,5));
