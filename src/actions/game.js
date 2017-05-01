export function changeMode(mode) {
  return mode
}

export function flick(light) {
  return light
}

export function info() {
  setTimeout(() => {
    scrollTo(document.body, document.body.scrollHeight, 500);
  }, 500)
  return
}

export function reset() {
  return
}

export function settings() {
  return
}

function scrollTo(element, to, duration) {
  let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;
      
  function animateScroll(){        
    currentTime += increment;
    let val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

Math.easeInOutQuad = function(t, b, c, d) {
  t /= d/2;
	if (t < 1) return (c/2) * t * t + b;
	t--;
	return -c/2 * (t * (t - 2) - 1) + b;
};