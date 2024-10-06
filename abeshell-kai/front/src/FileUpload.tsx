import { useCallback } from "react";
import { useDropzone } from 'react-dropzone';
import UploadButton from "./Box";
import React, { useState, useRef } from 'react';

interface PostFormProps {
    file: File;
}

function PostForm({ file }: PostFormProps) {
    // フォームの送信ロジック
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // デフォルトの送信動作を防止

        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
    };

    return null;
}
export default PostForm;

interface MyDropzoneBasicProps {
    onFileUpload: (file: File) => void;
}

export function MyDropzoneBasic({ onFileUpload }: MyDropzoneBasicProps){
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles);
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
            setFileName(acceptedFiles[0].name);
            uploadFile(acceptedFiles[0]);
            onFileUpload(acceptedFiles[0]);
        }
    }, [onFileUpload]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const uploadFile = (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => console.log('Upload success:', data))
        .catch(error => console.error('Upload error:', error));
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} ref={fileInputRef} />
                <div>
                    <UploadButton onFileUpload={handleButtonClick} />
                    {fileName && <p>{fileName} is uploaded!</p>}
                    {file && <PostForm file={file} />}
                </div>
            </div>
        </div>
    );
}
