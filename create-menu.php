<?php
require_once '../controllers/MenuController.php';

$menu = new MenuController;
if(isset($_POST['submit'])){
    $menu->insert($_POST);
}


?>
<style>

input[type=text]{
    width:50%;
    padding:12px 20px;
    margin:8px 0;
    display:inline-block;
    border:1px solid #ccc;
    border-radius:4px;
}    
input[type=submit]{
    width:50%;
    background-color:#333;
    color:white;
    padding:14px 20px;
    margin:8px 0;
    border-radius:4px;
    cursor:pointer;
}
input[type=submit]:hover{
    background-color:crimson;
}
.container{
    border-radius:5px;
    background-color:#f2f2f2;
    padding:20px;
}

</style>

<div class="container">
    <div class="content">
    <form method="POST">
        Emri i sushit:
        <input type="text" name="emri">
        <br>
        Lloji i sushit:
        <input type="text" name="lloji">
        <br>
        Cmimi sushit:
        <input type="text" name="cmimi">
        <br>
        <input type="submit" name="submit" value="Save">
    </form>
</div>

</div>
