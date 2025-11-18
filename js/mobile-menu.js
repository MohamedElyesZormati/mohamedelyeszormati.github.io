const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const mobileNav = document.getElementById("mobile-nav")

function openMenu()
{
    mobileNav.style.display = "block";
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    document.body.style.overflow = "hidden";
}


function closeMenu()
{
    mobileNav.style.display = "none";
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
    document.body.style.overflow = "visible";
}


menuOpen.addEventListener("click", openMenu);

menuClose.addEventListener("click", closeMenu);
