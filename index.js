const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const onStart = document.querySelector('button[data-action="start"]');
  const onStop = document.querySelector('button[data-action="stop"]');
  const onBody = document.body;
  console.log(onBody);
  onStart.addEventListener('click', onRandomColor);

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function onRandomColor() {
    colors.forEach((color) => {
      document.body.style.background = color[randomIntegerFromInterval]; 
    })
    
  }