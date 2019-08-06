import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from'@fortawesome/free-brands-svg-icons';

const QuoteMachine=(props)=>(
    <Card>
   <CardContent>

{
    props.selectedQuote ?

    (
        <Typography id ="text">
        {props.selectedQuote.quote}-<span id="author">{props.selectedQuote.author}</span>
        </Typography>
    ) : null
}


    </CardContent>
    <CardActions>
    
    <Button id ="new-quote"size= "small" onClick={props.ChangeColorFunction} >Next Quote</Button>
    <IconButton
    id ="tweet-quote"
    target="blank"
    href={encodeURI('https://twitter.com/intent/tweet?text=${props.seleqtedQuote.quote}&hashtags=aikaFrontend')}>
        <FontAwesomeIcon icon={faTwitter} size="md"></FontAwesomeIcon>
    </IconButton>
     

      </CardActions>
      </Card>
);


export default QuoteMachine;

/**
 *   <Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuoteIndex} /> 
 * onClick={props.assignNewQuoteIndex}
     
 */