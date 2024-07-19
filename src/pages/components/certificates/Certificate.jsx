import React from 'react';
import './Certificate.scss';
// import cer from '../../../assets/images/home/certificate.jpg';
import cer1 from '../../../assets/images/new-images/Certificate-1.png';
import cer2 from '../../../assets/images/new-images/Certificate-2.png';
import cer3 from '../../../assets/images/new-images/Certificate-3.png';
import cer4 from '../../../assets/images/new-images/Certificate-4.png';
import Flip from 'react-reveal/Flip';

const Certificate = () => {
    return (
        <div className='home'>
            <div className='home__cer'>
                <div className='home__cer__container'>
                    <div className='home__cer__haading'>
                        <h3>Discover</h3>
                        <h2>CERTIFICATES</h2>
                    </div>
                    <div className='home__cer__cards'>
                        <div className='home__cer__card'>
                            <div className='home__cer__card__image'>
                                <Flip left> <img src={cer1} alt='cerificate' /></Flip>
                            </div>
                        </div>
                        <div className='home__cer__card'>
                            <div className='home__cer__card__image'>
                                <Flip left>  <img src={cer2} alt='cerificate' /> </Flip>
                            </div>
                        </div>
                        <div className='home__cer__card'>
                            <div className='home__cer__card__image'>
                                <Flip right>   <img src={cer3} alt='cerificate' /> </Flip>
                            </div>
                        </div>
                        <div className='home__cer__card'>
                            <div className='home__cer__card__image'>
                                <Flip right>   <img src={cer4} alt='cerificate' /> </Flip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificate;