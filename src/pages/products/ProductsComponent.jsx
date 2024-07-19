import React from "react";
import "./ProductsStyles.scss";
import banner from "../../assets/images/products/banner.png";
import industrial from '../../assets/images/new-images/industrial.png';
import multicore from '../../assets/images/new-images/multicore.png';
import telecommunication from '../../assets/images/new-images/Telecommunication-cable.png';
import cctv from '../../assets/images/new-images/Cctv-cable.png';
import jelly from '../../assets/images/new-images/Jelly-filled-co-axial-cable.png';
import waterlevel from '../../assets/images/new-images/Water-level-control-cable.png';
import shielded from '../../assets/images/new-images/Shielded mylar taped cable-products.png';
import speaker from '../../assets/images/new-images/Speaker-wire.png';
import aluminum from '../../assets/images/new-images/Aluminium-wire.png';
import housewire from '../../assets/images/new-images/multistrand.png';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Helmet } from "react-helmet";

const ProductsComponent = () => {
  return (
    <>

<Helmet>
        <title>
        Industrial Wire, Multi Core Cables, Telecommunication cable, Cctv cable, Aluminium wire, House wire, House wire, India - Polyone Cables
        </title>
        <meta
          name="description"
          content="Polyone Cables, India: Premium Industrial Wire, Multi Core, Telecom, CCTV, and Aluminium Cables. Ideal for robust & efficient house wiring solutions.
          "
        />
      </Helmet>

<div className="prod">
      <div className="prod__container">
        <div
          className="prod__banner"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            // opacity:"0.9",
          }}
        >
          <Zoom cascade> <div className="prod__banner__heading">
            <h2>Products</h2>
          </div></Zoom>
        </div>
        <div className="prod__sections">
          {/* <div className='prod__cat'>
                        <div className='prod__cat__container'>
                            <div className='prod__cat__heading'>
                                <h3>Category</h3>
                                <h2>Popular on polyone</h2>
                            </div>
                            <div className='prod__cat__section'>
                                <div className='prod__cat__section__card'>
                                    <div className='prod__cat__section__card__image'>
                                        <img className='cat-img' src={img2} alt='' />
                                    </div>
                                    <div className='prod__cat__section__card__content'>
                                        <h4>Category</h4>
                                        <h6>20 Products</h6>
                                    </div>
                                </div>
                                <div className='prod__cat__section__card'>
                                    <div className='prod__cat__section__card__image'>
                                        <img className='cat-img' src={img1} alt='' />
                                    </div>
                                    <div className='prod__cat__section__card__content'>
                                        <h4>Category</h4>
                                        <h6>20 Products</h6>
                                    </div>
                                </div>
                                <div className='prod__cat__section__card'>
                                    <div className='prod__cat__section__card__image'>
                                        <img className='cat-img' src={img2} alt='' />
                                    </div>
                                    <div className='prod__cat__section__card__content'>
                                        <h4>Category</h4>
                                        <h6>20 Products</h6>
                                    </div>
                                </div>
                                <div className='prod__cat__section__card'>
                                    <div className='prod__cat__section__card__image'>
                                        <img className='cat-img' src={img1} alt='' />
                                    </div>
                                    <div className='prod__cat__section__card__content'>
                                        <h4>Category</h4>
                                        <h6>20 Products</h6>
                                    </div>
                                </div>
                                <div className='prod__cat__section__card'>
                                    <div className='prod__cat__section__card__image'>
                                        <img className='cat-img' src={img2} alt='' />
                                    </div>
                                    <div className='prod__cat__section__card__content'>
                                        <h4>Category</h4>
                                        <h6>20 Products</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
          <div className="prod__list">
            <div className="prod__list__container">
              <div className="prod__list__heading">
                {/* <h3>Products</h3> */}
                <h2>All products</h2>
              </div>
              <div className="prod__list__section">
                <div className="prod__list__section__card">
                  <div className="prod__list__section__card__image">
                    <img className="prod-img" src={industrial} alt="industrial-wire" />
                    {/* <button className='enquire'>enquire</button> */}
                  </div>
                  {/* <div className='prod__list__section__card__line'></div> */}
                  <div className="prod__list__section__card__content">
                    <h4>Industrial Wire</h4>
                    <p>
                      specialized cables designed for use in industrial
                      applications, such as manufacturing plants, power
                      generation facilities, and other heavy-duty environments
                    </p>
                  </div>
                </div>
                <div className="prod__list__section__card">
                  <div className="prod__list__section__card__image">
                    <img className="prod-img" src={multicore} alt="multicore-wire" />
                    {/* <button className='enquire'>enquire</button> */}
                  </div>
                  {/* <div className='prod__list__section__card__line'></div> */}
                  <div className="prod__list__section__card__content">
                    <h4>Multi Core</h4>
                    <p>
                      Used in Flexible and core cables for all electricity
                      operated machines and equipments in different sizes, these
                      cables provide superior human safety.
                    </p>
                  </div>
                </div>
                <div className="prod__list__section__card">
                  <div className="prod__list__section__card__image">
                    <img className="prod-img" src={telecommunication} alt="telecommunication-cable" />
                    {/* <button className='enquire'>enquire</button> */}
                  </div>
                  {/* <div className='prod__list__section__card__line'></div> */}
                  <div className="prod__list__section__card__content">
                    <h4>Telecommunication cable</h4>
                    <p>
                      Contains multiple pairs of copper wires, fiber optic
                      strands, or a combination of both, that are insulated and
                      bundled together inside a protective outer jacket.
                    </p>
                  </div>
                </div>
              </div>
              <div className="prod__list__section">
                <div className="prod__list__section__card">
                  <div className="prod__list__section__card__image">
                    <img className="prod-img" src={cctv} alt="cctv-cable" />
                    {/* <button className='enquire'>enquire</button> */}
                  </div>
                  {/* <div className='prod__list__section__card__line'></div> */}
                  <div className="prod__list__section__card__content">
                    <h4>Cctv cable</h4>
                    <p>
                      Proper installation and maintenance of the cable can help
                      ensure reliable and high-quality video transmission for
                      surveillance purposes.
                    </p>
                  </div>
                </div>
                <div className="prod__list__section__card">
                  <div className="prod__list__section__card__image">
                    <img className="prod-img" src={jelly} alt="jelly-filled-cable" />
                    {/* <button className='enquire'>enquire</button> */}
                  </div>
                  {/* <div className='prod__list__section__card__line'></div> */}
                  <div className="prod__list__section__card__content">
                    <h4>Jelly filled co-axial cable</h4>
                    <p>
                      The cable is typically made of stainless steel or other
                      corrosion-resistant material to withstand exposure to
                      water and other harsh environments.
                    </p>
                  </div>
                </div>
                <div className="prod__list__section__card">
                  <div className="prod__list__section__card__image">
                    <img className="prod-img" src={waterlevel} alt="waterlevel-cable" />
                    {/* <button className='enquire'>enquire</button> */}
                  </div>
                  {/* <div className='prod__list__section__card__line'></div> */}
                  <div className="prod__list__section__card__content">
                    <h4>Water level control cable</h4>
                    <p>
                      The cable is typically made of stainless steel or other
                      corrosion-resistant material to withstand exposure to
                      water and other harsh environments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="prod__list__section">
                <div className="prod__list__section__card">
                  <div className="prod__list__section__card__image">
                    <img className="prod-img" src={shielded} alt="shielded-cable" />
                    {/* <button className='enquire'>enquire</button> */}
                  </div>
                  {/* <div className='prod__list__section__card__line'></div> */}
                  <div className="prod__list__section__card__content">
                    <h4>Shielded mylar taped cable</h4>
                    <p>
                      Type of electrical cable that has a layer of Mylar tape
                      wrapped around the internal wiring. it is also known as
                      foil-shielded cable
                    </p>
                  </div>
                </div>
                <div className="prod__list__section__card">
                  <div className="prod__list__section__card__image">
                    <img className="prod-img" src={speaker} alt="speaker-wire" />
                    {/* <button className='enquire'>enquire</button> */}
                  </div>
                  {/* <div className='prod__list__section__card__line'></div> */}
                  <div className="prod__list__section__card__content">
                    <h4>Speaker wire</h4>
                    <p>
                      Speaker wire is typically made from stranded copper wire
                      with an insulating jacket. Speaker wire can be either
                      stranded or solid.
                    </p>
                  </div>
                </div>
                <div className="prod__list__section__card">
                  <div className="prod__list__section__card__image">
                    <img className="prod-img" src={aluminum} alt="aluminum-wire" />
                    {/* <button className='enquire'>enquire</button> */}
                  </div>
                  {/* <div className='prod__list__section__card__line'></div> */}
                  <div className="prod__list__section__card__content">
                    <h4>Aluminium wire</h4>
                    <p>
                      Aluminium wire is lighter in weight than copper wire, High
                      thermal conductivity, which means it can effectively
                      dissipate heat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="prod__list__section">
                <div className="prod__list__section__card">
                  <div className="prod__list__section__card__image">
                    <img className="prod-img" src={housewire} alt="housewire" />
                    {/* <button className='enquire'>enquire</button> */}
                  </div>
                  {/* <div className='prod__list__section__card__line'></div> */}
                  <div className="prod__list__section__card__content">
                    <h4>House wire</h4>
                    <p>
                      The wires used in house wiring are usually made of copper
                      or aluminum and are coated with a plastic insulation to
                      prevent electrical shocks and short circuits.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="prod__list__section__button">
                <button>More Products</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductsComponent;
