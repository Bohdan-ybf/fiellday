<?php
$result = '';
$name = $_POST["name-modal"];
$phone = $_POST["phone-modal"];
$email = $_POST["email-modal"];
$comment = $_POST["comment-modal"];
$message = '
                <html>
                <head>
                  <title>New application - Fiellday.prmgroup.com.ua</title>
                </head>
                <body>
                  <p><b>Name:</b> ' . $name . '</p>
                  <p><b>Phone number:</b> <a href="tel:' . $phone . '">' . $phone . '</a></p>
                  <p><b>Email:</b> <a href="mailto:' . $email . '">' . $email . '</a></p>
                  <p><b>Comment:</b> ' . $comment . '</p>
                </body>
                </html>
                ';

//$to = $email;
$to = 'b.yaronnyi@gmail.com';
$subject = 'New application - Fiellday.prmgroup.com.ua';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: company.prm.group@gmail.com' . "\r\n" .
    'Reply-To: company.prm.group@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'success';
} else {
    echo "Error";
}