import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
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
            setUploadStatus("uploading");
        } else {
            alert("Please select a valid PDF file.");
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
            setUploadStatus("uploading");
        } else {
            alert("Please drop a valid PDF file.");
        }
    };

    const uploadFile = async () => {
        // Send file to backend with axios
        alert("Uploading file...");
    };

    return (
        <>
            <h1>Test</h1>
            <div className="main-content">
              <div className="upload-container">
                  <h2>File Upload</h2>
                  
                  <input type="file" onChange={handleFileSelect} />
              </div>

              <div className="preview-container">
                  {selectedFile && (
                <div>
                    <iframe
                  src={URL.createObjectURL(selectedFile)}
                  width="100%"
                  height="400px"
                    />
                    <button onClick={uploadFile}>Upload</button>
                </div>
                  )}
              </div>
            </div>
        </>
    );
}

export default App;
