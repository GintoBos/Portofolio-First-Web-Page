const tween = KUTE.fromTo( //animation of the center blob
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, duration: 3000, yoyo: true }
).start();

const tween1 = KUTE.fromTo( //the left blob
    '#blob3',
    { path: '#blob3' },
    { path: '#blob4' },
    { repeat: 999, duration: 3000, yoyo: true }
).start();

const tween2 = KUTE.fromTo( // the right blob
    '#blob5',
    { path: '#blob5' },
    { path: '#blob6' },
    { repeat: 999, duration: 3000, yoyo: true }
).start();

