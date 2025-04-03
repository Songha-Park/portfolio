let container;
let stage;
let isScrollDisabled = false;
let currentScrollTop = 0;

window.addEventListener('DOMContentLoaded', function () {

    gsap.registerPlugin(ScrollTrigger);

    stage = document.querySelector('#container');
    container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });

    ScrollTrigger.scrollerProxy("#container", {
        scrollTop(value) {
            if (arguments.length) {
                container.scrollTop = value;
            }
            return container.scrollTop;
        }
    });

    container.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: stage });

    container.setPosition(0, 0); //x, y
    container.track.xAxis.element.remove();

    $('.startPoint').click(function () {
        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });
    });

    // Scroll animation
    gsap.to(".scroll-content", {
        scrollTrigger: {
            trigger: ".scroll-content",
            start: "top top",
            end: 'bottom bottom',
            scrub: true,
            onUpdate: self => {
                if (!isScrollDisabled && container.scrollTop >= 93000) {
                    disableScroll();
                }
            }
        }
    });

    // Disable scroll
    function disableScroll() {
        isScrollDisabled = true;
        currentScrollTop = container.scrollTop; // Save the current scroll position
        container.scrollTo(0, 93000, 600, {
            callback: () => {
                container.addListener(disableScrolling);
            }
        });
        container.updatePluginOptions({
            continuousScrolling: false
        });
    }

    // Disable scrolling listener
    function disableScrolling() {
        if (isScrollDisabled) {
            container.setMomentum(0, 0);
            container.scrollTop = 93000;
        }
    }

    // Enable scroll
    function enableScroll() {
        isScrollDisabled = false;
        container.updatePluginOptions({
            continuousScrolling: true
        });
        container.removeListener(disableScrolling);
        container.setMomentum(0, 0);
        ScrollTrigger.refresh(true);
    }

    // Event listener for resume scroll button
    document.getElementById('resumeScrollButton').addEventListener('click', function () {
        enableScroll();
        setTimeout(() => {
            container.scrollTo(0, currentScrollTop, 0); // Restore the saved scroll position
            setTimeout(() => {
                container.scrollTo(0, 97000, 600, {
                    callback: () => console.log('scroll resumed!'),
                    easing: easing.easeInOutCirc,
                });
            }, 100); // Delay to ensure the scroll is resumed properly
        }, 100); // Delay to ensure the scroll is resumed properly
        gsap.to('.se04_page_bottom',{pointerEvents: 'none'})
    });

    // Only necessary to correct marker position - not needed in production
    if (document.querySelector('.gsap-marker-scroller-start')) {
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

        container.addListener(({ offset }) => {
            gsap.set(markers, { marginTop: -offset.y });
            $('.posNum').html(offset.y);
        });
    }
});