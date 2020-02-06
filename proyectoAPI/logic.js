var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var table = document.getElementById('tableid');
        console.log(myObj);
        console.log(myObj.items.length);
        for (var i = 0; i< myObj.items.length; i++) {
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = myObj.items[i].id
            cell2.innerHTML = myObj.items[i].name;
            cell3.innerHTML = myObj.items[i].createdAt;
        }
        /*document.getElementById("demo").innerHTML = myObj.items[0].id;
        document.getElementById("id").innerText = myObj.items[0].id;
        document.getElementById("denominacion").innerHTML = myObj.items[0].name;
        document.getElementById("descripcion").innerHTML = myObj.items[0].createdAt;*/
    } 
};
xhttp.open("GET",'https://coda.io/apis/v1beta1/docs/G6ody-h41g/Tables/grid-wZqn8JWTuU/rows');
xhttp.setRequestHeader('Authorization','bearer b60dd233-8f6c-464f-a2c3-1774f761bcd1');
xhttp.send();

/*El siguiente objetivo sería que pudiesemos acceder a la base de datos 
de la Raspberry y que pintásemos todo su contenido. Me están indicado que 
podría hacerse mediante PHP o bien Node.js*/

