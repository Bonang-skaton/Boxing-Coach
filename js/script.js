// typing animation
var typed = new Typed(".typing", {
  strings: ["", "Boxing Coach", "Boxer Manager", "Boxing event security officers", "Boxing Therapist"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})
// ============ aside baru=========
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) 
  {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for(let j = 0; j<totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active")
  })
}




// show elemen
function showSection(element) 
{
  for(let i=0; i<totalSection; i++) {
    allSection[i].classList.remove("active");
  }
   const target = element.getAttribute("href").split("#")[1];
   document.querySelector("#" ,target).classList.add("active")
}