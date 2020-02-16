import React from 'react';
import { MDBDataTable } from 'mdbreact';
import Table from "react-responsive-data-table"

class ResponsiveTable extends React.Component {
    constructor(props) { 
        super(props);
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
    console.log(dataapi)
    return (
      <Table 
      style = {{
        opacity: 0.8,
        backgroundColor: "blue",
        color: "#ffffff",
        textAlign: "center"
      }}
      tableStyle="table table-hover table-striped table-bordered table-borderless table-responsive"
      pages={this.dfa}
      isLoading={false}
      pagination={true}
      sort={true}
      title="Estadísticas Biotecnología INE"
      search={true}
      size={20}
      data={dataapi}/>
    )
  }
}
export default ResponsiveTable;
