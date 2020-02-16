import React from 'react';
import ReactDOM from 'react-dom';

class SimpleDynamicTable extends React.Component {
    constructor(props) {
        super(props);
    }
    get_data_from_url = (url) => {
        var http_req = new XMLHttpRequest();
        http_req.open("GET",url,false);
        http_req.send(null);
        return http_req.responseText;
    }
    render(){
        var data_url = "https://cors-anywhere.herokuapp.com/http://79.153.17.195:3002/users";
        var data_obj = JSON.parse(this.get_data_from_url(data_url));
        var dataapi= {
                head: {
                    Region: "Region",
                    Year: "Year",
                    id: "id",
                    GastoBioTotal: "GastoBioTotal",
                    PersBioTotal: "PersBioTotal",
                    InvBioEmp: "InvBioEmp"
                },
                data: []
    
        }
        dataapi.data = data_obj;
        return(
            <table class="table-hover">
                    <thead role="rowgroup">
                        <tr role="row">
                        <th role="columnheader">id</th>
                        <th role="columnheader">Region</th>
                        <th role="columnheader">Year</th>
                        <th role="columnheader">GastoBioTotal</th>
                        <th role="columnheader">PersBioTotal</th>
                        <th role="columnheader">InvBioEmp</th>
                        <th role="columnheader">GastoBioEmp</th>
                        <th role="columnheader">PersBioEmp</th>
                        </tr>
                </thead>
                <tbody>{dataapi.data.map(function(item, key) {
                        return (
                            <tr key = {key}>
                                <td>{item.id}</td>
                                <td>{item.Region}</td>
                                <td>{item.Year}</td>
                                <td>{item.GastoBioTotal}</td>
                                <td>{item.PersBioTotal}</td>
                                <td>{item.InvBioEmp}</td>
                                <td>{item.GastoBioEmp}</td>
                                <td>{item.PersBioEmp}</td>
                            </tr>
                            )
                        
                        })}</tbody>
        </table>
       );
    }

}
export default SimpleDynamicTable;
/*
dataField: 'Region',
text: 'Región'
}, {
dataField: 'Year',
text: 'Año'
}, {
dataField: 'GastoBioTotal',
text: 'GastoBioTotal',
},
{
dataField: 'PersBioTotal',
text: 'PersBioTotal',
},
{
dataField: 'InvBioEmp',
text: 'InvBioEmp',
},
{
dataField: 'GastoBioEmp',
text: 'GastoBioEmp',
},
{
dataField: 'PersBioEmp',
text: 'PersBioEmp',
},
{
dataField: 'InvBioEmp',
text: 'InvBioEmp',*/