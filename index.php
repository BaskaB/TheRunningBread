<?php
    $leaderboard = [
        [
            "name" => "Marek",
            "score" => 2500,
        ],
        [
            "name" => "Baska",
            "score" => 200,
        ],
    ];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="widtd=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="game">
        <div id="info-box">
            <h1>Game over</h1>
            <button id="play-again" type="button">Play again</button>
        </div>
        <div id="bread"></div>
        <div id="jam"></div>
    </div>
    <h1 id="score">0</h1>
    <div id="leaderboard">
        <table>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
            <?php foreach($leaderboard as $order => $player) { ?>
            <tr>
                <td><?= ++$order ?></td>
                <td><?= $player["name"] ?></td>
                <td><?= $player["score"] ?></td>
            </tr>
            <?php } ?>
            
        </table>

    </div>
    <script
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
    crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>
</html>