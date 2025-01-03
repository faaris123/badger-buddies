import { useContext, useState, useEffect } from "react";
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext";
import BadgerBudSummary2 from "../../BadgerBudSummary2";
import { Row, Col } from "react-bootstrap";

export default function BadgerBudsBasket(props) {
    const buds = useContext(BadgerBudsDataContext);
    const [filter, setFilter] = useState([]);

    // Reused code from BadgerBudsAdoptable
    useEffect (() => {
        updateBuds()
    }, [buds])

    // Reused code from BadgerBudsAdoptable but changed the setFilter so includes mathcing ids
    // Filters to only include cats that are part of savedCats and not a part of adoptedCats
    function updateBuds() {
        const savedCatIds = JSON.parse(sessionStorage.getItem("savedCatIds")) || []
        const adoptedCatIds = JSON.parse(sessionStorage.getItem('adoptedCatIds')) || [];
        setFilter(buds.filter(bud => savedCatIds.includes(bud.id) && !adoptedCatIds.includes(bud.id)))
    }

    // Reused code from BadgerBudsAdoptable
    let showEmptyMessage = filter.length > 0

    // Reused code from BadgerBudsAdoptable
    return <div>
        <h1>Badger Buds Basket</h1>
        <p>These cute cats could be all yours!</p>
        {showEmptyMessage && <Row>
            {filter.map(bud => (
                <Col xs = {12} sm = {12} md = {6} lg = {4} xl = {3} key = {bud.id}>
                    <BadgerBudSummary2 {...bud} updateBuds = {updateBuds}/>
                </Col>
            ))}
        </Row>}
        {!showEmptyMessage && <p>You have no buds in your basket!</p>}
    </div>
}