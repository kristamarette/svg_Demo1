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
    let miiscrect5 = $('#miisc>.cls-1');

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
                    x: 100
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
            autoAlpha: 1, duration: 1
        })
        step1.from(miiscrect3,{autoAlpha: 0, x:-600, duration:1})
        step1.from(miiscrect4,{autoAlpha: 0, y:-400, duration:1})
        return step1
    }
    function step_2() {
        let step2 = gsap.timeline({
            id: "step2"
        })
        step2.from(miiscrect2, {
            autoAlpha: 0, stagger: 0.3
        })
        return step2
    }

    let master = gsap.timeline();
    master.add(intro(),"+=0.5")
        .add(step_1(),"+=0.5")
        .add(step_2(),"-=1")
    GSDevTools.create();
    //document.ready ends here
});