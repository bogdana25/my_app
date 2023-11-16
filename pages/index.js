
import Image from 'next/image'
export default function Home() {
    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="header-contacts">
                        <div className="header-contacts__contact">
                            kontakt
                        </div>
                        <div className="header-contacts__phone">
                            T +352 26 17 73 1
                        </div>
                        <div className="header-contacts__language">
                            <button>DE</button>
                        </div>
                    </div>
                    <div className="header-logo ">
                        <Image src={'/img/logo.png'} width={120} height={30} alt={"logo"} />
                    </div>
                    <div className="header-text">
                        Plus qu’une affaire de goût
                    </div>

                </div>
                <div className="banner">
                    <img src={'/img/banner.png'} alt="" />
                </div>
                <div className="arrow-down">

                </div>
            </section>
            <section className="mission">
                <div className="container">
                    <div className="mission-img">
                        <img src={'/img/chef1.png'} alt="" />
                    </div>
                    <h1>To serve delicious, healthy and eco-friendly food</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores
                        et ea rebum. Stet clita kasd gubergren.</p>
                </div>
            </section>
            <section className='business'>
                <div className="swiper">
                    <div className='swiper-box'>
                        <div className="image-swiper">
                            <img src={'/img/business.jpg'} alt="" />
                        </div>
                        <div className="card-swiper">
                            <h3 className="card-swiper__title">Business & Industry</h3>
                            <p className="card-swiper__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet.

                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                amet.</p>
                            <div className="card-swiper__button-more">
                                <a href="#">Read more</a>
                            </div>
                            <div className="card-swiper__tads">
                                + all industries
                                + 20 employers
                                + lorem ipsum
                                + lorem ipsum
                                + lorem ipsum
                            </div>
                            <div className="card-swiper__button">
                                <a href="#">kontakt</a>
                            </div>
                        </div>
                    </div>
                    <div className='swiper-box'>
                        <div className="image-swiper"><img src={'/img/business2.png'} alt="" /></div>
                        <div className="card-swiper">
                            <h3 className="card-swiper__title">Institutional</h3>
                            <p className="card-swiper__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet.

                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                amet.</p>
                            <div className="card-swiper__button-more">
                                <a href="#">Read more</a>
                            </div>
                            <div className="card-swiper__tads">
                                + schools
                                + crèches
                                + lorem ipsum
                                + lorem ipsum
                                + lorem ipsum
                            </div>
                            <div className="card-swiper__button">
                                <a href="#">kontakt</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="business__img"><img src={'/img/soup.png'} alt="" /></div>

            </section>
            <section className='statistics'>
                <div className="container">
                    <div className='statistics__column'>
                        <h2>`{">34"}`</h2>
                        <h6>years of experience</h6>
                    </div>
                    <div className='statistics__column'>
                        <h2>`{">10.320"}`</h2>
                        <h6>meals per day</h6>
                    </div>
                    <div className='statistics__column'>
                        <h2>`{"620"}`</h2>
                        <h6>employees</h6>
                    </div>
                    <div className='statistics__column'>
                        <h2>40</h2>
                        <h6>Lorem ipsum</h6>
                    </div>
                </div>
            </section>
            <section className='values'>
                <div className="container">
                    <div className="values__container">
                        <div className="values-card">
                            <div className="values__img"><img src={'/img/values1.png'} alt="" /></div>
                            <h3 className='values__title'>local</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...</p>
                            <div className="values__button">
                                <a href="#">Read more</a>
                            </div>
                        </div>
                        <div className="values-card">
                            <div className="values__img">
                            <img src={'/img/values2.png'} alt="" />
                            </div>
                            <h3 className='values__title'>eco-friendly</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...</p>
                            <div className="values__button">
                                <a href="#">Read more</a>
                            </div>
                        </div>
                        <div className="values-card">
                            <div className="values__img"><img src={'/img/values3.png'} alt="" /></div>
                            <h3 className='values__title'>independant</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren...</p>
                            <div className="values__button">
                                <a href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='difference'>
                <div className="container">
                    <div className="difference__container">
                        <h3>Make a difference.We are certified.</h3>
                        <div className="difference-swiper__container">
                            <div className="difference-swiper__img">
                            <img src={'/img/differens1.png'} alt="" />
                            <img src={'/img/differens2.png'} alt="" />
                            <img src={'/img/differens3.png'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='offers'>
                <div className="container">
                    <div className="swiper__container">
                        <div className="swiper-text-card">
                            <h5 className='swiper-text-card__title'>Join the team.</h5>
                            <p className='swiper-text-card__contain'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                            <div className="swiper-text-card__button">
                                <a href="#">job offers</a>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="swiper-card">
                            <div className="swiper-card__img"><img src={'/img/offers1.png'} alt="" /></div>
                            <h3 className="swiper-card__title">Service</h3>
                            <p className="swiper-card__contain">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                        </div>
                        <div className="swiper-card">
                            <div className="swiper-card__img"><img src={'/img/offers2.png'} alt="" /></div>
                            <h3 className="swiper-card__title">Cuisine</h3>
                            <p className="swiper-card__contain">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                        </div>
                        <div className="swiper-card">
                            <div className="swiper-card__img"><img src={'/img/offers3.png'} alt="" /></div>
                            <h3 className="swiper-card__title">Management</h3>
                            <p className="swiper-card__contain">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
                        </div>
                    </div>
                    <div className="swiper__img">
                    <img src={'/img/chef2.png'} alt="" />
                    </div>
                </div>
            </section>
            <section className='services'>
                <div className="container">
                    <div className="card-swiper">
                        <h3 className="card-swiper__title">Services</h3>
                        <p className="card-swiper__text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                            sit amet.

                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet.</p>
                        <div className="card-swiper__button-more">
                            <a href="#">Read more</a>
                        </div>
                        <div className="card-swiper__tads">
                            + all industries
                            + 20 employers
                            + lorem ipsum
                            + lorem ipsum
                            + lorem ipsum
                        </div>
                        <div className="card-swiper__button">
                            <a href="#">kontakt</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-form'>
                <div className="container">
                    <div className="contact-form-box">
                        <h3 className="contact-form__title"></h3>
                        <div className="contact-form-info">
                            <p className='contact-form-info-adress'>Äresto 53, rue de la libération L-3511 Dudelange</p>

                            <a href='tel:+352 26 17 73 1'> T +352 26 17 73 1</a>
                            <a href='mail to: aresto@pt.lu'>E aresto@pt.lu</a>
                        </div>
                    </div>
                    <div className="contact-form-box">
                        <input type="text" name="Name" id="" />
                        <input type="email" name="Email" id="" />
                        <textarea name="Message" id="" cols="30" rows="10"></textarea>
                        <button type='submit'></button>
                    </div>
                </div>
                <div className="contact-form__img">
                    <img src="" alt="" />
                </div>
            </section>
            <footer className='footer'>
                <div className="container">
                    <div className="footer__logo">
                        <img src={"/img/logo.png"} alt="" />
                    </div>
                    <div className="footer-adress">
                    Äresto 53, rue de la libération L-3511 Dudelange
                    </div>
                    <div className="footer-contacts">
                        <a href="tel:+352 26 17 73 1">T +352 26 17 73 1</a>
                        <a href='mail to:aresto@pt.lu'>E aresto@pt.lu</a>
                    </div>
                    <div className="footer-links">
                    <a href='#'>Terms & Conditions</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Business Permit</a>
                    </div>
                    <div className="footer-logo-text">
                        <img src={"img/footer-logo.svg"} alt="" />
                    </div>
                </div>
            </footer>
        </>
    );

}


