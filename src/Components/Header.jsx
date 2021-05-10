import React from 'react';

import logo from "../UI/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faAngleDown, faQuestionCircle, faBook, faCamera, faMapMarkerAlt, faCoffee, faSearch, faSearchPlus, faUserCircle, faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Login from "./LoginModal"
import { setSearchedData,showCondition} from '../store/action/index'
import "../Styling/App.css";
import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth/dist/index.esm'
import { ContactMail } from '@material-ui/icons';


class Header extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            selectLocation: "Suceava",
            search:"",
            condition:true
        }
        //alert(this.props.search_ads)
        

    }
    sign_out = () => {
        firebase.auth().signOut();
        window.location.reload();
    }
    setLocation = (e) => {
        let val = (e.target.value)
        alert(e.target.value)
        this.setState({ selectLocation: e.target.value });
    }
    dummy=(e)=>{
        if(e.target.value.length==0)
        {
        
             this.setState({condition:true})
             this.props.showCondition(this.state.condition)
        }
        this.setState({
            search:e.target.value,
            condition:false
        })

        let filteredAds = this.props.users_ads.filter(

            (ads)=>{
                return ads.title.toLowerCase().indexOf(
                    this.state.search.toLowerCase())!=-1 
            }
        );
         
         this.props.setSearchedData(filteredAds)
         //console.log("Chal raha hai Dummy",this.props.search_ads)      
    }
    
    componentDidMount()
    {
        
    }
    render() {
        this.props.showCondition(this.state.condition)
        console.log("The current condition is now in HEADER:",this.props.currentCondition)
        //For the search functionality
        {/* The actual thing from which I learnt how to develop a search functionality */}
        let filteredAds = this.props.users_ads.filter(

            (ads)=>{
                return ads.title.toLowerCase().indexOf(
                    this.state.search.toLowerCase())!=-1 
            }
        );
        {/* The actual thing from which I learnt how to develop a search functionality */}


        

        
        
        //For the search functionality
        //console.log("Do you know what this is",filteredAds)
        // console.log("DATA OF REDUX IN HEADER==>", this.props.USER_AUTH_DATA)
        return (
               

            <div >
                {/* The actual thing from which I learnt how to develop a search functionality */}
                {/* <ul>
                    {filteredAds.map((ads,i)=>{
                        return <li key={i}>{ads.title}</li>
                    })}
                    
                </ul>                 */}
                {/* This is boostrap navigation bar */}
                {/* The actual thing from which I learnt how to develop a search functionality */}

                <nav style={{ position: "relative", zIndex: "60000" }} className="navbar navbar-expand-lg navbar-light .container-fluid">
                    <a href="/">
                    <img id="logo" src={logo} alt="" />
                    </a>
                     
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                {/* This is the first item in nav bar */}
                                <div className="input">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text">
                                            <FontAwesomeIcon style={{ color: "black" }} id="Icon" icon={faSearch} />
                                        </label>
                                    </div>
                                    <select value={this.state.selectLocation}
                                        onChange={(e) => this.setLocation(e)} className="custom-select" id="inputGroupSelect01">
                                        <option id="location" value="Use Current Location">Foloseste locatia curenta</option>
                                        <option disabled id="line">________________________________________________</option>
                                        <option defaultValue="Suceava,Romania" value="Suceava,Romania">Suceava,Romania</option>
                                        <option value="Radauti">Radauti</option>
                                        <option value="Falticeni">Falticeni</option>
                                        <option value="Darmanesti">Darmanesti</option>
                                        <option value="Salcea">Salcea</option>
                                        <option value="Moldovita">Moldovita</option>
                                        <option value="Vicov">Vicov</option>
                                        <option value="Siret">Siret</option>
                                        <option value="Bosanci">Bosanci</option>
                                        <option value="Liteni">Liteni</option>
                                        <option value="Moara">Moara</option>
                                        <option value="Straja">Straja</option>
                                        <option value="Veresti">Veresti</option>
                                        <option value="Dolhasca">Dolhasca</option>
                                    </select>
                                </div>

                                {/* This will be used for mobile devices */}
                                <div style={{ position: "relative", zIndex: "1000", backgroundColor: "white" }} className="inputMobile" id="check" className="row">
                                    {
                                        (this.props.USER_AUTH_DATA.isSignedIn) ? (
                                            <img style={{ borderRadius: "50%" }} className="userico" src={firebase.auth().currentUser.photoURL} alt="...." />
                                        ) : (
                                                <div className="col-xs-6"><FontAwesomeIcon className="userico" icon={faUserCircle} /></div>
                                            )
                                    }

                                    {
                                        (this.props.USER_AUTH_DATA.isSignedIn) ? (
                                            <div style={{ fontWeight: "bolder", color: "cadetblue", fontSize: "25px", marginTop: "10px", marginLeft: "20px" }} className="col-xs-6">{firebase.auth().currentUser.displayName}</div>
                                        ) : (
                                                <div style={{ fontSize: "20px", marginTop: "10px", marginLeft: "20px" }} className="col-xs-6 text-primary">Accesati contul dvs</div>
                                            )
                                    }


                                    {/* This will be used for mobile devices */}


                                    {/* This is the first item in nav bar */}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div id="li_two" style={{marginLeft:"5px"}}>
                                    <input value={this.state.search} onChange={(e)=>this.dummy(e)} id="searchInput" type="text" className="form-control .container-fluid" placeholder="Cautati produse agricole" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div style={{ marginTop: "7px" }} className="input-group-append">
                                        <button className="input-group-text" id="basic-addon2"><FontAwesomeIcon id="Icon2" icon={faSearch} /></button>
                                    </div>
                                </div>
                                


                                <div style={{ width: "100%" }} className="inputMobile">
                                    <Link to="/sell"> <FontAwesomeIcon id="camico" icon={faCamera} />
                                        <span style={{ fontSize: "22px", marginLeft: "20px", color: "black" }}>Adauga anunt nou</span>
                                    </Link>
                                    <br />
                                    <Link to="/myads"> <FontAwesomeIcon id="camico" icon={faBook} />
                                        <span style={{ fontSize: "22px", marginLeft: "20px", color: "black" }}>Anunturile mele</span>
                                    </Link>

                                    <br />
                                    <Link to="/chat"> <FontAwesomeIcon id="camico" icon={faComment} />
                                        <span style={{ fontSize: "22px", marginLeft: "20px", color: "black" }}>Chat</span>
                                    </Link>

                                </div>


                            </li>

                            <li className="nav-item">


                                {(this.props.USER_AUTH_DATA.isSignedIn) ? (
                                    //    This is the dropdown items


                                    <div id="DropUser" className="dropdown">

                                        <button type="button" style={{ borderRadius: "50%", width: "35px", height: "35px", marginTop: "-20px", display: "flex" }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img style={{ borderRadius: "50%", width: "35px", height: "35px", marginTop: "-4.4px", marginLeft: "-5.5px" }} src={firebase.auth().currentUser.photoURL} alt="" />
                                            <FontAwesomeIcon style={{ color: "grey", fontWeight: "initial" }} id="Icon" icon={faAngleDown} />
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <Link style={{ marginLeft: "0%", marginBottom: "5px" }} to="/sell" className="btn btn-warning btn-outline-info btn-block text-left" type="button"><FontAwesomeIcon id="camico" icon={faCamera} /> <span style={{ fontSize: "18px" }}> Adauga un anunt</span></Link>
                                            <Link style={{ marginLeft: "0%", marginBottom: "5px" }} to="/MyAds" className="btn btn-secondary btn-block btn-outline-light text-left" type="button">
                                                <FontAwesomeIcon id="camico" icon={faBook} /> <span style={{ fontSize: "20px" }}>Anunturile mele</span></Link>
                                            <button style={{ width: "100%" }} className="btn btn-danger" onClick={this.sign_out}><span style={{ fontSize: "20px" }}>Delogare !</span></button>

                                        </div>
                                    </div>

                                    //    This is the drop down items
                                ) : (
                                        <div id="btnbtnlogin" className="btn btn-transparent"> <Link className="btn btn-success btn-lg" to="/login">Logare</Link> </div>
                                    )}


                                <div className="inputMobile">
                                    <Link> <FontAwesomeIcon id="camico" icon={faQuestionCircle} />
                                        <span style={{ fontSize: "22px", marginLeft: "20px", color: "black" }}>Help</span>
                                    </Link><br />

                                    {(this.props.USER_AUTH_DATA.isSignedIn) ? (
                                        <div>
                                            <div>
                                                <button onClick={this.sign_out} className="btn btn-outline-light btn-danger" style={{ textAlign: "center", fontSize: "25px" }}>Delogare</button>
                                            </div>
                                        </div>
                                    ) : (
                                            <div>
                                                <div className="btn btn-primary" style={{ textAlign: "center", fontSize: "25px" }}><Link className="btn btn-primary btn-lg" to="/login">Logare</Link></div>
                                            </div>
                                        )}


                                </div>

                            </li>
                            
                            <li className="nav-item">
                                {
                                    (this.props.USER_AUTH_DATA.isSignedIn) ?
                                        (
                                            <Link to="/sell" id="sellbtn" className="btn btn-info">Adauga anunt nou</Link>
                                        ) :
                                        (
                                            // <Link id="sellbtn" to="" className="btn btn-info">SELL</Link>
                                            <div>
                                                <Link id="sellbtn" className=" btn btn-info btn-lg" to="/login">Adauga anunt nou</Link>
                                                {/* <div className="btn btn-outline-dark btn-warning" style={{ marginLeft: "170%", marginTop: "2%" }}><Login /></div> */}
                                            </div>
                                        )
                                }
                                
                            </li>
                        </ul>

                    </div>
                </nav >
                {/* This is bootstrap navigation bar */}

            </div >
        );
    }
}


const mapStateToProps = (state) => ({
    USER_AUTH_DATA: state.auth.USER,
    users_ads: state.app.GET_SELL,
    search_ads: state.app.SETSEARCHEDDATA,
    currentCondition:state.app.SETCONDITION
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setSearchedData: (data) => dispatch(setSearchedData(data)),
    showCondition:(data)=>dispatch(showCondition(data))
})
//updating the data of the state

export default connect(mapStateToProps, mapDispatchToProp)(Header);