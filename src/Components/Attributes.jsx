import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faAngleDown, faQuestionCircle, faBook, faCamera, faMapMarkerAlt, faCoffee, faSearch, faSearchPlus, faUserCircle, faComment, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux"
import { set_seller_data } from '../store/action/index'
import Login from "./LoginModal"
import logo from "../UI/Logo.png";
import { storage } from '../firebase';
import "../Styling/Attributes.css";
import { createBrowserHistory } from 'history';
import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth/dist/index.esm'

import PhoneLogin from './PhoneAuth'

class Attributes extends React.Component {
    /////////////////////////////////////////////This is the Image Upload Div//////////////////////////////////////////
    constructor(props) {
        super(props);

        this.state = {
            image: null,
            ImageURL: '',
            progress: 0,
            SellData: {},
            Props: {},
            check1: false,
            check2: false,
            check3: false,
            check4: false,
            check5: false,
            check6: false,
            selectLocation: "",
            itemCondition: "",
            title: "",
            description: "",
            price: "",
            btndisabled:true,
            last:false
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }
    handleUpload = (e) => {
        const { image } = this.state;
        if (image != null) {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // progrss function ....
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState({ progress });
                },
                (error) => {
                    // error function ....
                    console.log(error);
                },
                () => {
                    // complete function ....
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        let data = this.props.SELLER_DATA;
                        let selldata = {
                            ...data,
                            url
                        }
                        //console.log(url);
                        this.setState({
                            SellData: selldata,
                            ImageURL: url,
                            check5: true
                        });
                        this.props.set_seller_data(selldata)

                    })
                });

            /////////////////////////////////////////////////////////////////////////////////////////////////////
            alert(e.target.innerText);
            /////////////////////////////////////////////////////////////////////////////////////////////////////
        }
        else {
            alert("Va rugam selectati o imagine pentru a uploada");
        }
    }
    /////////////////////////////////////////////This is the Image Upload Div//////////////////////////////////////////
    show = () => {
        alert("Va rugam sa va logati");
    }
    handleClick = (event) => {
        alert(event.target.innerText);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    setCondition = (e) => {
        alert(`${e.target.innerText} condition selected`)
        let itemCondition = e.target.innerText;
        let data = this.props.SELLER_DATA;
        let selldata = {
            ...data,
            itemCondition
        }
        //console.log(url);
        this.setState({
            SellData: selldata,
            check1: true
        });
        this.props.set_seller_data(selldata)
    }
    ////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////////
    checkAlldata = () => {
        
        let title = this.state.title;
        let description = this.state.description;
        let price = this.state.price;


        if (this.state.check1 === true && this.state.check2 === true && this.state.check3 === true && this.state.check4 === true && this.state.check5===true && this.state.check6===true) {
            let data = this.props.SELLER_DATA;
            let selldata = {
                ...data,
                title,
                description,
                price
            }
            this.props.set_seller_data(selldata);
            alert(`${firebase.auth().currentUser.displayName} Apasati Next pentru a continua`)
            this.setState({
                SellData: selldata,
                btndisabled:false,
                last:true
            });
        }
        else{
            alert(`${firebase.auth().currentUser.displayName} Verificati toate campurile pentru a continua`);
        }
        //console.log(url);
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    setLocation = (e) => {
        let selectLocation = e.target.value
        alert(`${selectLocation} este locatia selectata`)
        let data = this.props.SELLER_DATA;
        let selldata = {
            ...data,
            selectLocation
        }
        this.props.set_seller_data(selldata);
        this.setState
            ({
                SellData: selldata,
                check6: true,
                selectLocation:e.target.value
            });
    }
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    render() {
        //console.log("ATTRIBUTES==>", this.props.SELLER_DATA)
        console.log("the Attributes data props is====>", this.props.SELLER_DATA)
        //  console.log("dddddddddd==>",this.state.selectValue)        
        return (
            <div>
                {
                    (this.props.USER_AUTH_DATA.isSignedIn)
                        ?
                        (
                            <div>
                                <nav>
                                    <Link to="/sell/attribute">
                                        <FontAwesomeIcon style={{ fontSize: "25px", marginTop: "20px", marginLeft: "40px" }} icon={faArrowLeft} />
                                    </Link>
                                    <a href="/">
                                    <img id="logo" src={logo} alt="" />
                                    </a>
                                </nav>
                                <h3 className="text-center">Posteaza anuntul tau</h3>
                                <div id="form">
                                    <h4>CATEGORIA SELECTATA</h4>
                                    <h6>{this.props.SELLER_DATA.Category}/{this.props.SELLER_DATA.SubCategory} <Link to="/sell">Modifica</Link> </h6>
                                    <hr />
                                    <h4>INCLUDE CATEVA DETALII</h4>
                                    <h6>Oferit de *</h6>

                                    <button style={{ marginLeft: "12px" }} onClick={(e) => this.setCondition(e)} type="button" className="btn btn-outline-dark">Firma</button>
                                    <button style={{ marginLeft: "12px" }} onClick={(e) => this.setCondition(e)} type="button" className="btn btn-outline-dark">Persoana fizica</button>
                                    <br /><br />
                                    <label>
                                        Titlul anuntului <br />
                                        <input onChange={(e) => this.setState({ title: e.target.value,check2:true })} className="form-control" type="text" placeholder="titlul anuntului"  />
                                        <span className="text-info" style={{ fontSize: "12px" }}>Este necesar sa introduceti minim 5 caractere pentru a continua.</span>

                                    </label>

                                    <br />


                                    <label>
                                        Descriere <br />
                                        <textarea onChange={(e) => this.setState({ description: e.target.value,check3:true })} className="form-control text-dark" cols="51.5" rows="8"></textarea>
                                        <span className="text-info" style={{ fontSize: "12px" }}>Este necesar sa introduceti minim 20 caractere pentru a continua.</span>
                                        <br />

                                    </label>

                                    <hr />
                                    <h4>SETEAZA UN PRET</h4>

                                    <label>
                                        <input id="priceuser" onChange={(e) => this.setState({ price: e.target.value,check4:true })} className="form-control" type="number" placeholder="Pret in Lei(RON)" max="10000000000" min="1" />

                                    </label>

                                    <br />

                                    <hr />
                                    {/* <h4>UPLOAD UP TO 12 PHOTOS</h4> */}
                                    <h4>UPLOADEAZA FOTOGRAFIA</h4>


                                    {/* Here the uploaded image will be here */}

                                    <div style={{maxWidth:"90%"}} id="logindiv">
                                        <progress style={{ width: "80%", borderRadius: "10px" }} className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" value={this.state.progress} max="100" />
                                        <br />
                                        <input className="btn btn-outline-transparent" type="file" onChange={this.handleChange} /><br />
                                        <button style={{ marginTop: "10px", marginLeft: "5%", marginBottom: "10px" }} className="btn btn-success" onClick={(e) => this.handleUpload(e)}>Upload</button>
                                        <br />
                                        <img src={this.state.ImageURL || 'http://via.placeholder.com/400x300'} style={{maxWidth:"90%"}} alt="Uploadeaza imagine" height="auto"  />
                                    </div>
                                    {/* Here the uploaded image will be here */}



                                    <hr />

                                    <h4>CONFIRMA LOCATIA</h4>

                                    <div>
                                        <div style={{ display: "flex" }} className="input">
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
                                    </div>

                                    <hr />


                                    <h4>REVEZI DETALII ANUNT</h4>


                                    <div style={{ display: "flex" }}>

                                        <img id="userphoto" src={firebase.auth().currentUser.photoURL} alt="Aceasta este imaginea" />

                                        <label className="text-info" style={{ marginLeft: "5%" }} htmlFor="rid">
                                            Nume:
                             <input clas="gettedname" value={firebase.auth().currentUser.displayName} className="text-dark form-control" type="text" />
                                        </label>

                                    </div>

                                    <br />
                                    <br />
                                    <h6 className="text-info">{firebase.auth().currentUser.displayName} va rugam fiti de acord cu termenii si conditiile noastre.</h6>

                                    <button onClick={this.checkAlldata} className="btn btn-success">Sunt de acord</button>

                                    {(this.state.check1===true&&this.state.check2&&this.state.check3&&this.state.check4&&this.state.check5&&this.state.check6&&this.state.last)
                                    ?(
 
                                        <div>
                                        <h6 className="text-info">{firebase.auth().currentUser.displayName} Inca un pas (Autorizare prin telefon) apasati next pentru a continua *</h6>
                                        <br/>
                                        <Link to="/phoneauth" onClick={this.move} style={{ fontSize: "20px" }} className="btn btn-dark btn-lg" to="/phoneauth">Next</Link>
                                        </div>
                                    ):(
                                        <h6 className="text-danger">{this.props.USER_AUTH_DATA.name} Multumim! Va rugam completati toate campurile si revedeti termenii si conditiile pentru a continua.</h6>    
                                    )}
                                    <br />
                                    <br/>
                                </div>
                            </div>
                        ) :
                        (
                            <div>
                                {this.show}
                                <div><Login/></div>
                            </div>
                        )

                }

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    SELLER_DATA: state.app.SELL,
    USER_AUTH_DATA: state.auth.USER
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    set_seller_data: (data) => dispatch(set_seller_data(data))
})
//updating the data of the state

export default connect(mapStateToProps, mapDispatchToProp)(Attributes);