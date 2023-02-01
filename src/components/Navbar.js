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
      <Navbar sticky="top" className={styles.navbar} >
        <Container fluid className={styles.container}>
          <NavbarBrand href="/home">
            <Image src="/PKS_logo_2020.png" className={styles.logo} />
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink className={styles.navbutton} href="/home">
                Beranda
              </NavLink>
              <NavLink className={styles.navbutton} href="/cariLowongan">
                Lowongan
              </NavLink>
              <NavLink className={styles.navbutton} href="/dataStatistik">
                Data Statistik
              </NavLink>
              <NavLink className={styles.navbutton} href="/FAQ">
                Bantuan
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarModul;
