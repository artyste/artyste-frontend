import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
// import galleries from '../apiArray/galleries';
import Gallery from '../components/Gallery';
import axios from 'axios'; 


function GalleriesScreen({ match }) {
    const [galleries, setGalleries] = useState([])

    async function get_galleries() {
        const { data } = await axios.get('https://api.artyste.info/v1/galleries-list/')
        setGalleries(data)
    }
    
    useEffect(() => {
        console.log('use effect triggered');
        get_galleries();
    }, [])    
    
    return (
        <div>
            <h1>Galleries</h1>
            <hr/>
            <Row>
                {galleries.map(gallery => (
                    <Col key={gallery.id} sm={12} md={6} lg={4} xl={3}>
                        <Gallery gallery={gallery} />
                    </Col>
                ))}
            </Row>
        </div>

    );
}

export default GalleriesScreen;
