import React from "react";
import {
    BsInstagram,
    BsTwitter
} from 'react-icons/bs'
import { BiWorld } from "react-icons/bi";
const Footer = () => {
    return(
        <>
                <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            
        </a>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><button class="text-muted" href="#"><BsInstagram/></button></li>
        <li class="ms-3"><button class="text-muted" href="#"><BsTwitter/></button></li>
        <li class="ms-3"><button class="text-muted" href="#"><BiWorld/></button></li>
        </ul>
    </footer>
    </div>
        </>
    )
}
export default Footer;