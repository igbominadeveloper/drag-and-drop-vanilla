const handleDragStart = (event) => {
  console.log('dragging now', event);

  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.dropEffect = 'move';

  const childNode = event.currentTarget;
  const parentNode = event.currentTarget.parentNode;
  const object = [
    { sourceNode: JSON.stringify(parentNode) },
    { childNode: JSON.stringify(childNode) },
  ];

  event.dataTransfer.types.push(object);
};

const handleDragEnd = function (event) {
  console.log(this);
};

const handleDragEnter = (event) => event.preventDefault();
const handleDragOver = (event) => event.preventDefault();

const handleDrop = (event) => {
  console.log('drop');
};

const columns = document.querySelectorAll('.column');

columns.forEach((column) => {
  column.addEventListener('dragstart', handleDragStart);
  column.addEventListener('dragend', handleDragEnd);
  column.addEventListener('dragenter', handleDragEnter);
  column.addEventListener('dragover', handleDragOver);
});

const rows = document.querySelectorAll('.row');

rows.forEach(function (row) {
  row.addEventListener('drop', handleDrop);
});
