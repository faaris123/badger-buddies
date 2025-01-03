import { Button, Card } from "react-bootstrap";

const BadgerBudSummary2 = (props) => {

    // Copied this function from BadgerBudSummary1 except I changed it to removed the selected cat from the basket
    // I also used lecture code examples and this source's second response to figure out how to remove an element from an array: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
    function unsave() {
        const savedCatIds = JSON.parse(sessionStorage.getItem("savedCatIds")) || [];
        const updatedCatIds = savedCatIds.filter(id => id !== props.id);
        sessionStorage.setItem("savedCatIds", JSON.stringify(updatedCatIds))
        props.updateBuds()
        alert(props.name + " has been removed from your basket!")
    };

    // Copied this function from BadgerBudSummary1 but changed it to be used for adoptedCatIds
    function adopt() {
        const adoptedCatIds = JSON.parse(sessionStorage.getItem("adoptedCatIds")) || [];
        adoptedCatIds.push(props.id);
        sessionStorage.setItem("adoptedCatIds", JSON.stringify(adoptedCatIds))
        props.updateBuds()
        alert(props.name + " has been adopted!")
    }

    // Used same styling from the previous HWs and BadgerBudSummary1
    return (
        <Card style={{margin: "auto", marginTop: "1rem", maxWidth: "40rem"}}>
            <img
                src={`https://raw.githubusercontent.com/CS571-F24/hw5-api-static-content/main/cats/${props.imgIds[0]}`}
                alt={`A picture of ${props.name}`}
            />
            <h2>{props.name}</h2>
            <Button variant="secondary" onClick = {unsave}>Unselect</Button>
            <Button onClick = {adopt}>Adopt</Button>
        </Card>
    );
};

export default BadgerBudSummary2;