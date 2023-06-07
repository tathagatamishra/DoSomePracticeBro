import "./App.css";

function App() {

  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var centerX = windowWidth / 2;
  var centerY = windowHeight / 2;
  var PI2 = Math.PI * 2;

  //canvas
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  setUpCanvas();
  function setUpCanvas() {
    canvas.width = windowWidth;
    canvas.height = windowHeight;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,1)";
    ctx.fill();
  }
  //キャンバスをクリア
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  //ベクトル
  class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    //初期値を保存
    saveInitProp() {
      this.startX = this.x;
      this.startY = this.y;
    }
    //ベクトル加算
    addProp(vectorObj) {
      this.x += vectorObj.x;
      this.y += vectorObj.y;
    }
    //ベクトル減算
    subProp(vectorObj) {
      this.x -= vectorObj.x;
      this.y -= vectorObj.y;
    }
    //ベクトル乗算
    mult(num) {
      this.x = this.x * num;
      this.y = this.y * num;
    }
    //ベクトル除算
    div(num) {
      this.x = this.x / num;
      this.y = this.y / num;
    }
    //ベクトルの大きさを返す
    mag() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    //正規化する
    normalize() {
      var size = Math.sqrt(this.x * this.x + this.y * this.y);
      if (size === 0) {
        return;
      }
      this.x = this.x * (1 / size);
      this.y = this.y * (1 / size);
    }
    //最大値
    limit(max) {
      if (this.x > max) {
        this.x = max;
      }
      if (this.x * -1 > max) {
        this.x = max * -1;
      }
      if (this.y > max) {
        this.y = max;
      }
      if (this.y * -1 > max) {
        this.y = max * -1;
      }
    }
    //長さ１のランダムな値を返す
    random2D() {
      this.x = Math.random() * 2 - 1;
      this.y = Math.random() * 2 - 1;
      return this.normalize();
    }
    //同じ値をもったVectorを返す
    copy() {
      return new Vector(this.x, this.y);
    }
  }

  //物体
  class Vehicle {
    constructor() {
      this.velocity = new Vector(0, 0);
      this.acceleration = new Vector(0, 0);
      this.vLocation = new Vector(centerX, centerY);
      this.maxSpeed = 8;
      this.maxSeek = 0.2;
      this.angle = 0;
      this.fillColor = "rgb(68,112,153)";
      this.trail = [];
      this.trailLength = 100;
      this.setUpTrail();
    }
    //尻尾を初期化
    setUpTrail() {
      for (var i = 0; i < this.trailLength; i++) {
        this.trail[i] = this.vLocation.copy();
      }
    }
    //操舵力を計算
    calculateSeek() {
      //目的地へのベクトル
      var desire = destination.vLocation.copy();
      desire.subProp(this.vLocation);
      var distance = desire.mag();
      if (distance > 150) {
        desire.normalize();
        desire.mult(this.maxSpeed);
      } else {
        desire.normalize();
        var speed = (this.maxSpeed * distance) / 150;
        desire.mult(speed);
      }
      //目的地へ向いたベクトルから現在の速度を引く
      var seekVelocity = desire.copy();
      seekVelocity.subProp(this.velocity);
      seekVelocity.limit(this.maxSeek);
      this.applyForce(seekVelocity);
    }
    //力を適用
    applyForce(Vector) {
      this.acceleration.addProp(Vector);
    }
    //位置を更新
    uptateState() {
      this.calculateSeek();
      this.velocity.addProp(this.acceleration);
      this.vLocation.addProp(this.velocity);
      this.angle = Math.atan2(this.velocity.y, this.velocity.x);
      this.acceleration.mult(0);
      this.updateTrail();
    }
    //尻尾の位置を更新
    updateTrail() {
      this.trail.push(this.vLocation.copy());
      this.trail = this.trail.slice(1, this.trailLength + 1);
      ctx.beginPath();
      ctx.moveTo(this.trail[0].x, this.trail[0].y);
      for (var i = 1; i < this.trailLength; i++) {
        ctx.lineTo(this.trail[i].x, this.trail[i].y);
      }
      ctx.strokeStyle = this.fillColor;
      ctx.stroke();
    }
    //描写
    draw() {
      ctx.save();
      ctx.translate(this.vLocation.x, this.vLocation.y);
      ctx.rotate(this.angle);
      ctx.beginPath();
      ctx.moveTo(0, 8);
      ctx.lineTo(0, -8);
      ctx.lineTo(20, 0);
      ctx.closePath();
      ctx.fillStyle = this.fillColor;
      ctx.fill();
      ctx.restore();
    }
  }

  //マウスの位置
  var mouseLocation = new Vector(centerX, centerY);
  //マウスの位置を更新
  canvas.addEventListener("mousemove", function (e) {
    mouseLocation.x = e.clientX;
    mouseLocation.y = e.clientY;
  });

  //目的地
  class Destination {
    constructor() {
      this.radius = 20;
      this.fillColor = "rgba(253,193,0,0.5)";
      this.vLocation = new Vector(mouseLocation.x, mouseLocation.y);
    }
    update() {
      this.vLocation.x = mouseLocation.x;
      this.vLocation.y = mouseLocation.y;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.vLocation.x, this.vLocation.y, this.radius, 0, PI2, true);
      ctx.closePath();
      ctx.fillStyle = this.fillColor;
      ctx.fill();
    }
  }
  var destination = new Destination();

  //動く物体
  var vehicle = new Vehicle();

  loop();
  function loop() {
    clearCanvas();
    vehicle.uptateState();
    vehicle.draw();

    //目的地の位置を更新
    destination.update();
    destination.draw();
    window.requestAnimationFrame(loop);
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
