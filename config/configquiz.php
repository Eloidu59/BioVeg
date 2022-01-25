<?php

if (isset($_GET['plante'])) {
    if (!empty($_GET['plante'])) {
        $plante = $_GET['plante'];

        include('configbdd.php');

        $query = $bdd->prepare('SELECT * FROM plante WHERE i');
        $query->bindValue(':id_plante', $plante, PDO::PARAM_INT);
        $query->execute();
        $dataP = $query->rowCount();
        $bdd = NULL;


}



?>