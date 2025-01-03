import { BrowserRouter, Route, Routes } from "react-router-dom";

import BadgerBuds from "../BadgerBuds";
import BadgerBudsLanding from "./pages/BadgerBudsLanding"
import BadgerBudsAdoptable from "./pages/BadgerBudsAdoptable";
import BadgerBudsBasket from "./pages/BadgerBudsBasket";
import BadgerBudsNoMatch from "./pages/BadgerBudsNoMatch";

// I used lecutre examples and this source to better understand routing: https://www.w3schools.com/react/react_router.asp

export default function BadgerBudsRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<BadgerBuds />}>
                <Route index element={<BadgerBudsLanding />} />
                <Route path = "available-cats" element = {<BadgerBudsAdoptable/>} />
                <Route path = "basket" element = {<BadgerBudsBasket/>} />
                <Route path = "*" element = {<BadgerBudsNoMatch/>} />
                {/* TODO: Add your routes here! */}
            </Route>
        </Routes>
    </BrowserRouter>
}