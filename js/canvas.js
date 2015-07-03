<script type="text/javascript">

        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');

        // Draw blue rectangle
        ctx.fillStyle = '#2222FF';
        ctx.fillRect(0, 0, 125, 75);

        // Draw white X
        ctx.beginPath();
        ctx.lineWidth = "15";
        ctx.strokeStyle = "white";
        ctx.moveTo(0, 0);
        ctx.lineTo(125, 75);
        ctx.moveTo(125, 0);
        ctx.lineTo(0, 75);
        ctx.stroke();

    </script>