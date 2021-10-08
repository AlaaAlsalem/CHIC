<?php
if($_POST["message"]) {
mail("akram.m.ahmad1989@gmail.com", "Here is the sample subject line",
$_POST["message"]. "From: akram.m.ahmad1989@gmail.com");
}
?>