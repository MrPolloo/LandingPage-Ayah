import styles from '@/styles/Home.module.css'
import { Col, Row, Card } from 'react-bootstrap'
import { ProgjaData } from './Data/ProgjaData'


export function ProgjaCard() {
    return (
        <>
        {ProgjaData?.map((progja) => {
            return (
                <Card key={progja.id} className={styles.progjaCard}>
                    <Card.Body>
                        <Card.Title className={styles.progjaTitleCard}>{progja.judul}</Card.Title>
                        <hr style={{border:'3px solid #dfb542'}}></hr>
                        <Card.Text classname={styles.progjaText}>
                        {progja.isi}
                        </Card.Text>
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>
            )
        })}
        </>
    )
}