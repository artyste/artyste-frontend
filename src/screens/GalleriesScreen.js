import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Gallery from '../components/Gallery';
import Loader from '../components/Loader';
import Message from '../components/Message';
import axios from 'axios'; 
import { listGalleries } from '../actions/galleryActions';

function GalleriesScreen({ match }) {
    const dispatch = useDispatch()
    const galleryList = useSelector( state => state.galleryList )
    const { error, loading, galleries } = galleryList

    useEffect(() => {
        dispatch(listGalleries())
    }, [dispatch])

    
    return (
        <div>
            <h1>Galleries</h1>
            <hr/>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :   
                    <Row>
                        {galleries.map(gallery => (
                            <Col key={gallery.id} sm={12} md={6} lg={4} xl={3}>
                                <Gallery gallery={gallery} />
                            </Col>
                        ))}
                    </Row>
            }
        </div>

    );
}

export default GalleriesScreen;

