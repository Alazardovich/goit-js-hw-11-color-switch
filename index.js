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

  const DEPLOY_TIME = 1000;
  /*переменная для изменения Буля, чтобы остановить или true-запустить button*/
  let hasAction = false;  
  
  onStart.addEventListener('click', onRandomColor);
  onStop.addEventListener('click', offRandomColor);

  let intervalId = null;
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  

  function onRandomColor() {
    if (hasAction){
      return;
    }
    intervalId = setInterval(()=>{
      hasAction = true;
      const randomIdx = randomIntegerFromInterval(0,colors.length -1)
      onBody.style.backgroundColor = colors[randomIdx]

    },1000)
    
  };
    
  function offRandomColor() {
    hasAction = false;
   clearInterval(intervalId); 
  };
