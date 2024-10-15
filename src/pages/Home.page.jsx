import React from 'react';
import {Button} from "@mui/material";
import {valueToPercent} from "@mui/material/Slider/useSlider.js";

const HomePage = () => {
    const [state, setState] = React.useState(5)

    const increment = () => {
        setState(state + 1)
    }

    const decrement = () => {
        setState(state - 1)
    }

    return (
        <div>
            <Button onClick={decrement}>-</Button>
            {state}
            <Button onClick={increment}>+</Button>
        </div>
    );
};

export default HomePage;

const action = {
    type: "INCREMENT",
    payload: {
        plus10: "10"
    }
}

const state = {
    key: "value"
}

// primitive int 5621, string "sadsdfs", boolean

// [], {
//  key
// }
