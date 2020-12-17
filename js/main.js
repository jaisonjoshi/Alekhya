


var navbar = document.querySelector('.navbar');
var toggleIcon = document.querySelector('.hamburger');

//hamburger menu
toggleIcon.addEventListener('click', function () {
    navbar.classList.toggle('nav-collapse');
    toggleIcon.classList.toggle('close');

});

var preloading = document.querySelector('.preloading');
var loadAnim = document.querySelectorAll('.load-anim');
var loadOpac = document.querySelectorAll('.load-opac');

window.addEventListener("load", function () {
    preloading.style.opacity = "0";
    setTimeout(function () {
        preloading.style.display = "none"
    }, 500);
    for (var i = 0; i < loadAnim.length; i++) {
        loadAnim[i].classList.add('animate');
    }
    for (var i = 0; i < loadOpac.length; i++) {
        loadOpac[i].classList.add('opac');
    }

});

window.addEventListener('scroll', function () {
    window.scrollY > 0 ? navbar.classList.add('nav-scroll') : navbar.classList.remove('nav-scroll')
});

var screenHeight = window.innerHeight / 1.1;


var scrollAnim = document.querySelectorAll(".scroll-anim");



[].forEach.call(scrollAnim, function (itm) {
    if (itm.getBoundingClientRect().top < screenHeight) {
        window.addEventListener('load', function () { itm.classList.add('animate'); });
    }
    window.addEventListener('scroll', function () {
        var itmHeight = itm.getBoundingClientRect().top;
        if (itmHeight < screenHeight) {
            itm.classList.add('animate');
        }
    });
});




function makeajaxcall(jsonfile, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', jsonfile);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var resp = JSON.parse(xhr.responseText);
            callback(resp);
        }
    }
    xhr.send();
}
var container = document.querySelector('.work-body');
var output = "";
function recents(data) {
    for (var i = 0; i < 10; i++) {
        output = output + '<div class="card card' + [i] + '" onClick="info(' + [i] + ')"><img src="' + data[i].src + '"><div class="card-body"><h4>' + data[i].name + '</h4><span>' + data[i].category + '</span></div></div>';
        container.innerHTML = output;
    }
    var card = document.querySelectorAll('.card');

    [].forEach.call(card, function (itm) {

        window.addEventListener('scroll', function () {
            var h = itm.getBoundingClientRect().top;
            if (h < screenHeight) {
                itm.classList.add('animate');
            }
        });
    });

}
var gallerycontainer = document.querySelector('.gallery-body');
function gallery(data) {
    for (var i = 0; i < data.length; i++) {
        output = output + '<div class="card card' + [i] + '" onClick="info(' + [i] + ')"><img src="' + data[i].src + '"><div class="card-body"><h4>' + data[i].name + '</h4><span>' + data[i].category + '</span></div></div>';
        gallerycontainer.innerHTML = output;
    }
    var card = document.querySelectorAll('.card');
    for (var i = 0; i < 4; i++) {
        if (card[i].getBoundingClientRect().top < screenHeight) {
            card[i].classList.add('animate');
        }
        else {
            break;
        }
    }
    [].forEach.call(card, function (itm) {

        window.addEventListener('scroll', function () {
            var h = itm.getBoundingClientRect().top;
            if (h < screenHeight) {
                itm.classList.add('animate');
            }
        });
    });

}


function info(id) {
    sessionStorage.setItem("cardid", id);
    window.location = "info.html";
}
function cardinfo(data) {
    var cardid = sessionStorage.getItem('cardid');
    document.querySelector('#image').innerHTML = '<img src="' + data[cardid].src + '" alt="">';
    document.querySelector('#name').innerHTML = data[cardid].name;
}


