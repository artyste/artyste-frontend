import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Asset from '../components/Asset';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Gallery from '../components/Gallery';

import { listAssets } from '../actions/assetActions';
import { listGalleries } from '../actions/galleryActions';

function HomeScreen() {
    const dispatch = useDispatch()
    const assetList = useSelector( (state) => state.assetList)
    const galleryList = useSelector( (state) => state.galleryList)
    const { error, loading, assets } = assetList
    const { galleries } = galleryList

    useEffect(() => {
        dispatch(listAssets())
        dispatch(listGalleries())
    }, [dispatch])

    return (
        <div>
            <h1>Top Artworks</h1>
            <hr/>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <Row>
                        {assets.slice(0, 8).map(asset => (
                            <Col key={asset.id} sm={12} md={6} lg={4} xl={3}>
                                <Asset asset={asset} />
                            </Col>
                        ))}
                    </Row>
            }


            <h1>Top Galleries</h1>
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

            <div>
                <p><a href="https://api.artyste.info/" target="_blank">https://api.artyste.info/</a></p>

                <p><a href="https://github.com/artyste/artyste-backend-demo/blob/master/art/templates/art/home.html" target="_blank">https://github.com/artyste/artyste-backend-demo/blob/master/art/templates/art/home.html</a></p>

            </div>
        </div>

    );
}

export default HomeScreen;

