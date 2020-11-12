const handleDragStart = (event) => {
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.dropEffect = 'move';

  const childNode = event.currentTarget;
  const parentNode = event.currentTarget.parentNode;

  event.dataTransfer.setData('columnToMove', JSON.stringify(childNode));
  event.dataTransfer.setData('sourceRow', JSON.stringify(parentNode));
  // get the row class element closest to this element
  // remove it from it
};

const handleDragEnd = (event) => {
  console.log('dropping now', event);
};

const columns = document.querySelectorAll('.column');

columns.forEach((column) => {
  column.addEventListener('dragstart', handleDragStart);
  column.addEventListener('dragend', handleDragEnd);
});
