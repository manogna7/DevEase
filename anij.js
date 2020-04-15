var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
anime.timeline({ loop: true })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 500
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
var textWrapper2 = document.querySelector('.ml11 .letters2');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter2'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml11 .line2',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 500
    })
    .add({
        targets: '.ml11 .line2',
        translateX: [0, document.querySelector('.ml11 .letters2').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 200
    }).add({
        targets: '.ml11 .letter2',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 40 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
var textWrapper3 = document.querySelector('.ml11 .letters3');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter3'>$&</span>");
anime.timeline({ loop: true })
    .add({
        targets: '.ml11 .line3',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 500
    })
    .add({
        targets: '.ml11 .line3',
        translateX: [0, document.querySelector('.ml11 .letters3').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 600,
        delay: 500
    }).add({
        targets: '.ml11 .letter3',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 21 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });