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

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked=true;
  counter++;
  if(counter>4){
    counter=1;
  }
},5000);