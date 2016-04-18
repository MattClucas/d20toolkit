<?php
    $db = new mysqli("localhost", "root", "", "pathfinder");
    if($db->connect_error)
    {
        die("Connection failed: " . $db->connect_error);
    }

    if($_GET['action'] == "getMonsters") {
        $result = mysqli_query($db, "SELECT NAME FROM MONSTERS ORDER BY `NAME` ASC");
        if($result === FALSE) 
        { 
            die(mysql_error()); // TODO: better error handling
        }
        while($row = mysqli_fetch_assoc($result))
            $test[] = $row; 
        print json_encode($test);
    }
    else if($_GET['action'] == "getUrl") {
        $stmt = $db->prepare("SELECT `URL` FROM `MONSTERS` WHERE `NAME`= ? LIMIT 1");
        $stmt->bind_param("s", $_GET["monsterName"]);
        $stmt->execute();
        $stmt->bind_result($url);
        $stmt->fetch();
        printf ("%s \n", $url);
    }
    else if($_GET['action'] == "getInitStats") {
        $stmt = $db->prepare("SELECT `INIT`, `HD`, `HP`, `CR`, `NAME`, `URL` FROM `monsters` WHERE `NAME` = ? LIMIT 1");
        $stmt->bind_param("s", $_GET["monsterName"]);
        $stmt->execute();
        $res = $stmt->get_result();
        echo json_encode($res->fetch_all(MYSQLI_ASSOC));
        // $stmt->bind_result($cr, $hd, $hp, $init, $name, $url);
        //$stmt->fetch();
        //printf ("%s \n", $url);
    }
    $db->close();


?>