import React from 'react';
import Parallax from 'parallax-js';
import BGImage from './ilu_bg.jpg';
import BGMan from './mala.png';
import BGImage1 from './ilu_01.png';
import BGImage2 from './ilu_02.png';
import BGImage3 from './ilu_03.png';
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Flex,
    Button
  } from 'rebass';

class ParallaxScene extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
            var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene);
    }
    render() {
        return (
            
            <div class="container-fluid" id="parralaxcontent" style={{
                width:'100%',
                height:'100vh',
                overflow: 'hidden',
                backgroundImage:`url(${BGImage})`
            }}>
                <ul id="scene">
                    <li class="layer" data-depth="0.1" style={{
                        position:'relative',
                        paddingTop:'37%',
                    }}>
                        <img src={BGImage1}></img>
                    </li>
                    <li class="layer" data-depth="0.2" style= {{
                        postion:'relative',
                        paddingTop:'10%'
                    }}>
                        <img src={BGImage3}></img>
                        
                    </li>
                    <li class="layer" data-depth="0.3" style= {{
                        postion:'relative',
                        paddingTop:'15%'
                    }}>
                        <img src={BGImage2}></img>
                    </li>
                    <li class="layer" data-depth="1" style={{
                        position:'relative',
                        paddingTop:'0',
                        paddingLeft: '0%'
                    }}>
                        <img src={BGMan}></img>
                    </li>
                    <li class="layer" data-depth="0.3" style={{
                        position:"relative",
                        paddingTop:'45%',
                        paddingLeft:"10%"
                    }}>
                        <Heading
                            textAlign='center'
                            fontSize={[5, 6]}
                            color='white'
                            postion='sticky'
                            fontFamily='Verdana'>
                            Raquelandia, 
                            ¡El lugar de la Reina!
                            
                        </Heading>
                        
                        
                    </li>
                    <li class="layer" data-depth="0.7" style={{
                        position:'relative',
                        paddingTop:'20%',
                        paddingLeft: '45%'
                    }}>
                        <div>
                        
                        <a href="#formulario" style={{
                            color:'white',
                            backgroundColor:'red',
                            fontFamily:'Verdana',
                            fontSize:'large'
                        }}>¿Podrás formar parte de Raquelandia?</a>
                        </div>
                    </li>
                    
                </ul>
                
            </div>
        )
            
        
    }
}
export default ParallaxScene;