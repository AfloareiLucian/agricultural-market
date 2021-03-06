import React from 'react';

import logo from "../UI/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faShoppingCart, faAngleDown, faQuestionCircle, faBook, faCamera, faMapMarkerAlt, faCoffee, faSearch, faSearchPlus, faUserCircle, faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Login from "./LoginModal"
import { setCurrentKey } from '../store/action/index'
import { add_bookmark } from '../store/action/index'
import "../Styling/App.css";
import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth/dist/index.esm'
import { Button } from 'react-bootstrap';



class Ads extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key: "",
            icocolor: "black",
            isFavorite: false,
            showDetails: false
        }
    }
    render() {

        console.log("The key is here/::::::", this.props.SET_KEY)
        return (
            <div style={{ borderRadius: "1%",boxShadow:"2px 1px 2px 1px silver" }}>
                <Link onClick={() => this.props.setCurrentKey(this.props.index)} to="/AdDetails" className="btn btn-transparent">
                    {/* <Link className="btn btn-transparent"> */}
                    <div className="card" style={{ width: '17rem' }}>
                        <img style={{ maxWidth: '17rem', height: "10rem", border: "1px solid black" }} className="card-img-top" src={this.props.url} alt="Card image cap" />
                        <div className="card-body">
                            <p id="title" className="card-text text-dark text-left">{this.props.title}</p>
                            <div style={{ display: "flex" }}>
                                <p style={{ fontSize: "12px" }} className="card-text text-secondary text-left">{this.props.time}</p>
                                <p style={{ fontSize: "12px",fontFamily:"monospace",display:"flow-root",marginLeft:"5%" }} className="card-text text-primary text-right">{this.props.location}</p>

                            </div>


                        </div>
                    </div>
                    {/* </Link> */}
                </Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    SET_KEY: state.app.SET_KEY,
    GET_BOOKMARK: state.app.GET_BOOKMARKED
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setCurrentKey: (data) => dispatch(setCurrentKey(data)),
    add_bookmark: (i) => dispatch(add_bookmark(i))
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Ads);