import { useContext, useEffect, useState } from "react";
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import BadgerBudSummary1 from "../../BadgerBudSummary1";
import { Row, Col } from "react-bootstrap";

export default function BadgerBudsAdoptable(props) {
    const buds = useContext(BadgerBudsDataContext);
    // Used state variable for the filter
    const [filter, setFilter] = useState([])

    // Got help from Office Hours for doing the instant page updates
    useEffect(() => {
        updateBuds()
    }, [buds])

    // Peer Mentor helped me come up with function
    // Filters to only include cats that are not part of savedCats and not a part of adoptedCats
    function updateBuds() {
        const savedCatIds = JSON.parse(sessionStorage.getItem("savedCatIds")) || []
        const adoptedCatIds = JSON.parse(sessionStorage.getItem("adoptedCatIds")) || [];
        setFilter(buds.filter(bud => !savedCatIds.includes(bud.id) && !adoptedCatIds.includes(bud.id)))
    }

    // Used a conditional to determine if the page should display a message or not, didn't use the question mark because I felt the code was getting too long
    let showEmptyMessage = filter.length > 0

    // Used same filtering code from last HWs
    return <div>
        <h1>Available Badger Buds</h1>
        <p>The following cats are looking for a loving home! Could you help?</p>

        {showEmptyMessage && <Row>
            {filter.map(bud => (
                <Col xs = {12} sm = {12} md = {6} lg = {4} xl = {3} key = {bud.id}>
                    <BadgerBudSummary1 {...bud} updateBuds = {updateBuds}/>
                </Col>
            ))}
        </Row>}
        {!showEmptyMessage && <p>No buds are available for adoption!</p>}
    </div>
}