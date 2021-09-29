import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Asset from '../components/Asset';   
import Gallery from '../components/Gallery';
import galleries from '../apiArray/galleries';
import assets from '../apiArray/assets';

function HomeScreen() {
    return (
        <div>
            <h1>Top Artworks</h1>
            <hr/>
            <Row>
                {assets.map(asset => (
                    <Col key={asset.id} sm={12} md={6} lg={4} xl={3}>
                        <Asset asset={asset} />
                    </Col>
                ))}
            </Row>

            <h1>Top Galleries</h1>
            <hr/>
            <Row>
                {galleries.map(gallery => (
                    <Col key={gallery.id} sm={12} md={6} lg={4} xl={3}>
                        <Gallery gallery={gallery} />
                    </Col>
                ))}
            </Row>

            <div>
                <p><a href="https://api.artyste.info/" target="_blank">https://api.artyste.info/</a></p>

                <p><a href="https://github.com/artyste/artyste-backend-demo/blob/master/art/templates/art/home.html" target="_blank">https://github.com/artyste/artyste-backend-demo/blob/master/art/templates/art/home.html</a></p>

            </div>
        </div>

    );
}

export default HomeScreen;
