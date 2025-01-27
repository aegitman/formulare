export function collectFields() {
    var inputs = $('.container').find('input[name], select'); //all inputs with a name in the form

    var names = $.map(inputs, function (el) { return el.name });

    // Create the map
    const fieldValuesMap = {};

    // Iterate through the field names
    names.forEach((fieldName) => {
        // Find the input fields by name
        const inputs = $(`input[name="${fieldName}"]`);

        // Check the type of the input
        if (inputs.length) {
            const inputType = inputs.first().attr("type");

            switch (inputType) {
                case "text":
                case "email":
                case "date":
                    // Single value for text or date inputs
                    fieldValuesMap[fieldName] = inputs.val();
                    break;
                case "radio":
                    // Get the checked radio button value
                    fieldValuesMap[fieldName] = inputs.filter(":checked").val() || null;
                    break;
                case "checkbox":
                    // Get all checked checkbox values as an array
                    fieldValuesMap[fieldName] = inputs.filter(":checked").map(function () {
                        return $(this).val();
                    }).get();
                    break;
                default:
                    fieldValuesMap[fieldName] = null; // Handle unexpected types
            }
        } else {
            fieldValuesMap[fieldName] = null; // Field not found
        }
    });

    // Iterate over all select fields
    $('.container').find('select').each(function () {
        const name = $(this).attr('name');
        if (!name) return; // Skip fields without a name attribute

        const value = $(this).val(); // Get the selected option's value
        if (value !== undefined) {
            fieldValuesMap[name] = value;
        }
    });

    return fieldValuesMap;
}
