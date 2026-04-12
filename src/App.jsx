import Hero from "./components/Hero";
import SectionIndicator from "./components/SectionIndicator";
import Main from "./components/Main";
import Work from "./components/Work";
import gsap from "gsap";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { isDesktop, isMobile } from "react-device-detect";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [workText, setWorkText] = useState("Made/Making This");

  const heroRef = useRef();
  const mainRef = useRef();
  const workRef = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add({
      isMobile: "(max-width: 767px)",
      isDesktop: "(min-width: 768px)"
    }, (context) => {
      let {isMobile} = context.conditions;

      const workInTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "2400 top",
          end: "+=800",
          scrub: 1,
        }
      })

      
      // Main out, Work in
      workInTl
        .fromTo(mainRef.current, {scale: 1}, {scale: .9})
        .fromTo(".section-indicator-container", {xPercent: 0}, {xPercent: 150}, "<")
        .to(".can-text", {opacity: .6, paddingRight: 0}, "<")
        .fromTo(mainRef.current, {filter: "blur(0px)"}, {filter: "blur(10px)"}, "<")
        .fromTo(".work-text", {clipPath: "inset(50% 0 50% 0)"}, {clipPath: isMobile? "inset(45% 0 45% 0)" : "inset(40% 0 40% 0)"}, "<")
        .from(workRef.current, {xPercent: 150}, "<.3")  
    })

    const heroSplit = new SplitText(".title", {type: 'chars, words'});
    gsap.set(".animation-showup", {opacity: 0, y: "+=25"});
    gsap.set(heroSplit.chars, {opacity: 0, yPercent: 100});

    // Intro
    const introTl = gsap.timeline();

    introTl
    .fromTo("#welcoming-text", {opacity: 0}, {opacity: 1, delay: .5, duration: 2})
    .to("#welcoming-text", {scale: 1.5, duration: 1, ease: "power1.inOut"})
    .to("#welcoming-text", {y: "100vw", delay: .5, duration: 1, ease: "power2.out"})
    .fromTo(".section-indicator-container", {y: "+=25"}, {opacity:1, y: "-=25", delay: .25, duration: 1})
    .to(".welcoming-container", {opacity: 0, duration: 1, onComplete: () => {gsap.set(".welcoming-container", {display: "none"})}}, "<")
    .to(heroSplit.chars, {opacity: 1, yPercent: 0, duration: 1, ease: "expo.out", stagger: .06}, "<")
    .to(".animation-showup",  {opacity: 1, y: "-=25", duration: 1}, "<");

    // Hero out, Main in
    const mainInTl = gsap.timeline({
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=800",
        scrub: 1
      }
    })

    mainInTl
      .fromTo(mainRef.current, {clipPath: "circle(0% at 50% 50%)", scale: .25, y: "100vh"}, {clipPath: "circle(100% at 50% 50%)", scale: 1, y:0})
      .to(heroRef.current, {x: "200vw"}, "<")
      .to(".overlay-white", {opacity: 0}, "<")
      .to(".is-text", {opacity: 1, paddingRight: 40}, "<")
      .from(".is-container", {x: "-100vw"}, "<0.1");
      
    // been/being here
    const hereTl = gsap.timeline({
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: document.body,
        start: "800 top",
        end: "+=800",
        scrub: 1,
      }
    })

    hereTl
      .from(".here-card-container", {opacity: 0, xPercent: -50, stagger: .05})
      .to(".is-text", {opacity: .6, paddingRight: 0}, "<")
      .to(".here-text", {opacity: 1, paddingRight: 40}, "<")
      .from(".here-card-text", {opacity: 0, yPercent: 50, stagger: .05}, "<.2");
      
      // can do this
      const canTl = gsap.timeline({
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: document.body,
          start: "1600 top",
          end: "+=800",
          scrub: 1,
        }
      })
      
    canTl
      .from(".skill-card-container", {opacity: 0, xPercent: -50, stagger: .05})
      .to(".here-text", {opacity: .6, paddingRight: 0}, "<")
      .to(".can-text", {opacity: 1, paddingRight: 40}, "<")
      .from(".skill-card-text", {opacity: 0, yPercent: 50, stagger: .05}, "<.2");
    
    // work scroll
    const workTl = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "3200 top",
        end: "+=1600",
        scrub: 1,
        onUpdate: (self) => {
          if (self.progress > .01) {
            setWorkText("Thank You!")
          } else {
            setWorkText("Made/Making This")
          }
        }
      }
    })

    workTl
      .to(".work-container", {xPercent: -100})
      .to(mainRef.current, {opacity: 0, duration: .05}, "<")

    return () => mm.revert();
  }, [])

  return (
    <div className="h-[800vh] w-full bg-dark text-light font-serif">
      <div className="welcoming-container min-h-screen w-full bg-dark fixed z-51 flex justify-center items-center text-2xl font-sans">
        <p id="welcoming-text">Get Ready!!</p>
      </div>
      <SectionIndicator />
      <div className="fixed z-47" ref={heroRef}>
        <Hero />
      </div>
      <div className="fixed z-48" ref={mainRef}>
        <div className="overlay-white absolute h-full w-full scale-200 bg-light"></div>
        <Main />
      </div>
      <div className="work-text min-h-screen w-full bg-light fixed z-49 font-sans font-bold lg:text-8xl text-4xl text-dark flex justify-center items-center">
        {workText}
      </div>
      <div className="fixed z-50" ref={workRef}>
        <Work />
      </div>
    </div>
  )
}

export default App
