import React from 'react';
import {Button} from "@mui/material";
import {useNavigate } from "react-router-dom";

function App() {

    const [state, setState] = React.useState(5)
    const navigate = useNavigate();

    const increment = () => {
        setState(state + 1)
    }

    const decrement = () => {
        setState(state - 1)
    }

    const onClickHandler = () => {
        navigate("/home")
    }

    const navigateFunction = (path) => {
        console.log('123')
        navigate(path)
    }


    return (
        <>
            <header>
                <Button onClick={() => navigate("/home")}>home</Button>
                <Button onClick={() => navigate("/123")}>home</Button>
                <Button onClick={() => navigateFunction("/345")}>home</Button>

            </header>
            <div>
                <img src={require("./assets/react.svg")} alt="react"/>
            </div>
            <div>
                <Button color="error">Silamaze</Button>
            </div>

            <div>

                <Button onClick={increment}>increment</Button>
                {state}
                <Button onClick={decrement}>decrement</Button>
            </div>

        </>
    )
}


export default App
