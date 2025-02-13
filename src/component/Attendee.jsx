import drop from "../assets/images/drop.png";
import mail from "../assets/images/Mail.png";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Attendee = ({ onUpload, uploadedImage, name, setName, email, setEmail }) => {
    const [previewURL, setPreviewURL] = useState(uploadedImage || null);
    const [isUploading, setIsUploading] = useState(false);
    const [emailError, setEmailError] = useState(""); // Store email validation error message
    const [nameError, setNameError] = useState(""); // Store name validation error message

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            setIsUploading(true);
            uploadImage(file);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/*" });

    const uploadImage = async (file) => {
        let formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
        formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                { method: "POST", body: formData }
            );

            const data = await response.json();
            onUpload(data.secure_url);
            setPreviewURL(data.secure_url);
        } catch (error) {
            console.error("Upload error:", error);
        } finally {
            setIsUploading(false);
        }
    };

    // Email validation function
    const validateEmail = (inputEmail) => {
        setEmail(inputEmail);
        if (!inputEmail.includes("@") || !inputEmail.includes(".")) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
    };

    // Name validation function
    const validateName = (inputName) => {
        setName(inputName);
        if (!inputName.trim()) {
            setNameError("Name cannot be blank");
        } else {
            setNameError("");
        }
    };

    return (
        <div className="attendee">
            <div className="upload">
                <h4>Upload Profile Photo</h4>
                <div>
                    <div className="blank"></div>
                    <div className="drag-drop" {...getRootProps()}>
                        <input {...getInputProps()} required />
                        {isUploading ? (
                            <p>Uploading...</p>
                        ) : previewURL ? (
                            <img className="selected" src={previewURL} alt="Uploaded" />
                        ) : (
                            <>
                                <img src={drop} alt="drag and drop icon" />
                                <p>Drag & drop or click to upload</p>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <hr />

            <div className="name">
                <h4>Enter your name</h4>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => validateName(e.target.value)} 
                    required 
                />
                {nameError && <p style={{ color: "red", fontSize: "0.8rem" }}>{nameError}</p>}
            </div>

            <div className="email">
                <h4>Enter your email*</h4>
                <div>
                    <img src={mail} alt="mail icon" />
                    <input
                        type="email"
                        placeholder="hello@avioflagos.io"
                        value={email}
                        onChange={(e) => validateEmail(e.target.value)}
                        required
                    />
                </div>
                {emailError && <p style={{ color: "red", fontSize: "0.8rem" }}>{emailError}</p>}
            </div>

            <div className="request">
                <h4>Special request?</h4>
                <textarea />
            </div>
        </div>
    );
};

export default Attendee;
