let sun = document.querySelector("#sun_moon")
let main = document.querySelector(".main")
let bird = document.querySelector("#bird")
let audio = document.querySelector("audio")
let stop = document.querySelector(".fa-volume-mute")
let playBtn = document.querySelector("#playBtn")
let select = document.querySelector(".select")
let home = document.querySelector(".fa-home")
let selectBtn = document.querySelectorAll(".selectBtn")
let selectBtn1 = document.querySelector("#selectBtn1")
let selectBtn2 = document.querySelector("#selectBtn2")
let names = document.querySelector(".names")
let nameHeadding = document.querySelector(".names h2")
let play = document.querySelector("#play")
let name1 = document.querySelector("#name1")
let name2 = document.querySelector("#name2")
let name1Contance = document.querySelector(".name1")
let name2Contance = document.querySelector(".name2")
let gameInputs = document.querySelectorAll(".game div")
let xo = document.querySelector(".xo")
let xturn = document.querySelector("#xturn")
let oturn = document.querySelector("#oturn")
let allNames = document.querySelector(".allnames")
let return1 = document.querySelector(".return")
let winBtn = document.querySelector("#winBtn")
let center = document.getElementById("n5")
let rand = ["n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9"];
let rand1
let stars = document.createElement("div")
let Player2Game
let winPosition = [
    ["n1", "n2", "n3"],
    ["n4", "n5", "n6"],
    ["n7", "n8", "n9"],
    ["n1", "n4", "n7"],
    ["n2", "n5", "n8"],
    ["n3", "n6", "n9"],
    ["n1", "n5", "n9"],
    ["n3", "n5", "n7"]
]
let i = 0
let arr = []

let shineInterval;
let stopShineInterval;

sun.addEventListener("click", () => {
    sun.classList.toggle("active")
    setTimeout(() => {
        if (i == 0) {
            sun.src = "./images/moon.png"
            main.style.background = "var(--bg-dark)"
            for (let j = 0; j <= 3000; j++) {
                let star = document.createElement("div")
                star.classList.add("star")
                let size = Math.floor(Math.random() * 4)
                star.style.width = size + "px"
                star.style.height = size + "px"
                star.style.borderRadius = "50%"
                star.style.position = "absolute"
                star.style.zIndex = "0";
                star.style.top = Math.floor(Math.random() * 1080) + "px"
                star.style.left = Math.floor(Math.random() * 1920) + "px"
                star.style.background = "white"
                stars.appendChild(star)
            }
            // ----setInterval-----------------
            shineInterval = setInterval(starShine, 1000);
            stopShineInterval = setInterval(stopStarShine, 3000);

            sun.style.height = "200px"
            sun.style.top = "20%"
            sun.style.left = "10%"
            bird.style.display = "none";
            i = 1
            main.appendChild(stars)
            playBtn.classList.add("moon")
            allNames.classList.add("moon")
            play.classList.add("moon")
            nameHeadding.classList.add("moon")
            selectBtn.forEach(elem => {
                elem.classList.add("moon")
            });

        }
        else {
            // ----clearInterval-----------------
            clearInterval(shineInterval);
            clearInterval(stopShineInterval);

            sun.src = "./images/sun.png"
            main.style.background = "var(--bg-light)"
            sun.style.height = "300px"
            sun.style.top = "15%"
            sun.style.left = "7%"
            stars.innerHTML = "";
            bird.style.display = "inline";
            i = 0
            play.classList.remove("moon")
            playBtn.classList.remove("moon")
            allNames.classList.remove("moon")
            nameHeadding.classList.remove("moon")
            selectBtn.forEach(elem => {
                elem.classList.remove("moon")
            });

        }
    }, 1000);
    setTimeout(() => {
        sun.classList.remove("active")
    }, 2000);
})

// ------shine function--------------
function starShine() {
    for (let x = 0; x < 700; x++) {
        arr.push(stars.children[Math.floor(Math.random() * 3000)])
    }
    arr.forEach(elem => {
        elem.style.filter = "drop-shadow(0 0 3px #ffffff)";
    });
}
// ------shine stop function--------------
function stopStarShine() {
    arr.forEach(elem => {
        elem.style.filter = "none";
    });
    arr = []
};


playBtn.addEventListener("click", () => {
    select.classList.add("active")
    playBtn.classList.add("active")
})

let check = 0
stop.addEventListener("click", () => {

    if (check == 0) {
        audio.play()
        stop.classList.remove("fa-volume-mute")
        stop.classList.add("fa-volume-up")

        check = 1
    }
    else {
        audio.pause()
        stop.classList.remove("fa-volume-up")
        stop.classList.add("fa-volume-mute")
        check = 0
    }
})

home.addEventListener("click", () => {
    select.classList.remove("active")
    playBtn.classList.remove("active")
    names.classList.remove("active")
    xo.classList.remove("active")
    btnX.classList.remove("active")
    nameSolo.value = ""
    soloName.classList.remove("active")
    gameInputs.forEach(elem => {
        elem.innerHTML = ""
    });
    clearwinner()
})

selectBtn2.addEventListener("click", () => {
    select.classList.remove("active")
    names.classList.add("active")
    Player2Game = true
})

play.addEventListener("click", () => {
    if (name1.value == "") {
        name1Contance.innerHTML = "player 1"

    }
    else {
        name1Contance.innerHTML = name1.value
    }
    if (name2.value == "") {
        name2Contance.innerHTML = "player 2"
    }
    else {
        name2Contance.innerHTML = name2.value
    }
    name1.value = ""
    name2.value = ""
    xo.classList.add("active")
    names.classList.remove("active")
})
let turn = 0
let xPosition = []
let oPosition = []

gameInputs.forEach(elem => {

    elem.addEventListener("click", () => {
        if (Player2Game == true) {
            if (elem.innerHTML == "") {
                if (turn == 0) {
                    elem.innerHTML = "x"
                    turn = 1
                    xPosition.push(elem.id)
                    xturn.style.transform = "scale(1)";
                    oturn.style.transform = "scale(2)";
                    winCheck()
                }
                else {
                    elem.innerHTML = "0"
                    turn = 0
                    oPosition.push(elem.id)
                    xturn.style.transform = "scale(2)";
                    oturn.style.transform = "scale(1)";
                    winCheck()
                }

            }
        }
        else {
            if (elem.innerHTML == "") {

                elem.innerHTML = "x"
                turn = 1
                xPosition.push(elem.id)
                xturn.style.transform = "scale(1)";
                oturn.style.transform = "scale(2)";
                winCheck()
                setTimeout(() => {
                    rand1 = true
                    for (let i = 0; i < winPosition.length; i++) {
                        if (document.getElementById(winPosition[i][0]).innerHTML == "o" && document.getElementById(winPosition[i][2]).innerHTML == "o" && document.getElementById(winPosition[i][1]).innerHTML == "") {
                            document.getElementById(winPosition[i][1]).innerHTML = "o"
                            oPosition.push(winPosition[i][1])
                            rand1 = false
                            break;
                        }
                        else if (document.getElementById(winPosition[i][1]).innerHTML == "o" && document.getElementById(winPosition[i][2]).innerHTML == "o" && document.getElementById(winPosition[i][0]).innerHTML == "") {
                            document.getElementById(winPosition[i][0]).innerHTML = "o"
                            oPosition.push(winPosition[i][0])
                            rand1 = false

                            break;
                        }
                        else if (document.getElementById(winPosition[i][0]).innerHTML == "o" && document.getElementById(winPosition[i][1]).innerHTML == "o" && document.getElementById(winPosition[i][2]).innerHTML == "") {
                            document.getElementById(winPosition[i][2]).innerHTML = "o"
                            oPosition.push(winPosition[i][2])
                            rand1 = false

                            break;
                        }
                        else if (document.getElementById(winPosition[i][0]).innerHTML == "x" && document.getElementById(winPosition[i][1]).innerHTML == "x" && document.getElementById(winPosition[i][2]).innerHTML == "") {
                            document.getElementById(winPosition[i][2]).innerHTML = "o"
                            oPosition.push(winPosition[i][2])
                            rand1 = false

                            break;
                        }
                        else if (document.getElementById(winPosition[i][0]).innerHTML == "x" && document.getElementById(winPosition[i][2]).innerHTML == "x" && document.getElementById(winPosition[i][1]).innerHTML == "") {
                            document.getElementById(winPosition[i][1]).innerHTML = "o"
                            oPosition.push(winPosition[i][1])
                            rand1 = false

                            break;
                        }
                        else if (document.getElementById(winPosition[i][1]).innerHTML == "x" && document.getElementById(winPosition[i][2]).innerHTML == "x" && document.getElementById(winPosition[i][0]).innerHTML == "") {
                            document.getElementById(winPosition[i][0]).innerHTML = "o"
                            oPosition.push(winPosition[i][0])
                            rand1 = false

                            break;
                        }
                        else if (elem.id == "n1" || elem.id == "n3" || elem.id == "n7" || elem.id == "n9") {
                            if (center.innerHTML == "") {
                                center.innerHTML = "o"
                                oPosition.push(center.id)
                                rand1 = false

                                break;
                            }
                            else if (document.getElementById("n1").innerHTML == "x" && document.getElementById("n9").innerHTML == "x" && document.getElementById("n6").innerHTML == "") {
                                document.getElementById("n6").innerHTML = "o"
                                oPosition.push("n6")
                                rand1 = false

                                break;
                            }
                            else if (document.getElementById("n3").innerHTML == "x" && document.getElementById("n7").innerHTML == "x" && document.getElementById("n4").innerHTML == "") {
                                document.getElementById("n4").innerHTML = "o"
                                oPosition.push("n4")
                                rand1 = false

                                break;
                            }
                        }
                        else if (center.innerHTML == "") {
                            document.getElementById("n5").innerHTML = "o"
                            oPosition.push("n5")
                            rand1 = false

                            break;
                        }


                    }
                    if (rand1) {
                        for (let l = 0; l < 9; l++) {

                            if (document.getElementById(rand[l]).innerHTML == "") {
                                document.getElementById(rand[l]).innerHTML = "o"
                                oPosition.push(rand[l])
                                break

                            }
                        }

                    }
                    winCheck()
                }, 1000);
            }
        }
    })



});
let winCheckO = 0
let winCheckX = 0
let w = true
function winCheck() {
    for (let i = 0; i < winPosition.length; i++) {
        winCheckO = 0
        winCheckX = 0
        for (let j = 0; j < winPosition[i].length; j++) {
            oPosition.forEach(elem => {
                if (elem == winPosition[i][j]) {
                    winCheckO++
                    if (winCheckO == 3) {
                        winer("O", i)
                    }
                }
            })

            xPosition.forEach(elem => {
                if (elem == winPosition[i][j]) {
                    winCheckX++
                    if (winCheckX == 3) {
                        winer("X", i)
                    }
                }

            });
            if (xPosition.length == 5 && oPosition.length == 4 && w) {
                winer("")
            }

        }

    }

}
function winer(namewinner, i) {
    if (namewinner == "X") {
        winPosition[i].forEach(element => {
            document.getElementById(element).classList.add("win")
        });
        w = false
        document.getElementById("winnername").innerHTML = "<p>winer:</p>" + "\n" + name1Contance.innerHTML
    }
    else if (namewinner == "O") {

        winPosition[i].forEach(element => {
            document.getElementById(element).classList.add("win")
        });
        w = false
        document.getElementById("winnername").innerHTML = "<p>winer:</p>" + name2Contance.innerHTML
    }
    else {

        document.getElementById("winnername").innerHTML = "nobody's"
    }
    return1.classList.add("active")
}

function clearwinner() {
    xPosition.forEach(element => {
        document.getElementById(element).classList.remove("win")
    });
    oPosition.forEach(element => {
        document.getElementById(element).classList.remove("win")
    });
    winCheckO = 0
    winCheckX = 0
    w = true
    xPosition = []
    oPosition = []
    turn = 0
    xturn.style.transform = "scale(2)";
    oturn.style.transform = "scale(1)";
}

winBtn.addEventListener("click", () => {
    return1.classList.remove("active")
    gameInputs.forEach(elem => {
        elem.innerHTML = ""
    });
    clearwinner()
})
// solo mode
let soloName = document.querySelector(".soloName")

selectBtn1.addEventListener("click", () => {
    soloName.classList.add("active")
    select.classList.remove("active")
    Player2Game = false
})

let playSolo = document.querySelector("#playSolo")

playSolo.addEventListener("click", () => {
    soloName.classList.remove("active")
    if (nameSolo.value == "") {
        name1Contance.innerHTML = "player"
    }
    else {
        name1Contance.innerHTML = nameSolo.value
    }
    name2Contance.innerHTML = "computer"
    nameSolo.value = ""
    btnX.classList.remove("active")
    xo.classList.add("active")
})

let btnX = document.querySelector("#btnX")


btnX.addEventListener("click", () => {
    btnX.classList.add("active")

})



let nameSolo = document.querySelector("#nameSolo")