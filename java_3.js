while ( true ) {
    const money = prompt ('ドルを入力');
    if ( money ) {
        console.log( money * 108 + '円');
    } else break;
}
const Name = prompt ('名前を入力してください');
const Tell = prompt ('電話番号を入力してください');
const user = {}
user.name = Name;
user.tell = Tell;

console.log(user);