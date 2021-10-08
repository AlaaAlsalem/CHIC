<?php
if($_POST["message"]) {
mail("alsalem.aladdin@gmail.com", "Here is the sample subject line",
$_POST["message"]. "From: alsalem.aladdin@gmaail.com");
}
?>