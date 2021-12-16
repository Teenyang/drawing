<template>
  <div class="Home">
    <Controller
      :shapes="shapes"
      :shapeOptions="shapeOptions"
      :colors="colors"
      @update:shape="
        $store.commit('canvas/shapes', [...shapes, $event]),
          (selectedIndex = shapes.length - 1)
      "
      @update:color="
        shapes[selectedIndex].updateColor({
          strokeColor: $event,
          fillColor: $event,
        })
      "
      @update:clearCanvas="clearCanvas"
      @update:saveCanvas="saveCanvas"
    />

    <section class="painting">
      <canvas
        id="drawCanvas"
        width="900"
        height="600"
        ref="canvas"
        @click="selectElement"
        @mousedown="onDrag"
        @mousemove="onDragging"
        @mouseup="onDrop"
      ></canvas>
    </section>
  </div>
</template>

<script>
//~ ctx.rect version
// import drawCtxShape from "@/utility/drawCtxShape.js";

//! Path2D
import drawShape from "@/utility/drawShape.js";
import Controller from "@/components/Controller.vue";

export default {
  name: "Home",
  components: {
    Controller,
  },
  created() {
    this.$store.commit(
      "canvas/shapes",
      JSON.parse(localStorage.getItem("drawing_shapes")) || []
    );
    this.shapes.forEach((shape, index) => {
      const restoreShape = new drawShape.Shape(
        shape.type,
        shape.x,
        shape.y,
        shape.width,
        shape.height
      );
      restoreShape.updateColor({
        strokeColor: shape.strokeColor,
        fillColor: shape.fillColor,
      });

      // 更新原始陣列內的元素資料，重新存入vuex
      const restoreShapes = [
        ...this.shapes.slice(0, index),
        restoreShape,
        ...this.shapes.slice(index + 1),
      ];
      this.$store.commit("canvas/shapes", restoreShapes);
    });
    console.log("created shapes, ", this.shapes);
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.$store.commit("canvas/canvasCtx", this.canvas.getContext("2d"));
    this.render(); // 遞迴執行window.requestAnimationFrame
  },
  data() {
    return {
      canvas: null,
      selectedIndex: null,
      isDragging: false,
    };
  },
  computed: {
    ctx() {
      return this.$store.getters["canvas/canvasCtx"];
    },
    shapes() {
      return this.$store.getters["canvas/shapes"];
    },
    shapeOptions() {
      return this.$store.getters["options/shapeOptions"];
    },
    colors() {
      return this.$store.getters["options/colors"];
    },
  },
  methods: {
    render() {
      // 要求瀏覽器在下次重繪畫面前，呼叫特定函數更新動畫
      window.requestAnimationFrame(() => {
        this.shapes.forEach((shape) => shape.render(this.ctx));
        this.render();
      });
    },

    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.$store.commit("canvas/shapes", []);
    },
    saveCanvas() {
      localStorage.setItem("drawing_shapes", JSON.stringify(this.shapes));
    },

    selectElement(event) {
      //! Path2D
      this.shapes.forEach((shape, index) => {
        if (this.ctx.isPointInPath(shape.path, event.offsetX, event.offsetY)) {
          // isPointInPath布林結果：指定shape.path路徑內是否包含檢測點offsetX/offsetY
          // True：點擊範圍內的圖形，即為當前選擇的元素
          this.selectedIndex = index;
        }
      });
      console.warn("selectElement index: ", this.selectedIndex);

      //~ ctx.rect version
      // this.findCurrentLayer(event.offsetX, event.offsetY);
    },
    onDrag(event) {
      //! Path2D version
      this.shapes.forEach((shape, index) => {
        if (this.ctx.isPointInPath(shape.path, event.offsetX, event.offsetY)) {
          this.selectedIndex = index;
          this.isDragging = true;
          this.canvas.style.cursor = "move";
        }
      });
      // console.warn(">>> mouse down index: ", this.selectedIndex);

      //~ ctx.rect version
      // this.findCurrentLayer(event.offsetX, event.offsetY);
      // if (this.shapes.some((shape) => shape.isInRange)) {
      //   this.canvas.style.cursor = "move";
      //   this.isDragging = true;
      //   console.warn("(">>>> mouse down isDragging: ", this.isDragging);
      // }
    },
    onDrop() {
      // console.error(">>>>> mouse up");
      this.isDragging = false;
      this.canvas.style.cursor = "auto";
    },

    onDragging(event) {
      if (!this.isDragging) {
        return;
      }
      // 拖曳同時清空整個畫布，再重新繪製所有圖形
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      console.log("isDragging");

      this.shapes[this.selectedIndex].updatePosition({
        x: this.shapes[this.selectedIndex].x + event.movementX,
        y: this.shapes[this.selectedIndex].y + event.movementY,
      });

      //~ ctx.rect version
      // this.findCurrentLayer(event.offsetX, event.offsetY);
    },

    findCurrentLayer(rangeX, rangeY) {
      //~ ctx.rect version
      this.shapes.forEach((shape, index) => {
        shape.range(rangeX, rangeY);
        if (shape.isInRange) {
          this.selectedIndex = index;
        }
      });
      // console.log("findCurrentLayer selectedIndex: ", this.selectedIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.Home {
  margin: 30px;
  outline: 3px solid gray;
  display: flex;

  & > * {
    outline: 1px solid lightgray;
    padding: 20px;

    flex: 1 0 0;
  }

  .painting {
    canvas {
      outline: 1px dashed black;
    }
  }
}
</style>
