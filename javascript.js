/* 名前と年齢（constとletの違い） */
let myName = '内山　猛';
myAge = 40;
myName = '内山'
console.log(myName);
console.log(myAge);
/* おみくじの問題（rnd,random,lengthの使い方） */
const omikuji = [1, 2, 3, 4];
const rnd = Math.floor(Math.random() * omikuji.length);
// console.log(omikuji[rnd]);
if(omikuji[rnd] === 1) {
    console.log('大吉めでたい！');
}else if(omikuji[rnd] === 2){
    console.log('中吉、まぁまぁ');
}else if(omikuji[rnd] === 3){
    console.log('小吉.......');
}else if(omikuji[rnd] === 4){
    console.log('凶、大当たり、もう１回');
}
/* ダイエットアプリ */
const Myweigt = Math.floor(Math.random()*100);
console.log(Myweigt + 'Kg');
if(Myweigt >= 80) {
    console.log('もっと頑張りましょう');
} else if(Myweigt >= 70) {
    console.log('確実に成果が出ています');
}else if(Myweigt > 60) {
    console.log('ついにここまで来ましたね');
}else if(Myweigt <= 60) {
    console.log('ダイエット成功です');
}
/* 鳴き声アプリ */
const doubutu = ['犬','猫','牛','ライオン','豚'];
const kimera = Math.floor(Math.random() * doubutu.length);
console.log(doubutu[kimera]);
if(doubutu[kimera] === '犬'){
    console.log('わんわん');
}else if(doubutu[kimera] === '猫'){
    console.log('にゃーん！');
}else if(doubutu[kimera] === '牛') {
    console.log('もー！');
}else if(doubutu[kimera] === 'ライオン') {
    console.log('ガオー！');
}else if(doubutu[kimera] === '豚') {
    console.log('ブー！');
}

