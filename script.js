document.addEventListener("DOMContentLoaded", () => {
    const updateView = () => {
        let reg = document.querySelector(location.hash) ? location.hash : "#home";
        document.querySelectorAll("#container > div").forEach(div => div.classList.toggle("hide", div.id !== reg.substring(1)));
        document.querySelectorAll(".main-menu a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === reg));
    };

    window.addEventListener("hashchange", updateView);
    updateView();
});