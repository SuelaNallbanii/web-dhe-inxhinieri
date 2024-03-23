<?php
require_once '../controllers/MenuController.php';
if(isset($_GET['id'])){
    $menuId = $_GET['id'];
}
$menu = new MenuController;
$currenMenu = $menu->edit($menuId);

if(isset($_POST['submit'])){
    $menu->update($_POST, $menuId);
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
    <form METHOD="post">
    Emri:
    <input type="text" name="emri" value="<?php echo $currenMenu['menu_emri']; ?>">
    <br>
    Lloji:
    <input type="text" name="lloji" value="<?php echo $currenMenu['menu_lloji']; ?>">
    <br>
    Cmimi:
    <input type="text" name="cmimi" value="<?php echo $currenMenu['menu_cmimi']; ?>">
    <br>
    <input type="submit" name="submit" value="Update" >
        </form>
    </div>
</div>
