var i=1
var clickcount=0
alert("(ﾟ∀ﾟ)ｱﾋｬ");
alert("イェイ(ﾟ∀ﾟ)");
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu')
    if (btn.innerHTML === 'メニュー') {
    btn.innerHTML = '閉じる';
    } else {
    btn.innerHTML = 'メニュー';
    }
});

function click(){
    clickcount=clickcount+1
    alert(clickcount+"回クリックしました！")
}
