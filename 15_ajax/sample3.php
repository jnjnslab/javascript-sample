<?php
$ret = array();
$ret['result'] = "NG";

if ($_POST['myname']=="yamada" and $_POST['mypass']=="abcde"){
    $ret['result'] = "OK";
    $ret['message'] = "ようこそ".$_POST['myname']."さん";
}

header("Content-Type:application/json; charset=utf-8;");
header("Access-Control-Allow-Origin:*");
echo json_encode($ret);