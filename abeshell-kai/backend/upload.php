<?php
// ファイルが送信されているか確認
header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // ファイルがアップロードされているか確認
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        // アップロードされたファイル情報を取得
        $fileTmpPath = $_FILES['file']['tmp_name'];
        $fileName = $_FILES['file']['name'];
        $fileSize = $_FILES['file']['size'];
        $fileType = $_FILES['file']['type'];
        $fileNameCmps = explode(".", $fileName);
        $fileExtension = strtolower(end($fileNameCmps));

        // 保存先のディレクトリを指定
        $uploadFileDir = './uploads/';
        
        // ディレクトリが存在しない場合は作成
        if (!is_dir($uploadFileDir)) {
            mkdir($uploadFileDir, 0777, true);
        }

        // ファイルのパスを作成
        $dest_path = $uploadFileDir . $fileName;

        // ファイルを移動
        if (move_uploaded_file($fileTmpPath, $dest_path)) {
            $response = [
                'status' => 'success',
                'message' => 'File uploaded successfully.',
                'file_path' => $dest_path
            ];
        } else {
            $response = [
                'status' => 'error',
                'message' => 'There was an error moving the uploaded file.'
            ];
        }
    } else {
        $response = [
            'status' => 'error',
            'message' => 'No file uploaded or there was an upload error.'
        ];
    }
} else {
    $response = [
        'status' => 'error',
        'message' => 'Invalid request method.'
    ];
}

// レスポンスを JSON 形式で返す
header('Content-Type: application/json');
echo json_encode($response);
?>
