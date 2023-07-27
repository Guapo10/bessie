const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;
  
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
    const scrollDuration = 800; // Adjust the duration of scrolling (in milliseconds)
  
    const startTime = performance.now();
    const scrollStep = (timestamp) => {
      const currentTime = timestamp - startTime;
      const progress = Math.min(currentTime / scrollDuration, 1);
  
      window.scrollTo(0, window.pageYOffset + progress * (offsetTop - window.pageYOffset));
  
      if (currentTime < scrollDuration) {
        requestAnimationFrame(scrollStep);
      }
    };
  
    requestAnimationFrame(scrollStep);
  };
  
  export default smoothScrollTo;
  