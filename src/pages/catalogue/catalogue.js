import React, {Component} from 'react';
import './catalogue_style.css'
import '../../../public/css/main.css'
import '../../../public/css/common.css'
import logoAsmodine from '../../img/logo-asmodine.png';
import facebook from '../../img/facebook.png';
import pinterest from '../../img/pinterest.png';
import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';
import google from '../../img/google.png';
import femme from '../../img/femme.png'
import backgroundLeftRsAsmodine from '../../img/background-left-rs-asmodine.jpg';
import BackgroundRightNewsletterAsmodine from '../../img/Background-right-newsletter-Asmodine.jpg';


class Catalogue extends Component {
    constructor() {
        super();
        this.state = {
            value: 1,
            page: 1,
        }
    }

    onClickLi(value) {
        this.setState({value:value});
    }

    onClickPage(value){
        this.setState({page:value});
    }

    render() {
        return (
            <div className="catalogue">
                <div id="header">
                    <div className="container">
                        <div className="header-top">
                            <div className="row">
                                <div className="col-sm-5 col-md-5 header-top-left">
                                    <a href="#">
                                        <span/> FEMME
                                    </a>
                                    <a href="#">
                                        <span/> HOMME
                                    </a>
                                    <a href="#">
                                        <span/> MARQUES
                                    </a>
                                    <a href="#">
                                        <span/> PROMOS
                                    </a>
                                    <a href="#">
                                        <span/> CONCEPT
                                    </a>
                                </div>
                                <div className="col-sm-3 col-md-3 header-top-middle">
                                    <div id="logo" className="clearfix">
                                        <a className="navbar-brand" href="#">
                                            <img src={logoAsmodine} alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4 header-top-right">
                                    <div id="client_info">
                                        <ul className="user-center">
                                            <li className="user-SE">
                                                <a href="">
                                                    <span className="user-cc">SE CONNETER</span>
                                                </a>
                                            </li>
                                            <li className="user-profil">
                                                <a href="">
                                                    <div className="user-shop">
                                                        JE CREE MON PROFIL MORPHO
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="search-container">
                            <div className="search-box">
                                <input type="text" placeholder="Rechercher un article"/>
                                <div className="search-box-btn">
                                    <span className="glyphicon glyphicon-search"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div id="main">
                    <div className="container ">
                        <div className="row">
                            <div className="catalogue-content col-md-12">

                                <div className="bread-crumbs clearfix">
                                    <div className="bread-cumbs-link pull-left">
                                        <span>Accueil</span>
                                        <span>Femme</span>
                                        <span>Vetements</span>
                                        <span className="current-position">Robes(1200 artlcles)</span>
                                    </div>
                                    <div className="pull-right">
                                        <img src="" alt=""/>
                                        <select name="" id="">
                                            <option value="1">€</option>
                                            <option value="2">$</option>
                                        </select>
                                    </div>
                                </div>
                                <section className="introduce">
                                    <h1>ROBES FEMMES</h1>
                                    <p>Robe longue, décolletée et fashion pour une soirée romantique, indispensable
                                        petite robe noire pour un rendez-vous pro, ou robe simple, confortable et
                                        colorée à
                                        porter tous les jours… A chaque occasion sa robe, pourvu qu’on ait le choix !
                                        Et pour trouver la robe qui correspond à chaque moment de votre journée,
                                        Asmodine
                                        vous conseille sur la taille idéale à choisir en fonction de chaque modèle et
                                        chaque
                                        marque. Poitrine généreuse, épaules menues, longues jambes… Grâce à votre
                                        boutique
                                        sur mesure Asmotaille, vous êtes sûre de trouver la robe qui vous va
                                        parfaitement en
                                        fonction de tous les détails de votre morphologie !Trouver plus de 987 Robes
                                        actuellement en stock sur Asmodine
                                    </p>
                                </section>
                                <div className="row shop-box">
                                    <div className="col-xs-3 col-sm-3 col-md-3 shop-aside">
                                        <section className="shop-filter">
                                            <h4>Personal shopper</h4>
                                            <ul className="shop-filter-list">
                                                <li onClick={this.onClickLi.bind(this, 0)}>Style
                                                    {this.state.value === 0 ?
                                                        <div className="shop-filter-form">
                                                            <label>
                                                                <input name="style" type="radio"/>Manteaux</label>
                                                            <label>
                                                                <input name="style" type="radio"/>Pantalons</label>
                                                            <label>
                                                                <input name="style" type="radio"/>Jeans</label>
                                                            <label>
                                                                <input name="style" type="radio"/>Chemises</label>
                                                            <label>
                                                                <input name="style" type="radio"/>Tops</label>
                                                        </div>
                                                        : null}
                                                </li>
                                                <li onClick={this.onClickLi.bind(this, 1)}>Type
                                                    {this.state.value === 1 ?
                                                        <div className="shop-filter-form">
                                                            <label>
                                                                <input name="type" type="radio"/>Robes de soiree</label>
                                                            <label>
                                                                <input name="type" type="radio"/>Robes d'ete</label>
                                                            <label>
                                                                <input name="type" type="radio"/>Robes de cocktail</label>
                                                            <label>
                                                                <input name="type" type="radio"/>Robes de plage</label>
                                                        </div>
                                                        : null}

                                                </li>
                                                <li onClick={this.onClickLi.bind(this, 2)}>Taille
                                                    {this.state.value === 2 ?
                                                        <div className="shop-filter-form">
                                                            <label>
                                                                <input name="taille" type="radio"/>32</label>
                                                            <label>
                                                                <input name="taille" type="radio"/>34</label>
                                                            <label>
                                                                <input name="taille" type="radio"/>36</label>
                                                            <label>
                                                                <input name="taille" type="radio"/>38</label>
                                                            <label>
                                                                <input name="taille" type="radio"/>40</label>
                                                            <label>
                                                                <input name="taille" type="radio"/>42</label>
                                                        </div>
                                                        : null}
                                                </li>
                                                <li onClick={this.onClickLi.bind(this, 3)}>Prix
                                                    {this.state.value === 3 ?
                                                        <div className="shop-filter-form">
                                                            <label>
                                                                <input name="prix" type="radio"/>Moins de 50 euros</label>
                                                            <label>
                                                                <input name="prix" type="radio"/>Entre 50 et 100 euros</label>
                                                            <label>
                                                                <input name="prix" type="radio"/>Entre 100 et 200 euros</label>
                                                        </div>
                                                        : null}
                                                </li>
                                                <li onClick={this.onClickLi.bind(this, 4)}>Couleur
                                                    {this.state.value === 4 ?
                                                        <div className="shop-filter-form">
                                                            <label>
                                                                <input name="couleur" type="radio"/>Noir</label>
                                                            <label>
                                                                <input name="couleur" type="radio"/>Blanc</label>
                                                            <label>
                                                                <input name="couleur" type="radio"/>Bleu</label>
                                                            <label>
                                                                <input name="couleur" type="radio"/>Rouge</label>
                                                        </div>
                                                        : null}
                                                </li>
                                                <li onClick={this.onClickLi.bind(this, 5)}>Longueur
                                                    {this.state.value === 5 ?
                                                        <div className="shop-filter-form">
                                                            <label>
                                                                <input name="longueur" type="radio"/>Court</label>
                                                            <label>
                                                                <input name="longueur" type="radio"/>Moyenne</label>
                                                            <label>
                                                                <input name="longueur" type="radio"/>Long</label>
                                                            <label>
                                                                <input name="longueur" type="radio"/>Robes de soiree</label>
                                                            <label>
                                                                <input name="longueur" type="radio"/>Robes de soiree</label>
                                                        </div>
                                                        : null}
                                                </li>
                                                <li onClick={this.onClickLi.bind(this, 6)}>Marque
                                                    {this.state.value === 6 ?
                                                        <div className="shop-filter-form">
                                                            <label>
                                                                <input name="marque" type="radio"/>ASOS</label>
                                                            <label>
                                                                <input name="marque" type="radio"/>Boden</label>
                                                            <label>
                                                                <input name="marque" type="radio"/>Bonobo</label>
                                                            <label>
                                                                <input name="marque" type="radio"/>Cache cache</label>
                                                            <label>
                                                                <input name="marque" type="radio"/>Guess</label>
                                                            <label>
                                                                <input name="marque" type="radio"/>Only</label>
                                                        </div>
                                                        : null}
                                                </li>
                                            </ul>
                                            <a className="shop-filter-more" href="">Reinissjadj les fileters</a>
                                        </section>


                                    </div>
                                    <div className="col-xs-9 col-sm-9 col-md-9">
                                        <div className="row">
                                            <div className="col-sm-4 col-md-4">
                                                <select className="shop-filter-select" name="" id="">
                                                    <option value="-1">Trier par</option>
                                                    <option value="1">Nouveautes</option>
                                                    <option value="2">Croissant</option>
                                                    <option value="3">Decroissant</option>
                                                    <option value="4">Tendances</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4 col-md-4">

                                            </div>
                                            <div className="col-sm-4 col-md-4">
                                                <div className="page-container">
                                                    <div className="page-arrow-left">&lsaquo;</div>
                                                    <ul className="page-list">
                                                        <li className={this.state.page===1? "active" : null} onClick={this.onClickPage.bind(this,1)}>1</li>
                                                        <li className={this.state.page===2? "active" : null} onClick={this.onClickPage.bind(this,2)}>2</li>
                                                        <li className={this.state.page===3? "active" : null} onClick={this.onClickPage.bind(this,3)}>3</li>
                                                        <li className={this.state.page===4? "active" : null} onClick={this.onClickPage.bind(this,4)}>4</li>
                                                        <li className={this.state.page===5? "active" : null} onClick={this.onClickPage.bind(this,5)}>5</li>
                                                    </ul>
                                                    <div className="page-arrow-left">&rsaquo;</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                <div className="shop-list">
                                                    <div className="shop-list-child">
                                                        <div className="shop-media">
                                                            <img src={femme} alt=""/>
                                                        </div>
                                                        <div className="row shop-list-description">
                                                            <div className="col-sm-6 col-md-6">
                                                                <h4>Guess</h4>
                                                                <small>NoEmI-Robe enjerset-jet blacj</small>
                                                            </div>
                                                            <div
                                                                className="col-sm-2 col-md-2 discount-percent-container">
                                                <span className="discount-percent">50
                                                    <sup>%</sup>
                                                </span>
                                                            </div>
                                                            <div className="col-sm-4 col-md-4">
                                                                <strong className="discount-price">50.00$</strong>
                                                                <p className="real-price">100.00$</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="shop-list">
                                                    <div className="shop-list-child">
                                                        <div className="shop-media">
                                                            <img src={femme} alt=""/>
                                                        </div>
                                                        <div className="row shop-list-description">
                                                            <div className="col-sm-6 col-md-6">
                                                                <h4>Guess</h4>
                                                                <small>NoEmI-Robe enjerset-jet blacj</small>
                                                            </div>
                                                            <div
                                                                className="col-sm-2 col-md-2 discount-percent-container">
                                                <span className="discount-percent">50
                                                    <sup>%</sup>
                                                </span>
                                                            </div>
                                                            <div className="col-sm-4 col-md-4">
                                                                <strong className="discount-price">50.00$</strong>
                                                                <p className="real-price">100.00$</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="shop-list">
                                                    <div className="shop-list-child">
                                                        <div className="shop-media">
                                                            <img src={femme} alt=""/>
                                                        </div>
                                                        <div className="row shop-list-description">
                                                            <div className="col-sm-6 col-md-6">
                                                                <h4>Guess</h4>
                                                                <small>NoEmI-Robe enjerset-jet blacj</small>
                                                            </div>
                                                            <div
                                                                className="col-sm-2 col-md-2 discount-percent-container">
                                                <span className="discount-percent">50
                                                    <sup>%</sup>
                                                </span>
                                                            </div>
                                                            <div className="col-sm-4 col-md-4">
                                                                <strong className="discount-price">50.00$</strong>
                                                                <p className="real-price">100.00$</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="shop-list">
                                                    <div className="shop-list-child">
                                                        <div className="shop-media">
                                                            <img src={femme} alt=""/>
                                                        </div>
                                                        <div className="row shop-list-description">
                                                            <div className="col-sm-6 col-md-6">
                                                                <h4>Guess</h4>
                                                                <small>NoEmI-Robe enjerset-jet blacj</small>
                                                            </div>
                                                            <div
                                                                className="col-sm-2 col-md-2 discount-percent-container">
                                                <span className="discount-percent">50
                                                    <sup>%</sup>
                                                </span>
                                                            </div>
                                                            <div className="col-sm-4 col-md-4">
                                                                <strong className="discount-price">50.00$</strong>
                                                                <p className="real-price">100.00$</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="shop-list">
                                                    <div className="shop-list-child">
                                                        <div className="shop-media">
                                                            <img src={femme} alt=""/>
                                                        </div>
                                                        <div className="row shop-list-description">
                                                            <div className="col-sm-6 col-md-6">
                                                                <h4>Guess</h4>
                                                                <small>NoEmI-Robe enjerset-jet blacj</small>
                                                            </div>
                                                            <div
                                                                className="col-sm-2 col-md-2 discount-percent-container">
                                                <span className="discount-percent">50
                                                    <sup>%</sup>
                                                </span>
                                                            </div>
                                                            <div className="col-sm-4 col-md-4">
                                                                <strong className="discount-price">50.00$</strong>
                                                                <p className="real-price">100.00$</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="shop-list">
                                                    <div className="shop-list-child">
                                                        <div className="shop-media">
                                                            <img src={femme} alt=""/>
                                                        </div>
                                                        <div className="row shop-list-description">
                                                            <div className="col-sm-6 col-md-6">
                                                                <h4>Guess</h4>
                                                                <small>NoEmI-Robe enjerset-jet blacj</small>
                                                            </div>
                                                            <div
                                                                className="col-sm-2 col-md-2 discount-percent-container">
                                                <span className="discount-percent">50
                                                    <sup>%</sup>
                                                </span>
                                                            </div>
                                                            <div className="col-sm-4 col-md-4">
                                                                <strong className="discount-price">50.00$</strong>
                                                                <p className="real-price">100.00$</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="shop-list">
                                                    <div className="shop-list-child">
                                                        <div className="shop-media">
                                                            <img src={femme} alt=""/>
                                                        </div>
                                                        <div className="row shop-list-description">
                                                            <div className="col-sm-6 col-md-6">
                                                                <h4>Guess</h4>
                                                                <small>NoEmI-Robe enjerset-jet blacj</small>
                                                            </div>
                                                            <div
                                                                className="col-sm-2 col-md-2 discount-percent-container">
                                                <span className="discount-percent">50
                                                    <sup>%</sup>
                                                </span>
                                                            </div>
                                                            <div className="col-sm-4 col-md-4">
                                                                <strong className="discount-price">50.00$</strong>
                                                                <p className="real-price">100.00$</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="shop-list">
                                                    <div className="shop-list-child">
                                                        <div className="shop-media">
                                                            <img src={femme} alt=""/>
                                                        </div>
                                                        <div className="row shop-list-description">
                                                            <div className="col-sm-6 col-md-6">
                                                                <h4>Guess</h4>
                                                                <small>NoEmI-Robe enjerset-jet blacj</small>
                                                            </div>
                                                            <div
                                                                className="col-sm-2 col-md-2 discount-percent-container">
                                                <span className="discount-percent">50
                                                    <sup>%</sup>
                                                </span>
                                                            </div>
                                                            <div className="col-sm-4 col-md-4">
                                                                <strong className="discount-price">50.00$</strong>
                                                                <p className="real-price">100.00$</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4">
                                                <div className="shop-list">
                                                    <div className="shop-list-child">
                                                        <div className="shop-media">
                                                            <img src={femme} alt=""/>
                                                        </div>
                                                        <div className="row shop-list-description">
                                                            <div className="col-sm-6 col-md-6">
                                                                <h4>Guess</h4>
                                                                <small>NoEmI-Robe enjerset-jet blacj</small>
                                                            </div>
                                                            <div
                                                                className="col-sm-2 col-md-2 discount-percent-container">
                                                <span className="discount-percent">50
                                                    <sup>%</sup>
                                                </span>
                                                            </div>
                                                            <div className="col-sm-4 col-md-4">
                                                                <strong className="discount-price">50.00$</strong>
                                                                <p className="real-price">100.00$</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 col-md-offset-8 col-sm-4 col-sm-offset-8">
                                                <div className="page-container">
                                                    <div className="page-arrow-left">&lsaquo;</div>
                                                    <ul className="page-list">
                                                        <li className="active">1</li>
                                                        <li>2</li>
                                                        <li>3</li>
                                                        <li>4</li>
                                                        <li>5</li>
                                                    </ul>
                                                    <div className="page-arrow-left">&rsaquo;</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <footer id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-md-6 col-sm-6">
                                <img src={backgroundLeftRsAsmodine} alt=""/>
                                <div className="catalogue_footer_logo">
                                    <img src={logoAsmodine}/>
                                </div>
                                <div className="catalogue_footer_text1">
                                    TELECHARGEZ L'APPLICATION
                                </div>
                            </div>
                            <div className="col col-md-6 col-sm-6">
                                <img id="" src={BackgroundRightNewsletterAsmodine} alt=""/>
                                <div className="catalogue_footer_logo1">
                                    <img src={logoAsmodine}/>
                                </div>
                                <div className="catalogue_footer_text">
                                    INSCRIVEZ VOUS A LA NEWSLETTER
                                </div>
                                <div>
                                    <div id="catalogue_footer_searchBox">
                                        <input type="text" placeholder="Adresse e-mail"/>
                                        <div className="search-box-btn">
                                            <span>JE M'INSCRIS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="footer_link">
                                <div className="col-md-4 col-sm-4 left_align">
                                    <div className="col-md-6">
                                        <div className="title">FEMME</div>
                                        <ul>
                                            <li>
                                                <a href="#">Vetements</a>
                                            </li>
                                            <li>
                                                <a href="#">Chaussures</a>
                                            </li>
                                            <li>
                                                <a href="#">Sacs</a>
                                            </li>
                                            <li>
                                                <a href="#">Accessoires</a>
                                            </li>
                                            <li>
                                                <a href="#">Bijoux</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="title">HOMME</div>
                                        <ul>
                                            <li>
                                                <a href="#">Vetements</a>
                                            </li>
                                            <li>
                                                <a href="#">Chaussures</a>
                                            </li>
                                            <li>
                                                <a href="#">Sacs</a>
                                            </li>
                                            <li>
                                                <a href="#">Accessoires</a>
                                            </li>
                                            <li>
                                                <a href="#">Bijoux</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 center_align">
                                    <div className="title">ASMODINE</div>
                                    <li>Ce qui manquait aux boutiques de mode en ligne jusqu’à aujourd’hui ? Pouvoir
                                        essayer, avant d’acheter,
                                        les articles sur votre silhouette : en fonction de tous les détails de votre
                                        morphologie...
                                        <strong>Et Asmodine est née !</strong>
                                    </li>
                                    <li>Dans la boutique sur mesure Asmodine, vous êtes sûr(e) de trouver la taille qui
                                        vous va vraiment
                                        bien !Belle carrure,taille fine, longues jambes...chaque personne a une
                                        silhoutte qui lui est
                                        particuilère et qui ne peut corresondre à des standards.D'autre part,chaque
                                        marque crée ses collections
                                        selon des modèles différent;une taille 40 ne sera jamais la meme chez l'une ou
                                        l'autre...Avec
                                        Asmodine, faire vos achats en ligne devient encore plus facile qu’en boutique,
                                        un vrai bonheur!!!
                                    </li>
                                </div>

                                <div className="col-md-4 col-sm-4 right_align">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="title">LE TOP DES MARQUES</div>
                                        <ul>
                                            <li>
                                                <a href="#">Esprit</a>
                                            </li>
                                            <li>
                                                <a href="#">Gstar Raw</a>
                                            </li>
                                            <li>
                                                <a href="#">Le temps des cerises</a>
                                            </li>
                                            <li>
                                                <a href="#">Abercrombie&fitch</a>
                                            </li>
                                            <li>
                                                <a href="#">Jack&Jeans</a>
                                            </li>
                                            <li>
                                                <a href="#">Pepe Jeans</a>
                                            </li>
                                            <li>
                                                <a href="#">Converse</a>
                                            </li>
                                            <li>
                                                <a href="#">Encore+de marques...</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="title">AIDE&CONTACT</div>
                                        <ul>
                                            <li>
                                                <a href="#">Contact</a>
                                            </li>
                                            <li>
                                                <a href="#">Plan du site</a>
                                            </li>
                                            <li>
                                                <a href="#">Partenaires</a>
                                            </li>
                                            <li>
                                                <a href="#">Vendeurs</a>
                                            </li>
                                            <li>
                                                <a href="#">Blog</a>
                                            </li>
                                            <li>
                                                <a href="#">Recrutement</a>
                                            </li>
                                            <li>
                                                <a href="#">Conditions d'utilisation</a>
                                            </li>
                                            <li>
                                                <a href="#">Mentions légales </a>
                                            </li>
                                            <li>
                                                <a href="#">Protection des données</a>
                                            </li>
                                            <li>
                                                <a href="#">CGV</a>
                                            </li>
                                            <li>
                                                <a href="#">FAQ </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="conceptBar center_align">
                                    <a href="">VOIR LE CONCEPT</a>
                                </div>
                                <div id="footer_social">
                                    <a href="https://www.facebook.com/asmodineFR" target="_blank">
                                        <img src={facebook} alt=""/>
                                    </a>
                                    <a href="https://www.pinterest.fr/asmodine_/" target="_blank">
                                        <img src={pinterest} alt=""/>
                                    </a>
                                    <a href="https://www.instagram.com/asmodine_/" target="_blank">
                                        <img src={instagram} alt=""/>
                                    </a>
                                    <a href="https://twitter.com/asmodine_" target="_blank">
                                        <img src={twitter} alt=""/>
                                    </a>
                                    <a href="https://plus.google.com/101457628203873720219" target="_blank">
                                        <img src={google} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </footer>
            </div>
        );
    }
}

export default Catalogue;
