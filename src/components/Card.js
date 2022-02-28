import  './components_styles/Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;      // appending the card.css to other component. Bale kung san mo man ilagay ang <Card></Card>, matik na mada-dagdag ang Card.css dun sa class na yun
    return (
        <div className={classes}>    {/** dito maa-append yung styles ng ibang component */}
            {props.children}  
        </div>
    )
}

export default Card;

/**
    props.children 

    children, is a reserved name
    and the value of this special children prop
    will always be the content between the opening and closing tags of your custom component.  --->    <Card> {value} </Card>

*/