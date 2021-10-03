import React from 'react'
import { Card } from 'react-bootstrap'

function Gallery( {gallery} ) {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/gallery/${gallery.slug}`}>
                <Card.Img src={gallery.imglogo}/>
            </a>

            <Card.Body>
                <a href={`/gallery/${gallery.slug}`}>
                    <Card.Title as="div">
                        <strong>{gallery.name}</strong>
                    </Card.Title>
                </a>
            </Card.Body>

        </Card>
    )
}

export default Gallery
