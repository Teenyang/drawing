export default {
  //! ctx.rect version
  Square(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.isInRange = false;
    this.isDragging = false;

    this.strokeColor = "black";
    this.fillColor = "white";
    this.update = function ({ x, y, strokeColor, fillColor }) {
      this.x = x;
      this.y = y;
      this.strokeColor = strokeColor;
      this.fillColor = fillColor;
    };

    this.render = function (ctx) {
      ctx.save(); // save the default state
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.strokeStyle = this.strokeColor;
      ctx.fillStyle = this.fillColor;
      ctx.fill();
      ctx.stroke();
      ctx.restore(); // 將canvas恢復到最近的保存狀態，便能使用默認狀態繪製出形狀
    };

    this.range = function (x, y) {
      const rangeX = this.x <= x && x <= this.x + this.width;
      const rangeY = this.y <= y && y <= this.y + this.height;
      this.isInRange = rangeX && rangeY ? true : false;
      console.warn("Square isInRange: ", this.isInRange);
    };
  },

  Rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.isInRange = false;
    this.isDragging = false;

    this.strokeColor = "black";
    this.fillColor = "white";
    this.update = function ({ x, y, strokeColor, fillColor }) {
      this.x = x;
      this.y = y;
      this.strokeColor = strokeColor;
      this.fillColor = fillColor;
    };

    this.render = function (ctx) {
      ctx.save(); // save the default state
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.strokeStyle = this.strokeColor;
      ctx.fillStyle = this.fillColor;
      ctx.fill();
      ctx.stroke();
      ctx.restore(); // 將canvas恢復到最近的保存狀態，便能使用默認狀態繪製出形狀
    };

    this.range = function (x, y) {
      const rangeX = this.x <= x && x <= this.x + this.width;
      const rangeY = this.y <= y && y <= this.y + this.height;
      this.isInRange = rangeX && rangeY ? true : false;
      console.warn("Rectangle isInRange: ", this.isInRange);
    };
  },

  Triangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.isInRange = false;
    this.isDragging = false;

    this.strokeColor = "black";
    this.fillColor = "white";
    this.update = function ({ x, y, strokeColor, fillColor }) {
      this.x = x;
      this.y = y;
      this.strokeColor = strokeColor;
      this.fillColor = fillColor;
    };

    this.render = function (ctx) {
      ctx.save(); // save the default state
      ctx.beginPath();
      ctx.moveTo(this.x, this.y + this.height);
      ctx.lineTo(this.x + this.width / 2, this.y);
      ctx.lineTo(this.x + this.width, this.y + this.height);
      ctx.lineTo(this.x, this.y + this.height);
      ctx.strokeStyle = this.strokeColor;
      ctx.fillStyle = this.fillColor;
      ctx.stroke();
      ctx.fill();
      ctx.restore(); // 將canvas恢復到最近的保存狀態，便能使用默認狀態繪製出形狀
    };

    this.range = function (x, y) {
      const rangeX = this.x <= x && x <= this.x + this.width;
      const rangeY = this.y <= y && y <= this.y + this.height;
      this.isInRange = rangeX && rangeY ? true : false;
      console.warn("Triangle isInRange: ", this.isInRange);

      //! 計算未完整
      // const leftTriangle =
      //   this.x <= x &&
      //   x <= this.x + this.width / 2 &&
      //   (this.y + this.height - y) / (x - this.x) <= this.height / this.width;
      // /* eslint-disable */
      // const rightTriangle =
      //   this.x + this.width / 2 <= x &&
      //   x <= this.x + this.width &&
      //   (this.y + this.height - y) / (this.x + this.width - x) <=
      //   this.height / this.width;
      // this.isInRange = leftTriangle || rightTriangle ? true : false;
      // console.warn("Triangle isInRange: ", this.isInRange);
    };
  },
};
