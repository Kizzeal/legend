
// const eachPick = document.querySelector(".category")

// picks.forEach(pick => {
  //   pick.addEventListener("mouseover", ()=>{
    //     pick.childNodes[1].classList.add("active");
    
    //   })
    //   pick.addEventListener("mouseout", ()=>{
      //     pick.childNodes[1].classList.remove("active");
      
      //   })
      // })
      
      
const picks = document.querySelectorAll(".category");
      picks.forEach(pick => {
  pick.addEventListener("click", (e)=>{
    pick.classList.add("active");

  //   setTimeout( ()=>{
  //     pick.classList.remove("active")
  // }, 2000)

    console.log(e.target.childNodes)
  })

  pick.addEventListener("mouseout", (e)=>{
    setTimeout( ()=>{
      pick.classList.remove("active")
  }, 2000)

    console.log(e.target.childNodes)
  })

})

// const currentLocation = location.href;
// const picks = document.querySelectorAll(".category");
// const picksLength = picks.length;

// for (let i = 0; i < picksLength; i++) {
//   if (picks[i].href === currentLocation) {
//     picks[i].className = "active"
//   }
// }


// const picks = document.getElementsByClassName("category")
// const picksLength = picks.length;


// for(var i = 0; i < picksLength; i++) {
//   picks[i].addEventListener('click', function (){
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace("active");
//     this.className += "actve";


//     console.log("works")
//   })
// }

window.addEventListener("scroll", ()=>{
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})


const navigationHeight = document.querySelector('header').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 10 + "px");

console.log(navigationHeight)