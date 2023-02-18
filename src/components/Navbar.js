import React, { useState } from 'react';
import {
  Nav,
  Navbar,
  Container,
  NavbarBrand,
  NavLink
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Nav.module.css';
import '../styles/Nav.module.css';
import Image from 'next/image';
import { ThreeDots } from 'react-bootstrap-icons';


export function NavbarModul() {
  const [navbar, setnavbar] = useState(0)

  // const changeColor = () => {
  //   if(window.scrollY >= 80){
  //     setnavbar(true);
  //   }else {
  //     setnavbar(false);
  //   }
  // }
  // window.addEventListener('scroll', changeColor);
    return (
    <>
      <Navbar sticky="top" expand='lg' className={styles.navbar} >
        <Container fluid className={styles.container}>
          <NavbarBrand href="/home">
            <Image src="/PKS_logo_2020.png" alt='Logo PKS' width={757} height={1063} className={styles.logo} />
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <ThreeDots size={30} color={"white"}/>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink className={styles.navbutton} href="#beranda">
                Beranda
              </NavLink>
              <NavLink className={styles.navbutton} href="#visi">
                Visi & Misi
              </NavLink>
              <NavLink className={styles.navbutton} href="#edu">
                Edukasi
              </NavLink>
              <NavLink className={styles.navbutton} href="#exp">
                Pengalaman
              </NavLink>
              <NavLink className={styles.navbutton} href="#kegiatan">
                Kegiatan
              </NavLink>
              <NavLink className={styles.navbutton} href="#kontak">
                Kontak
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarModul;
