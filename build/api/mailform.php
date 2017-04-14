<?php
require 'PHPMailerAutoload.php';


$contactName = $_POST["name"];
$contactEmail = $_POST["email"];
$contactMessage = $_POST["message"];

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.mukwa.ca';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'site@mukwa.ca';                 // SMTP username
$mail->Password = 'atvadventures2017';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 26;                                    // TCP port to connect to

$mail->setFrom('site@mukwa.ca', 'Mukwa.ca Contact Form');
$mail->addAddress('amanda@mukwa.ca', 'Amanda Trudeau');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo($contactEmail, $contactName);
$mail->addCC('arthur@mukwa.ca');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Information Requested at Mukwa.ca';
$mail->Body    = $contactMessage;
$mail->AltBody = $contactMessage;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}