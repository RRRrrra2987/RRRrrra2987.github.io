var i=1
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
