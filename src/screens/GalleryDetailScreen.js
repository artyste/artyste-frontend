import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Gallery from '../components/Gallery';
import GalleriesScreen from './GalleriesScreen';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listGalleryDetails } from '../actions/galleryActions';
import axios from "axios";
 

function GalleryDetailScreen() {

    const [gallery, setGallery] = useState([])
    const { slug } = useParams();

    async function get_gallery(slug) {
        const { data } = await axios.get(`https://api.artyste.info/v1/gallery/${slug}/`)
        setGallery(data[0])
    }
        get_gallery(slug)    

/*  const dispatch = useDispatch()
    const galleryDetails = useSelector((state) => state.galleryDetails)
    const { loading, error, gallery } = galleryDetails

     useEffect(() => {
        dispatch(listGalleryDetails(match.params.id))
    }, [dispatch, match])
 */
    
    return (
        <div>
            <Link to='/galleries' className='btn btn-light my-3'>Go Back</Link>

            <h1>{gallery.name}</h1>
            <hr/> 
            <Image src={gallery.imgbanner} alt={gallery.name} fluid/>
            
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

        </div>

    );
}

export default GalleryDetailScreen;
