function api(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            console.log(response)
            var output="";
            for(var i=0;i<response.length;i++){
                output+="<tr>"
                output+="<td>"+JSON.stringify(response[i].id)+"</td>";
                output+="<td>"+JSON.stringify(response[i].title)+"</td>";
                output+="<td>"+JSON.stringify(response[i].completed)+"</td>";
                output+="<td>"+`    <p>
                <label>
                  <input type="checkbox" onclick="count()" />
                  <span>Checked</span>
                </label>
              </p>`+"</td>";
                output+="</tr>"
                document.getElementById("demo").innerHTML=output;
            }
            console.log(output)
            
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
function count() {

    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
    if (checkboxes.length == 5) {
      alert(' Congrats. 5 Tasks have been Successfully Completed');
    }
  
  }