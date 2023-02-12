import styles from '@/styles/Home.module.css'
import { Col, Row } from 'react-bootstrap'
import { ExpData } from './Data/ExpData'

export function ExpDesc() {
    return (
        <>
        {ExpData?.map((exp) => {
            return (
                <div key={exp.id} className={styles.eduDescBox}>
                    <div className={styles.eduContent}>
                    <Row>
                        <Col md="auto" style={{width:'60%'}}>
                            {exp.judul}
                        </Col>
                        <Col className={styles.eduTextTahun}>
                            {exp.tahun}
                        </Col>
                    </Row>
                    <div className={styles.eduJurusan}>
                        {exp.jabatan}
                        <p>
                        {exp.tempat}
                        </p>
                    </div>
                    </div>
                </div>
            )
        })}
        </>
    )
}