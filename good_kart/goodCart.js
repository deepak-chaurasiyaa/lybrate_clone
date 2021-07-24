
let div = document.getElementById('slideShow');
function slideShow1() {
    const arr = ['https://assets.lybrate.com/q_auto,f_auto/rio/800x800/Swan-Soreze-Gel-Web.jpg', 'https://assets.lybrate.com/q_auto,f_auto/rio/800x800/Swan-gold-offer-web.jpg', 'https://assets.lybrate.com/q_auto,f_auto/rio/800x800/Swan-Baby-Web.jpg'];

    let img = document.createElement('img');
    img.setAttribute('class', 'slideImg');
    img.src = arr[0];
    let i = 1;
    div.append(img)
    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        }
        img.src = arr[i];
        i++
    }, 2000)

}
slideShow1();
let pro1 = document.getElementById('pro1');
pro1.addEventListener('click', function () {
    alert('done');
    window.location.href = "products.html"
})

function home() {
    window.location.href = '../Home/index.html'
}
