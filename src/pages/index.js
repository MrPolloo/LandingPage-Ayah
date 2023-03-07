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
import { ProgjaCard } from '@/components/ProgjaCard'


export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda</title>
        <meta name="description" content="Portofolio Dewan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/logotitlebar.png" />
      </Head>
      <NavbarModul/>
      <span className={styles.anchor} id='beranda'/>
        <div className={styles.photoBoxTop}>
          <div className={styles.greetingsName}>
            Assalamu &apos;alaikum!
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
      <span className={styles.anchorVisi} id='visi'/>
      <div className={styles.awesomeServ}>
        Visi
        <p>&nbsp;& Misi</p>
      </div>
      <div className={styles.visiTitle}>
        Visi
        <div className={styles.visiText}>
        &quot;Menjadi  yang terdepan dalam memperjuangkan kepentingan rakyat untuk mewujudkan Kabupaten Tangerang yang Religius, berakhlak mulia, adil dan sejahtera&quot;
        </div>
      </div>
      <div className={styles.misiTitle}>
        Misi
        <div className={styles.misiText}>
          <div className={styles.twoMisiText}>
            <Col>
              <p className={styles.misiTitleText}>
                <p>1.&nbsp;</p>Mendorong nilai keagamaan
              </p>
              <div>
                Mendorong peningkatkan penerapan nilai-nilai keagamaan dalam kehidupan bermasyarakat menuju masyarakat yang religius
              </div>
            </Col>
            <Col>
              <p className={styles.misiTitleText}>
                <p>2.&nbsp;</p>Memperjuangkan kebijakan publik yang bersih
              </p>
              <div>
                Memperjuang kebijakan publik yang berpihak kepada kemaslahatan masyarakat yang bersih dari korupsi, kolusi, dan nepotisme
              </div>
            </Col>
          </div>
          <div className={styles.twoMisiText}>
            <Col>
              <p className={styles.misiTitleText}>
                <p>3.&nbsp;</p>Mendorong peraturan yang melindungi rakyat
              </p>
              <div>
                Mendorong dan memperkuat lahirnya peraturan daerah yang melindungi kepentingan rakyat, daerah, dan meningkatkan kesejahteraan rakyat
              </div>
            </Col>
            <Col>
              <p className={styles.misiTitleText}>
                <p>4.&nbsp;</p>Mendorong anggaran untuk rakyat
              </p>
              <div>
                Mendorong politik anggaran yang berpihak kepada Rakyat untuk penanggulangan pengangguran, kemiskinan, pembangunan infrastruktur, dan peningkatan kapasitas sumber daya manusia Indonesia yang kreatif dan handal
              </div>
            </Col>
          </div>
          <div className={styles.twoMisiText}>
            <Col>
              <p className={styles.misiTitleText}>
                <p>5.&nbsp;</p>Meningkatkan partisipasi masyarakat
              </p>
              <div>
                Meningkatkan partisipasi Masyarakat dalam mengawasi Kinerja Dewan Perwakilan Rakyat Daerah
              </div>
            </Col>
            <Col>
              <p className={styles.misiTitleText}>
                <p>6.&nbsp;</p>Mendorong pemerintahan yang transparan
              </p>
              <div>
                Mendorong terwujudnya Penyelenggaraan Pemerintahan yang transparan, bersih dan akuntabel
              </div>
            </Col>
          </div>
        </div>
      </div>

      <div className={styles.progjaTitle}>
        Program<div>&nbsp;Kerja</div>
      </div>
      <span className={styles.anchorProgja} id='progja'/>
      <div className={styles.progjaContentBox}>
        <ProgjaCard/>
      </div>

      <ImageSlider slides={SliderData}/>
      <span className={styles.anchorKegiatan} id='kegiatan'/>
      <div className={styles.educationTitle}>
        Riwayat <div>&nbsp;Pendidikan</div>
      </div>
      <span className={styles.anchor} id='edu'/>
      <div className={styles.eduExpBox}>
        <div className={styles.eduBox}>
          <EduDecs/>
        </div>
        {/* <div className={styles.lineMid}></div> */}
      </div>
      <div className={styles.educationTitle}>
        Pengalaman
        <div>&nbsp;Organisasi</div>
      </div>
      <span className={styles.anchor} id='exp'/>
        <div className={styles.eduExpBox}>
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
