import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faCheck,faQuestionCircle, faBook, faCamera, faMapMarkerAlt, faCoffee, faSearch, faSearchPlus, faUserCircle, faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import "../Styling/Success.css";
import { connect } from "react-redux"
import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth/dist/index.esm'
import history from '../history'
import { DesktopWindows } from "@material-ui/icons";
class Success extends React.Component {
    go=()=>{
        firebase.auth().signOut();
        window.location.reload();
        history.push('/')
    }
    render() {
        return (
            <div>
                {(this.props.USER_AUTH_DATA.isSignedIn) ? (
                    <div>
                        <h1 className="text-success" style={{ textAlign: "center", marginTop: "20vh" }}>Felicitari! </h1>
                        <h3 style={{ textAlign: "center", marginTop: "20vh" }} className="text-info">Ai postat anuntul cu succes. Va multumim!</h3>
                        <div style={{ textAlign: "center", marginTop: "10vh" }}> <button className="btn btn-primary btn-outline-warning btn-lg" onClick={this.go}>Mergi la pagina principala</button> </div>
                    </div>

                ) : (
                        <div style={{ textAlign: "center", marginTop: "50vh" }}> <button className="btn btn-primary btn-outline-warning btn-lg" onClick={this.go}>Mergi la pagina principala</button> </div>
                    )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    USER_AUTH_DATA: state.auth.USER
})

export default connect(mapStateToProps, null)(Success);