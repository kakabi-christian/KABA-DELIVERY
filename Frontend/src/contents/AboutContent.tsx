import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/AboutContent.css';
import img from '../assets/Logo Appli.png'; // Idéalement le logo CAMWATER ou de ton appli de gestion
import { 
  MdSecurity, 
  MdFlashOn, 
  MdHandshake, 
  MdTrendingUp, 
  MdPublic, 
  MdAccountBalanceWallet,
  MdVerifiedUser,
  MdLock,
  MdAssignmentTurnedIn,
  MdWaterDrop
} from 'react-icons/md' // Remplacé ou ajusté selon tes besoins, conservé Md pour la compatibilité
import { MdOutlineWaterDrop, MdQueryBuilder, MdCheckCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function AboutContent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-back',
    });
  }, []);

  return (
    <div className="about-wrapper">
      
      {/* --- HERO SECTION --- */}
      <section className="about-hero text-center text-white">
        <div className="container" data-aos="zoom-in">
          <span className="badge rounded-pill bg-excha-green mb-3">NOTRE ENGAGEMENT & VISION</span>
          <h1 className="display-4 fw-bold">Le service de l'eau à portée de <span className="text-excha-orange">main</span> 💧</h1>
          <p className="lead opacity-75 mx-auto" style={{ maxWidth: '750px' }}>
            Simplifier la gestion quotidienne de vos abonnements CAMWATER grâce à une plateforme moderne, sécurisée et accessible à tous les Camerounais.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-excha-orange px-4 py-2 rounded-pill fw-bold border-0">
              <Link to="/register" className="text-white text-decoration-none">Créer mon espace abonné</Link>
            </button>
          </div>
        </div>
      </section>

      {/* --- LOGO & INTRODUCTION --- */}
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 text-center" data-aos="fade-right">
            <div className="position-relative d-inline-block">
              <div className="position-absolute top-50 start-50 translate-middle bg-excha-green opacity-10 rounded-circle" style={{width: '120%', height: '120%', filter: 'blur(40px)'}}></div>
              <img src={img} alt="CAMWATER Digital Logo" className=" position-relative" style={{ maxHeight: '280px' }} />
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-left">
            <h6 className="text-excha-orange fw-bold text-uppercase mb-2">À propos du service digital</h6>
            <h2 className="fw-bold text-excha-blue mb-3">La digitalisation au service des abonnés</h2>
            <p className="text-muted fs-5">
              Conçue pour mettre fin aux files d'attente interminables en agence, cette application centralise votre gestion de l'eau. De la consultation de vos factures au dépôt de réclamations pour fuites, tout est pensé pour optimiser votre temps.
            </p>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-5" style={{ backgroundColor: '#f8fffe' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h3 className="fw-bold text-excha-blue">Nos Engagements de Service</h3>
            <div className="mx-auto mt-2" style={{ height: '4px', width: '40px', backgroundColor: 'var(--excha-orange)', borderRadius: '10px' }}></div>
          </div>

          <div className="row g-4">
            {[
              { icon: <MdCheckCircle />, title: "Disponibilité", desc: "Consultez et payez vos factures d'eau 24h/24 et 7j/7.", delay: 100, color: '#00c896' },
              { icon: <MdFlashOn />, title: "Instantanéité", desc: "Prise en compte immédiate de vos paiements mobiles.", delay: 200, color: '#ff8c00' },
              { icon: <MdHandshake />, title: "Proximité", desc: "Un canal direct pour soumettre et suivre vos réclamations.", delay: 300, color: '#3498db' }
            ].map((item) => (
              <div className="col-md-4" key={item.title} data-aos="fade-up" data-aos-delay={item.delay}>
                <div className="p-4 rounded-4 shadow-sm h-100 bg-white text-center border-0 transition-all hover-up">
                  <div className="fs-1 mb-3" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <h5 className="fw-bold text-excha-blue">{item.title}</h5>
                  <p className="text-muted mb-0 small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SÉCURITÉ & CONFORMITÉ --- */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="p-4 bg-white rounded-5 shadow-lg border-start border-5 border-excha-green">
                <h4 className="fw-bold text-excha-blue mb-4">Un espace hautement sécurisé 🛡️</h4>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-start gap-3">
                    <MdLock className="text-excha-green fs-3" />
                    <div>
                      <h6 className="fw-bold mb-1 text-excha-blue">Protection des données abonnés</h6>
                      <p className="small text-muted mb-0">Vos informations personnelles, vos contrats de raccordement et vos historiques de consommation sont chiffrés et protégés.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <MdVerifiedUser className="text-excha-green fs-3" />
                    <div>
                      <h6 className="fw-bold mb-1 text-excha-blue">Liaison de Contrat Vérifiée</h6>
                      <p className="small text-muted mb-0">Chaque compte est associé de manière unique et sécurisée à votre numéro de police CAMWATER pour éviter toute usurpation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center text-lg-start ps-lg-5" data-aos="fade-left">
              <h3 className="fw-bold text-excha-blue mb-3">Opérateurs partenaires agréés</h3>
              <p className="text-muted mb-4">Pour faciliter le règlement de vos factures, nous intégrons directement les passerelles de paiement des principaux opérateurs présents sur le territoire national.</p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 opacity-50">
                <span className="fw-bold h5 text-secondary">MTN MoMo</span>
                <span className="fw-bold h5 text-secondary">Orange Money</span>
                <span className="fw-bold h5 text-secondary">Express Union</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION --- */}
      <section className="py-5 bg-excha-blue text-white text-center mt-4">
        <div className="container" data-aos="fade-up">
           <h2 className="fw-bold mb-4">Notre Mission 🎯</h2>
           <p className="lead mx-auto mb-5" style={{maxWidth: '800px'}}>
             "Moderniser la relation client avec les usagers du réseau de distribution d'eau, en offrant un accès fluide, transparent et réactif à tous les services."
           </p>
           <div className="row g-3 justify-content-center">
             {[
               { title: "Économie de temps", icon: <MdQueryBuilder /> },
               { title: "Suivi des volumes", icon: <MdOutlineWaterDrop /> },
               { title: "Gestion Budget", icon: <MdAccountBalanceWallet /> }
             ].map((task) => (
               <div className="col-6 col-md-2" key={task.title}>
                 <div className="p-3 rounded-4 bg-white bg-opacity-10 border border-white border-opacity-10">
                   <div className="text-excha-green fs-2 mb-2">{task.icon}</div>
                   <h6 className="fw-bold mb-0">{task.title}</h6>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

    </div>
  );
}