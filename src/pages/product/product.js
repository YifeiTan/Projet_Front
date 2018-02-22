import React, {Component} from 'react';
import './product.css'
import '../popin.css';
import '../../../public/css/common.css'
import logoAsmodine from '../../img/logo-asmodine.png';
import product1 from '../../img/product1.png';
import product2 from '../../img/product2.jpg';
import facebook from '../../img/facebook.png';
import pinterest from '../../img/pinterest.png';
import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';
import google from '../../img/google.png';
import Widget from '../../widget/Widget'
import WidgetButton from '../../widget/imgs/widgetButton.png';
import WidgetButtonChanged from '../../widget/imgs/widgetButtonChanged.png';

import cookie from 'react-cookies';


class Product extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false,
            src: WidgetButton,
            srcPre: WidgetButtonChanged,
        };
    }


    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
        //Widget.pushToRoot();
    }

    onMouseChanged() {
        let src = this.state.srcPre;
        let srcPre = this.state.src;
        this.setState({src: src, srcPre: srcPre});
    }


    render() {
        return (
            <div>
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
                    </div>
                </div>

                <div className="container products">
                    <div className="commodity-wrap">
                        <div className="comodity-pics">
                            <ul>
                                <li>
                                    <img
                                        src="http://beta.asmodine.com/media/cache/product_thumb/uploads/products/4/6/5/1/8/7/large_702853_main.jpg"
                                        alt=""/>
                                </li>
                                <li>
                                    <img src="" alt=""/>
                                </li>
                                <li>
                                    <img src="" alt=""/>
                                </li>
                                <li>
                                    <img src="" alt=""/>
                                </li>
                                <li>
                                    <img src="" alt=""/>
                                </li>
                                <li>
                                    <img src="" alt=""/>
                                </li>
                                <li>
                                    <img src="" alt=""/>
                                </li>
                                <li>
                                    <img src="" alt=""/>
                                </li>
                            </ul>
                        </div>
                        <div className="comodity-pic-show">
                            <div className="comodity-img">
                                <img width="100%" height="100%" src={product1}
                                     alt=""/>
                                <div className="share">
                                    <img src="http://beta.asmodine.com/img/socialnetwork/social_share.png" alt=""/>
                                </div>
                                <div className="scale-control">
                                    <i className="fa fa-arrows-alt"/>
                                </div>
                            </div>
                            <div className="comodity-btns">
                                <button type="button">
                                    <i className="fa fa-heart"/>
                                    <p>Ajouter a ma wishlist</p>
                                </button>
                                <button type="button">
                                    <i className="fa fa-legal"/>
                                    <p>Ajouter au Mix'n look</p>
                                </button>
                            </div>
                        </div>
                        <div className="comodity-info">
                            <strong>Desoasd</strong>
                            <div className="comodity-info-title">
                                PUERTO PLATA ROBE EN JERSEY ROJO SANGRE
                            </div>
                            <div className="comodity-reseller">
                                Vendu par River Island
                            </div>
                            <div className="comodity-rank">
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star-o"/>
                            </div>
                            <div className="comodity-price">
                                <span className="comodity-discount">50%</span>
                                <div className="comodity-price-status">
                                    <div className="comodity-price-old">
                                        €14000
                                    </div>
                                    <div className="comodity-price-new">
                                        €7000
                                    </div>
                                </div>
                            </div>
                            <div className="comodity-choose">

                                <img src={this.state.src} onClick={this.togglePopup.bind(this)}
                                     onMouseOver={this.onMouseChanged.bind(this)}
                                     onMouseLeave={this.onMouseChanged.bind(this)}
                                     alt="logo"
                                     style={{height: "100%"}}/>
                                {this.state.showPopup ?
                                    <Popup
                                        text='Close Me'
                                        closePopup={this.togglePopup.bind(this)}
                                    />
                                    : null
                                }
                                {parseInt(((Number(cookie.load('tourDePoitrine')) + Number(cookie.load('tourDeTaille')) + Number(cookie.load('tourDeHanches'))) / 7.8))!==NaN ?
                                    <span
                                        className="comodity-discount">{parseInt(((Number(cookie.load('tourDePoitrine')) + Number(cookie.load('tourDeTaille')) + Number(cookie.load('tourDeHanches'))) / 7.8))}</span>
                                    : null
                                }
                            </div>

                            <div className="comodity-actions">
                                <button type="button">aller en boutique sur mesure</button>
                                <span>  </span>
                                <button type="button">aller en boutique sur mesure</button>
                            </div>
                            <div className="comodity-introduce">
                                Description Tissu tissé Impression de chèque de vichy Revers de l'encoche Rabat-tempête
                                Non-fonctionnement des poches latérales
                                Taille de la cravate Seul évent arrière Manches longues Notre modèle porte une taille
                                anglaise 8 et mesure
                                175 cm de haut
                            </div>
                        </div>
                    </div>

                    <div id="col5" className="col-md-12 col-sm-12  bg_white">
                        <h2 className="center_align">LES TENDANCES DU MOMENT</h2>

                        <a href="#">
                            <div className="col-md-3 col-sm-3">
                                <img width="255" src={product1} alt=""/>
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
                                <img width="255" src={product2} alt=""/>
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
                                <img width="255" src={product2} alt=""/>
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
                                <img width="255" src={product2} alt=""/>
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

                    <div id="col5" className="col-md-12 col-sm-12  bg_white">
                        <h2 className="center_align">LES TENDANCES DU MOMENT</h2>

                        <a href="#">
                            <div className="col-md-3 col-sm-3">
                                <img width="255" src={product1} alt=""/>
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
                                <img width="255" src={product2} alt=""/>
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
                                <img width="255" src={product2} alt=""/>
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
                                <img width="255" src={product2} alt=""/>
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
                </div>

                <footer id="footer">
                    <div className="container">
                        <div className="row">

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
        )
            ;
    }
}

class Popup extends Component {

    render() {
        return (
            <div className='popup'>
                <Widget closePopup={this.props.closePopup}/>
            </div>
        );
    }
}

export default Product;
