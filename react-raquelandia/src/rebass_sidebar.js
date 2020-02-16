import React from 'react';
import ReactDOM from 'react-dom';
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Flex,
    Button,
    Link,
  } from 'rebass'

class SideBarRebass extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return(
            <Flex flexWrap='wrap' mx={-2} alignItems='center' width="100%">
            <Button width="100%">
                <a href="#formulario">'¿Podrás vivir en Raquelandia?'</a>
            </Button>
            <Button children='Biotecnología' width="100%" />
            <Button children='Alta Tecnología' width="100%" />
           
            
            </Flex>
        )
    }
}
export default SideBarRebass;