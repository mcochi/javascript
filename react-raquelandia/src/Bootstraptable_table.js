import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

class BootstrapTableProof extends React.Component {
    constructor(){
        super();
    }
    get_data_from_url = (url) => {
        var http_req = new XMLHttpRequest();
        http_req.open("GET",url,false);
        http_req.send(null);
        return http_req.responseText;
    }

    render() {
        var data_url = "https://cors-anywhere.herokuapp.com/http://79.153.17.195:3002/users";
        var data_obj = JSON.parse(this.get_data_from_url(data_url));
        var products = data_obj;
        const columns = [{
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
            text: 'InvBioEmp',
          },
        ];
        const { SearchBar } = Search;

          /*Region: "Region",
                Year: "Year",
                id: "id",
                GastoBioTotal: "GastoBioTotal",
                PersBioTotal: "PersBioTotal",
                InvBioEmp: "InvBioEmp"
          ];*/
        return(
            <div 
                class='container-fluid' className="overflow-auto" style={{width:"100%"}}  >
            
            <ToolkitProvider
            keyField="id"
            data={ products }
            columns={ columns }
            search
          >
            {
              props => (
                <div class="table-responsive">
                  <h3>Input something at below input field:</h3>
                  <SearchBar { ...props.searchProps } />
                  <hr />
                  <BootstrapTable
                    { ...props.baseProps }
                     pagination={paginationFactory()}
                    id='tablaresponse' keyField='id' sx={{objectFit:'Contain'}}
                  />
                </div>
              )
            }
            </ToolkitProvider>
            
            </div>
        )
    }
}


export default BootstrapTableProof;
/*
<BootstrapTable bootstrap4 pagination={paginationFactory()}
            id='tablaresponse' keyField='id' data={ products } columns={ columns } filter={ filterFactory() } sx={{condensed:"true"}} />
*/