<?php

if (isset($_GET['plante'])) {
    if (!empty($_GET['plante'])) {
        $plante = $_GET['plante'];

        include('configbdd.php');

        $query = $bdd->prepare('SELECT * FROM plante WHERE id_plante = :id_plante');
        $query->bindValue(':id_plante', $plante, PDO::PARAM_INT);
        $query->execute();
        $dataP = $query->rowCount();
        $bdd = NULL;

        if ($dataP != 0) {
            header('Location: ../mon_compte.php?share='.$plante.'#mes-messages');
        }else {header('Location: ../affichage_erreur.php?erreur=73');}
    }else {header('Location: ../index.php');}
}



?>