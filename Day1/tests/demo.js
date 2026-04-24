import { debounce, throttle } from "../src/index.js";

const debouncedFn = debounce(() => {
  console.log("Debounced call");
}, 3000);

const throttledFn = throttle(() => {
  console.log("Throttled call");
}, 1000);

/* Simulate rapid calls */
let count = 0;

const interval = setInterval(() => {
  count++;
  console.log("Calling other functions...", count);

  debouncedFn();
  throttledFn();

  if (count === 70) {
    clearInterval(interval);
  }
}, 200);
