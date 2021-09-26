import React from 'react';

function GalleryDetail() {
    return (
        <div>
            <h3>Gallery Detail</h3>
            <hr/>

            <p><a href="http://app.arthology.io/gallery/starship" target="_blank">http://app.arthology.io/gallery/:slug</a></p>

            <p><a href="https://github.com/artyste/artyste-backend-demo/blob/master/art/templates/art/gallery.html" target="_blank">https://github.com/artyste/artyste-backend-demo/blob/master/art/templates/art/gallery.html</a></p>

            <p>Api End-point<br/>
            <a href="https://api.artyste.info/v1/gallery/starship/" target="_blank">https://api.artyste.info/v1/gallery/starship/</a>
            </p>
        </div>
    );
}

export default GalleryDetail;
