/*!
 * vibrate.js
 * @robin
 * @2017-02-14
 */

;(function(win, vibe) {

  var vibrate = "vibrate" in navigator ? 'vibrate' : "mozVibrate" in navigator ? 'mozVibrate' : undefined;

  if (!vibrate){
    console.warn('your browser is not support Vibration!');
  }
  var vibrateInterval;

  function setDefaultPatterns (pattern) {
    vibe.pattern = pattern;
  }

  // Starts vibration at passed in level
  function startVibrate(duration) {
    if (!vibrate) { return false;}
    duration = duration || vibe.pattern;
    win.navigator[vibrate](duration);
  }

  // Stops vibration
  function stopVibrate() {
    if (!vibrate) { return false;}
    // Clear interval and stop persistent vibrating
    if (vibrateInterval) clearInterval(vibrateInterval);
    win.navigator[vibrate](0);
  }

  // Start persistent vibration at given duration and interval
  // Assumes a number value is given
  function startPeristentVibrate(duration, interval) {
    duration = duration || vibe.pattern;
    interval = interval || 0;
    // 保证振动模式被执行完，所以这里interval被设定为间隙，而不是重头播放的间隔。
    if(duration instanceof Array){
      interval += duration.reduce(function(a, b){ return a + b; }, 0);
    } else if (typeof duration === 'number'){
      interval += duration;
    }
    vibrateInterval = setInterval(function() {
      startVibrate(duration);
    }, interval);
  }

  vibe.setPattern = setDefaultPatterns;
  vibe.once = startVibrate;
  vibe.stop = stopVibrate;
  vibe.loop = startPeristentVibrate;

})(window, window['vibe'] || (window['vibe'] = {}))
