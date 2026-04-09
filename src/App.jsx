import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef();
  const mainRef = useRef();

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {type: 'chars, words'});
    gsap.set(".animation-showup", {opacity: 0, y: "+=25"});
    gsap.set(heroSplit.chars, {opacity: 0, yPercent: 100});
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".animation-showup",  {opacity: 1, y: "-=25", duration: 1});
        gsap.to(heroSplit.chars, {opacity: 1, yPercent: 0, duration: 1, ease: "expo.out", stagger: .06})
        ScrollTrigger.refresh();
      }
    });

    tl.fromTo("#welcoming-text", {opacity: 0}, {opacity: 1, delay: .5, duration: 2})
    .to("#welcoming-text", {scale: 1.5, duration: 1, ease: "power1.inOut"})
    .to("#welcoming-text", {y: "110vh", delay: .5, duration: 1, ease: "power2.out"})
    .fromTo(".navbar-container", {y: "+=25"}, {opacity:1, y: "-=25", delay: .25, duration: 1})
    .to(".welcoming-container", {opacity: 0, duration: 1, onComplete: () => {gsap.set(".welcoming-container", {display: "none"})}}, "<");

    gsap.from(mainRef.current, {
      scale: .5,
      y: "110vh",
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=600",
        scrub: 1,
        markers: true
      }
    })
    gsap.to(heroRef.current, {
      x: "210vh",
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=600",
        scrub: 1,
      }
    })
  }, [])

  return (
    <div className="h-[200vh] w-full bg-dark text-light font-serif">
      <div className="welcoming-container min-h-screen w-full bg-dark fixed z-50 flex justify-center items-center text-2xl font-sans">
        <p id="welcoming-text">Get Ready!!</p>
      </div>
      <Navbar />
      <div className="fixed z-48" ref={heroRef}>
        <Hero />
      </div>
      <div className="fixed z-47" ref={mainRef}>
        <Main/>
      </div>
    </div>
  )
}

export default App
