import React, {Component} from 'react';
import Button from './components/Button';
import QuoteMachine from './components/QuoteMachine';
import 'typeface-roboto';
import {random} from 'lodash';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import { cpus } from 'os';
import { green } from '@material-ui/core/colors';
import { AppRegistry, View, StyleSheet, Platform } from 'react';

const styles={
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
   
    
  }
};



class App extends Component {
constructor(props){
  super(props);
  this.state={
    quotes:[],
    selectedQuoteIndex:null,
    ColorHolder: '#00BCD4',
    
    

  }
  this.generateNewQuoteIndexs=this.generateNewQuoteIndex.bind(this);
  this.assignNewQuoteIndex=this.assignNewQuoteIndex.bind(this);
  this.ChangeColorFunction=this.ChangeColorFunction.bind(this);
  this.callTwoFunctions=this.callTwoFunctions.bind(this);
  this.generateRandomColor=this.generateRandomColor.bind(this);
  
  
  
  

}



componentDidMount(){
  fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
  .then(data=>data.json())
  .then(quotes=> this.setState({quotes}, this.assignNewQuoteIndex));
  
}

  nextQuoteClickHandler(){
    console.log('hi');
  }

  ChangeColorFunction = () => {

    var ColorCode = "#32CD32";
    this.setState({
      ColorHolder: ColorCode
    })
  }

get selectedQuote(){
  if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
    return undefined;
  }
   return this.state.quotes[this.state.selectedQuoteIndex];
}

/**
 * returns an integer representing an index in state.quotes
 */
generateNewQuoteIndex(){
  if(!this.state.quotes.length){
  return undefined;
  }
return random(0,this.state.quotes.length-1);
}

generateRandomColor(){

  var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  this.setState({
   ColorHolder: ColorCode
  })

}

assignNewQuoteIndex(){
  this.setState({selectedQuoteIndex: this.generateNewQuoteIndex()});
}

callTwoFunctions(){
  this.assignNewQuoteIndex();
  this.generateRandomColor();
  /**
   * this.ChangeColorFunction();
   *  */

  
}



  render () {
   
    
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container style={{background: this.state.ColorHolder}} >
        <Grid xs={11} lg={8} item>
          
       <QuoteMachine ChangeColorFunction={this.callTwoFunctions} selectedQuote={this.selectedQuote} />
        
      
        
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);

/**
 * assignNewQuoteIndex={this.assignNewQuoteIndex} selectedQuote={this.selectedQuote}
 */