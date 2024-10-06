function PostForm(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost/abeshell-kai/webshell', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
}

export default PostForm;