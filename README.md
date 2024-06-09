<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crash Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root">
        <div class="container">
            <h1>Crash Game</h1>
            <div id="game">
                <div id="rocket" class="rocket"></div>
                <div id="static" class="static"></div>
                <div id="multiplier">1.00x</div>
                <button id="startButton">Start</button>
                <button id="cashoutButton" disabled>Cash Out</button>
            </div>
            <div id="log"></div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    width: 300px;
}

#game {
    position: relative;
    margin-top: 20px;
    height: 200px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    overflow: hidden;
}

#rocket, #static {
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 50px;
    background-size: contain;
}

#rocket {
    left: 50%;
    transform: translateX(-50%);
    background: url('rocket.png') no-repeat center center;
}

#static {
    left: 0;
    background: url('static.png') no-repeat center center;
}

#multiplier {
    font-size: 2em;
    margin: 20px 0;
}

button {
    padding: 10px 20px;
    font-size: 1em;
    margin: 5px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
}

button#startButton {
    background-color: #007bff;
    color: #ffffff;
}

button#cashoutButton {
    background-color: #ff4d4d;
    color: #ffffff;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

#log {
    margin-top: 20px;
    font-size: 0.9em;
    color: #cccccc;
}
