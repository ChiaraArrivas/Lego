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
const $tema = document.getElementById("tema");
const $eta = document.getElementById("eta");
const $prezzi = document.getElementById("prezzi");
const $merchandising = document.getElementById("merchandising");
const $interessi = document.getElementById("interessi");
const $pickBuild = document.getElementById("pick-build");
const $valori = document.getElementById("valori");
const $app = document.getElementById("app");
const $riviste = document.getElementById("riviste");
const $setTema = document.querySelector(".set-per-tema");
const $subEta = document.querySelector(".sub-eta");
const $subPrezzi = document.querySelector(".sub-prezzi");
const $subMerchandising = document.querySelector(".sub-merchandising");
const $subInteressi = document.querySelector(".sub-interessi");
const $subPickBuild = document.querySelector(".subPickBuild");
const $subValori = document.querySelector(".sub-valori");
const $subApp = document.querySelector(".sub-app");
const $subRiviste = document.querySelector(".sub-riviste");
const $subSubMenu = document.querySelectorAll(".sub-sub-menu");

$tema.addEventListener("click", () => {
    $subSubMenu.forEach(el => {
        if (el != $setTema) {
            el.classList.add("none")
        }
    });
    $setTema.classList.toggle("none")
})
$eta.addEventListener("click", () => {
    $subSubMenu.forEach(el => {
        if (el != $subEta) {
            el.classList.add("none")
        }
    });
    $subEta.classList.toggle("none")
})
$prezzi.addEventListener("click", () => {
    $subSubMenu.forEach(el => {
        if (el != $subPrezzi) {
            el.classList.add("none")
        }
    });
    $subPrezzi.classList.toggle("none")
})
$merchandising.addEventListener("click", () => {
    $subSubMenu.forEach(el => {
        if (el != $subMerchandising) {
            el.classList.add("none")
        }
    });
    $subMerchandising.classList.toggle("none")
})
$interessi.addEventListener("click", () => {
    $subSubMenu.forEach(el => {
        if (el != $subInteressi) {
            el.classList.add("none")
        }
    });
    $subInteressi.classList.toggle("none")
})
$pickBuild.addEventListener("click", () => {
    $subSubMenu.forEach(el => {
        if (el != $subPickBuild) {
            el.classList.add("none")
        }
    });
    $subPickBuild.classList.toggle("none")
})
$valori.addEventListener("click", () => {
    $subSubMenu.forEach(el => {
        if (el != $subValori) {
            el.classList.add("none")
        }
    });
    $subValori.classList.toggle("none")
})
$app.addEventListener("click", () => {
    $subSubMenu.forEach(el => {
        if (el != $subApp) {
            el.classList.add("none")
        }
    });
    $subApp.classList.toggle("none")
})
$riviste.addEventListener("click", () => {
    $subSubMenu.forEach(el => {
        if (el != $subRiviste) {
            el.classList.add("none")
        }
    });
    $subRiviste.classList.toggle("none")
})



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
        $subSubMenu.forEach(el => el.classList.add("none"));
        if (menuContainer.classList.contains("hidden")) {
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

    if (!$x_src.contains(e.target)) {
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

