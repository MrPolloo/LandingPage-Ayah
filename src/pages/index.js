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
            Nah kali ini yuk kenali wakil yang akan anda pilih untuk kabupaten Tangerang tercinta. SAYA WAKIL YANG TEPAT UNTUK ANDA PILIH ?
            </div>
            
          </div>
          <Image src='/greetingsPhoto.png' 
          width={308} height={400} 
          alt='profil' className={styles.photoTop}/>
        </div>
        <div className={styles.perkenalanBio}>
          Terima kasih sudah berkenan berkunjung ke halaman saya ini.
          Tiap hari kita dihadapkan pada keharusan memilih. Memilih meneruskan tidur dan bermimpi atau bangun dari tidur dan mewujudkan impian. Memilih membiasakan yang benar atau membenarkan yang biasa. Memilih mencari kebenaran atau pembenaran. Begitu seterusnya setiap hari sampai datang saatnya di mana kita tidak bisa memilih lagi ketika harus menuju ke liang kubur.<br/>
          Nah kali ini yuk kenali wakil yang akan anda pilih untuk kabupaten Tangerang tercinta. SAYA WAKIL YANG TEPAT UNTUK ANDA PILIH ?
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
          Saya adalah seorang pegawai swasta yang banyak pengalaman kerja dibidang Pemasaran selama 26 tahun. Saya lahir di Palembang, 19 Januari 1971. Saat ini saya tinggal di Cluster Catalina, Blok AD3 No.24, Kelurahan Medang, Kecamatan Pagedangan, Kabupaten Tangerang, Banten. 
          Keseharian saya juga aktif di berbagai Organisasi sosial di Masjid, Lingkungan RW, Kelurahan dan Politik di Partai Keadilan Sejahtera (PKS).
          </p>
          <p>
          Istri saya Hj. Rosmi Susilawati, M.Pd, adalah seorang guru SMP di Kota Tangerang, juga sebagai Ketua Bidang Pendidikan di Yayasan Bina Insan Madinah, RW06, Cluster Catalina, yang mempunyai TKIT dan TPQ (Taman Pendidikan Al Qur&apos;an). 
          Anak saya 4 orang, 3 laki laki dan 1 bungsu Perempuan.
          </p>
          <p>
          Di Keseharian saya juga aktif di berbagai kegiatan Sosial, di Masjid, RT, RW, Kelurahan dan Politik yaitu di Partai Keadilan Sejahtera (PKS). 
          Organisasi adalah hobbi saya, sejak SMP saya suka ikut Kegiatan Pramuka, sampai Kuliah dan sampai sekarang ini, karena saya senang bertemu banyak orang orang baru dan juga tantangan tantangan baru.
          </p>
          <p>
          Motto hidup : &quot;Sebaik baik manusia adalah yang paling bermanfaat bagi manusia lain&quot;
          </p>
        </Col>
      </div>
      <span className={styles.anchorVisi} id='keluarga'/>
      <div className={styles.family}>
        <div className={styles.divFamily}>
          <Image src='/Keluarga (2).jpg' width={1920} height={1080} alt='Foto Keluarga' className={styles.photoFamily}/>
        </div>
        <div className={styles.familyTitle}>
          <div>
            Keluargaku
          </div>
          <div className={styles.urutanKeluarga}>
          Athoya (21th), M. Nauval (22th), Ahmad Ependi (52th), Hj. Rosmi Susilawati, M.Pd (Istri, 51th), Haura Tsabita (18th), Imam Abiyyu (24th)
          </div>
        </div>
      </div>
      <span className={styles.anchorVisi} id='visi'/>
      <div className={styles.awesomeServ}>
        Visi
        <p>&nbsp;& Misi</p>
      </div>
      <div className={styles.visiTitle}>
        Visi
        <div className={styles.visiText}>
        &quot;Menjadi yang terdepan dalam memperjuangkan kepentingan rakyat untuk mewujudkan Kabupaten Tangerang yang Religius, berakhlak mulia, adil dan sejahtera&quot;
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
