<?php
    require_once('./smtp/PHPMailerAutoload.php');
	
    $nm_de = 'José';
    $de = 'contato@josehlp.com.br';
    $para = 'jose.l.pellet@gmail.com';
    $assunto = 'teste assunto';
    $mensagem = 'teste';
	if (! $nm_de) {
		$nm_de = SITE_SMTP_USER_NAME;
	}
	
	$mail = new PHPMailer ();
	
	$mail->isSMTP (); 
	$mail->CharSet = 'UTF-8';
	$mail->Host = 'mail.josehlp.com.br'; 
	$mail->SMTPAuth = true; 
	$mail->Username = 'contato@josehlp.com.br'; 
	$mail->Password = 'zcJk5f0xKZ'; 
	$mail->SMTPSecure = 'ssl'; 
	$mail->Port = 587; 
	
	$mail->From = $de;
	$mail->FromName = $nm_de;
	$mail->addAddress ( $para ); 
	                          
	$mail->addReplyTo ( $de, $nm_de );
	$mail->isHTML ( true ); 
	
	$mail->Subject = $assunto;
	$mail->Body = $mensagem;
	 $mail->AltBody = 'body2';

	if (! $mail->send ()) {
		echo 'Message could not be sent.';
		echo 'Mailer Error: ' . $mail->ErrorInfo;
		return false;
	} else {
		return true;
	}