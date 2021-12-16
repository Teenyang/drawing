<template>
  <div class="Shape" @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Shape",
};
</script>

<style lang="scss" scoped>
.Shape {
  width: 60px;
  height: 60px;

  display: inline-block;

  font-size: 30px;

  &:hover {
    border-radius: 10px;
    background-color: lightgray;
    cursor: pointer;
  }

  & > * {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
