const $other_menu = document.querySelector(".other-menu");
const $x_button = document.querySelector(".x");
const $search_btn = document.querySelector(".search-btn");
const $mostra_cerca = document.querySelector(".mostra-cerca");
const $x_src = document.querySelector(".x-src");
const $acquista = document.querySelector(".primo");
const $sub_menu_acquista = document.querySelector(".sub-menu-acquista");
const $scopri = document.querySelector(".secondo");
const $sub_menu_scopri = document.querySelector(".sub-menu-scopri");
const $aiuto = document.querySelector(".terzo");
const $sub_menu_aiuto = document.querySelector(".sub-menu-aiuto");
const $src_x_input = document.querySelector(".src-x-input");
const $first_nav = document.querySelector(".first-nav");
const $x900px = document.querySelector(".x900px");

$x900px.addEventListener("click", () => $first_nav.style.display = "none");

//EVENTO TASTO CERCA
$search_btn.addEventListener("click", () => {
    $mostra_cerca.classList.remove("cerca");
    $x_src.classList.remove("cerca");
    $search_btn.style.borderBottomRightRadius = "0";
    $search_btn.style.borderTopRightRadius = "0";
    $search_btn.style.boxShadow = "0 0 500rem 500rem rgba(0, 0, 0, 0.295)";
    $src_x_input.style.zIndex = "2";
});

//EVENTO TASTO X IN CERCA
$x_src.addEventListener("click", () => {
    $mostra_cerca.classList.add("cerca");
    $x_src.classList.add("cerca");
    $search_btn.style.borderBottomRightRadius = " 3rem";
    $search_btn.style.borderTopRightRadius = " 3rem";
    $search_btn.style.boxShadow = null;
    $src_x_input.style.zIndex = null;
});

//EVENTO TASTO X NEI LINK
$x_button.addEventListener("click", () => {
        $other_menu.classList.add("hidden");
        });

//EVENTI TASTI ACQUISTA SCOPRI E AIUTO
function menu(button, menuContainer, menu) {
    button.addEventListener("click", () => {
        if (menuContainer.classList.contains("hidden")){
            menuContainer.classList.toggle("hidden");
        } 
        menu.classList.toggle("hidden");
        button.classList.toggle("hover");
    }
    );
}
menu($acquista, $other_menu, $sub_menu_acquista);

menu($scopri, $other_menu, $sub_menu_scopri);

menu($aiuto, $other_menu, $sub_menu_aiuto);

//EVENTI FUORI DAL DIV

document.addEventListener('mouseup', function (e) {
    function closeMenu(menu, menuContainer, button) {
        if (!menu.classList.contains("hidden")) {
            if (!menu.contains(e.target)) {
                menu.classList.toggle("hidden");
                button.classList.remove("hover");
                menuContainer.classList.toggle("hidden");
            }
        }
    }
    closeMenu($sub_menu_acquista, $other_menu, $acquista);

    closeMenu($sub_menu_scopri, $other_menu, $scopri);

    closeMenu($sub_menu_aiuto, $other_menu, $aiuto);

    if(!$x_src.contains(e.target)) {
        $mostra_cerca.classList.add("cerca");
        $x_src.classList.add("cerca");
        $search_btn.style.borderBottomRightRadius = "3rem";
        $search_btn.style.borderTopRightRadius = "3rem";
        $search_btn.style.boxShadow = null;
    }
});

window.addEventListener("resize", () => {
    if (document.body.clientWidth < 900) {
        $sub_menu_aiuto.classList.add("hidden");
        $other_menu.classList.add("hidden");
        $scopri.classList.add("hover");
        $aiuto.classList.remove("hover");
        $scopri.classList.remove("hover");
        $acquista.classList.remove("hover");
    }
})

