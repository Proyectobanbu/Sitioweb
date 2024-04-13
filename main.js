const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const exitMenu = document.getElementById("exit-menu");
const itemsMenu = document.getElementById("items-menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

exitMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

const menuLiItems = itemsMenu.children;

for (let index = 0; index < menuLiItems.length; index++) {
    const element = menuLiItems[index];
    element.addEventListener("click", () => {
        menu.classList.toggle("active");
        switch(index){
            case 0: 
            window.location = "#cucharas"
            break;
            case 1:
                window.location = "#tenedores"
            break;
            default:
                window.location = "#cucharas"
            break;
        }
    })
}