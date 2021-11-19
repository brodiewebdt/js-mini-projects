



function randomColor(red, green, blue) {
    // const colorCode = 'rgb(' + [red,green,blue].join(',') + ')';
    const colorCode = rgbToHex(red, green, blue);
    document.querySelector('body').style.backgroundColor = colorCode;
    document.querySelector('#rgb-color-code').textContent = colorCode;

    console.log(rgbToHex(red, green, blue));
  
  }
  function getColor() {
    let red = Math.floor( Math.random()* 255) + 1
    let green = Math.floor( Math.random()* 255) + 1
    let blue = Math.floor( Math.random()* 255) + 1
    
    randomColor(red, green, blue)

  }

  
  function componentToHex(color) {
    let hex = color.toString(16);
    // return hex.length == 1 ? "0" + hex : hex;
    return hex;
  }
  
  function rgbToHex(red, green, blue) {
    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
  }
  
  // console.log(rgbToHex(red, green, blue)); // #0033ff
  
  