// 3e composant
Vue.component("todoedit", {
  template: "#todoedit-template",
  data: function () {
    return {
      message: "",
      titre: "todo a",
      projet: "projet a",
    };
  },
  methods: {
    say: function (event) {
      alert(
        "Ma tâche:  " +
          this.titre +
          ": " +
          this.message +
          ": " +
          this.projet +
          "!"
      );
    },
  },
});

// 2e composant
Vue.component("todo", {
  template: "#todo-template",
  data: function () {
    return {
      titre: "todo a",
      projet: "projet a",
    };
  },
});

//

// 1er composant
Vue.component("todolist", {
  template: "#todolist-template",
  props: ["name"],
});

new Vue({
  el: "#app",

  data: {
    list: [
      {
        title: "Todo A",
        project: "Project A",
        done: false,
      },
      {
        title: "Todo B",
        project: "Project B",
        done: true,
      },
      {
        title: "Todo C",
        project: "Project C",
        done: false,
      },
    ],
  },
});
