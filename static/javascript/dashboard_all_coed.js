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
    var x = selected.toString();
    console.log(x);
    console.log(typeof x);
    console.log(selected);
    document.getElementById("chandu").value = selected;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "{%url 'remove' %}", true);
    xhr.onprogress = function () {
        console.log('on progress');
    }
    xhr.onreadystatechange = function () {
        console.log('ready state is ', xhr.readyState);
    }
    //what to do wheen responce is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.log('some error occured');
        }

    }

    xhr.send(selected);
    console.log('we are done');



};
{/* <th><button type="submit" class="btn btn-sm btn-danger" onclick="myfunction()" name="remove1"
id="chandu">Remove</button></th>
<td><input type="checkbox" value="{{order.id}}" name="pl"></td> */}
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

