// Search for the button
document.querySelector("#add-time")
// Click the button
.addEventListener('click', cloneField)

// Perform an action
function cloneField() {
    // Duplicate the fields. What fields?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    // Catch the fields. What fields?
    const fields = newFieldContainer.querySelectorAll("input")
    
    // For each field, clear
    fields.forEach(function(field){
        // Take the current field and clean it
        field.value = ""
    })
    
    // Place on page
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
    