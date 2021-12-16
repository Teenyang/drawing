export default {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {
    shapeOptions() {
      return [
        {
          value: 1,
          text: "Square",
          className: "fa-square",
          x: 0,
          y: 0,
          width: 100,
          height: 100,
        },
        {
          value: 2,
          text: "Triangle",
          className: "fa-triangle",
          x: 0,
          y: 0,
          width: 120,
          height: 90,
        },
        {
          value: 3,
          text: "Rectangle",
          className: "fa-rectangle-wide",
          x: 0,
          y: 0,
          width: 150,
          height: 70,
        },
      ];
    },

    colors() {
      return [
        {
          value: 1,
          text: "Red",
          styleName: "red",
        },
        {
          value: 2,
          text: "Green",
          styleName: "green",
        },
        {
          value: 3,
          text: "Blue",
          styleName: "blue",
        },
      ];
    },
  },
};
