AFRAME.registerComponent("tap_to_redirect", {
  schema: {
    url: {default: "/"}
  },
  init: function () {
    var el = this.el;
    var d = this.data;
    el.addEventListener("mouseup", function () {
      window.location.href = d.url
    });
  }
});
