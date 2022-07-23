<?php
	header('Content-Type: text/html; charset=UTF-8', true);
	define('SITE_SMTP_TYPE',	'smtp');
	define('SITE_SMTP_HOST', 	'192.185.176.251');
	define('SITE_SMTP_USER', 	'rodolfo@datamais.com.br');
	define('SITE_SMTP_PASS', 	'd@m@2014dts');
	require 'PHPMailerAutoload.php';

	$mail = new PHPMailer;

	//$mail->SMTPDebug = 3;                               // Enable verbose debug output

	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->CharSet = 'UTF-8';
	$mail->Host = SITE_SMTP_HOST;  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = SITE_SMTP_USER;                 // SMTP username
	$mail->Password = SITE_SMTP_PASS;                           // SMTP password
	$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 587;                                    // TCP port to connect to

	$mail->From = SITE_SMTP_USER;
	$mail->FromName = 'Rodo';
	$mail->addAddress(SITE_SMTP_USER, 'Quem recebe');     // Add a recipient
	//$mail->addAddress(SITE_SMTP_USER);               // Name is optional
	$mail->addReplyTo(SITE_SMTP_USER, 'Information');
	//$mail->addCC(SITE_SMTP_USER);
	//$mail->addBCC(SITE_SMTP_USER);

	$atachament = false;
	if($atachament){
		$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
		$mail->addAttachment('./composer.json');         // Add attachments
		//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
		$mail->isHTML(true);                                  // Set email format to HTML
	}

	$mail->Subject = 'Here ção';
	$mail->Body    = 'ção <b>in bold!</b>';
	$mail->AltBody = 'ção body2';

	if(!$mail->send()) {
	    echo 'Message could not be sent.';
	    echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
	    echo 'Message has been sent';
	}