export default {
  //! Path2D version
  Shape(type, x, y, width, height) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.updatePosition = function ({ x, y }) {
      this.x = x;
      this.y = y;
    };

    this.strokeColor = "black";
    this.fillColor = "white";
    this.updateColor = function ({ strokeColor, fillColor }) {
      this.strokeColor = strokeColor;
      this.fillColor = fillColor;
    };

    this.path = new Path2D();
    this.render = function (ctx) {
      ctx.save(); // save the default state
      ctx.beginPath();

      this.path = new Path2D();
      switch (this.type) {
        case "Square": {
          this.path.rect(this.x, this.y, this.width, this.height);
          break;
        }
        case "Rectangle": {
          this.path.rect(this.x, this.y, this.width, this.height);
          break;
        }
        case "Triangle": {
          this.path.moveTo(this.x, this.y + this.height);
          this.path.lineTo(this.x + this.width / 2, this.y);
          this.path.lineTo(this.x + this.width, this.y + this.height);
          this.path.lineTo(this.x, this.y + this.height);
          break;
        }
      }

      ctx.strokeStyle = this.strokeColor;
      ctx.fillStyle = this.fillColor;
      ctx.stroke(this.path);
      ctx.fill(this.path);

      ctx.restore(); // 將canvas恢復到最近的保存狀態，便能使用默認狀態繪製出形狀
    };
  },

  Square(x, y, width, height) {
    this.type = "Square";
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.updatePosition = function ({ x, y }) {
      this.x = x;
      this.y = y;
    };

    this.strokeColor = "black";
    this.fillColor = "white";
    this.updateColor = function ({ strokeColor, fillColor }) {
      this.strokeColor = strokeColor;
      this.fillColor = fillColor;
    };

    this.path = new Path2D();
    this.render = function (ctx) {
      ctx.save(); // save the default state
      ctx.beginPath();

      this.path = new Path2D();
      this.path.rect(this.x, this.y, this.width, this.height);

      ctx.strokeStyle = this.strokeColor;
      ctx.fillStyle = this.fillColor;
      ctx.stroke(this.path);
      ctx.fill(this.path);

      ctx.restore(); // 將canvas恢復到最近的保存狀態，便能使用默認狀態繪製出形狀
    };
  },

  Rectangle(x, y, width, height) {
    this.type = "Rectangle";
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.updatePosition = function ({ x, y }) {
      this.x = x;
      this.y = y;
    };

    this.strokeColor = "black";
    this.fillColor = "white";
    this.updateColor = function ({ strokeColor, fillColor }) {
      this.strokeColor = strokeColor;
      this.fillColor = fillColor;
    };

    this.path = new Path2D();
    this.render = function (ctx) {
      ctx.save(); // save the default state
      ctx.beginPath();

      this.path = new Path2D();
      this.path.rect(this.x, this.y, this.width, this.height);

      ctx.strokeStyle = this.strokeColor;
      ctx.fillStyle = this.fillColor;
      ctx.stroke(this.path);
      ctx.fill(this.path);

      ctx.restore(); // 將canvas恢復到最近的保存狀態，便能使用默認狀態繪製出形狀
    };
  },

  Triangle(x, y, width, height) {
    this.type = "Triangle";
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.updatePosition = function ({ x, y }) {
      this.x = x;
      this.y = y;
    };

    this.strokeColor = "black";
    this.fillColor = "white";
    this.updateColor = function ({ strokeColor, fillColor }) {
      this.strokeColor = strokeColor;
      this.fillColor = fillColor;
    };

    this.path = new Path2D();
    this.render = function (ctx) {
      ctx.save(); // save the default state
      ctx.beginPath();

      this.path = new Path2D();
      this.path.moveTo(this.x, this.y + this.height);
      this.path.lineTo(this.x + this.width / 2, this.y);
      this.path.lineTo(this.x + this.width, this.y + this.height);
      this.path.lineTo(this.x, this.y + this.height);

      ctx.strokeStyle = this.strokeColor;
      ctx.fillStyle = this.fillColor;
      ctx.stroke(this.path);
      ctx.fill(this.path);

      ctx.restore(); // 將canvas恢復到最近的保存狀態，便能使用默認狀態繪製出形狀
    };
  },
};
