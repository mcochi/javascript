import React from 'react';
//import ReactDOM from 'react-dom';
//import imageraq from './island2.jpg';
//import imageraq2 from './island.jpg';
import imagemiki from './miki.jpeg';
import playa from './nodo.jpeg';
import moncayo from './moncayo.jpeg';
//import SideBarRebass from './rebass_sidebar';
import Rebass_forms from './rebass_form';
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Flex
  } from 'rebass';
//import SimpleTable from './simple_table';
//import SimpleDynamicTable from './simple_dynamic_table'
//import ResponsiveTable from './responsive_table'
//import DatatablePage from './app' //Esta es la que realmente funciona y que es responsive
import ParallaxScene from './parallax_comp'

  class Bg_image_rebass extends React.Component {
      constructor(props) {
          super(props)
      }
      render() {
          return(
              <Flex flexWrap='wrap' mx={-2} alignItems='center'>
              <Box 
                width={1}>
                <ParallaxScene />
              </Box>
              <Box 
                px={2} 
                py={2} 
                width={1/3}
                ><Card width='100%' style={{padding:'10px'}}>
                    <Box width="100%">
                        <Image src={playa}/>
                    </Box>
                    <Heading
                        fontSize={[ 3, 4, 5 ]}
                        position='center'
                        color='Black'
                        fontWeight='bold'
                        backgroundColor="Silver">
                        Un lugar para vivir
                    </Heading>
                    <Text
                        fontSize= {[1,1,1]}>
                        Ven a la isla de la reina y recibe múltiples ventajas tales como 
                        trabajar de sol a sol, callar para que no te peguen, aguantar a Javier
                        y probarte vestiditos con la Nuria.
                    </Text>
                    </Card>
              </Box>
              <Box 
                px={2} 
                py={2} 
                width={1/3}
                >
                <Card width='100%'>
                <Heading
                        fontSize={[ 3, 4, 5 ]}
                        position='center'
                        color='Black'
                        fontWeight='bold'
                        backgroundColor="Silver">
                        Visita el moncayo
                    </Heading>
                    <Text
                        fontSize= {[1,1,1]}>
                        Adora a la reina por encima de todo y cada martes ve a rezar al moncayo;
                        de este modo llegarás a la sabiduría plena y a alcanzar el clímax espiritual:
                        PENSAR EN LA REINA COMO TU DIOSA
                    </Text>
                    <Image src={moncayo}/>
                    </Card>
              </Box>
              <Box 
                px={2} 
                py={2} 
                width={1/3}
                >
                    <Card width='100%'>
                        <Image src={imagemiki}/>
                        <Heading
                        backgroundColor="Silver">
                            Se busca por GUAPO!</Heading>
                    </Card>
              </Box>
              <Box 
                px={2} 
                py={0} 
                width={1}
                >
                    <Box
                        sx={{
                        width: '100%',
                        height: 0,
                        paddingBottom: (900 / 16) + '%',
                        position: 'relative',
                        overflow: 'hidden',
                        '& > iframe': {
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        border: 0
                        }
                        }}>
                    <iframe
                        width="560" height="315" src="https://www.youtube.com/embed/mtf7hC17IBM" frameborder="0" allowfullscreen
                />
                </Box >
                <Box width={1} sx={{backgroundColor:"white"}}>
                <Rebass_forms />
                </Box>
                </Box>
                <Box width={1} padding="10px">
                </Box>

                <Box 
                px={2} 
                py={0} 
                width={1}
                >   
                    <Heading
                        fontSize={[ 1, 1, 1 ]}
                        position='center'
                        color='Black'
                        backgroundColor="Silver">
                        Made by Cochi's
                    </Heading>
                </Box>    
              </Flex>
          )
      }
  }

  export default Bg_image_rebass;

/*
  sx={{
    px:4,
    py:6,
    backgroundImage:
    `url(${imageraq})`,
    backgroundSize:'cover',
    borderRadius: 8,
    color: 'white',
    bg:'gray'
}}>
<Heading
    textAlign='center'
    fontSize={[5, 6]}
    color='white'
    postion='sticky'>
    Raquelandia, el lugar de la Reina!
</Heading>
*/