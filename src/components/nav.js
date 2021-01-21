import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styling/navstyle.css";
import { Breadcrumb, BreadcrumbItem, NavbarBrand, Button, Form, FormGroup, Label, Input, Col, FormFeedback, } from "reactstrap";
import Logo from "/Users/bartwalker/bart-walker/src/styling/img/LogoMakr-0Q7mWW.png"

export default function Nav() {
  return (
    <div>
      <div className="container">
        <div className="logo-new">
          {/* <Link to="./styling/img/BartWalkerLogo1">BartWalker</Link> */}
          <Link to="/">
            <NavbarBrand className="mr-auto"><img src={Logo} height='75px' width='300px' alt="BartWalkerLogo" /></NavbarBrand>
          </Link>
        
        <ul className="ulStyle justify-content-end">
          <li className="list-style">
            <Link to="/about">About</Link>
          </li>
          <li className="list-style">
            <Link to="/overdubs">Online Overdubs</Link>
          </li>
          <li className="list-style">
            <Link to="/lessons">Zoom Lessons</Link>
          </li>
          <li className="list-style">
            <Link to="/contact">Tour</Link>
          </li>
          <li className="list-style">
            <Link to="/media">Media</Link>
          </li>
          <li className="list-style">
            <Link to="/contact">Music</Link>
          </li>
        </ul>
        </div>
        {/* <div className="buttonNav">
          <Button type="submit" color="danger">
            LOGIN
          </Button>
        </div> */}
      </div>
    </div>
  );
}