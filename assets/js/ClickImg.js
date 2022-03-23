var imgs = document.querySelectorAll('.content img');
imgs.forEach((item) => item.addEventListener('click', clickImg)

);
function clickImg(event) {

    var urlImg = event.target.getAttribute("src");
    var template = `<div class="light-box">
<div class="light-box__content"> 
<i class="fa fa-angle-left light-box__prev"></i>
    <img src="${urlImg}" alt="" class="light-box__img">
    <i class="fa fa-angle-right light-box__next"></i>
</div>
</div>
 `;

    document.body.insertAdjacentHTML('beforeend', template);
};

var index = 0;

document.body.addEventListener('click', function (e) {
    var lightImg = document.querySelector('.light-box__img');
    var lightSrc = '';
    if (e.target.matches('.light-box')) {
        e.target.parentNode.removeChild(e.target);
    }
    else if (e.target.matches('.light-box__next')) {
        lightSrc = lightImg.getAttribute("src");
        index = [...imgs].findIndex(item => item.getAttribute("src") === lightSrc)
        index = index + 1;

        if (index > imgs.length - 1) {
            index = 0;
        }
        var newSrc = [...imgs][index].getAttribute('src');
        lightImg.setAttribute('src', newSrc);
    } else if (e.target.matches('.light-box__prev')) {
        lightSrc = lightImg.getAttribute("src");
        index = [...imgs].findIndex(item => item.getAttribute("src") === lightSrc)
        index = index - 1;

        if (index < 0) {
            index = imgs.length - 1;
        }
        var newSrc = [...imgs][index].getAttribute('src');
        lightImg.setAttribute('src', newSrc);
    }
});


