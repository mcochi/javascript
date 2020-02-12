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
  } from 'rebass'

  class Rebass_forms extends React.Component {
      constructor(props) {
          super(props);
      } 
      render() {
          return(
            <div id="formulario" class="container-fluid">
            <Box 
            as='form'
            onSubmit={e => e.preventDefault()}
            py={3}>
            <Flex mx={-2} mb={3}>
              <Box width={1/2} px={2}>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  defaultValue='Jane Doe'
                />
              </Box>
              <Box width={1/2} px={2}>
                <Label htmlFor='location'>Location</Label>
                <Select
                  id='location'
                  name='location'
                  defaultValue='NYC'>
                  <option>NYC</option>
                  <option>DC</option>
                  <option>ATX</option>
                  <option>SF</option>
                  <option>LA</option>
                </Select>
              </Box>
            </Flex>
            <Flex mx={-2} flexWrap='wrap'>
              <Label width={[ 1/2, 1/4 ]} p={2}>
                <Radio
                  id='beep'
                  name='beep'
                  value='beep'
                  defaultChecked
                />
                Beep
              </Label>
              <Label width={[ 1/2, 1/4 ]} p={2}>
                <Radio
                  id='boop'
                  name='beep'
                  value='boop'
                />
                Boop
              </Label>
              <Label width={[1/2, 1/4]} p={2}>
                <Checkbox
                  id='remember'
                  name='remember'
                />
                Remember Me
              </Label>
              <Box px={2} ml='auto'>
                <Button>
                  Beep
                </Button>
              </Box>
            </Flex>
        </Box>
        </div>
          )
      }
  }

  export default Rebass_forms;