const hideShowNavElements = (nodeLst:NodeListOf<HTMLAnchorElement>,show:boolean)=>{
    for(let index = 0;index<nodeLst.length ;index++){
        if(show){
            nodeLst[index].style.display = "block";
        }else {
            nodeLst[index].style.display = "none";
        }
    }
}
const controlUserInfoPage = ()=>{
 // control user profile menu 
 const normalNavMenu:NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".normalNav");
 const userInfoList:HTMLUListElement = document.querySelector(".userInfoList");
 const profileMenuSecondButton:HTMLButtonElement = document.querySelector(".secondUserInfoControl");

 userInfoList.style.display = "block";
 hideShowNavElements(normalNavMenu,false);

 profileMenuSecondButton.addEventListener("click",()=>{
         hideShowNavElements(normalNavMenu,true);
         userInfoList.style.display = "none"
 });
 
}

export const navMenu = ()=>{
    // control all mobile menu
    let flag = true;
    const menuButton:HTMLButtonElement = document.querySelector(".showNavButton");
    const menu:NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".navLink");
    const userInfoList:HTMLUListElement = document.querySelector(".userInfoList");
    userInfoList.style.display = "none";
    window.addEventListener("resize",()=>{
        if(screen.width > 768){
            hideShowNavElements(menu,true);
        }else {
            hideShowNavElements(menu,!flag);
        }
    })
    window.addEventListener("load",()=>{
        if(screen.width > 768){
            hideShowNavElements(menu,true);
        }else {
            hideShowNavElements(menu,!flag);
        }
    })
    hideShowNavElements(menu,!flag)
    menuButton.addEventListener("click",()=>{
        if(flag){
            menuButton.style.backgroundImage = "url(../src/images/upload.png)";
      
            hideShowNavElements(menu,flag);
        }else {
            hideShowNavElements(menu,flag);
            userInfoList.style.display = "none";
            menuButton.style.backgroundImage = "url(../src/images/arrow-down-sign-to-navigate.png)"
        }
        flag = !flag
    });
    const profileFunction = ()=>{
        controlUserInfoPage();
    };
    // control user info menu 
    if(window.screen.width < 768){
    const profileMenuButton:HTMLButtonElement = document.querySelector(".userinfoControl");
    profileMenuButton.addEventListener("click",profileFunction);
    }else{
        const profileMenuButton:HTMLButtonElement = document.querySelector(".userinfoControl");
         profileMenuButton.removeEventListener("click",profileFunction);
    }
}
   


