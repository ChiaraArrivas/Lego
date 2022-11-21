const $acquista = document.querySelector(".primo");
$acquista.addEventListener("click", () => {
    const $sub_menu_acquista = document.querySelector(".sub-menu-acquista")
    $sub_menu_acquista.classList.toggle("hidden");
    $acquista.classList.toggle("hover")
}
);

const $scopri = document.querySelector(".secondo");
$scopri.addEventListener("click", () => {
    const $sub_menu_scopri = document.querySelector(".sub-menu-scopri")
    $sub_menu_scopri.classList.toggle("hidden");
    $scopri.classList.toggle("hover")
}
);

const $aiuto = document.querySelector(".terzo");
$aiuto.addEventListener("click", () => {
    const $sub_menu_aiuto = document.querySelector(".sub-menu-aiuto")
    $sub_menu_aiuto.classList.toggle("hidden");
    $aiuto.classList.toggle("hover")
}
);

