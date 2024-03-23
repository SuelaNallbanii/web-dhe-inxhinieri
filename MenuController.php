<?php
require_once '../config/Database.php';

class MenuController{
    public $db;

    public function __construct(){
        $this->db = new Database;
    }                                                           

    //CRUD

    public function readData(){
        $query = $this->db->pdo->query('SELECT * from menu');

        return $query->fetchAll();
    }

    public function insert($request){
        $query = $this->db->pdo->prepare('INSERT INTO menu(menu_emri, menu_lloji, menu_cmimi)
        VALUES (:menu_emri, :menu_lloji, :menu_cmimi)');

        $query->bindParam(':menu_emri', $request['emri']);
        $query->bindParam(':menu_lloji', $request['lloji']);
        $query->bindParam(':menu_cmimi', $request['cmimi']);
        $query->execute();

        return header('Location: menuDashboard.php');
    }

    public function edit($id){
        $query = $this->db->pdo->prepare('SELECT * from menu WHERE id = :id');
        $query->bindParam(':id', $id);
        $query->execute();

        return $query->fetch();
    }

    public function update($request, $id){
        $query = $this->db->pdo->prepare('UPDATE menu SET menu_emri = :menu_emri,
        menu_lloji = :menu_lloji, menu_cmimi = :menu_cmimi, WHERE id = :id');
        $query->bindParam(':menu_emri', $request['emri']);
        $query->bindParam(':menu_lloji', $request['lloji']);
        $query->bindParam(':menu_cmimi', $request['cmimi']);
        $query->bindParam(':id', $id);
        $query->execute();

        return header('Location: menuDashboard.php');
    }

    public function delete($id){
        $query = $this->db->pdo->prepare('DELETE from menu WHERE id=:id');
        $query->bindParam(':id', $id);
        $query->execute();

        return header("Location: menuDashboard.php");
    }
}
?>