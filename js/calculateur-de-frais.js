document.addEventListener("DOMContentLoaded", () => {
    // Sélecteurs principaux
    const websiteType = document.getElementById("website-type");
    const additionalPages = document.getElementById("additional-pages");
    const multilingual = document.getElementById("multilingual-website");
    const seo = document.getElementById("seo");
    const domainName = document.getElementById("domain-name");
    const webHosting = document.getElementById("web-hosting");
    const webMaintenance = document.getElementById("web-maintenance");

    // Éléments d'affichage
    const priceDisplay = document.getElementById("price");
    const websiteTypeSelected = document.getElementById("website-type-selected");
    const additionalPagesSelected = document.getElementById("additional-pages-selected");
    const multilingualSelected = document.getElementById("mulilingual-selected");
    const seoSelected = document.getElementById("seo-selected");
    const domainNameSelected = document.getElementById("domain-name-selected");
    const webHostingSelected = document.getElementById("web-hosting-selected");
    const webMaintenanceSelected = document.getElementById("web-maintenance");
    const resetBtn = document.getElementById("reset-btn");

    // Fonction de calcul total
    function calculateTotal() {
        // Récupère les valeurs numériques ou 0 si vide
        const total =
            (Number(websiteType.value) || 0) +
            (Number(additionalPages.value) || 0) +
            (Number(multilingual.value) || 0) +
            (Number(seo.value) || 0) +
            (Number(domainName.value) || 0) +
            (Number(webHosting.value) || 0) +
            (Number(webMaintenance.value) || 0);

        // Affichage formaté
        priceDisplay.textContent = total.toLocaleString("fr-FR");

        // Mise à jour des textes sélectionnés
        websiteTypeSelected.textContent = websiteType.options[websiteType.selectedIndex].text;
        additionalPagesSelected.textContent = additionalPages.options[additionalPages.selectedIndex].text;
        multilingualSelected.textContent = multilingual.options[multilingual.selectedIndex].text;
        seoSelected.textContent = seo.options[seo.selectedIndex].text;
        domainNameSelected.textContent = domainName.options[domainName.selectedIndex].text;
        webHostingSelected.textContent = webHosting.options[webHosting.selectedIndex].text;
        webMaintenanceSelected.textContent = webMaintenance.options[webMaintenance.selectedIndex].text;
    }

    // Fonction de réinitialisation
    function resetCalculator() {
        // Remet toutes les sélections à zéro
        [websiteType, additionalPages, multilingual, seo, domainName, webHosting, webMaintenance].forEach(select => {
            select.selectedIndex = 0;
        });

        // Réinitialise les textes
        priceDisplay.textContent = "0";
        websiteTypeSelected.textContent = "";
        additionalPagesSelected.textContent = "";
        multilingualSelected.textContent = "";
        seoSelected.textContent = "";
        domainNameSelected.textContent = "";
        webHostingSelected.textContent = "";
        webMaintenanceSelected.textContent = "";

        // Optionnel : faire défiler vers le haut
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Corriger les valeurs de maintenance erronées dans le HTML
    if (webMaintenance.options.length >= 5) {
        webMaintenance.options[3].value = "1800"; // 6 mois
        webMaintenance.options[4].value = "3600"; // 12 mois
    }

    // Écouteurs de changement
    [websiteType, additionalPages, multilingual, seo, domainName, webHosting, webMaintenance].forEach(select => {
        select.addEventListener("change", calculateTotal);
    });

    // Événement du bouton reset
    resetBtn.addEventListener("click", resetCalculator);

    // Initialisation au chargement
    calculateTotal();
});
