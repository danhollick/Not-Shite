(function() {
  'use strict';

  var section = document.querySelectorAll(".reveal");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition + 65) {
        document.querySelector('.fade-in-element').setAttribute('class', '');
        // document.querySelector('#'+ i +'Indicator').removeAttribute( 'hidden');
        document.querySelector('#'+ i +'Indicator').setAttribute('class', 'fade-in-element');
      }
    }
  };
})();


  