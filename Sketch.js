let player;
function setup() {
  let clientHeight = document.getElementById('main').clientHeight;
  let clientWidth = document.getElementById('main').clientWidth;
  let c = createCanvas(clientWidth,clientHeight );
  c.parent('main');
player= new Player();
}
function draw() {
  player.show;
}
