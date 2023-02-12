import styles from '@/styles/Home.module.css'
import { Col, Row } from 'react-bootstrap'
import { EduData } from './Data/EduData'

export function EduDecs() {
    return (
        <>
        {EduData?.map((edu) => {
            return (
                <div key={edu.id} className={styles.eduDescBox}>
                    <div className={styles.eduContent}>
                    <Row>
                        <Col md="auto">
                            {edu.tempat}
                        </Col>
                        <Col className={styles.eduTextTahun}>
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