
(function() {
  
  var aSrcs = [];

  var count = 0;
  
  function printResult() {
    var str = '';
    aSrcs.forEach((item, idx) => {
       str += '<p><img src="'+item+'"/></p>\n';              
    });
    console.log(str);
  }
  
  function getPhotos() {
    var nextButton = document.querySelector('.coreSpriteRightPaginationArrow')  
    var imgSrc = document.querySelector('[role="dialog"] article > div img').src;
    
    aSrcs.push(imgSrc);
    
    if(nextButton) {
      nextButton.click();
    } else {
      printResult();
      return;
    } 
    count++;
    
    if(count < 100) {
      setTimeout(() => {
        getPhotos();
      }, 1500);
    } else {
      printResult();
    }
  }
  
  getPhotos();
  
})()

