(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
            if(element.classList.contains('btn-primary')){
                element.classList.add('slideIn');
                element.classList.remove('hidden')
            }
            if(element.classList.contains('pic-container')){
                element.classList.add('slideIn');
                element.classList.remove('hidden');
            } 
            if(element.classList.contains('about-par')){
                element.classList.add('slideIn2');
                element.classList.remove('hidden');
            }
            if(element.classList.contains('skill')){
                element.classList.add('elongate');
                element.classList.remove('hidden');
            }
            if(element.classList.contains('project-container')){
              element.classList.add('slideIn');
              element.classList.remove('hidden');
          }

        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();
  
  