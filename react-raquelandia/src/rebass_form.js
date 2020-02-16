import React from 'react';
import ReactDOM from 'react-dom';
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox,
  } from '@rebass/forms';
  import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Flex,
    Button
  } from 'rebass';

  class Rebass_forms extends React.Component {
      constructor() {
          super();
          this.state= {
            username:'',
            film:'',
            decision:'',
            token:'0'
          }
      }
      criterium = (film) => {
        var aux='';
        if(film == 'One Day' && this.state.token == '0') {
          aux = 'Serás bienvenido a Raquelandia!'
        }
        else {
          aux = 'DESATOMIZADOS'
        }
        this.setState({decision:aux, token:'1'});
        return aux;
      }

      returnalert = (event) => {
        event.preventDefault();
        var criterio = this.criterium(this.state.film);
        //alert(criterio);
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value})
      }
      myChangeHandlerFilm = (event) => {
        this.setState({film: event.target.value})
      }

      myconditionalert = () => {

      }

      render() {
          let condtionalheader = '';
          if (this.state.token == '0') {
            condtionalheader = '';
          } else {
          if (this.state.decision == "DESATOMIZADOS"){
            condtionalheader = <div class="alert alert-danger">
            <strong>¡Lo siento!</strong> Jamás podrás vivir en Raquelandia. Si das un solo paso serás desatomizado
          </div>
          } else {
            if (this.state.decision == "Serás bienvenido a Raquelandia!") {
              condtionalheader = <div class="alert alert-success">
              <strong>¡Serás subdito de la reina!</strong> Eres uno de los elegidos. Prepárate para servir a la reina. Ya estamos yendo a buscarte.
            </div>
            } else {
              condtionalheader = '';
            }
          }
        }
          return(
            <div id="formulario" class="container-fluid">
            <Box 
            as='form'
            onSubmit={this.returnalert}
            py={3}>
            <h1>¿Serás bienvenido en Raquelandia?</h1>
            <p>Rellena este pequeño formulario para ver si tendrías lugar en el reino de Raquelandia</p>
            <Flex mx={-2} mb={3}>
              <Box width={1/2} px={2}>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  defaultValue=''
                  onChange={this.myChangeHandler}
                />
              </Box>
              <Box width={1/2} px={2}>
                <Label htmlFor='¿Qué película prefieres?'>¿Qué película prefieres?</Label>
                <Select
                  id='Peliculas'
                  name='Films'
                  onChange={this.myChangeHandlerFilm}
                  defaultValue='Spiderman 2'>
                  <option>La bella y la bestia</option>
                  <option>One Day</option>
                  <option>Conocerás al hombre de tus sueños</option>
                  <option>Gozilla</option>
                  <option>Jumanji</option>
                </Select>
              </Box>
            </Flex>
            <Flex mx={-2} flexWrap='wrap'>
              <Box px={2} ml='auto'>
                <Button type="submit" backgroundColor="silver">
                  Comprobar
                </Button>
              </Box>
            </Flex>
            {condtionalheader}
        </Box>
        </div>
          )
      }
  }

  export default Rebass_forms;