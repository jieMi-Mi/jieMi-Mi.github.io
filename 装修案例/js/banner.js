// 轮播图
var baner_top = document.getElementById("baner_top")
var jav = baner_top.children
var x = 0
jav[x].style.opacity = 1
var timer = setInterval(() => {
    bannerList()
}, 2000);

var next = document.querySelector(".right")
next.onclick = function () {
    bannerList()
}
function bannerList() {
    if (x == jav.length - 1) {
        jav[x].className = ""
        x = 0
        jav[x].className = "con"
    } else {
        jav[x].className = ""
        jav[x].style.opacity = 0
        x += 1
        jav[x].className = "con"
    }
}
var prev = document.querySelector(".left")
prev.onclick = function () {
    if (x == 0) {
        jav[x].className = ""
        x = jav.length - 1
        jav[x].className = "con"
    } else {
        jav[x].className = ""
        jav[x].style.opacity = 0
        x -= 1
        jav[x].className = "con"
    }
}
baner_top.onmousemove = function () {
    clearInterval(timer)
}
baner_top.onmouseout = function () {
    timer = setInterval(() => {
        bannerList()
    }, 2000);
}
