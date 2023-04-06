

function myfunction()
{
    
 
   document.getElementById('navscroll').classList.add('nav-bar-sticky')
}

window.addEventListener('scroll', () => {
    if (window.scrollY >800) myfunction();
  }, true);

  
function yourFunction() {
   
    document.getElementById('navscroll').classList.remove('nav-bar-sticky')
  }
  


  window.addEventListener('scroll', () => {
    if (window.scrollY == 0) yourFunction();
  }, true);


