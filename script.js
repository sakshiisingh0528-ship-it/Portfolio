// smooth scroll
document.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("href")?.startsWith("#")) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});
