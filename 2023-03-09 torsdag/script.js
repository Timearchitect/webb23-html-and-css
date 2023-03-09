function toggleNavbar() {
    let navObject = document.getElementsByTagName("ul");
    if (navObject[0].style.display == "none") // == jämnför med ul style display om den är "none"
        navObject[0].style.display = "block"; // sätt display till block 
    else 
        navObject[0].style.display = "none";  // sätt display till none
}
