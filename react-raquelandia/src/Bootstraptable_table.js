//No funciona, parece que el paquete está corrupto porque no lo encuentra en sus situación pertinente
import React from 'react';
import ReactDOM from 'react-dom';
//import BootstrapTable from 'react-bootstrap-table-next';
const BootstrapTable = require('react-bootstrap-table-next');


class BootstrapTableProof extends React.Component {
    constructor(){
        super();
    }
    render() {
        const products = [ {
          id:1,
          name:"Paco",
          price:13
        }, {
          id:1,
          name:"Paco",
          price:13
        },{
          id:1,
          name:"Paco",
          price:13
        },{
          id:1,
          name:"Paco",
          price:13
        },{
          id:1,
          name:"Paco",
          price:13
        },{
          id:1,
          name:"Paco",
          price:13
        },{
          id:1,
          name:"Paco",
          price:13
        },{
          id:1,
          name:"Paco",
          price:13
        },{
          id:1,
          name:"Paco",
          price:13
        },{
          id:1,
          name:"Paco",
          price:13
        },];
        const columns = [{
          dataField: 'id',
          text: 'Product ID'
        }, {
          dataField: 'name',
          text: 'Product Name'
        }, {
          dataField: 'price',
          text: 'Product Price'
        }];
        return(
          <BootstrapTable keyField='id' data={ products } columns={ columns } />
        )
    }
}


export default BootstrapTableProof;
/*
<BootstrapTable bootstrap4 pagination={paginationFactory()}
            id='tablaresponse' keyField='id' data={ products } columns={ columns } filter={ filterFactory() } sx={{condensed:"true"}} />
*/