document.querySelector("#add-time") 
.addEventListener('click', cloneField)

var qtd=0
const maxQtd=3

function cloneField(){
    if (qtd < maxQtd) {
        const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

        const fields = newFieldContainer.querySelectorAll('input')

        fields.forEach(
            function (field) {
            field.value = ""
            }
        )


        document.querySelector("#schedule-items").appendChild(newFieldContainer)
        qtd++

    }
}