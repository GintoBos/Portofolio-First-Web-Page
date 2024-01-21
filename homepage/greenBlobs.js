
//animation for the green outline blobA and blobD
const tweenA = KUTE.fromTo(
    '#blobA',
    { path: '#blobA' },
    { path: '#blobD' },
    { repeat: 999, duration: 3000, yoyo: true }
).start();

const tweenD = KUTE.fromTo(
'#blobE',
{ path: '#blobE' },
{ path: '#cuteBlob' },
{ repeat: 999, duration: 3000, yoyo: true }
).start();

const tweenE = KUTE.fromTo(
    '#cutegreenBlob',
    { path: '#cutegreenBlob' },
    { path: '#isuckBlob' },
    { repeat: 999, duration: 3000, yoyo: true }
    ).start();