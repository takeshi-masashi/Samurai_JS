let enemy = 10 ;
alert('テスト');
while(true) {
    let command = prompt('敵が現れた！(【１】攻撃　【２】逃げる) ');
    let kougeki = Math.floor(Math.random() * 9);
    if (command === '1') {
        enemy = enemy - kougeki;
        console.log(kougeki + 'の攻撃');
        if (enemy > 0) {
            continue;
        }
        if (enemy <= 0) {
            console.log('敵を倒した！');
            break;
        }       
        console.log('敵の体力は残り' + enemy + 'です');
    } else {
    //if(command === '2') {
        console.log('無事に逃げました');
        break;
    }
}
console.log('ゲーム終了');