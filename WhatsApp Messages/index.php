<?php

use Source\Api;

require __DIR__ . "/vendor/autoload.php";

$api = new Api(HOST, INSTANCE, TOKEN);

/**Gerando o qrCode */
//$api->qrcode();


/**Gerando o qrCode */
// $code = $api->qrcodeBase64();
// echo "<pre>";
// print_r($code);
// echo '<h1>QRCODE Whatsapp</h1><hr><img src="'.$code["qrcode"].'"/>';


/**Logout na api */
//$api->logout();


/**Verificando o status da instance */
//$api->status();


/**Fazendo envio de mensagem normal */
//$api->text("5511999999999@s.whatsapp.net", "Essa é uma mensagem de teste! *Você* \nRecebeu?");