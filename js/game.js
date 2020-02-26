export function findTreasure() {
    //helpers
    let $page = document.getElementById("page");

    let getRandomNumber = size => {
        return Math.floor(Math.random() * size);
    }

    let getDistance = (e, target) => {
        let diffX = e.offsetX - target.x;
        let diffY = e.offsetY - target.y;

        return Math.sqrt((diffX * diffX) + (diffY + diffY));
    }



    let getDistanceHint = distance => {
        if (clickBlock === false) {
            if (distance < 30) {
                document.body.style.background = "#e57373";
                $page.style.background = "#e57373";
                $winContainer.style.background = "#e57373";
                return "Muy cerca";
            } else if (distance < 40) {
                document.body.style.background = "#ffcc80";
                $page.style.background = "#ffcc80";
                $winContainer.style.background = "#ffcc80";
                return "Cerca";
            } else if (distance < 60) {
                document.body.style.background = "#fff59d";
                $page.style.background = "#fff59d";
                $winContainer.style.background = "#fff59d";
                return "Vas por buen camino"
            } else if (distance < 100) {
                document.body.style.background = "#aed581";
                $page.style.background = "#aed581";
                $winContainer.style.background = "#aed581";
                return "Algo cerca"
            } else if (distance < 180) {
                document.body.style.background = "#81d4fa";
                $page.style.background = "#81d4fa";
                $winContainer.style.background = "#81d4fa";
                return "Lejos"
            } else {
                document.body.style.background = "#9fa8da";
                $page.style.background = "#9fa8da";
                $winContainer.style.background = "#9fa8da";
                return "Muy lejos";
            }
        }
    }

    const width = 400;
    const height = 400;
    let clickBlock = false;

    let target = {
        x: getRandomNumber(width),
        y: getRandomNumber(height)
    };

    let reload = () => {
        location.reload();
    };

    let $map = document.getElementById("map");
    let $distance = document.getElementById("distance");
    let $win = document.getElementById("win");
    let $winContainer = document.getElementById("winContainer");
    let $restartButton = document.getElementById("restartButton");

    let clicks = 0;

    $map.addEventListener("click", function (e) {
        if (clickBlock === false) {
            clicks++;
        }
        let distance = getDistance(e, target);
        let distanceHint = getDistanceHint(distance);
        if (clickBlock === true) {
            $distance.innerHTML = "Has ganado."
        } else {
            $distance.innerHTML = distanceHint;
        }

        if (distance < 20) {
            $win.innerHTML = `Has encontrado el Tesla en ${clicks} clicks.`
            $restartButton.style.display = "block";
            $winContainer.style.display = "block";
            clickBlock = true;
            $restartButton.addEventListener("click", reload);
        }
    })
}