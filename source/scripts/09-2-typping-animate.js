const dottedAnimate = () => {
  let currentCount = 0;
  let weigth = 700;

  return function() {
    const dottes = searchElements('span')
    
    dottes[currentCount].style.fontWeight = weigth;
    
    if( currentCount >= dottes.length-1 ) {
      currentCount = currentCount - dottes.length;
      
      if( weigth === 700 ) { 
        weigth = 400;
      } else weigth = 700;
    }

    return currentCount++;
  }
}

const typping = dottedAnimate();
