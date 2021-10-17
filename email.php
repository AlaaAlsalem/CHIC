<?php 
if(isset($_POST['submit'])){
    $to = "akram.m.ahmad1989@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['First_name'];
    $last_name = $_POST['Last_name'];
    $Gender=$_POST['Gender'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " Gender: " . "\n\n" . $_POST['Gender'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['Gender'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <img src="./images/loggo.svg" width="80%" height="80%" title="Logo of a company" alt="Logo of a company" />
    <p style="font-size:35px"> Mail Sent. Thank you " '. $first_name . " " . $last_name ." ".$Gender.' ", we will contact you shortly.  
    </html>' ;
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
