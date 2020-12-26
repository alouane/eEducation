import React, { useRef, useState } from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Link, NavLink } from 'react-router-dom';
import { t } from '../i18n';
import { useUIStore, useAppStore } from '@/hooks';
import { UIStore } from '@/stores/app';
import { isElectron } from '@/utils/platform';
import './presentation.scss';

const useStyles = makeStyles((theme: Theme) => ({
    formControl: {
        minWidth: '240px',
        maxWidth: '240px',
    }
}));

const roomTypes = isElectron ? UIStore.roomTypes.filter((it: any) => it.value !== 3) : UIStore.roomTypes


function PresentationPage() {
    document.title = t(`home.short_title.title`)

    const classes = useStyles();

    const history = useHistory();

    const uiStore = useUIStore();

    const appStore = useAppStore();

    const [lock, setLock] = useState<boolean>(false);

    const [required, setRequired] = useState<any>({} as any);

    const screenSection = useRef<HTMLDivElement>(null);
    const whiteboardSection = useRef<HTMLDivElement>(null);
    const viseoSection = useRef<HTMLDivElement>(null);
    const messagingSection = useRef<HTMLDivElement>(null);
    const securitySection = useRef<HTMLDivElement>(null);
    const recordingSection = useRef<HTMLDivElement>(null);

    const moveToSection = (section: string) => {
        if (section == 'screen') screenSection?.current?.scrollIntoView({ behavior: 'smooth' });
        else if (section == 'whiteboard') whiteboardSection?.current?.scrollIntoView({ behavior: 'smooth' });
        else if (section == 'viseo') viseoSection?.current?.scrollIntoView({ behavior: 'smooth' });
        else if (section == 'messaging') messagingSection?.current?.scrollIntoView({ behavior: 'smooth' });
        else if (section == 'recording') recordingSection?.current?.scrollIntoView({ behavior: 'smooth' });
        else if (section == 'security') securitySection?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={`flex-container ${uiStore.isElectron ? 'draggable' : 'home-cover-web'}`}>
            {uiStore.isElectron ? null :
                <div>
                    <div className="header">
                        <div className="elem">
                            Demander une démo </div>
                        <div className="elem">
                            +1 888 79 625 26 </div>
                        <div className="elem">
                            Ressources </div>
                    </div>
                    {/* <!-- Navbar --> */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                        <div className="container flex">
                            {/* <!-- Brand --> */}
                            <a className="navbar-brand" href="index.html">
                                <img alt="Image placeholder" src="img/brand/logo.png" id="navbar-logo" /></a>
                            {/* <!-- Toggler --> */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/* <!-- Collapse --> */}
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav mt-4 mt-lg-0 ml-auto">
                                    <li className="nav-item ">
                                        <Link to={`/`} className="nav-link" >Accueil</Link>
                                    </li>
                                    <li className="nav-item dropdown dropdown-animate" data-toggle="hover">
                                        <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fonctionalités</a>
                                        <div className="dropdown-menu dropdown-menu-single">
                                            <a className="dropdown-item" onClick={() => moveToSection('whiteboard')}>WhiteBoard</a>
                                            <a className="dropdown-item" onClick={() => moveToSection('viseo')}>Visio conference</a>
                                            <a className="dropdown-item" onClick={() => moveToSection('screen')}>Screen Sharing</a>
                                            <a className="dropdown-item" onClick={() => moveToSection('messaging')}>Instant Messaging</a>
                                            <a className="dropdown-item" onClick={() => moveToSection('security')}>Sécurité</a>
                                            <a className="dropdown-item" onClick={() => moveToSection('recording')}>Enregistrement</a>

                                            {/* <div className="dropdown-divider"></div> */}
                                        </div>
                                    </li>
                                    <li className="nav-item ">
                                        <Link to={`/pricing#`} className="nav-link" >Pricing</Link>
                                    </li>
                                </ul>
                                {/* <!-- Button --> */}
                                <NavLink className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3" to="/setup">
                                    Lancer une séssion
                                </NavLink>
                                {/* <!-- Mobile button --> */}
                                <div className="d-lg-none text-center">
                                    <NavLink  to="/setup" className="btn btn-block btn-sm btn-warning">Lancer une séssion</NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div>
                        {/* <!-- Main content --> */}
                        <section className="slice py-7">
                            <div className="container">
                                <div className="row row-grid align-items-center">
                                    <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
                                        {/* <!-- Image --> */}
                                        <figure className="w-100">
                                            <img alt="Image placeholder" src="img/svg/illustrations/illustration-3.svg" className="img-fluid mw-md-120" />
                                        </figure>
                                    </div>
                                    <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
                                        {/* <!-- Heading --> */}
                                        <h1 className="display-4 text-center text-md-left mb-3">
                                            Il est temps pour continuer vos <strong className="text-primary"> cours de soutiens</strong>
                                        </h1>
                                        {/* <!-- Text --> */}
                                        <p className="lead text-center text-md-left text-muted">
                                            Platform de visioconférence riche dadns les fontionalités et aussi sophistiqué que les géants de l'industrie</p>
                                        {/* <!-- Buttons --> */}
                                        <div className="text-center text-md-left mt-5">
                                            <NavLink to="/setup" className="btn btn-primary btn-icon" target="_blank">
                                                <span className="btn-inner--text">Démarrer mon essaie</span>
                                                <span className="btn-inner--icon"><i data-feather="chevron-right"></i></span>
                                            </NavLink>
                                            <a href="mailto:alouane00@gmail.com" className="btn btn-neutral btn-icon d-none d-lg-inline-block" target="_blank">Contacter nous</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="slice slice-lg pt-lg-6 pb-0 pb-lg-6 bg-section-secondary">
                            <div className="container">
                                {/* <!-- Title --> */}
                                {/* <!-- Section title --> */}
                                <div className="row mb-5 justify-content-center text-center">
                                    <div className="col-lg-6">
                                        <span className="badge badge-soft-success badge-pill badge-lg">
                                            Fonctionalités</span>
                                        <h2 className=" mt-4">Rester en contact et organiser avec vos étudiants </h2>
                                        <div className="mt-2">
                                            <p className="lead lh-180">Platform fuilde et innovante vous permettant de soutenir vos étudiants le plus efficace possible .</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Card --> */}
                                <div className="row mt-5">
                                    <div className="col-md-4" ref={whiteboardSection}>
                                        <div className="card">
                                            <div className="card-body pb-5">
                                                <div className="pt-4 pb-5">
                                                    <img src="img/svg/illustrations/drawkit-grape-pack-illustration-11.svg" className="img-fluid img-center" style={{ height: 150 }} alt="Illustration" />
                                                </div>
                                                <h5 className="h4 lh-130 mb-3">Whiteboard</h5>
                                                <p className="text-muted mb-0">Mieux intéragir avec vos étudiants en déssinant dans un tableau virtuelle avec la possibilité d'ajouter des images, videos ou présentations à vos cours</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" ref={viseoSection}>
                                        <div className="card">
                                            <div className="card-body pb-5">
                                                <div className="pt-4 pb-5">
                                                    <img src="img/svg/illustrations/4-SCENE.svg" className="img-fluid img-center" style={{ height: 150 }} alt="Illustration" />
                                                </div>
                                                <h5 className="h4 lh-130 mb-3">Visio conférence</h5>
                                                <p className="text-muted mb-0">Ajoutez la vidéo et l'audio HD à vos cours grâce à la prise en charge d'un maximum de 50 participants vidéo et de 49 vidéos à l'écran..</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" ref={screenSection}>
                                        <div className="card">
                                            <div className="card-body pb-5">
                                                <div className="pt-4 pb-5">
                                                    <img src="img/svg/illustrations/9-SCENE.svg" className="img-fluid img-center" style={{ height: 150 }} alt="Illustration" />
                                                </div>
                                                <h5 className="h4 lh-130 mb-3">Screen Sharing</h5>
                                                <p className="text-muted mb-0">Des outils de collaboration intégrés. Plusieurs participants peuvent partager simultanément leur écran et co-annoter pour plus d'interactivité.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" ref={messagingSection}>
                                        <div className="card">
                                            <div className="card-body pb-5">
                                                <div className="pt-4 pb-5">
                                                    <img src="img/svg/illustrations/drawkit-grape-pack-illustration-4.svg" className="img-fluid img-center" style={{ height: 150 }} alt="Illustration" />
                                                </div>
                                                <h5 className="h4 lh-130 mb-3">Instant Messaging</h5>
                                                <p className="text-muted mb-0">Discussions en groupes, historiques répertoriés, partage de fichiers intégré et archives de 10 ans. Passe facilement aux appels « one on one » ou en groupes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" ref={securitySection}>
                                        <div className="card">
                                            <div className="card-body pb-5">
                                                <div className="pt-4 pb-5">
                                                    <img src="img/svg/illustrations/wfh_5.svg" className="img-fluid img-center" style={{ height: 150 }} alt="Illustration" />
                                                </div>
                                                <h5 className="h4 lh-130 mb-3">Sécurité</h5>
                                                <p className="text-muted mb-0">Chiffrement pour toutes les réunions, que ca soit pour les messages échangés, documents, images ou vidéos</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4" ref={recordingSection}>
                                        <div className="card">
                                            <div className="card-body pb-5">
                                                <div className="pt-4 pb-5">
                                                    <img src="img/svg/illustrations/wfh_9.svg" className="img-fluid img-center" style={{ height: 150 }} alt="Illustration" />
                                                </div>
                                                <h5 className="h4 lh-130 mb-3">Enrgistrement</h5>
                                                <p className="text-muted mb-0">Enregistrez vos réunions localement ou sur le cloud.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="slice slice-lg">
                            <div className="container">
                                <div className="py-6">
                                    <div className="row row-grid justify-content-between align-items-center">
                                        <div className="col-lg-5 order-lg-2">
                                            <h5 className="h3">Need a quick admin panel for your website?</h5>
                                            <p className="lead my-4">
                                                With Quick you get components and examples, including tons of variables that will help you customize this theme with ease.
                        </p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                                                <i className="fas fa-file-invoice"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="h6 mb-0">Perfect for modern startups</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                                                <i className="fas fa-store-alt"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="h6 mb-0">Ready to be customized</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 order-lg-1">
                                            <div className="card mb-0 mr-lg-5">
                                                <div className="card-body p-2">
                                                    <img alt="Image placeholder" src="img/theme/light/screen-1-1000x800.jpg" className="img-fluid shadow rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6">
                                    <div className="row row-grid justify-content-between align-items-center">
                                        <div className="col-lg-5">
                                            <h5 className="h3">A modern project management dashboard</h5>
                                            <p className="lead my-4">
                                                With Quick you get components and examples, including tons of variables that will help you customize this theme with ease.
                        </p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                                                <i className="fas fa-file-invoice"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="h6 mb-0">Perfect for modern startups</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                                                <i className="fas fa-store-alt"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="h6 mb-0">Ready to be customized</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="py-2">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <div className="icon icon-shape bg-primary text-white icon-sm rounded-circle mr-3">
                                                                <i className="fas fa-store-alt"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="h6 mb-0">Designed for every devices</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card mb-0 ml-lg-5">
                                                <div className="card-body p-2">
                                                    <img alt="Image placeholder" src="img/theme/light/screen-2-1000x800.jpg" className="img-fluid shadow rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="slice slice-lg bg-section-dark pt-5 pt-lg-8">
                            {/* <!-- SVG separator --> */}
                            <div className="shape-container shape-line shape-position-top shape-orientation-inverse">
                                {/* <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" style="enable-background:new 0 0 2560 100;" xml:space="preserve" className="">
                <polygon points="2560 0 2560 100 0 100"></polygon>
            </svg> */}
                            </div>
                            {/* <!-- Container --> */}
                            <div className="container position-relative zindex-100">
                                <div className="col">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 text-center">
                                            <div className="mt-4 mb-6">
                                                <h2 className="h1 text-white">
                                                    Are you ready to grow faster?
                            </h2>
                                                <h4 className="text-white mt-3">Create your own experience</h4>
                                                {/* <!-- Play button --> */}
                                                <a href="#" className="btn btn-primary btn-icon mt-4">Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="slice pt-0">
                            <div className="container position-relative zindex-100">
                                <div className="row">
                                    <div className="col-xl-4 col-sm-6 mt-n7">
                                        <div className="card">
                                            <div className="d-flex p-5">
                                                <div>
                                                    <span className="badge badge-warning badge-pill">New</span>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="lh-130">Listen to the nature</h5>
                                                    <p className="text-muted mb-0">
                                                        Design made simple with a clean and smart HTML markup.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6 mt-sm-n7">
                                        <div className="card">
                                            <div className="d-flex p-5">
                                                <div>
                                                    <span className="badge badge-success badge-pill">Tips</span>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="lh-130">Rules not to follow</h5>
                                                    <p className="text-muted mb-0">
                                                        Design made simple with a clean and smart HTML markup.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-12 col-sm-6 mt-xl-n7">
                                        <div className="card">
                                            <div className="d-flex p-5">
                                                <div>
                                                    <span className="badge badge-danger badge-pill">Update</span>
                                                </div>
                                                <div className="pl-3">
                                                    <h5 className="lh-130">Beware the water</h5>
                                                    <p className="text-muted mb-0">
                                                        Design made simple with a clean and smart HTML markup.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="card">
                                            <div className="d-flex p-5">
                                                <div>
                                                    <span className="badge badge-warning badge-pill">New</span>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="lh-130">Listen to the nature</h5>
                                                    <p className="text-muted mb-0">
                                                        Design made simple with a clean and smart HTML markup.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="card">
                                            <div className="d-flex p-5">
                                                <div>
                                                    <span className="badge badge-success badge-pill">Tips</span>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="lh-130">Rules not to follow</h5>
                                                    <p className="text-muted mb-0">
                                                        Design made simple with a clean and smart HTML markup.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-12 col-sm-6">
                                        <div className="card">
                                            <div className="d-flex p-5">
                                                <div>
                                                    <span className="badge badge-danger badge-pill">Update</span>
                                                </div>
                                                <div className="pl-3">
                                                    <h5 className="lh-130">Beware the water</h5>
                                                    <p className="text-muted mb-0">
                                                        Design made simple with a clean and smart HTML markup.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="slice slice-lg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <span className="badge badge-primary badge-pill">Key features</span>
                                        <h5 className="lh-180 mt-4 mb-6">Quick is a premium HTML template that includes adaptable components and pages for various industries, plus new ones each month.</h5>
                                    </div>
                                </div>
                                {/* <!-- Features --> */}
                                <div className="row mx-lg-n4">
                                    {/* <!-- Features - Col 1 --> */}
                                    <div className="col-lg-4 col-md-6 px-lg-4">
                                        <div className="card shadow-none">
                                            <div className="p-3 d-flex">
                                                <div>
                                                    <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                                                        <i data-feather="check"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="h6">100% Responsive</span>
                                                    <p className="text-sm text-muted mb-0">
                                                        Built to be customized.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 px-lg-4">
                                        <div className="card shadow-none">
                                            <div className="p-3 d-flex">
                                                <div>
                                                    <div className="icon icon-shape rounded-circle bg-primary text-white mr-4">
                                                        <i data-feather="check"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="h6">Based on Bootstrap 4</span>
                                                    <p className="text-sm text-muted mb-0">
                                                        Built to be customized.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 px-lg-4">
                                        <div className="card shadow-none">
                                            <div className="p-3 d-flex">
                                                <div>
                                                    <div className="icon icon-shape rounded-circle bg-danger text-white mr-4">
                                                        <i data-feather="check"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="h6">Built with SASS</span>
                                                    <p className="text-sm text-muted mb-0">
                                                        Built to be customized.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 px-lg-4">
                                        <div className="card shadow-none">
                                            <div className="p-3 d-flex">
                                                <div>
                                                    <div className="icon icon-shape rounded-circle bg-success text-white mr-4">
                                                        <i data-feather="check"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="h6">300+ components</span>
                                                    <p className="text-sm text-muted mb-0">
                                                        Built to be customized.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 px-lg-4">
                                        <div className="card shadow-none">
                                            <div className="p-3 d-flex">
                                                <div>
                                                    <div className="icon icon-shape rounded-circle bg-info text-white mr-4">
                                                        <i data-feather="check"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="h6">23+ widgets</span>
                                                    <p className="text-sm text-muted mb-0">
                                                        Built to be customized.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 px-lg-4">
                                        <div className="card shadow-none">
                                            <div className="p-3 d-flex">
                                                <div>
                                                    <div className="icon icon-shape rounded-circle bg-warning text-white mr-4">
                                                        <i data-feather="check"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="h6">Bootstrap Flexbox Grid</span>
                                                    <p className="text-sm text-muted mb-0">
                                                        Built to be customized.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Features - Col 3 --> */}
                                    <div className="col-lg-4 col-md-6 px-lg-4">
                                        <div className="card shadow-none">
                                            <div className="p-3 d-flex">
                                                <div>
                                                    <div>
                                                        <div className="icon icon-shape rounded-circle bg-info text-white mr-4">
                                                            <i data-feather="check"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="h6">Animate CSS</span>
                                                    <p className="text-sm text-muted mb-0">
                                                        Built to be customized.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 px-lg-4">
                                        <div className="card shadow-none">
                                            <div className="p-3 d-flex">
                                                <div>
                                                    <div>
                                                        <div className="icon icon-shape rounded-circle bg-danger text-white mr-4">
                                                            <i data-feather="check"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="h6">Integrated plugins</span>
                                                    <p className="text-sm text-muted mb-0">
                                                        Built to be customized.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 px-lg-4">
                                        <div className="card shadow-none">
                                            <div className="p-3 d-flex">
                                                <div>
                                                    <div>
                                                        <div className="icon icon-shape rounded-circle bg-primary text-white mr-4">
                                                            <i data-feather="check"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="h6">Smart HTML markup</span>
                                                    <p className="text-sm text-muted mb-0">
                                                        Built to be customized.
                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="slice slice-lg bg-section-secondary">
                            <div className="container text-center">
                                <div className="row justify-content-center mb-6">
                                    <div className="col-lg-8">
                                        {/* <!-- Title --> */}
                                        <h2 className="h1 strong-600">
                                            Complete features at your hand
                    </h2>
                                        {/* <!-- Text --> */}
                                        <p className="text-muted">
                                            Thousands of developers around the world have already made Quick the main tool for building websites.
                    </p>
                                    </div>
                                </div>
                                {/* <!-- Pricing --> */}
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md">
                                        <div className="card card-pricing text-center px-3 hover-scale-110">
                                            <div className="card-header py-5 border-0 delimiter-bottom">
                                                <div className="h1 text-center mb-0">$<span className="price font-weight-bolder">49</span></div>
                                                <span className="h6 text-muted">Standard License</span>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled text-sm mb-4">
                                                    <li className="py-2">1 end product</li>
                                                    <li className="py-2">Use for personal or a client</li>
                                                    <li className="py-2">Use in a free end product</li>
                                                    <li className="py-2">6 months technical support</li>
                                                </ul>
                                                <a href="#" className="btn btn-sm btn-warning hover-translate-y-n3 hover-shadow-lg mb-3">Purchase now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md">
                                        <div className="card card-pricing bg-dark text-center px-3 border-0 hover-scale-110">
                                            <div className="card-header py-5 border-0 delimiter-bottom">
                                                <div className="h1 text-white text-center mb-0">$<span className="price font-weight-bolder">590</span></div>
                                                <span className="h6 text-white">Extended License</span>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled text-white text-sm opacity-8 mb-4">
                                                    <li className="py-2">1 end product</li>
                                                    <li className="py-2">Use for personal or a client</li>
                                                    <li className="py-2">Use in a free end product</li>
                                                    <li className="py-2">Use in an end product that is <strong className="text-success text-underline--dashed">sold</strong></li>
                                                    <li className="py-2">6 months technical support</li>
                                                </ul>
                                                <a href="#" className="btn btn-sm btn-white hover-translate-y-n3 hover-shadow-lg mb-3">Purchase now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 text-center">
                                    <p className="mb-2">
                                        Both pricings contains all 6 months free support. Need more?
                </p>
                                    <a href="#" className="text-primary text-underline--dashed">Contact us<i data-feather="arrow-right" className="ml-2"></i></a>
                                </div>
                            </div>
                        </section>
                    </div >
                    <footer className="position-relative" id="footer-main">
                        <div className="footer pt-lg-7 footer-dark bg-dark">
                            {/* <!-- SVG shape --> */}
                            <div className="shape-container shape-line shape-position-top shape-orientation-inverse">
                                {/* <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" style="enable-background:new 0 0 2560 100;"
        xml:space="preserve" className=" fill-section-secondary">
        <polygon points="2560 0 2560 100 0 100"></polygon>
      </svg> */}
                            </div>
                            {/* <!-- Footer --> */}
                            <div className="container pt-4">
                                <div className="row">
                                    <div className="col-lg-4 mb-5 mb-lg-0">
                                        {/* <!-- Theme's logo --> */}
                                        <a href="index.html">
                                            <img alt="Image placeholder" src="img/brand/light.svg" id="footer-logo" />
                                        </a>
                                        {/* <!-- Webpixels' mission --> */}
                                        <p className="mt-4 text-sm opacity-8 pr-lg-4">Webpixels attempts to bring the best development experience to
                                        designers and developers by offering the tools needed for having a quick and solid start in most web
            projects.</p>
                                        {/* <!-- Social --> */}
                                        <ul className="nav mt-4">
                                            <li className="nav-item">
                                                <a className="nav-link pl-0" href="https://dribbble.com/webpixels" target="_blank">
                                                    <i className="fab fa-dribbble"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://github.com/webpixels" target="_blank">
                                                    <i className="fab fa-github"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://www.instagram.com/webpxs" target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://www.facebook.com/webpixels" target="_blank">
                                                    <i className="fab fa-facebook"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                                        <h6 className="heading mb-3">Account</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="#">Profile</a></li>
                                            <li><a href="#">Settings</a></li>
                                            <li><a href="#">Billing</a></li>
                                            <li><a href="#">Notifications</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                                        <h6 className="heading mb-3">About</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Pricing</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Careers</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                                        <h6 className="heading mb-3">Company</h6>
                                        <ul className="list-unstyled">
                                            <li><a href="#">Community</a></li>
                                            <li><a href="#">Help center</a></li>
                                            <li><a href="#">Support</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <hr className="divider divider-fade divider-dark my-4" />
                                <div className="row align-items-center justify-content-md-between pb-4">
                                    <div className="col-md-6">
                                        <div className="copyright text-sm font-weight-bold text-center text-md-left">
                                            &copy; 2020 <a href="https://webpixels.io" className="font-weight-bold" target="_blank">Webpixels</a>. All
            rights reserved
          </div>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    Terms
              </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    Privacy
              </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    Cookies
              </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            }
        </div >
    )
}
export default React.memo(PresentationPage);