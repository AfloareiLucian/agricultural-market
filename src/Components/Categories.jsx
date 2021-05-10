import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faListAlt } from '@fortawesome/free-solid-svg-icons';
import "../Styling/Categories.css";
import { connect } from "react-redux"
import { setSelectedCategory } from '../store/action';
import { useHistory } from "react-router-dom";
import history from '../history'
import { Redirect,withRouter } from "react-router-dom";
class Categories extends React.Component {
    handleClick = (c,event) => {
        //alert(event.target.innerText);
        //////////////////////////////////////////////
        let category=c;
        let subCategory=event.target.innerText;

        let current_category = {
            Category: category,
            SubCategory:subCategory
        }

        this.props.setSelectedCategory(current_category);
 
        //history.push('/types')
        return <Redirect to="/types" />
        //////////////////////////////////////////////
       
    }

    handleClick1 = (c,s) => {
        //alert(event.target.innerText);
        //////////////////////////////////////////////
        let category=c;
        let subCategory=s;

        let current_category = {
            Category: category,
            SubCategory:subCategory
        }

        this.props.setSelectedCategory(current_category);
 
        //history.push('/types')
        return <Redirect to="/types" />
        //////////////////////////////////////////////
       
    }

    render() {
        console.log("the category selected is=====>",this.props.current_category)
        return (
            <div>
                <div id="categories">
                    <ul>
                        <div className="dropdown">
                            <button className="btn btn-transparent text-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b>PRODUSE </b>
  </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* Here the main div starts */}
                                <div style={{ marginTop: "10vh", width: "90vw", height: "fit-content", border: "1px solid black",display:"flex"}}>


                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p className="text-dark"><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Legume","")}><b>Legume</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Ardei</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Cartof</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Castraveti</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Ceapa</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Ciuperci</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Conopida</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Dovleac</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Fasole</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Mazare</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Morcov</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Pastarnac</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Patrunjel</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Pepeni</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Ridichi</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Salata-verde</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Spanac</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Telina</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Rosii</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Urzica</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Usturoi</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Varza</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Vinete</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Seminte","")}><b>Seminte</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Seminte",e)}>Flori</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Seminte",e)}>Legume</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Seminte",e)}>Plante-aromatice</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Buruieni","")}><b>Buruieni</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Ambrosia</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Busuioc</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Costrei</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Doritoare</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Hirusor</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Loboda</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Meisor</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Musetel</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Mustar-salbatic</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Palamida</Link></p>
                                        </div>

                                    </div>


                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Cereale","")}><b>Cereale</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale",e)}>Grau</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale",e)}>Orz</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale",e)}>Ovaz</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale",e)}>Porumb</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Aromatice & Condimentare","")}><b>Aromatice & Condimentare</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Anason</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Asmatui</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Busuioc</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Chimen</Link></p>
                                            <p><Link to="/types" to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Cimbru</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Coriandru</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Lavanda</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Leustean</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Maghiran</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Marar</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Menta</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Roinita</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Rozmarin</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Salvia</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Stanjenel</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Tarhon</Link></p>
                                        </div>


                                    </div>



                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Arbusti","")}><b>Arbusti</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Afin</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Agris</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Alun</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Aronia</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Capsun</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Catina</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Coacaz</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Kiwi</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Mur</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Smochin</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Soc</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Vita-de-vie</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Zmeur</Link></p>
                                        </div>

            
                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Ingrasaminte","")}><b>Ingrasaminte</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Arbusti-decorativi</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Capsun</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Conifere</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Gazon</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Orhidee</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Trandafiri</Link></p>
                                        </div>
                                    </div>



                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Pomi","")}><b>Pomi</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Cais</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Castan</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Cires</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Gutui</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Mar</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Migdal</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Nuc</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Par</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Piersic</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Prun</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Visin</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Plante","")}><b>Plante</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Camelina</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Floarea-soarelui</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Galbenele</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Rapita</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Sfecla</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Soia</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Sorg</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Trifon</Link></p>
                                        </div>


                                    </div>







                                </div>
                                {/* Here the main div starts */}
                            </div>
                        </div>
                    </ul>
                </div>
                <div style={{ textAlign: "center", margin: "3%" }} id="displayDesktop" className="btn-group">
                    <button className="btn btn-dark btn-sm text-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b>PRODUSE </b>
                    </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* Here the main div starts */}
                                <div style={{ marginTop: "10vh", width: "90vw", height: "fit-content", border: "1px solid black",display:"block"}}>


                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p className="text-dark"><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume","")}><b>Legume</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Ardei</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Cartof</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Castraveti</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Ceapa</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Ciuperci</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Conopida</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Dovleac</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Legume",e)}>Fasole</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Seminte","")}><b>Seminte</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Seminte",e)}>Flori</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Seminte",e)}>Legume</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Seminte",e)}>Plante aromatice</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni","")}><b>Buruieni</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Ambrosia</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Busuioc</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Costrei</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Doritoare</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Hirusor</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Loboda</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Meisor</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Musetel</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Mustar salbatic</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Buruieni",e)}>Palamida</Link></p>
                                        </div>
                                    </div>


                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale","")}><b>Cereale</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale",e)}>Grau</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale",e)}>Orz</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale",e)}>Ovaz</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Cereale",e)}>Porumb</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare","")}><b>Aromatice & Condimentare</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Anason</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Asmatui</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Busuioc</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Chimen</Link></p>
                                            <p><Link to="/types" to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Cimbru</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Coriandru</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Lavanda</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Leustean</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Maghiran</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Marar</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Menta</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Roinita</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Rozmarin</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Salvia</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Stanjenel</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Aromatice & Condimentare",e)}>Tarhon</Link></p>
                                        </div>

                                    </div>



                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti","")}><b>Arbusti</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Afin</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Agris</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Alun</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Aronia</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Capsun</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Catina</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Coacaz</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Kiwi</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Mur</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Smochin</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Soc</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Vita de vie</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Arbusti",e)}>Zmeur</Link></p>
                                        </div>

            
                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte","")}><b>Ingrasaminte</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Arbusti decorativi</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Capsun</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Conifere</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Gazon</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Orhidee</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Ingrasaminte",e)}>Trandafiri</Link></p>
                                        </div>
                                    </div>



                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi","")}><b>Pomi</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Cais</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Castan</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Cires</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Gutui</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Mar</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Migdal</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Nuc</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Par</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Piersic</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Prun</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Pomi",e)}>Visin</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante","")}><b>Plante</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Camelina</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Floarea soarelui</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Galbenele</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Rapita</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Sfecla</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Soia</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Sorg</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Plante",e)}>Trifon</Link></p>
                                        </div>


                                    </div>







                                </div>
                                {/* Here the main div starts */}
                            </div>
                        </div>

                </div>

    
        )
    }
}
const mapStateToProps = (state) => ({
    current_category: state.app.SET_CATEGORY,
})

//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setSelectedCategory: (data) => dispatch(setSelectedCategory(data))
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Categories);