document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('from');
    const header = document.getElementById("main-header");
    const icontag = document.createElement("link");

    icontag.rel = "icon";
    icontag.type = "image/x-icon";

    if (ref) {
        if (ref.toLowerCase() === "vrchat") {
            header.innerHTML = "VRChat Info (More about me)";
            icontag.href = './icons/vrchat.ico';
        } else if (ref.toLowerCase() === "discord") {
            header.innerHTML = "Discord Info (More about me)";
            icontag.href = './icons/discord.ico';
        } else if (ref.toLocaleLowerCase() === "website") {
            header.innerHTML = "About Me!";
            icontag.href = './icons/website.ico';
        }
    }
    document.head.appendChild(icontag);
});