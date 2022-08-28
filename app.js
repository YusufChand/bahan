window.onresize=screen;
window.onload=screen;
function screen(){
  myWidth = window.innerWidth;
  document.getElementById("size").innerHTML=myWidth;
}



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

const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.parent');

function PageTransitions(){
    for(let i = 0; i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    allSections.addEventListener('click',(e) =>{
        const id = e.target.dataset.id;
        if(id){
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //theme//
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

// upper content //
function appear(){
  document.getElementById('appearcontrol').style.display="block";
}

PageTransitions();