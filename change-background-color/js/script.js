



function randomColor(red, green, blue) {
    const colorCode = 'rgb(' + [red,green,blue].join(',') + ')';
    document.querySelector('body').style.backgroundColor = colorCode;
    document.querySelector('#rgb-color-code').textContent = colorCode;
  
  }
  function getColor() {
    let red = Math.floor( Math.random()* 255) + 1
    let green = Math.floor( Math.random()* 255) + 1
    let blue = Math.floor( Math.random()* 255) + 1
    
    randomColor(red, green, blue)
  }
  
  
  
  