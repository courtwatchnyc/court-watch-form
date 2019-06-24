import * as React from 'react';

const UploadForm = () => {
    return (
        <label
            className="upload-file"
            htmlFor="upload-btn"
        >
            <input
                id="upload-btn"
                type="file"
                accept=".jpg, .jpeg, .png"
            />
        </label>
    )
}

export default UploadForm;