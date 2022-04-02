// クラスの練習 //
class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
}
const dog = new Animal('犬',8,'チワワ');
console.log( dog.name );
// クラスの練習２ //
class Character {
    constructor(Name, hp) {
        this.Name = Name;
        this.hp = hp;
    }
    attack() {
        console.log(this.Name + 'の攻撃');
    }
}
class Hero extends Character {
    contorol() {}
    superAttack() {}
    speak() {}
}

class Enemy extends Character {
    dropItem() {}
    getPoint() {}
}
/* class Hero extends Character {
    constructor(name, hp, exp) {
        super(name, hp);
        this.exp = exp;
    }
}*/
const hero = new Hero('主人公', 100);
const enemy = new Enemy('敵', 10);

console.log(hero);