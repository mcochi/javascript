import React from 'react';
import { MDBDataTable } from 'mdbreact';


class DatatablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      columns: [
        {
          label: 'Region',
          field: 'Region',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Year',
          field: 'Year',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Id',
          field: 'id',
          sort: 'asc',
          width: 200
        },
        {
          label: 'GastoBioTotal',
          field: 'GastoBioTotal',
          sort: 'asc',
          width: 100
        },
        {
          label: 'PersBioTotal',
          field: 'PersBioTotal',
          sort: 'asc',
          width: 150
        },
        {
          label: 'InvBioEmp',
          field: 'InvBioEmp',
          sort: 'asc',
          width: 100
        }
      ],
      rows:[]
    };
  }

  consulta = () => {
    fetch("https://cors-anywhere.herokuapp.com/http://79.153.17.195:3002/users")
    .then(res => res.json())
    .then((result) => {
      //console.log((result[0]));
      this.setState({rows: result})
    }).catch(console.log);
  }
  render() {
    //console.log(this.consulta());
    this.consulta();
    return (
      <MDBDataTable
      striped
      bordered
      small
      data={this.state}
      />
    )
  }
}
export default DatatablePage;