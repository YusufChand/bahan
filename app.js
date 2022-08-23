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
const logohov = document.getElementById('logohov');
logohov.addEventListener("mouseover", function(){
  document.documentElement.style.setProperty('--white', "green")
});
logohov.addEventListener("mouseout", function(){
  document.documentElement.style.setProperty('--white', "white")
});