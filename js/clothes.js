document.addEventListener('DOMContentLoaded', function () {
    // 맨 처음에 sec04_game_model01을 보여주기
    document.querySelector('.sec04_game_model01').style.display = 'block';

    let bgm01 = document.querySelector('#bgm01')
    let bgm02 = document.querySelector('#bgm02')
    let bgm03 = document.querySelector('#bgm03')
    let bgm04 = document.querySelector('#bgm04')

    // 모델 엘리먼트 설정
    const modelMap = {
        '.sec04_game_hb01': ['.sec04_game_model03_f', '.sec04_game_model03_b'],
        '.sec04_game_hb02': ['.sec04_game_model08_f', '.sec04_game_model08_b'],
        '.sec04_game_hb03': ['.sec04_game_model09_f', '.sec04_game_model09_b'],
        '.sec04_game_hb04': ['.sec04_game_model04_f', '.sec04_game_model04_b'],
        '.sec04_game_top01': ['.sec04_game_model10_f', '.sec04_game_model10_b'],
        '.sec04_game_top02': ['.sec04_game_model07_f', '.sec04_game_model07_b'],
        '.sec04_game_top03': ['.sec04_game_model08_f', '.sec04_game_model08_b'],
        '.sec04_game_top04': ['.sec04_game_model12_f', '.sec04_game_model12_b'],
        '.sec04_game_top05': ['.sec04_game_model11_f', '.sec04_game_model11_b'],
        '.sec04_game_top06': ['.sec04_game_model09_f', '.sec04_game_model09_b'],
        '.sec04_game_top07': ['.sec04_game_model04_f', '.sec04_game_model04_b'],
        '.sec04_game_top08': ['.sec04_game_model03_f', '.sec04_game_model03_b'],
        '.sec04_game_top09': ['.sec04_game_model02_f', '.sec04_game_model02_b'],
        '.sec04_game_bottom01': ['.sec04_game_model03_f', '.sec04_game_model03_b'],
        '.sec04_game_bottom02': ['.sec04_game_model02_f', '.sec04_game_model02_b'],
        '.sec04_game_bottom03': ['.sec04_game_model11_f', '.sec04_game_model11_b'],
        '.sec04_game_bottom04': ['.sec04_game_model07_f', '.sec04_game_model07_b'],
        '.sec04_game_op01': ['.sec04_game_model06_f', '.sec04_game_model06_b'],
        '.sec04_game_op02': ['.sec04_game_model05_f', '.sec04_game_model05_b']
    };

    let changeCount = 0;
    const requiredChanges = 5;
    const bContainerButton = document.querySelector('.b_container03');

    // 모든 모델 엘리먼트를 숨기기 함수
    function hideAllModelElements() {
        document.querySelectorAll('.model > div').forEach(model => {
            model.style.display = 'none';
        });
    }

    // 초기 상태로 첫 모델 이미지를 표시하기 위해 나머지 모델 이미지를 숨기기
    hideAllModelElements();
    document.querySelector('.sec04_game_model01').style.display = 'block';

    // choice_box 클릭 시 이벤트 설정
    Object.keys(modelMap).forEach(selector => {
        document.querySelector(selector).addEventListener('click', () => {
            hideAllModelElements();
            const [frontModel, backModel] = modelMap[selector];
            document.querySelector(frontModel).style.display = 'block';
            document.querySelector(backModel).style.display = 'none'; // Back 모델은 숨기기
            changeCount++;
            if (changeCount >= requiredChanges) {
                bContainerButton.style.pointerEvents = 'auto';
                bContainerButton.style.opacity = '1';
            }
        });
    });

    // b_container 클릭 시 이벤트 설정
    document.querySelector('.b_container01').addEventListener('click', () => {
        Object.keys(modelMap).forEach(selector => {
            const [frontModel, backModel] = modelMap[selector];
            if (document.querySelector(frontModel).style.display === 'block') {
                document.querySelector(frontModel).style.display = 'none';
                document.querySelector(backModel).style.display = 'block';
            }
        });
    });

    document.querySelector('.b_container02').addEventListener('click', () => {
        Object.keys(modelMap).forEach(selector => {
            const [frontModel, backModel] = modelMap[selector];
            if (document.querySelector(backModel).style.display === 'block') {
                document.querySelector(backModel).style.display = 'none';
                document.querySelector(frontModel).style.display = 'block';
            }
        });
    });

    // b_container 클릭 시 이벤트 설정
    document.querySelector('.b_container03').addEventListener('click', () => {
        if (changeCount >= requiredChanges) {
            // 다음 팝업으로 넘어가는 로직 추가
            console.log('옷 갈아입기 완료! 다음 팝업으로 넘어갑니다.');
        } else {
            console.log('옷을 더 갈아입어야 합니다.');
        }
    });

    // 초기 상태에서 b_container01 버튼 비활성화
    bContainerButton.style.pointerEvents = 'none';
    bContainerButton.style.opacity = '0.5';


    document.querySelector('.sec04_game_button03').addEventListener('click',()=>{

        document.querySelector('#clothes .window01').style.display = 'block'

        bgm01.play();

    })

    document.querySelector('.sec04_button18').addEventListener('click', () => {
        bgm02.play();
        setTimeout(() => {
            document.querySelector('#clothes .window01').style.display = 'none';
            document.querySelector('#clothes .window02').style.display = 'block';
        }, 500);

        setTimeout(() => {
            gsap.to('.sec04_text21', {
                rotate: 5,
                duration: 2,
                yoyo: true,
                repeat: -1,
                ease: 'none'
            });
            gsap.to('#clothes .window02 > div', {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                stagger: 0.2
            });
            bgm04.play();
        }, 1000);
    });

    document.querySelector('.sec04_photo06').addEventListener('click',()=>{
        document.querySelector('#clothes .clothes_game_box').style.display = 'none'
        document.querySelector('#clothes .window03').style.display = 'block'
        bgm02.play();
    })

    document.querySelector('.sec04_photo07').addEventListener('click',()=>{
        bgm02.play();
        document.querySelector('#clothes .sec04_photo07').style.display = 'none'
        document.querySelector('#clothes .sec04_photo08').style.display = 'block'

        setTimeout(()=>{
            gsap.to('.sec04_photo08',{scale: 1.76, y:-20, duration:1.5, ease: "back.in(1.5)",})
        },500)
        setTimeout(()=>{
            gsap.to('#clothes',{opacity:0, duration:1, zIndex: -1})
        },2000)
    })





});