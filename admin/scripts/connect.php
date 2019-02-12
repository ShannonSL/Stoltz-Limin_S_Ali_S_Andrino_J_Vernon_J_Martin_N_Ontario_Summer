<?php

$db_dsn = array(
	'host'=>'localhost',
	'dbname'=>'db_ontario',
	'charset'=>'utf8'
);


$dsn = 'mysql:'. http_build_query($db_dsn,'',';');
$db_user = 'root';
$db_pass = 'root';



try{
	$pdo = new PDO($dsn,$db_user,$db_pass);
}catch(PDOException $exception){
	echo 'Connection Error: '.$exception->getMessage();
	exit();
}
?>
