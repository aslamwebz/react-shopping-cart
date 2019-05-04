import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox';

export default class FilterPane extends Component {
  constructor(){
    super()
    this.state = {
      fields:[]
    }
    this.handleChange = this.handleChange.bind(this)
   
  }
  

  handleChange = name => event => {
      let fields = this.state.fields
      if (event.target.checked){
         fields.push(name)
      } else { 
        fields.pop(name)
      }
      this.setState({ 
        fields:fields
      })

    this.props.changeHandle(this.state.fields)
  };

  render() {
    return (
    <Grid>
      <FormControl component="fieldset">
        <FormLabel component="h2">Filter Products</FormLabel>
        <br />
          <FormGroup>
          <FormControlLabel
              control={
                <Checkbox checked={this.props.female} onChange={this.handleChange('female')} name="female" />
              }
              label="Female"
            />
            <FormControlLabel
              control={
                <Checkbox checked={this.props.male} onChange={this.handleChange('male')} name="male" />
              }
              label="Male"
            />
            <FormControlLabel
              control={
                <Checkbox checked={this.props.child} onChange={this.handleChange('child')} name="child" />
              }
              label="Children"
            />

          <FormControlLabel
              control={
                <Checkbox checked={this.props.accessory} onChange={this.handleChange('accessory')} name="accessory" />
              }
              label="Accessory"
            />
          </FormGroup>
        </FormControl >
    </Grid>
    )
  }
}
