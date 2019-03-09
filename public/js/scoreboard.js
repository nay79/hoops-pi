(function() {
    var ws = new WebSocket('ws://192.168.1.133:8080', 'json');
    var score = 0;

    ws.onopen = function () {
        console.log('Websocket is open');
        ws.send('Hi from HoopsPi!');
        document.getElementById('score').innerHTML = score;
    };

    ws.onmessage = function (event) {
        if (event.data.indexOf('SCORE:') != -1) {
            score++;
            document.getElementById('score').innerHTML = score;
        }
        console.log('Message was ', event.data);
    };

    ws.onerror = function(error) {
       console.log('Error detected: ' + error.data);
    }

}());
