import React, {useEffect} from 'react';
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

        </>
    )
}


export default App
