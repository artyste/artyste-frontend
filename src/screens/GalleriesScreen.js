import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import galleries from '../apiArray/galleries';
import Gallery from '../components/Gallery';

function GalleriesScreen({ match }) {
    const gallery = galleries.find((g) => g.id === match.params.id)
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
