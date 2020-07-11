let screenHeight = window.innerHeight;
let offPerc = 15;
let offset = screenHeight / 100 * offPerc;

const $navI = document.querySelectorAll('.fas');
console.log($navI);

$navI.forEach((icon, index) => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        let y = screenHeight * index;
        console.log(y);
        if(y > 0) {
            if (offset < 20) {
                offset = 20;
            }
            y = y - offset +2;
            
        }
        window.scrollTo(0, y);
    })
})


const scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60);
};

function loopHere() {
    const scrollOff = window.scrollY;
    const allSections = document.querySelectorAll('section');
    // screenHeight = window.screenY;
    offset = screenHeight / 100 * offPerc;
    if (offset < 20) {
        offset = 20;
    }
    // console.log(offset)
    $navI.forEach(icon => {
        icon.classList.remove('active-i');
    });
    allSections.forEach((section, index) => {
        if(section.offsetTop - offset >= scrollOff) {
            $navI[index].classList.add('active-i');
        }
    });
    scroll(loopHere);
}

loopHere();
