import ReactDOMI from 'react-dom';
import App from "./App.js"
import { BrowserRouter } from "react-router-dom";


ReactDOMI.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
,document.getElementById('root'));
