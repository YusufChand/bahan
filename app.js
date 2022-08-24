const links = document.querySelectorAll( ".logo" );
for ( let i = 0; i < links.length; i++ ) {
  const link = links[ i ];
  link.addEventListener( "mouseover", function() {
    document.documentElement.style.setProperty('--bright', "brightness(100%)")
  });
  link.addEventListener( "mouseout", function() {
    document.documentElement.style.setProperty('--bright', "brightness(20%)")
  });
}
const staff1 = document.getElementById('staffimg1');
staff1.addEventListener("mouseover", function() {
  document.getElementById('textstaff1').style.width = "calc(80vh*var(--f)/var(--n))";
  document.getElementById('textstaff1').style.height = "calc(80vh*var(--f)/var(--m))";
})
staff1.addEventListener("mouseout", function() {
  document.getElementById('textstaff1').style.width = "16vw";
  document.getElementById('textstaff1').style.height = "70vh";
})
const staff2 = document.getElementById('staffimg2');
staff2.addEventListener("mouseover", function() {
  document.getElementById('textstaff2').style.width = "calc(80vh*var(--f)/var(--n))";
  document.getElementById('textstaff2').style.height = "calc(80vh*var(--f)/var(--m))";
})
staff2.addEventListener("mouseout", function() {
  document.getElementById('textstaff2').style.width = "16vw";
  document.getElementById('textstaff2').style.height = "70vh";
})
const staff3 = document.getElementById('staffimg3');
staff3.addEventListener("mouseover", function() {
  document.getElementById('textstaff3').style.width = "calc(80vh*var(--f)/var(--n))";
  document.getElementById('textstaff3').style.height = "calc(80vh*var(--f)/var(--m))";
})
staff3.addEventListener("mouseout", function() {
  document.getElementById('textstaff3').style.width = "16vw";
  document.getElementById('textstaff3').style.height = "70vh";
})
const staff4 = document.getElementById('staffimg4');
staff4.addEventListener("mouseover", function() {
  document.getElementById('textstaff4').style.width = "calc(80vh*var(--f)/var(--n))";
  document.getElementById('textstaff4').style.height = "calc(80vh*var(--f)/var(--m))";
})
staff4.addEventListener("mouseout", function() {
  document.getElementById('textstaff4').style.width = "16vw";
  document.getElementById('textstaff4').style.height = "70vh";
})
const staff5 = document.getElementById('staffimg5');
staff5.addEventListener("mouseover", function() {
  document.getElementById('textstaff5').style.width = "calc(80vh*var(--f)/var(--n))";
  document.getElementById('textstaff5').style.height = "calc(80vh*var(--f)/var(--m))";
})
staff5.addEventListener("mouseout", function() {
  document.getElementById('textstaff5').style.width = "16vw";
  document.getElementById('textstaff5').style.height = "70vh";
})