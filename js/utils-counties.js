function addOptionsToSelects(className, optionsList) {
    // Select all <select> elements with the specified class name
    const selects = document.querySelectorAll(`select.${className}`);
    
    // Loop through each <select> element
    selects.forEach(select => {
        // Clear existing options (optional)
        select.innerHTML = '';

        // Add each option to the <select>
        optionsList.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value; // Option value
        optionElement.textContent = option.text; // Option display text
        select.appendChild(optionElement);
        });
    });
    }

    // Example usage
    const judete = [
{ value: "București", text: "București" },
{ value: "Alba", text: "Alba" },
{ value: "Arad", text: "Arad" },
{ value: "Argeș", text: "Argeș" },
{ value: "Bacău", text: "Bacău" },
{ value: "Bihor", text: "Bihor" },
{ value: "Bistrița-Năsăud", text: "Bistrița-Năsăud" },
{ value: "Brăila", text: "Brăila" },
{ value: "Botoșani", text: "Botoșani" },
{ value: "Brașov", text: "Brașov" },
{ value: "Buzău", text: "Buzău" },
{ value: "Caraș-Severin", text: "Caraș-Severin" },
{ value: "Călărași", text: "Călărași" },
{ value: "Cluj", text: "Cluj" },
{ value: "Constanța", text: "Constanța" },
{ value: "Covasna", text: "Covasna" },
{ value: "Dâmbovița", text: "Dâmbovița" },
{ value: "Dolj", text: "Dolj" },
{ value: "Galați", text: "Galați" },
{ value: "Giurgiu", text: "Giurgiu" },
{ value: "Gorj", text: "Gorj" },
{ value: "Harghita", text: "Harghita" },
{ value: "Hunedoara", text: "Hunedoara" },
{ value: "Ialomița", text: "Ialomița" },
{ value: "Iași", text: "Iași" },
{ value: "Ilfov", text: "Ilfov" },
{ value: "Maramureș", text: "Maramureș" },
{ value: "Mehedinți", text: "Mehedinți" },
{ value: "Mureș", text: "Mureș" },
{ value: "Neamț", text: "Neamț" },
{ value: "Olt", text: "Olt" },
{ value: "Prahova", text: "Prahova" },
{ value: "Satu Mare", text: "Satu Mare" },
{ value: "Sălaj", text: "Sălaj" },
{ value: "Sibiu", text: "Sibiu" },
{ value: "Suceava", text: "Suceava" },
{ value: "Teleorman", text: "Teleorman" },
{ value: "Timiș", text: "Timiș" },
{ value: "Tulcea", text: "Tulcea" },
{ value: "Vaslui", text: "Vaslui" },
{ value: "Vâlcea", text: "Vâlcea" },
{ value: "Vrancea", text: "Vrancea" }
];

addOptionsToSelects('select-counties', judete);    