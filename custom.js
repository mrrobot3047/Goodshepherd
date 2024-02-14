document.querySelectorAll('.menu-toggle').forEach(function(element) {
    element.addEventListener('click', function() {
      document.querySelector(".nav").classList.toggle("mobile-nav");
      this.classList.toggle("is-active");
    });
  });

function setContainerMaxWidth() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var container = document.querySelector('.container');
    if (screenWidth >= 992) {
        container.style.maxWidth = '960px';
    } else if (screenWidth >= 768) {
        container.style.maxWidth = '826px';
    }
    else if(screenWidth>=567){
        container.style.maxWidth = '704px';
    } else {
        container.style.maxWidth = ''; 
    }
}
setContainerMaxWidth();
window.addEventListener('resize', setContainerMaxWidth);

window.addEventListener('scroll', function () {
    var header = document.querySelector('.nav-wrapper');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

