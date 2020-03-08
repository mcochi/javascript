'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
  ViroFlexView, 
  ViroImage
} from 'react-viro';
import AnimatedScene from './animatedScene.js'

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >   
        <ViroFlexView style={styles.titleContainer} position={[3.8, 0, -7]} rotation={[0, -40, 0]} height={2} width={3}
            animation={{ name : this.state.mainAnimation, run : this.state.runAnimation, loop : false}} >
            <ViroFlexView style={styles.rowContainer} >
              <ViroText style={styles.prodDescriptionText} text="Price:" />
              <ViroText style={styles.priceText} text={"300 Euros"} />  
            </ViroFlexView>
          </ViroFlexView>

          <ViroFlexView style={styles.titleContainer} position={[0, 0, -7]} rotation={[0, 0, 0]} height={2} width={3}
            animation={{ name : this.state.mainAnimation, run : this.state.runAnimation, loop : false}} >
            <ViroFlexView style={styles.rowContainer} >
              <ViroText style={styles.prodDescriptionText} text="Price:" />
              <ViroText style={styles.priceText} text={"400 Euros"} />
            </ViroFlexView>
          </ViroFlexView>
          <ViroFlexView style={styles.titleContainer} position={[13.8, 0, -7]} rotation={[0, -50, 0]} height={8} width={8}
            animation={{ name : this.state.mainAnimation, run : this.state.runAnimation, loop : false}}>
              <ViroFlexView style={styles.rowContainer} >
              <ViroImage
                    height={8}
                    width={8}
                    source={require('./res/prueba.jpg')} 
                  />
              </ViroFlexView>
            </ViroFlexView>
              <ViroAmbientLight color="#ffffff" />
                <Viro3DObject
                    source={require("./res/model.obj")}
                    highAccuracyEvents={true}
                    position={[-3.8, 0, -7]}
                    scale={[1, 1, 1]}
                    rotation={[0, -175, 0]}
                    type="OBJ"
                    />
            <AnimatedScene/>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hola mundo"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
    rowContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    prodTitleText: {
      fontFamily: 'sans-serif-light',
      fontSize: 30,
      color: '#222222',
      textAlignVertical: 'center',
      textAlign: 'left',
    },
    priceText: {
      fontFamily: 'sans-serif-light',
      fontSize: 20,
      color: '#aa3c3c',
      textAlignVertical: 'center',
      textAlign: 'left',
      flex: 4,
    },
    prodDescriptionText: {
      fontFamily: 'sans-serif-light',
      fontSize: 20,
      color: '#222222',
      textAlignVertical: 'center',
      textAlign: 'left',
      flex: 1,
    },
    titleContainer: {
      flexDirection: 'column',
      backgroundColor: "#ffffffdd",
      padding: .2,
    },
    navButtonText: {
      fontFamily: 'sans-serif-light',
      fontSize: 15,
      color: '#ffffff',
      textAlignVertical: 'center',
      textAlign: 'center',
      flex: 1,
    }
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: "+=90"
    },
    duration: 250, //.25 seconds
  },
});

ViroAnimations.registerAnimations({
  fadeOut:{properties:{opacity:0}, duration:2000},
  fadeIn:{properties:{opacity: 1}, duration:2000},
  scaleAndRotate:{properties:{rotateY: "+=90", positionZ: "-3"}, duration:1000},
});
module.exports = HelloWorldSceneAR;