import React from 'react'

import '../Styling/Sell.css'


import logo from "../UI/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faAngleDown, faQuestionCircle, faBook, faCamera, faMapMarkerAlt, faCoffee, faSearch, faSearchPlus, faUserCircle, faComment, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Login from "./LoginModal"
import history from '../history'
import "../Styling/App.css";
import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth/dist/index.esm'

import { set_seller_data } from '../store/action/index'


class Sell extends React.Component {
    constructor() {
        super()
        this.state = {
            category: "",
            SellData: {},
            condition: false
        }
    }

    handleClick = (c,event) => {
        alert(event.target.innerText);
        //////////////////////////////////////////////
        let name = firebase.auth().currentUser.displayName;
        let email = firebase.auth().currentUser.email;
        let photo = firebase.auth().currentUser.photoURL;
        let category=c;
        let subCategory=event.target.innerText;

        let Selldata = {
            SellerName: name,
            SellerEmail: email,
            SellerPhoto: photo,
            Category: category,
            SubCategory:subCategory
        }
        console.log("Inside==>", this.state.SellData)
        this.props.set_seller_data(Selldata)
        this.setState({
            SellData: Selldata,
            condition: true
        })
        //////////////////////////////////////////////
        
    }
    componentDidUpdate = () => {
        console.log("SELL DATA====>", this.state.SellData)
    }
    render() {
     
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
                                    {
                                        (this.state.condition) ? (
                                            <Link to="/sell/attribute"><button style={{ marginRight: "20px", marginTop: "10px" }} className="btn-lg btn-success float-right">Next<FontAwesomeIcon style={{ fontSize: "25px", marginLeft: "10px" }} icon={faArrowRight} /></button></Link>
                                        ) : (
                                                <span></span>
                                            )

                                    }
                                </nav>
                                <h1 id="cat">Selecteaza categoria</h1>
                                {/* This is the categories things */}

                                <div className="list-group">


                                    {/* wait wait and wait wait wait and wait wait wait and wait wait wait and wait wait wait and wait wait wait and wait */}
                                   

                                        
                                           <details> 
                                <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Legume</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Ardei</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Cartof</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Castraveti</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Ceapa</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Ciuperci</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Conopida</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Dovleac</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Fasole</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Mazare</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Morcov</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Pastarnac</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Patrunjel</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Pepeni</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Ridichi</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Salata verde</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Spanac</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Telina</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Rosii</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Urzica</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Usturoi</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Varza</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume", e)}>Vinete</Link></p>
                                            </details>
                                        

                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Seminte</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Seminte", e)}>Flori</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Seminte", e)}>Legume</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Seminte", e)}>Plante aromatice</Link></p>                                 
                                        </details>

                                       <details>
                                       <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Buruieni</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni", e)}>Ambrosia</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni", e)}>Busuioc</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni", e)}>Costrei</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni", e)}>Doritoare</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni", e)}>Hirusor</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni", e)}>Loboda</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni", e)}>Meisor</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni", e)}>Musetel</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni", e)}>Mustar salbatic</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni", e)}>Palamida</Link></p>
                                        </details>
                                
                                       <details>
                                            <summary className="list-group-item list-group-item-action  btn-lg btn-block bg-primary text-light"><b>Cereale</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale", e)}>Grau</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale", e)}>Orz</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale", e)}>Ovaz</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale", e)}>Porumb</Link></p>
                                        </details>

                                        <details>
                                        <summary className="list-group-item list-group-item-action  btn-lg btn-block bg-primary text-light"><b>Aromatice & Condimentare</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Anason</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Asmatui</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Busuioc</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Chimen</Link></p>
                                            <p><Link to="/sell/attribute" to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Cimbru</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Coriandru</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Lavanda</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Leustean</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Maghiran</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Marar</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Menta</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Roinita</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Rozmarin</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Salvia</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Stanjenel</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare", e)}>Tarhon</Link></p>
                                        </details>
                                
                                    

                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Arbusti</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Afin</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Agris</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Alun</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Aronia</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Capsun</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Catina</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Coacaz</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Kiwi</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Mur</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Smochin</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Soc</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Vita de vie</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti", e)}>Zmeur</Link></p>
                                        </details>


                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Ingrasaminte</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte", e)}>Arbusti decorativi</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte", e)}>Capsun</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte", e)}>Conifere</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte", e)}>Gazon</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte", e)}>Orhidee</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte", e)}>Trandafiri</Link></p>
                                        </details>
                                    



                                    

                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Pomi</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi", e)}>Cais</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi", e)}>Castan</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi", e)}>Cires</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi", e)}>Gutui</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi", e)}>Mar</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi", e)}>Migdal</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi", e)}>Nuc</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi", e)}>Par</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi", e)}>Piersic</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi", e)}>Prun</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi", e)}>Visin</Link></p>
                                        </details>

                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Plante</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante", e)}>Camelina</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante", e)}>Floarea soarelui</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante", e)}>Galbenele</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante", e)}>Rapita</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante", e)}>Sfecla</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante", e)}>Soia</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante", e)}>Sorg</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante", e)}>Trifon</Link></p>
                                        </details>

                
                                </div>




                                {
                                    (this.state.condition) ? (
                                        <Link to="/sell/attribute"><button style={{ marginRight: "20px", marginTop: "10px" }} className="btn-lg btn-block btn-success float-center">Next<FontAwesomeIcon style={{ fontSize: "25px", marginLeft: "10px" }} icon={faArrowRight} /></button></Link>
                                    ) : (
                                            <span></span>
                                        )

                                }
                                {/* This is the categories things */}
                            </div>
                        ) :
                        (
                            <div style={{ marginTop: "50vh" }}>

                                <h1 className="text-center text-warning">Draga utilizator. Va rugam sa va logati pentru a continua</h1>

                                <div className="text-center"><Link className="btn btn-primary btn-lg" to="/">Login</Link></div>
                            </div>
                        )

                }

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    SELLER_DATA: state.app.Sell,
    USER_AUTH_DATA: state.auth.USER
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    set_seller_data: (data) => dispatch(set_seller_data(data))
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Sell);