/** @format */

Vue.createApp({
  data() {
    return {
      titulo: " Lista de compras ",
      tareas: [],
      nuevaTarea: "",
    };
  },
  methods: {
    agregarTarea(e) {
      e.preventDefault();
      // console.log("diste click", this.nuevaTarea);
      this.tareas.push({
        nombre: this.nuevaTarea,
        estado: false,
      });
      console.log(this.tareas);
      this.nuevaTarea = "";
      this.tarea = focus;
      localStorage.setItem("gym", JSON.stringify(this.tareas));
    },
    cambiarEstado(index) {
      this.tareas[index].estado = true;
      localStorage.setItem("gym", JSON.stringify(this.tareas));
    },
    borrarTarea(index) {
      this.tareas.splice(index, 1);
      localStorage.setItem("gym", JSON.stringify(this.tareas));
    },
  },
  created() {
    const datosDB = JSON.parse(localStorage.getItem("gym"));
    if (datosDB === null) {
      this.tareas = [];
    } else {
      this.tareas = datosDB;
    }
  },
}).mount("#app");
