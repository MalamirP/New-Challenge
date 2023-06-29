import React, { useState } from "react";

import './Upload-Page.css';

function UploadPage() {
    const [image, setImage] = useState(null);
    const [previewURL, setPreviewURL] = useState(null);

    function fileSelectedHandler(event) {
        const file = event.target.files[0];
        setImage(file);
        setPreviewURL(URL.createObjectURL(file));
    }

    return (
        <div className="container">
            <div className="content">
                <input type="file" onChange={fileSelectedHandler} className="file-input" />
                <button disabled={!image}>Upload</button>
                {previewURL && (
                    <div className="image-container">
                        <img src={previewURL} alt="Preview" className="preview-image" />
                    </div>
                )}
            </div>
        </div>
    );
}


export default UploadPage;