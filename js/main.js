window.addEventListener('DOMContentLoaded', function () {


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


    });

    /*  slide,click event section */
    $('.sec04_button06_hover').mouseenter(function () {
        $('.sec04_button06_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button06_hover').removeClass('on')
    })

    /*  slide,click event section */
    $('.sec04_button07_hover').mouseenter(function () {
        $('.sec04_button07_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button07_hover').removeClass('on')
    })

    /*  slide,click event section */
    $('.sec04_button08_hover').mouseenter(function () {
        $('.sec04_button08_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button08_hover').removeClass('on')
    })

    /*  slide,click event section */
    $('.sec04_button09_hover').mouseenter(function () {
        $('.sec04_button09_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button09_hover').removeClass('on')
    })

    /*  slide,click event section */
    $('.sec04_button10_hover').mouseenter(function () {
        $('.sec04_button10_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button10_hover').removeClass('on')
    })

    /*  slide,click event section */
    $('.sec04_button11_hover').mouseenter(function () {
        $('.sec04_button11_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button11_hover').removeClass('on')
    })

    /*  slide,click event section */
    $('.sec04_button12_hover').mouseenter(function () {
        $('.sec04_button12_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button12_hover').removeClass('on')
    })

    /*  slide,click event section */
    $('.sec04_button13_hover').mouseenter(function () {
        $('.sec04_button13_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button13_hover').removeClass('on')
    })

    /*  slide,click event section */
    $('.sec04_button14_hover').mouseenter(function () {
        $('.sec04_button14_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button14_hover').removeClass('on')
    })

    /*  slide,click event section */
    $('.sec04_button15_hover').mouseenter(function () {
        $('.sec04_button15_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button15_hover').removeClass('on')
    })

    /*  slide,click event section */
    $('.sec04_button16_hover').mouseenter(function () {
        $('.sec04_button16_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button16_hover').removeClass('on')
    })

    /*  slide,click event section */
    $('.sec04_button17_hover').mouseenter(function () {
        $('.sec04_button17_hover').addClass('on')
    }).mouseleave(function () {
        $('.sec04_button17_hover').removeClass('on')
    })


    /*section01*/
    gsap.to('.fix_this_1', { //대상
        scrollTrigger: {
            trigger: ".trigger_this_01", //기준
            start: "top top",
            end: 'bottom bottom',
            pin: true, //고정
            pinSpacing: false,
            scrub: true,
        }
    });

    let se01_move02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_move02,
        trigger: "#section01", //기준
        start: "top top", //기준점, 브라우저
        end: "1000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    se01_move02.to(".sec01_text01", {opacity: 0}, 0);
    se01_move02.to(".sec01_text02", {opacity: 0}, 1);
    se01_move02.to(".sec01_text03", {opacity: 0}, 1);
    se01_move02.to(".sec01_text04", {opacity: 0}, 1);
    se01_move02.to(".sec01_text05", {opacity: 0}, 0.5);


    let se01_move01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_move01,
        trigger: "#section01", //기준
        start: "top top", //기준점, 브라우저
        end: "5000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    //('선택자',{구동},듀레이션(0~1))
    se01_move01.to(".sec01_bg02", {scale: 1.2}, 0);
    se01_move01.to(".sec01_title01", {x: -1500, y: -1000}, 0);
    se01_move01.to(".sec01_title02", {x: -100, y: -1000}, 0);
    se01_move01.to(".sec01_title03", {x: 1500, y: -1000}, 0);

    se01_move01.to(".sec01_title04", {x: -1500, y: -1000}, 0);
    se01_move01.to(".sec01_title05", {x: -1000, y: -1000}, 0);
    se01_move01.to(".sec01_title06", {x: -500, y: -1000}, 0);
    se01_move01.to(".sec01_title07", {x: 500, y: -1000}, 0);
    se01_move01.to(".sec01_title08", {x: 1000, y: -1000}, 0);
    se01_move01.to(".sec01_title09", {x: 1500, y: -1000}, 0);

    se01_move01.to(".sec01_title10", {x: -2000, y: 500}, 0);
    se01_move01.to(".sec01_title11", {x: -1500, y: 800}, 0);
    se01_move01.to(".sec01_title12", {x: -1000, y: 1200}, 0);
    se01_move01.to(".sec01_title13", {x: -600, y: 1800}, 0);

    se01_move01.to(".sec01_title14", {x: 600, y: 1800}, 0);
    se01_move01.to(".sec01_title15", {x: 1000, y: 1200}, 0);
    se01_move01.to(".sec01_title16", {x: 1500, y: 800}, 0);
    se01_move01.to(".sec01_title17", {x: 2000, y: 500}, 0);

    se01_move01.to(".sec01_object01", {x: 500, rotate: 720, y: -300}, 0.3);
    se01_move01.to(".sec01_pinktitle", {x: 700, y: -300}, 0.6);
    se01_move01.to(".sec01_object02", {x: -350, rotate: 360, y: 400}, 0.9);


    let se01_move03 = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_move03,
        trigger: "#section01", //기준
        start: "6000px top", //기준점, 브라우저
        end: "8000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    se01_move03.to(".se01_dim", {opacity: 1}, 0);


    // section02 -----------------------------------------
    gsap.to('.fix_this_2', {
        scrollTrigger: {
            trigger: ".trigger_this_02",
            start: "top top",
            end: '120% bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });

    let se02_y = 3648 - innerHeight
    let se02_y_scroll = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_scroll,
        trigger: "#section02", //기준
        start: "top top", //기준점, 브라우저
        end: "2500px bottom", //기준점, 브라우저
        scrub: 1,
        onLeave: ()=>{
            $('#section02 .sec02_object01 img').attr('src', `image/sec02/sec02_object02.png`);
        }
    });

    se02_y_scroll.to(".se02_y_scroll",{y:-1500},0);

    let se02_down = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_down,
        trigger: "#section02", //기준
        start: "500px top", //기준점, 브라우저
        end: "2000px bottom", //기준점, 브라우저
        scrub: 1,
        // onUpdate: self => {
        //     // console.log("progress:", self.progress)
        //     let v = Math.floor(self.progress * 2); //jpg 갯수 만큼 바꿔주기
        //     // console.log(v)
        //     $('#section02 .sec02_object01 img').attr('src', `clothes_image/sec02/sec02_object0${v + 1}.png`);
        // },
    });

    se02_down.to(".sec02_object01 img",{y:1230},0);

    let se02_y_scroll02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_scroll02,
        trigger: "#section02", //기준
        start: "3500px top", //기준점, 브라우저
        end: "6500px bottom", //기준점, 브라우저
        scrub: 1,
        onLeave: ()=>{
            $('#section02 .sec02_object01 img').attr('src', `image/sec02/sec02_object03.png`);
        }
    });

    se02_y_scroll02.to(".se02_y_scroll",{y:-se02_y},0);

    //메인케릭터 내려가는 구동
    let se02_down02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_down02,
        trigger: "#section02", //기준
        start: "3500px top", //기준점, 브라우저
        end: "6500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se02_down02.to(".sec02_object01 img",{y:2400},0);

    //가로 맨밑 박스 구동
    let se02_y_box = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_box,
        trigger: "#section02", //기준
        start: "7000px top", //기준점, 브라우저
        end: "15000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    se02_y_box.to(".se02_x_box",{x:-1888},0);

    //가로 텍스트구동
    let se02_y_text = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_text,
        trigger: "#section02", //기준
        start: "7000px top", //기준점, 브라우저
        end: "15000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    se02_y_text.to(".se02_x_text",{x:-4000},0);

    //가로 옷구동
    let se02_y_obj_list01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_obj_list01,
        trigger: "#section02", //기준
        start: "9000px top", //기준점, 브라우저
        end: "12000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    se02_y_obj_list01.to(".se02_x_page",{x:90},0);

    let se02_y_obj_list02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_obj_list02,
        trigger: "#section02", //기준
        start: "15000px top", //기준점, 브라우저
        end: "17000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    se02_y_obj_list02.to(".se02_x_page",{x:-420},0);

    let se02_y_obj_list03 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_obj_list03,
        trigger: "#section02", //기준
        start: "19000px top", //기준점, 브라우저
        end: "21000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    se02_y_obj_list03.to(".se02_x_page",{x:-932},0);

    let se02_y_obj_list04 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_obj_list04,
        trigger: "#section02", //기준
        start: "23000px top", //기준점, 브라우저
        end: "25000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    se02_y_obj_list04.to(".se02_x_page",{x:-1436},0);

    let se02_y_obj_list05 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_obj_list05,
        trigger: "#section02", //기준
        start: "27000px top", //기준점, 브라우저
        end: "29000px bottom", //기준점, 브라우저
        scrub: 1,
    });
    se02_y_obj_list05.to(".se02_move_left",{x:-1200},0);

    /*
    * 90
    * 420
    * 932
    * 1436
    * */

    // //옷 변경
    let se02_y_obj01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_obj01,
        trigger: "#section02", //기준
        start: "9850px top", //기준점, 브라우저
        end: "9900px bottom", //기준점, 브라우저
        scrub: 1,
        onEnter: ()=>{
            $('#section02 .sec02_object01 img').attr('src', `image/sec02/sec02_object12.png`);
        }
    });
    //
    // // (가로마지막) VVV 로고 핑크 -> 서서히 나타남 -> 흰색 그라데이션
    let se02_y_obj02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_obj02,
        trigger: "#section02", //기준
        start: "29500px top", //기준점, 브라우저
        end: "31000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se02_y_obj02.to(".sec02_logo01",{opacity:1},0);

    let se02_y_obj03 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_obj03,
        trigger: "#section02", //기준
        start: "31500px top", //기준점, 브라우저
        end: "32500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se02_y_obj03.to(".sec02_logo01",{filter:'brightness(10) grayscale(1)'},0);

    let se02_y_obj04 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_y_obj04,
        trigger: "#section02", //기준
        start: "33000px top", //기준점, 브라우저
        end: "35000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se02_y_obj04.to(".sec02_logo01",{scale:10},0);
    se02_y_obj04.to(".se02_dim",{opacity:1},0.5);

    //
    // // (가로마지막) VVV 로고 화이트 -> 그라데이션으로 채워짐 -> 점점 확대
    // let se02_y_obj03 = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: se02_y_obj03,
    //     trigger: "#section02", //기준
    //     start: "15000px top", //기준점, 브라우저
    //     end: "16000px bottom", //기준점, 브라우저
    //     scrub: 1,
    // });
    //
    // se02_y_obj03.to(".sec02_logo02",{opacity:1},0);
    //
    // // (가로마지막) 화이트 딤
    // let se02_y_obj04 = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: se02_y_obj04,
    //     trigger: "#section02", //기준
    //     start: "15000px top", //기준점, 브라우저
    //     end: "16000px bottom", //기준점, 브라우저
    //     scrub: 1,
    // });
    // se02_y_obj04.to(".se02_dim", {opacity: 1}, 0);


    // section02
    let se02_text01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_text01,
        trigger: "#section02", //기준
        start: "-1000px top", //기준점, 브라우저
        end: "500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se02_text01.to(".sec02_text01",{x:0},0);
    se02_text01.to(".sec02_text02",{x:0},0);
    se02_text01.to(".sec02_object01",{opacity:1},0);
    /*거리이동하고 제자리로 오는건 늘 언제나 0 입니다.*/


    let se02_container01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_container01,
        trigger: "#section02", //기준
        start: "300px top", //기준점, 브라우저
        end: "1300px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se02_container01.to("#section02 .container01",{opacity:1},0);
    se02_container01.to(".container02",{opacity:1},0.4);


    // se02 중반 둥둥 떠다니는 오브젝트들(loop)
    // https://gsap.com/docs/v3/Eases/
    //loop
    // 핑크스크런치
    gsap.to('.sec02_object05 img', {
        x: -30,

        duration: 3, /*시간*/
        repeat: -1, /*반복(음수면 무한반복)*/
        ease: 'none', /*가속도*/
        yoyo: true /*왕복*/
    })

    // 리본실버반지
    gsap.to('.sec02_object06 img', {
        x: 50,
        y: -50,

        duration: 3, /*시간*/
        repeat: -1, /*반복(음수면 무한반복)*/
        ease: 'none', /*가속도*/
        yoyo: true /*왕복*/
    })

    // 발레리나키링
    gsap.to('.sec02_object07 img', {
        y: 30,

        duration: 3, /*시간*/
        repeat: -1, /*반복(음수면 무한반복)*/
        ease: 'none', /*가속도*/
        yoyo: true /*왕복*/
    })

    // 하얀벨벳리본
    gsap.to('.sec02_object08 img', {
        y: -30,
        x: 30,

        duration: 3, /*시간*/
        repeat: -1, /*반복(음수면 무한반복)*/
        ease: 'none', /*가속도*/
        yoyo: true /*왕복*/
    })

    // 리본반지
    gsap.to('.sec02_object09 img', {
        y: 30,
        x: 30,

        duration: 3, /*시간*/
        repeat: -1, /*반복(음수면 무한반복)*/
        ease: 'none', /*가속도*/
        yoyo: true /*왕복*/
    })

    // 실버숄더백
    gsap.to('.sec02_object10 img', {
        y: -30,

        duration: 3, /*시간*/
        repeat: -1, /*반복(음수면 무한반복)*/
        ease: 'none', /*가속도*/
        yoyo: true /*왕복*/
    })

    // 실버하트 귀걸이
    gsap.to('.sec02_object11 img', {
        x: 30,

        duration: 3, /*시간*/
        repeat: -1, /*반복(음수면 무한반복)*/
        ease: 'none', /*가속도*/
        yoyo: true /*왕복*/
    })

//    sec03-------------------------------------------

    gsap.to('.sec03_text11 .inner', {
        x: -3636,

        duration: 30, /*시간*/
        repeat: -1, /*반복(음수면 무한반복)*/
        ease: 'none', /*가속도*/
    })

    // 창문 & 현관문 & 자동차 -> 양쪽 방향에서 들어옴
    let se03_move01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move01,
        trigger: "#section03", //기준
        start: "-400px top", //기준점, 브라우저
        end: "1800px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move01.to(".sec03_object01", {x: 0}, 0);
    se03_move01.to(".sec03_object02", {x: 0}, 0.1);
    se03_move01.to(".sec03_object03", {x: 0}, 0);
    /*거리이동하고 제자리로 오는건 늘 언제나 0 입니다.*/

    // 잔디배경 메인인물 -> 오른쪽 방향에서 들어옴
    let se03_move11 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move11,
        trigger: "#section03", //기준
        start: "200px top", //기준점, 브라우저
        end: "1300px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move11.to(".sec03_object09", {x: 0}, 0);

    // sec03 object10 -> 없었다가 뜨는 말풍선1
    let se03_move02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move02,
        trigger: "#section03", //기준
        start: "top top", //기준점, 브라우저
        end: "1500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move02.to(".sec03_object10", {opacity: 1}, 0);

    // 말풍선1 -> 까닥까닥거림
    gsap.to('.sec03_object10 img', {
        rotate: -20,

        duration: 0.8, /*시간*/
        repeat: -1, /*반복(음수면 무한반복)*/
        ease: "steps(10)", /*가속도*/
        yoyo: true /*왕복*/
    })

    // 핑크배경 첫번째 텍스트 3줄 -> 각자 방향에서 움직임
    let se03_move03 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move03,
        trigger: "#section03", //기준
        start: "top top", //기준점, 브라우저
        end: "4000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move03.to(".sec03_text02", {x: 0}, 0);
    se03_move03.to(".sec03_text03", {x: -1000}, 0);
    se03_move03.to(".sec03_text04", {x: 0}, 0);
    /*거리이동하고 제자리로 오는건 늘 언제나 0 입니다.*/


    // 핑크배경 사람1 -> 왼쪽에서 들어옴
    let se03_move04 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move04,
        trigger: "#section03", //기준
        start: "1200px top", //기준점, 브라우저
        end: "2500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move04.to(".sec03_object06", {x: 0}, 0);


    // sec03 object07 -> 없었다가 뜨는 핑크배경 말풍선1
    let se03_move05 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move05,
        trigger: "#section03", //기준
        start: "1500px top", //기준점, 브라우저
        end: "2000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move05.to(".sec03_object07", {opacity: 1}, 0);

    // 말풍선1 -> 까닥까닥거림
    gsap.to('.sec03_object07 img', {
        rotate: 30,

        duration: 0.8, /*시간*/
        repeat: -1, /*반복(음수면 무한반복)*/
        ease: "steps(10)", /*가속도*/
        yoyo: true /*왕복*/
    })

    // 잡지에 맞춰 랭킹처럼 변하는 글씨 -> 2023FW - 2023SS
    let se03_over_text01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_over_text01,
        trigger: "#section03", //기준
        start: "4000px top", //기준점, 브라우저
        end: "6000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_over_text01.to(".sec03_text_inner", {y: -150}, 0);

    // 잡지에 맞춰 랭킹처럼 변하는 글씨 -> 2023SS - 2022FW
    let se03_over_text02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_over_text02,
        trigger: "#section03", //기준
        start: "6000px top", //기준점, 브라우저
        end: "8000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_over_text02.to(".sec03_text_inner", {y: -300}, 0);

     // 핑크배경 첫번째-맨밑 잡지(2023FW) -> 오른쪽에서 들어옴
    let sec03_book01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sec03_book01,
        trigger: "#section03", //기준
        start: "2000px top", //기준점, 브라우저
        end: "5000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    sec03_book01.to(".sec03_book01", {x: 0}, 0);

    // 핑크배경 첫번째-가운데 잡지(2023SS) -> 오른쪽에서 들어옴
    let sec03_book02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sec03_book02,
        trigger: "#section03", //기준
        start: "4000px top", //기준점, 브라우저
        end: "7000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    sec03_book02.to(".sec03_book02", {x: 0}, 0);

    // 핑크배경 첫번째-맨위 잡지(2022FW) -> 오른쪽에서 들어옴
    let sec03_book03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sec03_book03,
        trigger: "#section03", //기준
        start: "6000px top", //기준점, 브라우저
        end: "9000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    sec03_book03.to(".sec03_book03", {x: 0}, 0);

    // // 뒤로 물러나는 잡지
    // let sec03_book03_1 = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: sec03_book03_1,
    //     trigger: "#section03", //기준
    //     start: "4500px top", //기준점, 브라우저
    //     end: "6000px bottom", //기준점, 브라우저
    //     scrub: 1,
    // });

    // sec03_book03_1.to(".sec03_book03 img", {x: -100, y:-100}, 0);

    // sec03 text06,07 -> 없었다가 나타나는 잡지 아래 위 텍스트들
    let se03_move06 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move06,
        trigger: "#section03", //기준
        start: "8000px top", //기준점, 브라우저
        end: "9500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move06.to(".sec03_text06", {opacity: 1}, 0);
    se03_move06.to(".sec03_text07", {opacity: 1}, 0);


    //  핑크배경 첫번째 검정가방 & 검정 리본 -> 오른쪽에서 굴러들어옴
    let se03_move07 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move07,
        trigger: "#section03", //기준
        start: "8000px top", //기준점, 브라우저
        end: "10500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move07.to(".sec03_object11", {x: 0, rotate: 360}, 0.3);
    se03_move07.to(".sec03_object12", {x: 0, y: 0, rotate: 360}, 0.6);


    // 핑크배경 두번째 사람 -> 오른쪽에서 들어옴
    // 핑크배경 두번째 사람 위 Ta-da -> 서서히 보임
    let se03_move08 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move08,
        trigger: "#section03", //기준
        start: "9500px top", //기준점, 브라우저
        end: "11000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move08.to(".sec03_object13", {x: 0}, 0);
    se03_move08.to(".sec03_object14", {opacity: 1}, 0.5);

    // 잡지에 맞춰 랭킹처럼 변하는 글씨 -> 2022SS - 2021FW
    let se03_over_text03 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_over_text03,
        trigger: "#section03", //기준
        start: "11500px top", //기준점, 브라우저
        end: "13000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_over_text03.to(".sec03_text_inner02", {y: -150}, 0);

    // 잡지에 맞춰 랭킹처럼 변하는 글씨 -> 2021FW - 2021SS
    let se03_over_text04 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_over_text04,
        trigger: "#section03", //기준
        start: "13000px top", //기준점, 브라우저
        end: "15000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_over_text04.to(".sec03_text_inner02", {y: -300}, 0);

    // 핑크배경 두번째-맨아래 잡지(2022SS) -> 오른쪽에서 들어옴
    let sec03_book04 = gsap.timeline();
    ScrollTrigger.create({
        animation: sec03_book04,
        trigger: "#section03", //기준
        start: "9000px top", //기준점, 브라우저
        end: "11000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    sec03_book04.to(".sec03_book04", {x: 0}, 0);

    // 핑크배경 두번째-오른쪽 잡지(2021FW) -> 오른쪽에서 들어옴
    let sec03_book05 = gsap.timeline();
    ScrollTrigger.create({
        animation: sec03_book05,
        trigger: "#section03", //기준
        start: "11000px top", //기준점, 브라우저
        end: "14000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    sec03_book05.to(".sec03_book05", {x: 0}, 0);

    // 핑크배경 두번째-왼쪽 잡지(2021SS) -> 오른쪽에서 들어옴
    let sec03_book06 = gsap.timeline();
    ScrollTrigger.create({
        animation: sec03_book06,
        trigger: "#section03", //기준
        start: "13000px top", //기준점, 브라우저
        end: "15500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    sec03_book06.to(".sec03_book06", {x: 0}, 0);


    // sec03 text06,07 -> 없었다가 나타나는 잡지 아래 위 텍스트들
    let se03_move09 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move09,
        trigger: "#section03", //기준
        start: "15000px top", //기준점, 브라우저
        end: "17000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move09.to(".sec03_text09", {opacity: 1}, 0);
    se03_move09.to(".sec03_text10", {opacity: 1}, 0);


    //  핑크배경 두번째 하늘색 헤어 스크런치 & 실버 패딩백 -> 왼쪽에서 굴러들어옴
    let se03_move10 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move10,
        trigger: "#section03", //기준
        start: "15000px top", //기준점, 브라우저
        end: "19000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move10.to(".sec03_object15", {x: 0, rotate: 720}, 0);
    se03_move10.to(".sec03_object16", {x: 0, y: 0, rotate: 360}, 0.5);

    //  핑크배경 맨아래 맨왼쪽 사람 -> 아래에서 올라옴
    //  핑크배경 맨아래 오른쪽 사람 -> 위에서 내려옴
    let se03_move12 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move12,
        trigger: "#section03", //기준
        start: "18000px top", //기준점, 브라우저
        end: "22000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move12.to(".sec03_object17", {y: 0}, 0);
    se03_move12.to(".sec03_object18", {y: 0, opacity: 1}, 0.5);

    // 핑크배경 맨아래 가운데 메인 사람 -> 마지막에 도달하면 까닥까닥거림
    gsap.to('.sec03_object19', {
        rotate: -5,

        duration: 0.8, /*시간*/
        repeat: -1, /*반복(음수면 무한반복)*/
        ease: "steps(10)", /*가속도*/
        yoyo: true /*왕복*/
    })

    // 핑크배경 맨아래 메인 꾸밈요소-1(왼쪽) -> 서서히 보임
    // 핑크배경 맨아래 메인 꾸밈요소-2(오른쪽) -> 서서히 보임
    let se03_move13 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move13,
        trigger: "#section03", //기준
        start: "7000px top", //기준점, 브라우저
        end: "7300px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move13.to(".sec03_object20", {opacity: 1}, 0);
    se03_move13.to(".sec03_object21", {opacity: 1}, 0);



    // se03_scroll--- start ----------------

    gsap.to('.fix_this_3', {
        scrollTrigger: {
            trigger: ".trigger_this_03",
            start: "top top",
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });

    let se03_top = 5518 - innerHeight
    let se03_y = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_y,
        trigger: "#section03",
        start: "top top",
        end: "3000px bottom",
        scrub: 1,
    });
    se03_y.to("#section03 .se03_yScroll", {y: -1980}, 0);

    let se03_y01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_y01,
        trigger: "#section03",
        start: "9000px top",
        end: "11000px bottom",
        scrub: 1,
    });
    se03_y01.to("#section03 .se03_yScroll", {y: -3430}, 0);

    let se03_y02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_y02,
        trigger: "#section03",
        start: "17000px top",
        end: "20000px bottom",
        scrub: 1,
    });
    se03_y02.to("#section03 .se03_yScroll", {y: -se03_top}, 0);


    let se03_left = 9782 - innerWidth
    let se03_x = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_x,
        trigger: "#section03",
        start: "21000px top",
        end: "33000px bottom",
        scrub: 1,
    });
    se03_x.to("#section03 .se03_xScroll", {x: -se03_left}, 0);




    // 핑크배경(가로시작) 메인 타이틀 Pink Princess -> 서서히 보임
    // 핑크배경(가로시작) 메인 타이틀 밑 서브 텍스트 -> 서서히 보임
    // 핑크배경(가로시작) 메인 타이틀 위 반짝이1 -> 서서히 보임, 회전
    // 핑크배경(가로시작) 메인 타이틀 위 반짝이2 -> 서서히 보임, 회전
    let se03_move14 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move14,
        trigger: "#section03", //기준
        start: "22000px top", //기준점, 브라우저
        end: "24000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move14.to(".sec03_text12", {opacity: 1}, 0);
    se03_move14.to(".sec03_text13", {opacity: 1}, 0.1);
    se03_move14.to(".sec03_sparkle02", {opacity: 1, rotate: 720}, 0.1);
    se03_move14.to(".sec03_sparkle03", {opacity: 1, rotate: 720}, 0.1);

    // 핑크배경(가로시작) 첫번째 원형 텍스트 -> 계속 돌아감
    // 핑크배경(가로시작) 두번째 원형텍스트 -> 계속 돌아감
    //loop
    gsap.to('.sec03_text14',{
        rotate:360,

        duration:8, //속도
        repeat: -1, //반복(음수면 무한)
        ease: 'none'
    })

    gsap.to('.sec03_text15',{
        rotate:-360,

        duration:8, //속도
        repeat: -1, //반복(음수면 무한)
        ease: 'none'
    })

    // 핑크배경(가로시작) 인터넷창1 & 아이폰창1 & 인터넷창2 -> 서서히 보임
    let se03_move15 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move15,
        trigger: "#section03", //기준
        start: "23000px top", //기준점, 브라우저
        end: "25000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move15.to(".sec03_window01", {opacity: 1}, 0);
    se03_move15.to(".sec03_window02", {opacity: 1}, 0.5);
    se03_move15.to(".sec03_window04", {opacity: 1}, 0.9);

    // 핑크배경(가로시작) 첫번째 말풍선1,2,3 -> 순서대로 하나씩 뜸
    let se03_move16 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move16,
        trigger: "#section03", //기준
        start: "24000px top", //기준점, 브라우저
        end: "27000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move16.to(".sec03_message01", {opacity: 1}, 0);
    se03_move16.to(".sec03_message02", {opacity: 1}, 0.4);
    se03_move16.to(".sec03_message03", {opacity: 1}, 0.8);

    // 핑크배경(가로시작) 인터넷창3 & 아래 흰색 텍스트 -> 서서히 보임
    let se03_move17 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move17,
        trigger: "#section03", //기준
        start: "26500px top", //기준점, 브라우저
        end: "28000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move17.to(".sec03_window05", {opacity: 1}, 0);
    se03_move17.to(".sec03_text16", {opacity: 1}, 0.2);

    // 핑크배경(가로시작) 서있는 메인인물-말풍선1 -> 서서히 보임
    // 핑크배경(가로시작) 두번째 사각 사진 옆 텍스트 -> 서서히 보임
    let se03_move18 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move18,
        trigger: "#section03", //기준
        start: "27500px top", //기준점, 브라우저
        end: "28000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move18.to(".sec03_message04", {opacity: 1}, 0);
    se03_move18.to(".sec03_text17", {opacity: 1}, 0.9);

    // 핑크배경(가로시작) 두번째 말풍선1,2,3 -> 순서대로 하나씩 뜸
    let se03_move19 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move19,
        trigger: "#section03", //기준
        start: "29000px top", //기준점, 브라우저
        end: "31000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move19.to(".sec03_message05", {opacity: 1}, 0);
    se03_move19.to(".sec03_message06", {opacity: 1}, 0.4);
    se03_move19.to(".sec03_message07", {opacity: 1}, 0.8);

    // 핑크배경(가로시작) 맨오른쪽 로고 & 검정 텍스트 -> 서서히 보임
    let se03_move20 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move20,
        trigger: "#section03", //기준
        start: "31000px top", //기준점, 브라우저
        end: "32000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move20.to(".sec03_logo01", {opacity: 1}, 0);
    se03_move20.to(".sec03_text18", {opacity: 1}, 0);

    // 핑크배경(가로시작) 별클립헤어핀 -> 왼쪽에서 대각선으로 들어옴
    // 핑크배경(가로시작) 맨오른쪽 하트반지 -> 왼쪽에서 굴러 들어옴
    let se03_move21 = gsap.timeline();
    ScrollTrigger.create({
        animation: se03_move21,
        trigger: "#section03", //기준
        start: "29000px top", //기준점, 브라우저
        end: "31000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se03_move21.to(".sec03_object27", {x: 0, y:0}, 0);
    se03_move21.to(".sec03_object29", {x: 0, y:0, rotate: 720}, 0.3);

    // se03_scroll--- end

    // se04_scroll--- start

    gsap.to('.fix_this_4', {
        scrollTrigger: {
            trigger: ".trigger_this_04",
            start: "top top",
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });

    let se04_top = 7016 - innerHeight
    let se04_y = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_y,
        trigger: "#section04",
        start: "top top",
        end: "10000px bottom",
        scrub: 1,
    });
    se04_y.to("#section04 .se04_yScroll", {y: -se04_top}, 0);

    // sec04 세로시작 초반 이불 덮은 메인인물1 -> 왼쪽에서 들어옴
    let se04_move01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move01,
        trigger: "#section04", //기준
        start: "-500px top", //기준점, 브라우저
        end: "1500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move01.to(".sec04_object01", {x: 0}, 0);

    // sec04 세로시작 중반 검정 텍스트(오른쪽) -> 서서히 보임
    let se04_move02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move02,
        trigger: "#section04", //기준
        start: "800px top", //기준점, 브라우저
        end: "1100px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move02.to(".sec04_text03", {opacity: 1}, 0);

    // sec04 세로시작 중반 사각사진2 -> 서서히 보임
    let se04_move03 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move03,
        trigger: "#section04", //기준
        start: "900px top", //기준점, 브라우저
        end: "1500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move03.to(".sec04_photo02", {opacity: 1}, 0);

    // sec04 세로시작 중반 사각사진3 -> 서서히 보임
    let se04_move04 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move04,
        trigger: "#section04", //기준
        start: "2000px top", //기준점, 브라우저
        end: "2500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move04.to(".sec04_photo03", {opacity: 1}, 0);

    // sec04 세로시작 중반 사각사진4 -> 서서히 보임
    let se04_move05 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move05,
        trigger: "#section04", //기준
        start: "2500px top", //기준점, 브라우저
        end: "2900px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move05.to(".sec04_photo04", {opacity: 1}, 0);

    // sec04 세로시작 사각사진3 아래 테이프1 -> 왼쪽에서 오른쪽으로 내려오면서 나타남
    let se04_move07 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move07,
        trigger: "#section04", //기준
        start: "2700px top", //기준점, 브라우저
        end: "4000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move07.to(".sec04_tape01 img", {x: 0}, 0);

    /* sec04 세로시작 중반 셀카 위쪽 손 플래시2 */
    let se04_move_flash01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move_flash01,
        trigger: "#section04", // 기준
        start: "3000px top", // 기준점, 브라우저
        end: "4500px bottom", // 기준점, 브라우저
        scrub: 1,
    });

// 두 세번 깜빡이게 하기 위해 타임라인에 반복적으로 깜빡이는 애니메이션 추가
    se04_move_flash01
        .to(".sec04_flash02", {opacity: 1, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash02", {opacity: 0, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash02", {opacity: 1, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash02", {opacity: 0, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash02", {opacity: 1, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash02", {opacity: 0, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash02", {opacity: 1, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash02", {opacity: 0, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash02", {opacity: 1, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash02", {opacity: 0, duration: 0.1, ease: 'steps(1)'});


    /* sec04 세로시작 중반 셀카 위 플래시1 */
    let se04_move_flash02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move_flash02,
        trigger: "#section04", // 기준
        start: "3500px top", // 기준점, 브라우저
        end: "5000px bottom", // 기준점, 브라우저
        scrub: 1,
    });

// 두 세번 깜빡이게 하기 위해 타임라인에 반복적으로 깜빡이는 애니메이션 추가
    se04_move_flash02
        .to(".sec04_flash01", {opacity: 1, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash01", {opacity: 0, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash01", {opacity: 1, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash01", {opacity: 0, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash01", {opacity: 1, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash01", {opacity: 0, duration: 0.1, ease: 'steps(1)'})  
        .to(".sec04_flash01", {opacity: 1, duration: 0.1, ease: 'steps(1)'})   
        .to(".sec04_flash01", {opacity: 0, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash01", {opacity: 1, duration: 0.1, ease: 'steps(1)'})   
        .to(".sec04_flash01", {opacity: 0, duration: 0.1, ease: 'steps(1)'});    

    /* sec04 세로시작 중반 셀카 아래쪽 손 플래시3 */
    let se04_move_flash03 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move_flash03,
        trigger: "#section04", // 기준
        start: "3800px top", // 기준점, 브라우저
        end: "5500px bottom", // 기준점, 브라우저
        scrub: 1,
    });

// 두 세번 깜빡이게 하기 위해 타임라인에 반복적으로 깜빡이는 애니메이션 추가
    se04_move_flash03
        .to(".sec04_flash03", {opacity: 1, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash03", {opacity: 0, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash03", {opacity: 1, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash03", {opacity: 0, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash03", {opacity: 1, duration: 0.1, ease: 'steps(1)'})
        .to(".sec04_flash03", {opacity: 0, duration: 0.1, ease: 'steps(1)'})     
        .to(".sec04_flash03", {opacity: 1, duration: 0.1, ease: 'steps(1)'})     
        .to(".sec04_flash03", {opacity: 0, duration: 0.1, ease: 'steps(1)'})     
        .to(".sec04_flash03", {opacity: 1, duration: 0.1, ease: 'steps(1)'})      
        .to(".sec04_flash03", {opacity: 0, duration: 0.1, ease: 'steps(1)'});      


    // sec04 세로시작 사각사진4 위 클릭미 텍스트 -> 서서히 보임
    let se04_move09 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move09,
        trigger: "#section04", //기준
        start: "2600px top", //기준점, 브라우저
        end: "2800px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move09.to(".sec04_text06", {opacity: 1}, 0);

    // sec04 세로시작 사각사진3 아래 원형 텍스트 -> 계속 돌아감
    //loop
    gsap.to('.sec04_text05',{
        rotate:360,
        duration:5, //속도
        repeat: -1, //반복(음수면 무한)
        ease: 'none'
    })

    // sec04 세로시작 중반 사각사진5 -> 서서히 보임
    let se04_move_06 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move_06,
        trigger: "#section04", //기준
        start: "4000px top", //기준점, 브라우저
        end: "4500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move_06.to(".sec04_photo05", {opacity: 1}, 0);

    // sec04 세로시작 사각사진4 위 클릭미 텍스트 -> 서서히 보임
    let se04_move10 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move10,
        trigger: "#section04", //기준
        start: "4200px top", //기준점, 브라우저
        end: "4500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move10.to(".sec04_text07", {opacity: 1}, 0);
    se04_move10.to(".sec04_object07", {opacity: 1}, 0);

    // sec04 세로시작 사각사진4 위 테이프2 -> 오른쪽에서 왼쪽으로 내려오면서 나타남
    let se04_move11 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move11,
        trigger: "#section04", //기준
        start: "4700px top", //기준점, 브라우저
        end: "6000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move11.to(".sec04_tape02 img", {x: 0}, 0);

    // sec04 세로시작 후반 테이프2 위 검정 텍스트 -> 서서히 나타남
    let se04_move08 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move08,
        trigger: "#section04", //기준
        start: "5200px top", //기준점, 브라우저
        end: "5800px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move08.to(".sec04_text08", {opacity: 1}, 0);

    // sec04 세로시작 마지막 텍스트 3줄 -> 각자 방향에서 움직임
    // sec04 세로시작 마지막 텍스트 위 검정 토끼 키링 -> 오른쪽 방향에서 흘러감
    let se04_move12 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move12,
        trigger: "#section04", //기준
        start: "6000px top", //기준점, 브라우저
        end: "11000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move12.to(".sec04_text09 img", {x: 0}, 0);
    se04_move12.to(".sec04_text10 img", {x: 0}, 0);
    se04_move12.to(".sec04_text11 img", {x: 0}, 0);
    se04_move12.to(".sec04_object08 img", {x: -2306,y:200}, 0.2);

    // sec04 세로시작 후반 테이프2 위 검정 텍스트 -> 서서히 보임



    // let se04_page01 = gsap.timeline();
    // ScrollTrigger.create({
    //     animation: se04_page01,
    //     trigger: "#section04", //기준
    //     start: "13000px top", //기준점, 브라우저
    //     end: "15000px bottom", //기준점, 브라우저
    //     scrub: 1,
    // });
    //
    // se04_page01.to("#section04 .se04_page02", {opacity: 1}, 0);


    // 발레리나 키링 -> 계속 까닥까닥 움직임
    gsap.to('.sec04_object24',{
        rotate:-50,

        repeat:-1,
        duration:2,
        ease:'none',
        yoyo:true
    })

    let bgm01 = document.querySelector('#bgm01')
    let bgm02 = document.querySelector('#bgm02')
    let bgm03 = document.querySelector('#bgm03')
    let bgm04 = document.querySelector('#bgm04')

    let se04_bottom = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_bottom,
        trigger: "#section04",
        start: "10500px top",
        end: "12500px bottom",
        scrub: 1,
        onEnterBack:()=>{
            gsap.to('.se04_b_page_box',{duration:0, scale:1, y:0, zIndex:100, opacity:1})
            gsap.to('.se04_end_page',{zIndex:-1})
            gsap.to('.se04_page_bottom',{pointerEvents:'inherit'})
            gsap.to('#clothes .window02 > div', {
                opacity: 0,
                scale: 0,
                duration: 0,
            });
            document.querySelector('#clothes .sec04_photo07').style.display = 'block'
            document.querySelector('#clothes .sec04_photo08').style.display = 'none'
            document.querySelector('#clothes .clothes_game_box').style.display = 'block'
            document.querySelector('#clothes .window01').style.display = 'none'
            document.querySelector('#clothes .window02').style.display = 'none'
            document.querySelector('#clothes .window03').style.display = 'none'
            gsap.to('.sec04_photo08',{scale: 1, y:0, duration:0,})
            gsap.to('#clothes',{opacity:1, duration:0, zIndex: 1})
            gsap.to('.container01',{pointerEvents:'inherit', opacity:1})
            gsap.to('.se04_page02',{opacity:0, duration:0})
        }
    });
    se04_bottom.to("#section04 .se04_page_bottom", {y: 0}, 0);
    se04_bottom.to("#section04 .se04_end_page", {y: 0}, 0);

    $('#section04 .container01').mouseenter(function () {
        bgm01.play();
    })

    let se04_bottom_page = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_bottom_page,
        trigger: "#section04",
        start: "13000px top",
        end: "14500px bottom",
        scrub: 1,
    });
    se04_bottom_page.to("#section04 .container01", {opacity:1}, 0);


    $('.sec04_monitor_button02').click(function () {
        bgm02.play();
        gsap.to('.se04_page02',{opacity:1, duration:1})
        gsap.to('.container01',{pointerEvents:'none'})

        setTimeout(()=>{
            gsap.to('.se04_b_page_box',{duration:2, scale:3, y:480})
        },1000)
        setTimeout(()=>{
            gsap.to('.se04_b_page_box',{duration:1, opacity:0, zIndex: -1})
            gsap.to('.se04_end_page',{zIndex: 1})
            bgm03.play()
        },3000)
    })

    $('.b_container03').mouseenter(function () {
        gsap.to('.sec04_game_button03_hover',{duration:0.5, opacity:1})
    }).mouseleave(function () {
        gsap.to('.sec04_game_button03_hover',{duration:0.5, opacity:0})
    })

    $('.b_container04').mouseenter(function () {
        gsap.to('.sec04_button18_hover',{duration:0.5, opacity:1})
    }).mouseleave(function () {
        gsap.to('.sec04_button18_hover',{duration:0.5, opacity:0})
    })

    $('.p_container01').mouseenter(function () {
        gsap.to('.sec04_photo06_hover',{duration:0.5, opacity:1})
    }).mouseleave(function () {
        gsap.to('.sec04_photo06_hover',{duration:0.5, opacity:0})
    })
















    // 왼쪽 위 검정 텍스트들 -> 서서히 나타남
    let se04_move13 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move13,
        trigger: "#section04", //기준
        start: "31000px top", //기준점, 브라우저
        end: "35000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move13.to(".sec04_logo03",{opacity:1},0);
    se04_move13.to(".sec04_text17",{opacity:1},0.2);
    se04_move13.to(".sec04_text18",{opacity:1},0.2);
    se04_move13.to(".sec04_text19",{opacity:1},0.2);
    se04_move13.to(".sec04_text20",{opacity:1},0.8);


    // 모니터 오른쪽 화이트 숄더백,목걸이들 -> 오른쪽에서 들어옴
    let se04_move14 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_move14,
        trigger: "#section04", //기준
        start: "31000px top", //기준점, 브라우저
        end: "bottom bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_move14.to(".sec04_object25", {x: 0}, 0.5);    
    se04_move14.to(".sec04_object22", {y: 0}, 0);    
    se04_move14.to(".sec04_object23", {y: 0}, 0.3);    

   // 진주목걸이 통째 -> 서서히 사라짐
   let se04_move15 = gsap.timeline();
   ScrollTrigger.create({
       animation: se04_move15,
       trigger: "#section04", //기준
       start: "29000px top", //기준점, 브라우저
       end: "31000px bottom", //기준점, 브라우저
       scrub: 1,
   });

   se04_move15.to("#section04 .sec04_obj20", {opacity:0}, 0);

    let se04_end_scroll = 11515 - innerWidth
    let se04_end = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_end,
        trigger: "#section04", //기준
        start: "20000px top", //기준점, 브라우저
        end: "bottom bottom", //기준점, 브라우저
        scrub: 1,
    });

    se04_end.to("#section04 .se04_end_page", {x:-se04_end_scroll}, 0);


    let se04_end_page = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_end_page,
        trigger: "#section04", //기준
        start: "29000px top", //기준점, 브라우저
        end: "bottom bottom", //기준점, 브라우저
        scrub: 1,

    });

    se04_end_page.to("#section04 .sec04_bg07", {x:2300, y:-30, scale:0.5}, 0);
















});