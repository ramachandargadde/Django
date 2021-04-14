$(document).ready(function () {
    $('#remove').click(function () {
        console.log(2)
        if (confirm('Are  u sure you want to delete')) {
            var selected = [];
            var csrf = $('input[name=csrfmiddlewaretoken').val();
            console.log(4)
            $(':checkbox:checked').each(function (i) {
                selected[i] = $(this).val()
            })
            if (selected.length === 0) {
                alert("please select the items to delete !");
                console.log("alert")
            }
            else {
                console.log(selected)
                console.log(3)
                $.ajax({
                    url: "remove/",
                    method: "POST",
                    data: {
                        selected,
                        csrfmiddlewaretoken: csrf
                    },
                    success: function (responce) {
                        for (var i = 0; i < selected.length; i++) {
                            $('tr#' + selected[i] + '').hide();
                        }
                    }
                })
            }
        }
    })

})