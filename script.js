var side = 10;
var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
var gishArr = [];
var monstrArr = [];
var titerArr = [];
var pinkArr = [];
var genArr  = [];


	
let matrix = []; // Մատրիցի ստեղծում
let rows = 50; // Տողերի քանակ
let columns = 50; // Սյուների քանակ

for (let y = 0; y < rows; y++) {
matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
for (let x = 0; x < columns; x++) {
let a = Math.floor(Math.random()*100);
if (a >= 0 && a < 20) {
matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
} 
if (a >= 10 && a < 40) {
matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
} 
else if (a >= 40 && a < 50) {
matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
} 
else if (a >= 50 && a < 70) {
matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
} 
else if(a >= 70 && a < 80) {
matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
} 
else if(a >= 80 && a < 90) {
    matrix[y][x] = 7; // Մատրիցի 20 տոկոսը կլինի 4
    } 
else if(a >= 90 && a < 100) {
matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
} 
}
}


function setup() {
    noStroke();
    frameRate(20);
    createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
    background('#acacac');

    //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
    //հիմնվելով մատրիցի վրա 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishArr.push(gishatich);
            }
            else if (matrix[y][x] == 4) {
                var monstr = new Monstr(x, y);
                monstrArr.push(monstr);
            }
            else if (matrix[y][x] == 5) {
                var titer = new Titer(x, y);
                titerArr.push(titer);
            }
            /*else if (matrix[y][x] == 7) {
                var gen = new Grassgen(x, y);
                genArr.push(gen);
            }*/
        }
    }
}
    //draw ֆունկցիան գծում է «կադրերը», վարկյանում 60 կադր արագությամբ
    //եթե տրված չէ այլ կարգավորում frameRate ֆունկցիայի միջոցով
    //draw ֆունկցիան ինչ որ իմաստով անվերջ կրկնություն է (цикл, loop)
    function draw() {
        //Գծում է աշխարհը, հիմվելով matrix-ի վրա
        background('#acacac');
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("green");
                    rect(j * side, i * side, side, side);
                } if (matrix[i][j] == 2) {
                    fill("orange");
                    rect(j * side, i * side, side, side);
                } if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                }
                if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                }
                if (matrix[i][j] == 4) {
                    fill('black');
                    rect(j * side, i * side, side, side);
                }
                if (matrix[i][j] == 5) {
                    var r = random  (255);
                    var g = random(255);
                    var b = random (255);
                    fill(r, g, b);
                    rect(j * side, i * side, side, side);
                }
                if (matrix[i][j] == 6) {
                    fill("pink");
                    rect(j * side, i * side, side, side);
                }
                /*if (matrix[i][j] == 7) {
                    fill("blue");
                    rect(j * side, i * side, side, side);
                }*/
            }
        }
        //յուրաքանչյուր խոտ փորձում է բազմանալ
        for (var i in xotArr) {
            xotArr[i].mul();
        }

        //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
        for (var i in eatArr) {
            eatArr[i].eat();
        }
        for (var i in gishArr) {
            gishArr[i].eat();
        }
        for (var i in monstrArr) {
            monstrArr[i].eat();
         }

         for (var i in titerArr) {
             titerArr[i].move();
          }
          /*for (var i in genArr) {
            genArr[i].mul();
         }*/
         
    }


