import React, {Component} from 'react';
import logoAsmodine from '../../img/logo-asmodine.png';
import main from '../../img/main.png';
import zip from '../../img/zip.png';
import femme from  '../../img/femme.png';
import encartCentreHP1 from '../../img/encart-centre-HP1.jpg';
import homme from '../../img/homme.png';
import main2 from '../../img/main2.png';
import mules from '../../img/mules.png';
import ceinture from '../../img/ceinture.png';
import mules2 from '../../img/mules2.png';
import ceinture2 from '../../img/ceinture2.png';
import product1 from '../../img/product1.png';
import product2 from '../../img/product2.jpg';
import logoAsmodineNoir2 from '../../img/logo-asmodine-noir2.png';
import col6_1 from '../../img/col6_1.png';
import col6_2 from '../../img/col6_2.png';
import col6_3 from '../../img/col6_3.png';
import col6_4 from '../../img/col6_4.png';
import backgroundLeftRsAsmodine from '../../img/background-left-rs-asmodine.jpg';
import BackgroundRightNewsletterAsmodine from '../../img/Background-right-newsletter-Asmodine.jpg';
import facebook from '../../img/facebook.png';
import pinterest from '../../img/pinterest.png';
import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';
import google from '../../img/google.png';
import brand_06 from '../../img/brand_06.png';
import brand_07 from '../../img/brand_07.png';
import brand_08 from '../../img/brand_08.png';
import brand_09 from '../../img/brand_09.png';
import brand_10 from '../../img/brand_10.png';
import brand_11 from '../../img/brand_11.png';

import './home_style.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div id="header">
                    <div className="container">
                        <div className="header-top">
                            <div className="row">
                                <div id="headerShop" className="col-sm-5 col-md-5 header-top-left">
                                    <a className="header-down" href="#">
                                        <span/> FEMME
                                    </a>
                                    <a className="header-down" href="#">
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
                                            <li id="userSE" className="user-SE">
                                                <a href="#">
                                                    <span className="user-cc">SE CONNETER</span>
                                                </a>
                                            </li>
                                            <li id="userShop" className="user-profil">
                                                <a href="#">
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
                        <div className="header-bottom">
                            <div className="search-box">
                                <input type="text" placeholder="Rechercher un article"/>
                                <div className="search-box-btn">
                                    <span className="glyphicon glyphicon-search"/>
                                </div>
                            </div>
                        </div>

                        <div className="category-box">
                            <div className="category-wrap">
                                <ul>
                                    <li>
                                        <span className="first-type">Vêtements</span>
                                        <ul className="detail-category">
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/vtements.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Maillots de bain</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-lingeriedenuit.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Lingerie de nuit</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-manteauxfemme.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Manteaux</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-pantalons.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Pantalons</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-jeans.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Jeans</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-combinaisons.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Combinaisons</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-robes.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Robes</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-chemises.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Chemises</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-vestes.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Vestes</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-tops.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Tops</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-tricots.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Pulls</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-sweats.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Sweats</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-shorts.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Shorts</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-jupes.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Jupes</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-lingerie.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Lingerie</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img src="" alt=""/>
                                                    </div>
                                                    <span>Combishorts</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img src="" alt=""/>
                                                    </div>
                                                    <span>Legging</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img src="" alt=""/>
                                                    </div>
                                                    <span>Collants</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img src="" alt=""/>
                                                    </div>
                                                    <span>Jogging</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="first-type">Sacs</span>
                                        <ul className="detail-category">
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-sacsados.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Sacs à dos</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-pochettes.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Pochettes</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-sacsamain.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Sacs à main</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="first-type">Chaussures</span>
                                        <ul className="detail-category">
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-basket.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Basket</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-bottes.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Bottes</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-sandales.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Sandales</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="first-type">Accessoires</span>
                                        <ul className="detail-category">
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-lunettesoleil.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Lunettes de soleil</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-ceintures.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Ceintures</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-gants.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Gants</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-accessoiresdecheveux.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Accessoires de cheveux</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-echarpes.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Écharpes, étoles</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-portemonnaieportefeuille.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Portemonnaie, portefeuille</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/montres.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Montres</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-chapeaux.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Bonnets et Chapeaux</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="first-type">Bijoux</span>
                                        <ul className="detail-category">
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-bracelets.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Bracelets</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-bouclesdoreilles.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Boucles d'oreilles</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-colliers.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Colliers</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-bagues.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Bagues</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="category-wrap">
                                <ul>
                                    <li>
                                        <span className="first-type">Vêtements</span>
                                        <ul className="detail-category">
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-jeans.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Jeans</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-combinaisons.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Combinaisons</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-robes.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Robes</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-chemises.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Chemises</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-vestes.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Vestes</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-tops.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Tops</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-tricots.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Pulls</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-sweats.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Sweats</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-shorts.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Shorts</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-jupes.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Jupes</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-lingerie.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Lingerie</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img src="" alt=""/>
                                                    </div>
                                                    <span>Combishorts</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img src="" alt=""/>
                                                    </div>
                                                    <span>Legging</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img src="" alt=""/>
                                                    </div>
                                                    <span>Collants</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img src="" alt=""/>
                                                    </div>
                                                    <span>Jogging</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="first-type">Sacs</span>
                                        <ul className="detail-category">
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-sacsados.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Sacs à dos</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-pochettes.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Pochettes</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-sacsamain.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Sacs à main</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="first-type">Bijoux</span>
                                        <ul className="detail-category">
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-bracelets.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Bracelets</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-bouclesdoreilles.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Boucles d'oreilles</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-colliers.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Colliers</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <div className="category-icon">
                                                        <img
                                                            src="http://beta.asmodine.com/uploads/categories/icons/icon-bagues.png"
                                                            alt=""/>
                                                    </div>
                                                    <span>Bagues</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>


                </div>
                <div id="content">
                    <div id="main_picture">
                        <div id="main_p">
                            <img src={main} alt=""/>
                        </div>
                        <h1 id="main_title">
                            PARCE QUE MA TAILLE EST UNIQUE
                        </h1>
                        <h3 id="main_subtitle">
                            Toutes vos marques préféres au meme endroit;et toujours à votre taille!
                        </h3>
                        <a href="#">
                            <div id="main_button">
                                JE CREE MON PROFIL MORPHO
                            </div>
                        </a>
                        <div id="main_logo">
                            <img src={zip} alt=""/>
                        </div>


                    </div>

                    <div id="main">
                        <div className="container">
                            <div id="col1" className="col-md-12 col-sm-12 bg_white">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <a href="#">
                                                <img src={femme} alt=""/>
                                                <div className="main_text center_align">
                                                    FEMME
                                                </div>
                                                <div className="main_button center_align">
                                                    VOIR LES PRODUITS
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-6 picture_height">
                                            <a href="#">
                                                <img src={encartCentreHP1} alt=""/>
                                                <div className="center_text center_align">
                                                    PARCE QUE MA TAILLE EST UNIQUE
                                                </div>
                                                <div className="main_button2 center_align">
                                                    VOIR LE CONCEPT
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-md-3">
                                            <a href="#">
                                                <img src={homme} alt=""/>
                                                <div className="main_text center_align">
                                                    HOMME
                                                </div>
                                                <div className="main_button center_align">
                                                    VOIR LES PRODUITS
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 bg_white">
                                <div id="col2" className="col-md-12 col-sm-12 picture_height2">
                                    <img src={main2} alt=""/>
                                    <h1 className="home_main_picture_text">DETENDEZ-VOUS </h1>
                                    <h1 className="home_main_picture_text2"> AVEC ELEGANCE</h1>
                                    <h4 className="home_main_picture_text3">Des essentiels d'inspiration athlétique
                                        pour </h4>
                                    <h4 className="home_main_picture_text4">rehausser votre look du week-enf</h4>
                                    <div id="main_picture_button"><a href="#">VOIR LA TENDANCE</a></div>
                                </div>

                            </div>
                            <div id="col3" className="col-md-12 col-sm-12 bg_white">
                                <div className="col-md-3 col-sm-3">
                                    <a href="#">
                                        <img src={mules} alt=""/>
                                        <div className="col3_text center_align">
                                            LES MULES?
                                        </div>
                                        <div className="col3_button center_align">
                                            VOIR LES MULES 2016
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <a href="#">
                                        <img src={ceinture} alt=""/>
                                        <div className="col3_text center_align">
                                            CEINTURE!
                                        </div>
                                        <div className="col3_button center_align">
                                            VOIR LES CEINTURES
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <a href="#">
                                        <img src={mules2} alt=""/>
                                        <div className="col3_text center_align">
                                            LES MULES?
                                        </div>
                                        <div className="col3_button center_align">
                                            VOIR LES MULES 2016
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <a href="#">
                                        <img src={ceinture2} alt=""/>
                                        <div className="col3_text center_align">
                                            CEINTURE!
                                        </div>
                                        <div className="col3_button center_align">
                                            VOIR LES CEINTURES
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-12 col_line">
                                    <hr/>
                                </div>
                            </div>
                            <div id="col4" className="col-md-12 col-sm-12 bg_white">
                                <h2 className="center_align">LES MEILLEURES BOUTIQUES DU MOMENT</h2>
                                <Carousel/>
                                <div className="col-md-12 col-sm-12 col_line">
                                    <hr/>
                                </div>
                            </div>
                            <div id="col5" className="col-md-12 col-sm-12  bg_white">
                                <h2 className="center_align">LES TENDANCES DU MOMENT</h2>

                                <a href="#">
                                    <div className="col-md-3 col-sm-3">
                                        <img src={product1} alt=""/>
                                        <div className="description">
                                            <div className="col-md-7 brand left_align">
                                                GUESS
                                            </div>
                                            <div className="col-md-4 price right_align">
                                                50.00€
                                            </div>
                                            <div className="col-md-12 category left_align">
                                                NOEMI-Robe en jersey-jet black

                                            </div>

                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="col-md-3 col-sm-3">
                                        <img src={product2} alt=""/>
                                        <div className="description">
                                            <div className="col-md-7 brand left_align">
                                                SWING
                                            </div>
                                            <div className="col-md-4 price right_align">
                                                56.00€
                                            </div>
                                            <div className="col-md-12 category left_align">
                                                Robe de soirée-hrllrosa/schoko
                                            </div>
                                        </div>

                                    </div>
                                </a>
                                <a href="#">
                                    <div className="col-md-3 col-sm-3">
                                        <img src={product2} alt=""/>
                                        <div className="description">
                                            <div className="col-md-7 brand left_align">
                                                SWING
                                            </div>
                                            <div className="col-md-4 price right_align">
                                                56.00€
                                            </div>
                                            <div className="col-md-12 category left_align">
                                                Robe de soirée-hrllrosa/schoko
                                            </div>

                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="col-md-3 col-sm-3">
                                        <img src={product2} alt=""/>
                                        <div className="description">
                                            <div className="col-md-7 brand left_align">
                                                SWING
                                            </div>
                                            <div className="col-md-4 price right_align">
                                                56.00€
                                            </div>
                                            <div className="col-md-12 category left_align">
                                                Robe de soirée-hrllrosa/schoko
                                            </div>

                                        </div>
                                    </div>
                                </a>

                                <div className=" col-md-12 col-sm-12 col5_button  center_align">
                                    <a href="#">PLUS DE TENDANCES</a>
                                </div>
                                <div className="col-md-12 col-sm-12 col_line">
                                    <hr/>
                                </div>
                            </div>

                            <div id="col6" className="col-md-12 col-sm-12 bg_white">
                                <div className="col-md-12 col-sm-12">
                                    <div className="col6_logo center_align">
                                        <div>
                                            <img src={logoAsmodineNoir2} />
                                            <span className="col6_text">
                            ,LE BLOG
                        </span>
                                            <h4>
                                                Les tendances mode du moment
                                            </h4>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 article center_align">
                                    <div className="col-md-3 col-sm-3">
                                        <img src={col6_1} alt=""/>
                                        <div className=" col6_text2">JUPE LONGUE+TEE-SHIRT BLANC=LE BON MIX</div>
                                        <div><a href="#">LIRE L'ARTICLE</a></div>
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        <img src={col6_2} alt=""/>
                                        <div className=" col6_text2">LES LAPINS,LE NOUVEL IMPRIME FASHION?</div>
                                        <div><a href="#">LIRE L'ARTICLE</a></div>
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        <img src={col6_3} alt=""/>
                                        <div className=" col6_text2">SOLDES ETE 2015,MODE D'EMPLOI</div>
                                        <div><a href="#">LIRE L'ARTICLE</a></div>
                                    </div>
                                    <div className="col-md-3 col-sm-3">
                                        <img src={col6_4} alt=""/>
                                        <div className=" col6_text2">JEAN+TEE-SHIRT BLANC=LE BON MIX</div>
                                        <div><a href="#">LIRE L'ARTICLE</a></div>
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
                                <div className="footer_logo">
                                    <img src={logoAsmodine}/>
                                </div>
                                <div className="footer_text1">
                                    TELECHARGEZ L'APPLICATION
                                </div>
                            </div>
                            <div className="col col-md-6 col-sm-6">
                                <img id="" src={BackgroundRightNewsletterAsmodine} alt=""/>
                                <div className="footer_logo1">
                                    <img src={logoAsmodine}/>
                                </div>
                                <div className="footer_text">
                                    INSCRIVEZ VOUS A LA NEWSLETTER
                                </div>
                                <div>
                                    <div id="footer_searchBox">
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
                                            <li><a href="#">Vetements</a></li>
                                            <li><a href="#">Chaussures</a></li>
                                            <li><a href="#">Sacs</a></li>
                                            <li><a href="#">Accessoires</a></li>
                                            <li><a href="#">Bijoux</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="title">HOMME</div>
                                        <ul>
                                            <li><a href="#">Vetements</a></li>
                                            <li><a href="#">Chaussures</a></li>
                                            <li><a href="#">Sacs</a></li>
                                            <li><a href="#">Accessoires</a></li>
                                            <li><a href="#">Bijoux</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 center_align">
                                    <div className="title">ASMODINE</div>
                                    <li>Ce qui manquait aux boutiques de mode en ligne jusqu’à aujourd’hui ? Pouvoir
                                        essayer,
                                        avant d’acheter, les articles sur votre silhouette : en fonction de tous les
                                        détails de
                                        votre morphologie... <strong>Et Asmodine est née !</strong></li>
                                    <li>Dans la boutique sur mesure Asmodine,
                                        vous êtes sûr(e) de trouver la taille qui vous va vraiment bien !Belle
                                        carrure,taille fine,
                                        longues jambes...chaque personne a une silhoutte qui lui est particuilère et qui
                                        ne peut corresondre
                                        à des standards.D'autre part,chaque marque crée ses collections selon des
                                        modèles différent;une
                                        taille 40 ne sera jamais la meme chez l'une ou l'autre...Avec Asmodine,
                                        faire vos achats en ligne devient encore plus facile qu’en boutique, un vrai
                                        bonheur!!!
                                    </li>
                                </div>

                                <div className="col-md-4 col-sm-4 right_align">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="title">LE TOP DES MARQUES</div>
                                        <ul>
                                            <li><a href="#">Esprit</a></li>
                                            <li><a href="#">Gstar Raw</a></li>
                                            <li><a href="#">Le temps des cerises</a></li>
                                            <li><a href="#">Abercrombie&fitch</a></li>
                                            <li><a href="#">Jack&Jeans</a></li>
                                            <li><a href="#">Pepe Jeans</a></li>
                                            <li><a href="#">Converse</a></li>
                                            <li><a href="#">Encore+de marques...</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="title">AIDE&CONTACT</div>
                                        <ul>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Plan du site</a></li>
                                            <li><a href="#">Partenaires</a></li>
                                            <li><a href="#">Vendeurs</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Recrutement</a></li>
                                            <li><a href="#">Conditions d'utilisation</a></li>
                                            <li><a href="#">Mentions légales </a></li>
                                            <li><a href="#">Protection des données</a></li>
                                            <li><a href="#">CGV</a></li>
                                            <li><a href="#">FAQ </a></li>
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
                <div className="pop-shadow"/>
                <section className="pop-wrap">
                    <div className="pop-header">
                        <div className="close">
                            <span aria-hidden="true">×</span>
                        </div>
                    </div>
                    <div className="pop-content">
                        <div className="reg-wrap">
                            <h1 className="reg-title">Me connecter</h1>
                            <div className="form-wrap">
                                <div className="form-input">
                                    <label>
                                        <i className="fa fa-envelope"/>
                                    </label>
                                    <input type="text" placeholder="Votre adresse email"/>
                                </div>
                                <div className="form-input">
                                    <label>
                                        <i className="fa fa-lock"/>
                                    </label>
                                    <input type="password" placeholder="Votre mot de passe"/>
                                </div>
                                <div className="text-center reset-wrap">
                                    <a className="reset-password" href="">Mot de passe oublié ?</a>
                                </div>
                                <div className="row">
                                    <button className="col-xs-12 col-sm-6 col-md-6 col-lg-6 btn" type="submit">Se
                                        connecter
                                    </button>
                                    <button className="col-xs-12 col-sm-6 col-md-6 col-lg-6 btn facebook">Facebook
                                        connect
                                    </button>
                                </div>
                                <p className="m-t-20">
                                    Vous n'avez pas de encore compte Asmodine ?
                                    <a href="">Inscrivez-vous !</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        );
    }
}

class Carousel extends Component {
    // 初始默认状态
    state = {nowLocal: 0};

    turn(n) {
        let _n = this.state.nowLocal + n;
        if (_n < 0) {
            _n = _n + 12;
        }
        if (_n > 12) {
            _n = _n - 12
        }

        this.setState({nowLocal: _n});
        console.log(this.state.nowLocal);
    }

    // 加点击事件
    handleArrowClick(option) {
        this.turn(option);
    }

    // 渲染
    render() {
        let imgArr = [
            {
                src: brand_06,
                alt: 'logo',
            },
            {
                src: brand_08,
                alt: 'images_8',
            },
            {
                src: brand_10,
                alt: 'images_10',
            },
            {
                src: brand_09,
                alt: 'images_9',
            },
            {
                src: brand_07,
                alt: 'images_7',
            },
            {
                src: brand_06,
                alt: 'images_6',
            },
            {
                src: brand_07,
                alt: 'images_7',
            },
            {
                src: brand_08,
                alt: 'images_8',
            },
            {
                src: brand_09,
                alt: 'images_9',
            },
            {
                src: brand_10,
                alt: 'images_10',
            },
            {
                src: brand_11,
                alt: 'images_11',
            }
        ];
        let width = 100 / 7 + '%';

        return (
            <div className="carousel-container">
                <ul className="carousel-media" style={{
                    left: -(100 / 7) * this.state.nowLocal + "%",
                    width: 11 * 14.285 + "%"
                }}>
                    {
                        imgArr.map((item,i) => {
                            console.log(item.src);
                            return (<li key={i} style={{width: width}}>
                                <img src={item.src}  alt={item.alt}/>
                            </li>)
                        })
                    }
                </ul>
                <div className="carousel-left-arrow" onClick={this.handleArrowClick.bind(this, -1)}>&lt;</div>
                <div className="carousel-right-arrow" onClick={this.handleArrowClick.bind(this, 1)}>&gt;</div>
            </div>
        )
    }
}

export default Home;
