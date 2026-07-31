$(document).ready(function () {
            const $slides = $(".partner-logo-slide");
            const cloneCount = 3;
            for (let i = 0; i < cloneCount; i++) {
                $slides.children().clone(true).appendTo($slides);
            }
        });

        // Lógica del botón "Volver arriba"
        const backToTopBtn = document.getElementById("backToTop");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    </script>

    <script>
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://api.helpdesk.icu/widget2/load?id=b248d1b5-317e-3e0d-a6db-c255c207060b&r=' + encodeURIComponent(window.location);
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'anw2-sdk-tdFIsn4xDT6m28JVwgcGCw'));
