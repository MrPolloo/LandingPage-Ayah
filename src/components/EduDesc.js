import styles from '@/styles/Home.module.css'
import { Col, Row } from 'react-bootstrap'
import { EduData } from './Data/EduData'

export function EduDecs() {
    return (
        <>
        {EduData.map((edu, index) => {
            return (
                <div className={styles.eduDescBox}>
                    <div className={styles.eduContent}>
                    <Row>
                        <Col>
                            {edu.tempat}
                        </Col>
                        <Col style={{display:'flex',justifyContent:'flex-end',color:'white',}}>
                            {edu.tahun}
                        </Col>
                    </Row>
                    <div className={styles.eduJurusan}>
                        {edu.jurusan}
                        <p>
                        {edu.tingkatan}
                        </p>
                    </div>
                    </div>
                </div>
            )
        })}
        </>
    )
}