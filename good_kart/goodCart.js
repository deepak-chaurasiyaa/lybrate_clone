
let div = document.getElementById('slideShow');
function slideShow1() {
    const arr = ['file:///C:/Users/ankur/Downloads/1200x250_intimate.webp', 'file:///C:/Users/ankur/Downloads/Swan-amrit-Offer-Web.webp','file:///C:/Users/ankur/Downloads/Swan-Soreze-Gel-Web.webp'];
    
    let img = document.createElement('img');
    img.setAttribute('class', 'slideImg');
    let i = 0;
    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        }
        img.src = arr[i];
        i++
    },2000)
    div.append(img)
}
slideShow1();
let pro1 = document.getElementById('pro1');
pro1.addEventListener('click', function () {
    alert('done');
    window.location.href="products.html"
})
