import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavbarModul from '../components/Navbar'
import { Col, Card } from 'react-bootstrap'
import { ChatSquareDotsFill, Envelope, Facebook, Instagram, Linkedin, Whatsapp, Youtube } from 'react-bootstrap-icons'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/Data/SliderData'
import { EduData } from './components/Data/EduData'
import { EduDecs } from '../components/EduDesc'
import { ExpDesc } from '../components/ExpDesc'


export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda</title>
        <meta name="description" content="Portofolio Dewan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarModul/>
      {/* <div className={styles.headerPhoto}>
      </div> */}
        <div className={styles.photoBoxTop}>
          <div className={styles.greetingsName}>
            Hi! Saya
            <p>
              Ahmad Ependi
            </p>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </div>
          </div>
          <Image src='/profil.png' alt='profil' className={styles.photoTop}/>
        </div>


      <div className={styles.cardWhyYouShould}>
        <Col>
          <Image src='/tkit.jpg' alt='Foto Ahmad Ependi' className={styles.cardPhoto}/>
        </Col>
        <Col className={styles.textCard}>
          Kenapa Anda Harus Memilih
          <div>
          Saya Sebagai Kader?
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </div>
      <div className={styles.awesomeServ}>
        My Awesome
        <p>&nbsp;Service</p>
      </div>
      {/* <div className={styles.cardServ}>
        <div>
          <Card className={styles.cardServPc}>
            <Card.Body>
              <ChatSquareDotsFill size={40} className={styles.iconCardServ}/>
              <Card.Title style={{fontWeight:'700'}}>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className={styles.cardServPc} style={{"--bs-card-bg":'#FFB301!important'}}>
            <Card.Body>
              <ChatSquareDotsFill size={40} className={styles.iconCardServ}/>
              <Card.Title style={{fontWeight:'700'}}>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className={styles.cardServPc}>
            <Card.Body>
              <ChatSquareDotsFill size={40} className={styles.iconCardServ}/>
              <Card.Title style={{fontWeight:'700'}}>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div> */}
      <ImageSlider slides={SliderData}/>
      <div className={styles.educationTitle}>
        Education &&nbsp;<p style={{color:'#ffb301'}}>Experience</p>
      </div>
      <div className={styles.eduExpBox}>
        <div className={styles.eduBox}>
          <EduDecs/>
        </div>
        <div className={styles.lineMid}></div>
        <div className={styles.eduBox}>
         <ExpDesc/>
        </div>
      </div>
      <div className={styles.contactMeBg}>
        CONTACT ME
        <div className={styles.contactSosmed}>
          <a href='#'>
            <Facebook size={40}/>
          </a>
          <alert>
            <Instagram size={40}/>
          </alert>
          <a href='#'>
            <Youtube size={40}/>
          </a>
          <a href='#'>
            <Whatsapp size={40}/>
          </a>
          <a href='#'>
            <Envelope size={40}/>
          </a>
          <a href='#'>
            <Linkedin size={40}/>
          </a>
        </div>
      </div>
    </>
  )
}
