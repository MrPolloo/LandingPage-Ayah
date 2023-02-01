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
                        <Col>
                            {exp.judul}
                        </Col>
                        <Col style={{display:'flex',justifyContent:'flex-end',color:'white',}}>
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