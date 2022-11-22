const $other_menu = document.querySelectorAll(".other-menu");
const $x_button = document.querySelectorAll(".x");
const $search_btn = document.querySelector(".search-btn");
const $mostra_cerca = document.querySelector(".mostra-cerca");
const $x_src = document.querySelector(".x-src");

$search_btn.addEventListener("click", () => {
    $mostra_cerca.classList.remove("cerca");
    $x_src.classList.remove("cerca");
});


$x_src.addEventListener("click", () => {
    $mostra_cerca.classList.add("cerca");
    $x_src.classList.add("cerca");
});

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


const $acquista = document.querySelector(".primo");
$acquista.addEventListener("click", () => {
    const $sub_menu_acquista = document.querySelector(".sub-menu-acquista");
    $other_menu.forEach((el) => {
        if (el != $sub_menu_acquista) {
            el.classList.add("hidden");
            $scopri.classList.remove("hover");
            $aiuto.classList.remove("hover");
        }
    });
    $sub_menu_acquista.classList.toggle("hidden");
    $acquista.classList.toggle("hover")
}
);

const $scopri = document.querySelector(".secondo");
$scopri.addEventListener("click", () => {
    const $sub_menu_scopri = document.querySelector(".sub-menu-scopri");
    $other_menu.forEach((el) => {
        if (el != $sub_menu_scopri) {
            el.classList.add("hidden");
            $acquista.classList.remove("hover");
            $aiuto.classList.remove("hover");
        }
    });
    $sub_menu_scopri.classList.toggle("hidden");
    $scopri.classList.toggle("hover")
}
);

const $aiuto = document.querySelector(".terzo");
$aiuto.addEventListener("click", () => {
    const $sub_menu_aiuto = document.querySelector(".sub-menu-aiuto");
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


