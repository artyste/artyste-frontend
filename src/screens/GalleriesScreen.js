import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
// import galleries from '../apiArray/galleries';
import Gallery from '../components/Gallery';
import axios from 'axios'; 
import { listGalleries } from '../actions/galleryActions';

function GalleriesScreen({ match }) {
    const dispatch = useDispatch()
    const galleryList = useSelector( state => state.galleryList )
    const { error, loading, galleries } = galleryList
    // const [galleries, setGalleries] = useState([])

/*     async function get_galleries() {
        const { data } = await axios.get('https://api.artyste.info/v1/galleries-list/')
        setGalleries(data)
    }
     */
    useEffect(() => {
        dispatch(listGalleries())
/*         get_assets();
        get_galleries(); */
    }, [dispatch])

    
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

