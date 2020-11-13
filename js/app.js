// gsap.registerPlugin(GSDevTools);

$(document).ready(function () {

    let whitebkgd = $('#whitebkgd');
    let blueCirc = $('#blueCirc');
    let yellowBase = $('#yellowBase');
    let orangeBase = $('#orangeBase');

    let blueBase = $('#blueBase');
    let baseGreen = $('#baseGreen');
    let yellowBase2 = $('#yellowBase2');
    let yellowCirc = $('#yellowCirc');

    let headingtext1 = $('#heading-text1');
    let technoloogytext = $('#technoloogy-text');
    let smallGreens = $('#smallGreens');
    let smallOranges = $('#smallOranges');
    let smallWhites = $('#smallWhites');
    let miisc = $('#miisc');

    let rect1 = $('#whitebkgd>.cls-2');
    rect1.css({
        'opacity': '0'
    });

    let miiscrect2 = $('#miisc>.cls-4');
    let miiscrect3 = $('#miisc>.cls-3');
    let miiscrect4 = $('#miisc>.cls-2');
    let miisccirc5 = $('#miisc>.cls-1');

    let bluerect = $('#blueBase>.cls-2');
    let headText = $('#heading-text1>path')

    const ei = "power4.in";
    const eo = "power4.out";
    const bo = "bounce.out";
    const bi = "bounce.in";

    function intro() {
        let whitebkgdTl = gsap.timeline({
            id: "whitebkgdTl"
        })
        whitebkgd
            .delay(500)
            .animate({
                opacity: 1
            }, 1000, () => {
                whitebkgdTl.fromTo(rect1, {
                    autoAlpha: 0,
                    x: 100,
                    ease: bo
                }, {
                    autoAlpha: 1,
                    x: 0,
                    duration: 1
                })
            });
        return whitebkgdTl;
    }

    function step_1() {
        let step1 = gsap.timeline({
            id: "step1"
        })
        step1.to(miisc, {
            autoAlpha: 1,
            duration: 1
        })
        step1.from(miiscrect3, {
            autoAlpha: 0,
            x: -600,
            ease: bi,
            duration: 1
        })
        step1.from(miiscrect4, {
            autoAlpha: 0,
            y: -400,
            ease: bo,
            duration: 1
        })
        return step1
    }

    function step_2() {
        let step2 = gsap.timeline({
            id: "step2"
        })
        step2.from(miiscrect2, {
            autoAlpha: 0,
            x: 50,
            y: 50,
            stagger: 0.15,
            ease: bi
        })
        return step2
    }

    function step_3() {
        let step3 = gsap.timeline({
            id: "step3"
        })

        step3.fromTo(blueBase, {
            autoAlpha: 0,
            x: 50,
            y: 50,
            ease: bi
        }, {
            autoAlpha: 1,
            duration: 2
        }, "+=1")

        step3.fromTo(bluerect, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: bi,
            stagger: 0.4
        })
        return step3
    }

    function step_4() {
        let step4 = gsap.timeline({
            id: "step4"
        })
        step4.from(miisccirc5, {
            autoAlpha: 0,
            x: 150,
            y: 150,
            stagger: 0.3,
            ease: bo
        })
        return step4
    }
    function step_5(){
        let step5 = gsap.timeline({
            id: "step5"
        })
        step5.fromTo(headingtext1,{autoAlpha:0},{autoAlpha:1})
        step5.from(headText, {
            autoAlpha: 0,
            x: -15,
            y: 10,
            stagger: 0.1,
            ease: bi
        })
        return step5
    }

    let master = gsap.timeline();
    master.add(intro(), "+=0.5")
        .add(step_1(), "+=0.5")
        .add(step_2(), "-=0.25")
        .add(step_3(), "-=2")
        .add(step_4(), "-=1")
        .add(step_5(), "-=2")
    GSDevTools.create();
    //document.ready ends here
});