<template>
  <section class="Controller">
    <p class="title">Select Shape</p>
    <div class="shape">
      <Shape
        v-for="shape in shapeOptions"
        :key="shape.value"
        @click="$emit('update:shape', shape)"
      >
        <i class="far" :class="shape.className"></i>
      </Shape>
    </div>

    <p class="title">Select Fill Color</p>
    <div class="style">
      <Shape
        v-for="color in colors"
        :key="color.value"
        @click="$emit('update:color', color)"
      >
        <i
          class="fas"
          :class="[shapeOptions[0].className]"
          :style="{ color: color.styleName }"
        ></i>
      </Shape>
    </div>

    <p class="title">Canvas Options</p>
    <div class="clear">
      <button @click="$emit('update:clearCanvas')">Clear</button>
      <button @click="$emit('update:saveCanvas')">Save</button>
    </div>
  </section>
</template>

<script>
import Shape from "@/components/Shape.vue";

export default {
  name: "Controller",
  components: {
    Shape,
  },
  props: {
    shapeOptions: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.Controller {
  .title {
    text-align: center;
    font-size: 20px;
  }

  & > p:not(:first-of-type) {
    margin-top: 80px;
  }

  .shape,
  .style {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px 0;
  }

  .clear {
    text-align: center;

    button {
      padding: 12px;
      border: none;
      box-shadow: 0 0 7px #333 inset;
      border-radius: 10px;

      font-size: 16px;
      font-weight: 600;
      font-family: Avenir, Helvetica, Arial, sans-serif;

      &:hover {
        border-radius: 10px;
        background-color: lightgray;
        cursor: pointer;
      }

      & + button {
        margin-left: 12px;
      }
    }
  }
}
</style>
