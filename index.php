<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['email'])) {
    $errors[] = 'Email vazio';
  } else {
    $email = $_POST['email'];
    
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Email inválido';
    }
  }
  if (empty($_POST['message'])) {
    $errors[] = 'Telefone não digitado';
  } else {
    $message = $_POST['message'];
  }
  if (empty($errors)) {
    $date = date('j, F Y h:i A');
    
    $emailBody = "
    <html>
    <head>
    <title>$email entrou em contato</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Data: <span style=\"color:#888\">$date</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Telefone: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";
    
    $headers = 	'De: Contato de As Troianas <troianas@siteguy.dev>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" . 
    "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'troianas@siteguy.dev';
    $subject = 'Quero fazer parte de As Troianas';
    
    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;	
    }
  }
}
?>

  <?php if (!empty($errors)) : ?> 

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>
  
  
  <?php if (isset($sent) && $sent === true) : ?> 

{
  "status": "success",
  "message": "Email enviado com sucesso"
}
  <?php endif; ?>