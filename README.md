# vibrate.js
A lightweight，non-dependent vibrate library for javascript


### use

#### setPattern
// set default vibrate pattern;
// Vibrate 'SOS' in Morse.
// vibe.setPattern([pattern]);
vibe.setPattern([1000,300,1000,300,1000,2000,2000,300,2000,300,2000,2000,1000,300,1000,300,1000]);
or
vibe.setPattern(200);

// run vibrate once; if no arg, it will get the default pattern;
// vibe.once([pattern]);
vibe.once(200);// vibrate for 200ms

// stop the vibrate anytime;
vibe.stop();

// run vibrate loop with gap; if no arg, it will get the default pattern;
// vibe.loop([pattern, interval]);
vibe.loop([1000, 100, 300], 100);

### create vibration patterns

[vibe.js tool](https://naschq.github.io/vibe.js/) by [felipenmoura](https://github.com/felipenmoura)
