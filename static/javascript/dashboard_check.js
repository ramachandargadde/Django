function myfunction() {
    var selected = new Array();
    
    var markedCheckbox = document.getElementsByName('pl');
    for (var checkbox of markedCheckbox) {
        if (checkbox.checked) {
            console.log(checkbox.value);
            selected.push(checkbox.value);
        }
    }
    console.log(selected);
    if(selected.length ===0){
        alert("please select altealst one product");
    }
    else{
        $.ajax({
            url:"remove/",
            method:"POST",
            data:{
                selected
            },
        })
    }
};