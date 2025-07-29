import { useState } from "react";
import axios from "axios";
import { FiUpload } from "react-icons/fi";

function UploadPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState("idle");

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        /**
         * Called when file input changes.
         * event contains information about what happened
         * React.ChangeEvent<HTMLInputElement> is typescript saying "this is an event from an HTML input element"
         *
         * event.target is the input element that triggered the event
         * files is an array of files selected by the user
         * files[0] is the first file selected (if any)
         */

        const file = event.target.files?.[0];

        if (
            file &&
            file.type === "application/pdf" &&
            file.size <= 5 * 1024 * 1024
        ) {
            setSelectedFile(file);
            setUploadStatus("ready");
        } else {
            setSelectedFile(null);
            setUploadStatus("error");
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        // prevent default behavior
        event?.preventDefault();
        // Optionally add styles
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        // Handle dropped files
        event.preventDefault();
        const file  = event.dataTransfer.files?.[0];
        if (
            file &&
            file.type === "application/pdf" &&
            file.size <= 5 * 1024 * 1024
        ) {
            setSelectedFile(file);
            setUploadStatus("ready");
        } else {
            setSelectedFile(null);
            setUploadStatus("error");
        }
    };

    const uploadFile = async () => {
        /**
         * Uploads the selected file to the server.
         * Uses axios to send a POST request with the file data.
         * Displays success or error messages based on the response.
         */

        console.log("About to upload to:", "https://turbo-engine-rx4vqr94j4r3xp5q-8000.app.github.dev/upload");
        console.log("Current page origin:", window.location.origin);

        // Function to upload the selected file
        if (!selectedFile) {
            setUploadStatus("error");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await axios.post("https://turbo-engine-rx4vqr94j4r3xp5q-8000.app.github.dev/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setUploadStatus("Uploaded");
            console.log("Upload successful:", response.data);
        } catch (error) {
            setUploadStatus("error");
            console.error("Upload failed:", error);
        }
    };

    return (
        <>
            <h1>Upload Your Resume</h1>
            <p>Upload your resume to get started with AI-powered skill extraction and job matching.</p>
            <div className="main-content">

                <div 
                className="drop-zone" 
                onDragOver={handleDragOver} 
                onDrop={handleDrop} >
                    <FiUpload size={50} />
                    <input id="hidden-file-input" type="file" onChange={handleFileSelect} style={{ display: 'none' }} accept=".pdf" />
                    <div className="file-selector">
                        <h3>Drop Your Resume Here</h3>
                        <p>or click to browse files</p>
                        <button onClick={() => document.getElementById("hidden-file-input")?.click()}>Browse Files</button>
                    </div>
                    <div className="file-info">
                        Supports PDF, DOC, DOCX • Maximum 5MB per file
                    </div>
                </div>

                <div className="file-error" style={{ display: uploadStatus === "error" ? "block" : "none" }}>
                    <p style={{ color: "red" }}>Error uploading file. Please try again.</p>
                </div>

                <div className="uploaded-files">
                    {selectedFile ? (
                        <div className="file-preview">
                            <p>Selected File: {selectedFile.name}</p>
                            <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
                            <button onClick={uploadFile}>Upload</button>
                        </div>
                    ) : (
                        <p>No file selected.</p>
                    )}
                </div>


            </div>
        </>
    );
}

export default UploadPage;
