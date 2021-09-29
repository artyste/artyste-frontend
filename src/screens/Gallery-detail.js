import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Gallery from '../components/Gallery';
import galleries from '../apiArray/galleries';
import louvre from '../apiArray/louvre';
import GalleriesScreen from './GalleriesScreen';


function GalleryDetailScreen({ match }) {
    const galleryDetail = galleries.find((g) => g.id === match.params.id)
    return (
        <Container>
            <Link to='/galleries' className='btn btn-light my-3'>Go Back</Link>
            <Image src={galleries.imgbanner} alt={galleries.name} fluid />
            <Row>
                <Col>

                </Col>
            </Row>
                
            <div>
                <p><a href="http://app.arthology.io/gallery/starship" target="_blank">http://app.arthology.io/gallery/:slug</a></p>

                <p><a href="https://github.com/artyste/artyste-backend-demo/blob/master/art/templates/art/gallery.html" target="_blank">https://github.com/artyste/artyste-backend-demo/blob/master/art/templates/art/gallery.html</a></p>

                <p>Api End-point<br/>
                <a href="https://api.artyste.info/v1/gallery/starship/" target="_blank">https://api.artyste.info/v1/gallery/starship/</a>
                </p>
            </div>
        </Container>
    )
}

export default GalleryDetailScreen
