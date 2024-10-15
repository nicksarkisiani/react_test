import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const navigateFunction = (path) => {
        navigate(path)
    }
    return (
        <header>
            <Button onClick={() => (navigateFunction("/home"))}>Home</Button>
            <Button onClick={() => (navigateFunction("/"))}>Main</Button>
            <Button>456</Button>

        </header>
    );
}

export default Header;