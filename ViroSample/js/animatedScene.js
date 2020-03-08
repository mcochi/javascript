'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroARScene,
  ViroMaterials,
  ViroAmbientLight,
  ViroSpotLight,
  ViroDirectionalLight,
  ViroAnimations,
  ViroParticleEmitter,
  ViroSurface,
  Viro3DObject,
  ViroNode
} from 'react-viro';

var createReactClass = require('create-react-class');
var AnimatedScene = createReactClass({
  getInitialState() {
    return {
      runAnimation:true,
    }
  },

  render: function() {
    return (
    <ViroNode>
      <ViroDirectionalLight color="#ffffff" direction={[0,-1,-.2]}/>
      <ViroAmbientLight color="#ffffff" intensity={200}/>

      <Viro3DObject
        source={require('./res/icecreamman_anim/icecreamman_anim_a.vrx')}
        resources={[require('./res/icecreamman_anim/icecreamman_diffuse.png'),
                    require('./res/icecreamman_anim/icecreamman_normal.png'),
                    require('./res/icecreamman_anim/icecreamman_specular.png')]}
        position={[0, -1, -2]}
        scale={[.5, .5, .5]}
        type="VRX"
        dragType="FixedToWorld" onDrag={()=>{}}
        onClick={this._onTappedIcecream}
        animation={{name:"02", run:this.state.runAnimation, loop:true,}}
      />
    </ViroNode>
    );
  },

  _onTappedIcecream() {
    this.setState({
      runAnimation : !this.state.runAnimation,
    })
  },
});

module.exports = AnimatedScene;