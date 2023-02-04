import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavbarModul from '../components/Navbar'
import { Col, Card } from 'react-bootstrap'
import { ChatSquareDotsFill, Envelope, Facebook, Instagram, Linkedin, Whatsapp, Youtube } from 'react-bootstrap-icons'
import ImageSlider from '../components/ImageSlider'
import { SliderData } from '../components/Data/SliderData'
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
      <span className={styles.anchor} id='beranda'/>
        <div className={styles.photoBoxTop}>
          <div className={styles.greetingsName}>
            Assalamu &apos;Alaikum!
            <br></br>
            <>
            Hi! Saya
            </>
            <p>
              Ahmad Ependi
            </p>
            <div>
            Terima kasih sudah berkenan berkunjung ke halaman saya ini. <br/>
            Tiap hari kita dihadapkan pada keharusan memilih. Memilih meneruskan tidur dan bermimpi atau bangun dari tidur dan mewujudkan impian. Memilih membiasakan yang benar atau membenarkan yang biasa. Memilih mencari kebenaran atau pembenaran. Begitu seterusnya setiap hari sampai datang saatnya di mana kita tidak bisa memilih lagi ketika harus menuju ke liang kubur.
            Nah kali ini  yuk kenali wakil yang akan anda pilih untuk kabupaten Tangerang tercinta.  SAYA WAKIL YANG TEPAT UNTUK ANDA PILIH ?
            </div>
            
          </div>
          <Image src='/greetingsPhoto.png' 
          width={308} height={400} 
          alt='profil' className={styles.photoTop}/>
        </div>
        <div className={styles.perkenalanBio}>
          Terima kasih sudah berkenan berkunjung ke halaman saya ini.
          Tiap hari kita dihadapkan pada keharusan memilih. Memilih meneruskan tidur dan bermimpi atau bangun dari tidur dan mewujudkan impian. Memilih membiasakan yang benar atau membenarkan yang biasa. Memilih mencari kebenaran atau pembenaran. Begitu seterusnya setiap hari sampai datang saatnya di mana kita tidak bisa memilih lagi ketika harus menuju ke liang kubur.<br/>
          Nah kali ini  yuk kenali wakil yang akan anda pilih untuk kabupaten Tangerang tercinta.  SAYA WAKIL YANG TEPAT UNTUK ANDA PILIH ?
        </div>

      <div className={styles.cardWhyYouShould}>
        <Col>
          <Image src='/perkenalan.jpg' width={1920} height={1080} alt='Foto Ahmad Ependi' className={styles.cardPhoto}/>
        </Col>
        <Col className={styles.textCard}>
          Siapakah itu
          <div>
          Ahmad Ependi ?
          </div>
          <p>
          Halo! Perkenalkan nama saya Ahmad Ependi. Saya lahir di Palembang, 19 Januari 1971.
          Saat ini saya tinggal di Cluster Catalina, Blok AD3 No.24, Kabupaten Tangerang, Banten.
          </p>
          <p>
          Saya sering sekali menggeluti bidang perkerjaan layanan masyarakat. 
          Saat masih menjadi mahasiswa, saya menjadi Ketua Himpunan Mahasiswa Kimia di Universitas Sriwijaya.
          Sempat menjadi Ketua Dewan Kemakmuran Masjid(DKM) di perumahan saya selama 6 tahun.
          Setelah menjadi Ketua DKM, saya lanjut menjadi Ketua RW 06 di tempat tinggal saya.
          Saat ini saya juga merupakan Pembina Yayasan Bina Insan Madinah.
          Ketika di PKS saya diamanahkan menjadi Koordinator Bidang Hubungan Industrial DPW PKS Banten.
          </p>
        </Col>
      </div>
      {/* <div className={styles.awesomeServ}>
        My Awesome
        <p>&nbsp;Service</p>
      </div> */}
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
      <span className={styles.anchorKegiatan} id='kegiatan'/>
      <div className={styles.educationTitle}>
        Education &&nbsp;<p style={{color:'#ffb301'}}>Experience</p>
      </div>
      <span className={styles.anchor} id='exp'/>
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
      <span className={styles.anchor} id='kontak'/>
          <a href='https://facebook.com/ahmad.ependi'>
            <Facebook size={30}/>
          </a>
          <a href='https://www.instagram.com/ependi90/'>
            <Instagram size={30}/>
          </a>
          <a href='#'>
            <Youtube size={30}/>
          </a>
          <a href='https://wa.me/628111936791'>
            <Whatsapp size={30}/>
          </a>
          <a href='mailto: ependi2010@gmail.com'>
            <Envelope size={30}/>
          </a>
          <a href='#'>
            <Linkedin size={30}/>
          </a>
        </div>
      </div>
    </>
  )
}
