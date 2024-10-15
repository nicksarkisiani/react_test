import React from 'react';
import {Button, Pagination} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Footer() {

    const navigate = useNavigate();

    const navigateFunction = (path) => {
        navigate(path)
    }

    return (
        <footer>
            <Pagination count={10} color="secondary" />
            {/*<Button onClick={() => (navigateFunction("/home"))}>123</Button>*/}
        </footer>
    );
}

export default Footer;