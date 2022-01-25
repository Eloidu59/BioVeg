

<!DOCTYPE html>
<html>
    
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Exo:wght@100;200&family=Fira+Sans+Condensed:wght@200&family=Lobster+Two&family=Permanent+Marker&display=swap" rel="stylesheet">
    </head>

    <?php 

require_once('config/configbdd.php');

$result = $bdd->prepare('SELECT * FROM 'themes');  
$result->execute();
$data = $result->fetchAll();
$result->closeCursor();
$bdd = NULL;

?>

    
    

</html>

