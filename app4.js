$(document).ready(function () {
    $(".btn-add-student").on("click", function (e) {

        let valueName = $(".name-student").val()
        let valueAddress = $(".address-student").val()
        let valueEmail = $(".email-student").val()
        let valuePhone = $(".phone-student").val()
        let valueYear = $(".year-student").val()
        let gender = $(".gender-student").val()
        let oldElement = $(".list-student").html()
        
        $(".list-student").html(`
        ${oldElement}
        <tr class="row-student">
            <td class="username">${valueName}</td>
            <td class="">${valueEmail}</td>
            <td class="">${valuePhone}</td>
            <td class="">${valueYear}</td>
            <td class="">${gender}</td>
            <td class="">${valueAddress}</td>
            </tr>
       `)
        $(".name-student").val("")
        $(".address-student").val("")
        $(".email-student").val("")
        $(".phone-student").val("")
        $(".year-student").val("")
        $(".gender-student").val("")
    })
    $(".search-student").on("keyup", function () {
        let value = $(this).val()
        value= value.toLowerCase();
        console.log(`value = ${value}`);
        $(" .row-student .username").each(function (index) {
            let textElement = $(this).text();
            textElement = textElement.toLowerCase()
            let className = `.row-student:nth-child(${index + 1})`;
          
            if (textElement.includes(value)) {
                console.log(className);
                $(className).show()
            } else {

                console.log(className);

                $(className).hide()
            }
        })
    })
})