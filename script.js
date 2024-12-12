const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks)
let scale = 0; // Starting scale value


const nav=document.querySelectorAll('nav')
 
// const options = {
//     // root: null, // Use the viewport as the container
//     root:null,
//     threshold: 1 // 
// };

// const callback = (entries) => {
    
//     entries.forEach(entry => {
//         const index = [...sections].indexOf(entry.target);
        
//         if (entry.isIntersecting) {
//             console.log(entry.isIntersecting)
//             // Remove active class from all links
//             navLinks.forEach(link => link.classList.remove('active'));
//             // Add active class to the current link
//             navLinks[index].classList.add('active');
           
//         }
//     });
// };

// const observer = new IntersectionObserver(callback, options);

// sections.forEach(section => {
    
//     observer.observe(section);
// });
// window.addEventListener("scroll", (event) => {
//     let scroll = this.scrollY;
//     console.log(scroll)
//     if(scroll >=0 && scroll===1240){
//         // navLinks.forEach(link=>link.classList.remove('active'));
//        console.log( navLinks[0])
//        navLinks[0].classList.add('active')

//     }
//     else if(scroll >=1240 && scroll===2400){
//         // navLinks.forEach(link=>link.classList.remove('active'));
//         navLinks[1].classList.add('active')

//     }
//     else if(scroll >=2400 && scroll ===3000){
//         // navLinks.forEach(link=>link.classList.remove('active'));
//         navLinks[2].classList.add('active')

//     }
//     else{
//         // navLinks.forEach(link=>link.classList.remove('active'));

//     }

    
// });

window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY; // Use window.scrollY directly
    console.log(scroll);

    // Remove 'active' class from all nav links
    navLinks.forEach(link => link.classList.remove('active'));
    //   // Get the current scroll position
    //   let currentScroll = window.scrollY;

    //   // Calculate the new scroll position
    //   let newScroll = currentScroll;

    //   // Set scroll speed (change the value for slower or faster)
    //   const speed = 0.1; // Lower value for slower scroll

    //   // Smooth the scroll position
    //   let scrollStep = (newScroll - currentScroll) * speed;
    //   window.scrollTo(0, currentScroll + scrollStep);

    //   // Stop event bubbling
    //   event.preventDefault();
    const line = document.getElementById('line');
    const scrollPosition = window.scrollY; // Get the current vertical scroll position
    const maxHeight = document.body.scrollHeight - window.innerHeight; // Maximum scroll length

    // Calculate the new height based on the scroll position, limit to max height
    const newHeight = Math.min(scrollPosition, maxHeight); // Maximum height of the line is capped to maxHeight
   
    
        line.style.height =  scrollPosition*0.1 + 'px';
    
    

    if (scroll >= 0 && scroll < 1240) {
        navLinks[0].classList.add('active');
        
     
        
    } else if (scroll >= 1240 && scroll < 2400) {
        navLinks[1].classList.add('active');
    } else if (scroll >= 2400 && scroll < 3000) {
        navLinks[2].classList.add('active');
    }
});

