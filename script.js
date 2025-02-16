document.addEventListener("DOMContentLoaded", function () {
    function updateView() {
        var region = location.hash || "#home"; 
        
        if (!document.querySelector(region)) {
            region = "#home";
        }

        document.querySelectorAll("#container > div").forEach(div => div.classList.add("hide"));
        document.querySelector(region).classList.remove("hide");

        document.querySelectorAll(".main-menu a").forEach(a => a.classList.remove("active"));
        document.querySelector(`.main-menu a[href="${region}"]`)?.classList.add("active");
    }

    window.addEventListener("hashchange", updateView);
    updateView();
});