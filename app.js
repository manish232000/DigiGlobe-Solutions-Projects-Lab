let icon = document.querySelector(".fa-solid ");
let showMenu = document.querySelector("#menubar");
let icon_cross = document.querySelector(".fa-x");
let about_btn =document.querySelector(".about");
let left_section= document.querySelector(".left");

icon.addEventListener("click", ()=>{
        showMenu.classList.add("show");
        icon.style.visibility ="hidden";
        icon_cross.style.visibility ="visible";
    console.log(showMenu);
})

icon_cross.addEventListener("click",()=>{
     
    showMenu.classList.remove("show");
    icon.style.visibility ="visible";
    icon_cross.style.visibility ="hidden";
})

about_btn.addEventListener("click",()=>{
     left_section.style.display ="none";
})