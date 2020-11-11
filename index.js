window.addEventListener('dragstart', (event) => {
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.dropEffect = 'move';
  // get the row class element closest to this element
  // remove it from it
});

window.addEventListener('dragend', (event) => {
  console.log('dropping now', event);
});
