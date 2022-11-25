const $other_menu = document.querySelectorAll(".other-menu");
const $x_button = document.querySelectorAll(".x");
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
$x_button.forEach((el) => {
    el.addEventListener("click", () => {
        $other_menu.forEach((el) => {
            el.classList.add("hidden");
            $acquista.classList.remove("hover");
            $scopri.classList.remove("hover");
            $aiuto.classList.remove("hover");
        });
    });
});

//EVENTO TASTO ACQUISTA
$acquista.addEventListener("click", () => {
    $other_menu.forEach((el) => {
        if (el != $sub_menu_acquista) {
            el.classList.add("hidden");
            $scopri.classList.remove("hover");
            $aiuto.classList.remove("hover");
        }
    });
    $sub_menu_acquista.classList.toggle("hidden");
    $acquista.classList.toggle("hover");
}
);

//EVENTO TASTO SCOPRI
$scopri.addEventListener("click", () => {
    $other_menu.forEach((el) => {
        if (el != $sub_menu_scopri) {
            el.classList.add("hidden");
            $acquista.classList.remove("hover");
            $aiuto.classList.remove("hover");
        }
    });
    $sub_menu_scopri.classList.toggle("hidden");
    $scopri.classList.toggle("hover");
}
);

//EVENTO TASTO AIUTO
$aiuto.addEventListener("click", () => {
    $other_menu.forEach((el) => {
        if (el != $sub_menu_aiuto) {
            el.classList.add("hidden");
            $acquista.classList.remove("hover");
            $scopri.classList.remove("hover");
        }
    });
    $sub_menu_aiuto.classList.toggle("hidden");
    $aiuto.classList.toggle("hover")
}
);

//EVENTI FUORI DAL DIV
document.addEventListener('mouseup', function (e) {
    if (!$sub_menu_acquista.classList.contains("hidden")) {
        if (!$sub_menu_acquista.contains(e.target)) {
            $sub_menu_acquista.classList.toggle("hidden");
            $acquista.classList.remove("hover");
        }
    }

    if (!$sub_menu_scopri.classList.contains("hidden")) {
        if (!$sub_menu_scopri.contains(e.target)) {
            $sub_menu_scopri.classList.toggle("hidden");
            $scopri.classList.remove("hover");
        }
    }

    if (!$sub_menu_aiuto.classList.contains("hidden")) {
        if (!$sub_menu_aiuto.contains(e.target)) {
            $sub_menu_aiuto.classList.toggle("hidden");
            $aiuto.classList.remove("hover");
        }
    }

    if(!$x_src.contains(e.target)) {
        $mostra_cerca.classList.add("cerca");
        $x_src.classList.add("cerca");
        $search_btn.style.borderBottomRightRadius = "3rem";
        $search_btn.style.borderTopRightRadius = "3rem";
        $search_btn.style.boxShadow = null;
    }
});


