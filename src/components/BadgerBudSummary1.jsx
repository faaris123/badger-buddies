import { Button, Card, Carousel } from "react-bootstrap";
import { useState } from "react";

const BadgerBudSummary1 = (props) => {
    // used state variable for the Show Button
    const [showMore, setShowMore] = useState(false);

    // took this code from previous HWs
    function info() {
        if (showMore === true) {
            setShowMore(false);
        }
        else if (showMore === false) {
            setShowMore(true);
        }
    }
    
    // Used this source to better and lecture examples to better understand sessionStorage: https://stackoverflow.com/questions/50180134/how-to-set-get-save-data-in-session-storage

    // Got help from Office Hours with this part
    // I also used this source to get a better understanding of how sessionStorage works: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
    // Used this source to figure out how to how add elements to an array: https://www.w3schools.com/jsref/jsref_push.asp
    function save() {
        const savedCatIds = JSON.parse(sessionStorage.getItem("savedCatIds")) || [];
        savedCatIds.push(props.id)
        sessionStorage.setItem("savedCatIds", JSON.stringify(savedCatIds))
        props.updateBuds()
        alert(props.name + " has been added to your basket!")
    };

    // Used the showMore variable to determine if an element shows up on the screen or not
    // Used some of styling from previous HWs and lecture code examples
    // Used this source to understand how Carousel works: https://react-bootstrap.netlify.app/docs/components/carousel/
    return (
        <Card style={{margin: "auto", marginTop: "1rem", maxWidth: "40rem"}}>
            {showMore && <Carousel>
                {props.imgIds.map(id => (
                    <Carousel.Item key={id}>
                        <img
                            src={"https://raw.githubusercontent.com/CS571-F24/hw5-api-static-content/main/cats/" + id}
                            alt={"A picture of " + props.name}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>}
            
            {!showMore && <img
                src={"https://raw.githubusercontent.com/CS571-F24/hw5-api-static-content/main/cats/" + props.imgIds[0]}
                alt={"A picture of " + props.name}
            />}
            <h2>{props.name}</h2>
            {showMore && <p>{props.gender}</p>}
            {showMore && <p>{props.breed}</p>}
            {showMore && <p>{props.age}</p>}
            {showMore && <p>{props.description}</p>}
            <Button onClick = {info}>Show {showMore ? "Less" : "More"}</Button>
            <Button variant="secondary" onClick = {save}>Save</Button>
        </Card>
    );
};

export default BadgerBudSummary1;