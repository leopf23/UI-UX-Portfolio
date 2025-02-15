window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    if (window.scrollY > 0) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });
  
  

