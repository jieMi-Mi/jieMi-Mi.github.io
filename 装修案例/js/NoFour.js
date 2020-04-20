var chu = 0
var banner = no_four_banner.children
var c = no_four_banner
c.addEventListener("transitionend", function () {
    if (chu == no_four_banner.children.length - 1) {
        c.style.transition = "all 0s"
        c.style.left = 0
        chu = 0
    }

    setTimeout(() => {
        c.style.transition = "all .5s"
    }, 16.7);
})

var no_four_right = document.querySelector(".noFour_right")
var no_four_left = document.querySelector(".noFour_left")

no_four_right.onclick = function () {
        chu += 1
        c.style.left = chu * -75 + "vw"
}

no_four_left.onclick = function () {
    chu -= 1
    if (chu < 0) {
        c.style.transition = "all 0s"
        c.style.left = 3 * -75 + "vw"

        setTimeout(() => {
            c.style.transition = "all .5s"
            c.style.left = 2 * -75 + "vw"
            chu = no_four_banner.children.length - 2
        }, 16.7);
    } else {
        c.style.left = chu * -75 + "vw"
    }
}

