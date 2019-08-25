import * as React from 'react';

const UploadForm = () => {
    //this probably doesn't need to be it's own file
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
