<!DOCTYPE html>
<html>
<body>

<h2>The window.print() Method</h2>

<p>Click the button to print the current page.</p>

<button onclick="window.print()">Print this page</button>
alert(5 + 6);
<button type="button" onclick="document.write(5 + 6)">Try it</button>

document.write(5 + 6);

<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h2>JavaScript in Head</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>







</body>
</html>
<!--					<th><input id="butn1" type="button" value="displayrecords" onclick="myfunction()"></th>-->
<!--					<p id="demo">A Paragraph.</p>-->
	function getvalues(){
	console.log(1)
	var selected=new Array();
	console.log(selected)
	var selchk = document.querySelectorAll('.pl');
	 for (var i = 0; i < selchk.length; i++) {
            selchk[i].checked = true;
        }
}
	console.log(selchk)
	console.log(selchk.value)
	for (var i=0;i<selchk.length;i++){
	if(selchk[i].checked){
	selected.push(selchk[i].value);
	}
	}
	if(selected.length>0){
	document.getElementById("demo").innerHTML =selected;
	}
	};
function
myfunction()
{
document.getElementById("demo").innerHTML = "Paragraph changed.";
};
name="order_id[]"

	 < th > < button
type = "submit"


class ="btn btn-sm btn-danger"


onclick = "myfunction()"
id = "btn"
href = "{%url 'remove_order'selected %}" > Remove < / button > < / th >

print(pk)
order = Order.objects.all()
context = {'item': order}
return render(request, 'accounts/delete.html', context)

<a  >Remove</a>