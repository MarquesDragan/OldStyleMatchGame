var numberOffaces = 5;
var score = 0;



    function generateFaces() {

        var count = 0;
        var TheleftSide = document.getElementById("leftSide");
        var TherightSide = document.getElementById("rightSide");


        while (count < numberOffaces) {
            var image = document.createElement("img");
            image.src = "smile.png";
            var top_at = Math.floor((Math.random() * 400));
            var left_at = Math.floor((Math.random() * 400));
            image.style.position = 'absolute';
            image.style.top = top_at + 'px';
            image.style.left = left_at + 'px';
            TheleftSide.appendChild(image);
            count += 1;
            var leftSideimage = TheleftSide.cloneNode(true);
            leftSideimage.removeChild(leftSideimage.lastChild);
            TherightSide.appendChild(leftSideimage);
        }

        var themain = document.getElementsByTagName("main")[0];
        TheleftSide.lastChild.onclick = function nextLevel(event) {
            while (TheleftSide.firstChild) {
                TheleftSide.removeChild(TheleftSide.firstChild);
            };
            while (TherightSide.firstChild) {
                TherightSide.removeChild(TherightSide.firstChild);
            };
            event.stopPropagation();
            numberOffaces += 5;
            score += 1;
            generateFaces();
        };

        themain.onclick = function gameOver() {
            event.stopPropagation();
            alert("Game Over! \n\n your score is: " + score + "!");
            themain.onclick = null;
            TheleftSide.lastChild.onclick = null;
        };
    }
