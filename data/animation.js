import { gsap } from 'gsap';
import { SplitText } from 'gsap/dist/SplitText';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const LogoAnimate = (ref) => {
  gsap.fromTo(
    ref,
    { autoAlpha: 0, y: '-200%' },
    { autoAlpha: 1, y: '0', duration: 0.7, delay: 0.5, ease: 'power1.inOut' }
  );
};

export const NavAnimate = (ref) => {
  gsap.fromTo(
    ref,
    { autoAlpha: 0, y: '-200%' },
    {
      autoAlpha: 1,
      y: '0',
      duration: 0.6,
      delay: 0.8,
      ease: 'power1.inOut',
      stagger: 0.05,
    }
  );
};

export const LandingAnimation = (ref1, ref2) => {
  document.fonts.ready.then(() => {
    const childSplit = new SplitText(ref2, {
      type: 'lines',
      linesClass: 'split-child',
    });
    const parentSplit = new SplitText(ref2, {
      type: 'lines',
      wordClass: 'split-parent',
    });

    const landingTL = gsap.timeline();

    landingTL
      .fromTo(
        ref1,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1, delay: 0.2, ease: 'power3.inOut' }
      )
      .from(
        childSplit.lines,
        {
          duration: 1,
          yPercent: 150,
          ease: 'power2.inOut',
          autoAlpha: 0,
          stagger: 0.07,
        },
        '-=0.3'
      );
  });
};

export const FadeInAnimation = (ref, delay) => {
  gsap.fromTo(
    ref,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.8, delay: delay, ease: 'Power2.inOut' }
  );
};

export const ProjectHeaderAnimation = (refs) => {
  document.fonts.ready.then(() => {
    const childSplit = new SplitText(refs[0], {
      type: 'lines',
      linesClass: 'split-child',
    });
    const parentSplit = new SplitText(refs[0], {
      type: 'lines',
      linesClass: 'split-parent',
    });

    const projectHeaderTL = gsap.timeline();

    projectHeaderTL
      .from(childSplit.lines, {
        duration: 1,
        yPercent: 100,
        ease: 'power2.inOut',
        autoAlpha: 0,
        stagger: 0.1,
      })
      .fromTo(
        refs[1],
        { autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1.2, ease: 'power1.inOut' },
        '-=0.2'
      );
  });
};

export const ProjectModernInfoAnimation = (ref) => {
  document.fonts.ready.then(() => {
    const childSplit = new SplitText(ref, {
      type: 'words, lines',
      linesClass: 'split-child',
    });
    const parentSplit = new SplitText(ref, {
      type: 'lines',
      linesClass: 'split-parent',
    });

    gsap.from(childSplit.words, {
      duration: 0.7,
      yPercent: 100,
      ease: 'power2.Out',
      autoAlpha: 0,
      stagger: 0.02,
      scrollTrigger: {
        trigger: childSplit.words,
        start: 'top bottom-=5%',
        toggleActions: 'restart none none reset',
      },
    });
  });
};

export const ProjectDetailsModernAnimation = (ref1, ref2) => {
  gsap.from(ref1, {
    duration: 1,
    yPercent: 100,
    ease: 'power2.inOut',
    autoAlpha: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ref1,
      start: 'top bottom',
      toggleActions: 'restart none none reset',
    },
  });
};

export const pageScrollAnimation = (ref) => {
  document.fonts.ready.then(() => {
    ref.forEach((item) => {
      const childSplit = new SplitText(item, {
        type: 'words',
        linesClass: 'split-child',
      });
      const parentSplit = new SplitText(item, {
        type: 'words',
        linesClass: 'split-parent',
      });

      gsap.from(childSplit.words, {
        duration: 1,
        yPercent: 100,
        ease: 'power2.inOut',
        autoAlpha: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: childSplit.words,
          start: 'top bottom-=10%',
        },
      });
    });
  });
};
