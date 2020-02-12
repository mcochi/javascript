import React from 'react';
import ReactDOM from 'react-dom';
import Bg_image_rebass from './rebass_bg_image'

/*import DatatablePage from './app.js'
import Table from 'react-responsive-data-table';
import ResponsiveTable from './responsive_table'


class Tablebiotecnologia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            prueb: 'HOLA'
        }
    }
    componentDidMount() {
        fetch("http://79.153.17.195:3002/users")
        .then(res => res.json())
        .then((result) => {
            //console.log(typeof(result))
            this.setState({items: result});
            //this.setState({prueb: "manipulación"});
            //console.log(JSON.stringify(result));
        }).catch(console.log);
    }
    render() {
        return(
            <table class="table table-striped">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Region</th>
                    <th>Gasto en Biotecnología</th>
                </tr>
    </thead>
            <tbody>{this.state.items.map(function(item, key) {
                   
                     return (
                        <tr key = {key}>
                            <td>{item.Year}</td>
                            <td>{item.Region}</td>
                            <td>{item.GastoBioTotal}</td>
                        </tr>
                      )
                   
                   })}</tbody>
             </table>
        );

    }
}

class Basicgrid extends React.Component {
    render() {
        return (
        <div class="fluid-container">
            <div class="row" style={{width:"100%",backgroundColor:"red"}}>
                <div class="col" style={{backgroundColor:"lightblue", width:"100%"}}>
                    <h1>Estadísticas INE</h1>
                    <p>La sigiente página web presenta los resultados obtenidos en la estadística del INE sobre Biotecnología</p>
                </div>
            </div>
            <div class="row" style={{width:"100%"}}>
                <div class="container" style={{width:"100%"}}>
                    <ResponsiveTable style={{width:"100%",height:"100%"}}/>
                </div>
            </div>
            <div class="row" style={{width:"100%"}}>
                <div class="col-6" style={{backgroundColor:"blue"}}>
                    <h1>Tabla1</h1>
                </div>
                <div class="col-6" style={{backgroundColor:"yellow"}}>
                    <h1>Gráfico2</h1>
                </div>
            </div>
        </div>
        
        );
    }
}
*/

ReactDOM.render(<Bg_image_rebass/>, document.getElementById('root'));

