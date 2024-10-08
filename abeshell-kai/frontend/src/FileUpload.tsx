import { useCallback } from "react";
import { useDropzone } from 'react-dropzone';
import UploadButton from "./Box.tsx";
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

        fetch('http://localhost:3001/upload.php', {
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

export function MyDropzoneBasic({ onFileUpload }: MyDropzoneBasicProps) {
    const [file, setFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState('');
    const [uploading, setUploading] = useState(false); // アップロード中のフラグ
    const [uploadSuccess, setUploadSuccess] = useState(false); // アップロード成功フラグ
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
            setFileName(acceptedFiles[0].name);
            setUploading(true); // アップロード中の状態にする
            uploadFile(acceptedFiles[0]);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const uploadFile = (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        fetch('http://localhost:3001/upload.php', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Upload success:', data);
            setUploading(false); // アップロード完了
            setUploadSuccess(true); // 成功フラグをセット
            onFileUpload(file); // アップロード成功時にファイル情報を渡す
        })
        .catch(error => {
            console.error('Upload error:', error);
            setUploading(false); // エラー発生時もアップロードを完了扱いにする
        });
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
                    {uploading && <p>アップロード中...</p>} {/* アップロード中メッセージ */}
                    {uploadSuccess && <p>アップロード成功！</p>} {/* 成功メッセージ */}
                    {file && <PostForm file={file} />}
                </div>
            </div>
        </div>
    );
}
