import React from 'react';
import { MDBDataTable } from 'mdbreact';


class DatatablePage extends React.Component {
  constructor(props) {
    super(props);
  }

  get_data_from_url = (url) => {
    var http_req = new XMLHttpRequest();
    http_req.open("GET",url,false);
    http_req.send(null);
    console.log("Hemos pasado por aquí")
    return http_req.responseText;
}
/*
  consulta = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://79.153.17.195:3002/users")
    .then(res => res.json())
    .then((result) => {
      //console.log((result[0]));
      this.setState({rows: result})
    }).catch(console.log);
  }
*/

  render() {
    //console.log(this.consulta());
    //this.consulta();
    var data_url = "https://cors-anywhere.herokuapp.com/http://79.153.17.195:3002/users";
    var data_obj = JSON.parse(this.get_data_from_url(data_url));
    var dataapi ={
      columns: [
        {
          label: 'Region',
          field: 'Region',
          sort: 'asc',
        },
        {
          label: 'Year',
          field: 'Year',
          sort: 'asc',

        },
        {
          label: 'Id',
          field: 'id',
          sort: 'asc',

        },
        {
          label: 'GastoBioTotal',
          field: 'GastoBioTotal',
          sort: 'asc',

        },
        {
          label: 'PersBioTotal',
          field: 'PersBioTotal',
          sort: 'asc',

        },
        {
          label: 'InvBioEmp',
          field: 'InvBioEmp',
          sort: 'asc',

        }
      ],
      rows:[]
    };
    dataapi.rows = data_obj;
    return (
      <MDBDataTable
      striped
      bordered
      small
      data={dataapi}
      />
    )
  }
}
export default DatatablePage;