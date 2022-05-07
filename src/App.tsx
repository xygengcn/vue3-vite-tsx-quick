import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";
export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <div class="app">

        这是父组件

        <HelloWorld></HelloWorld>

       
      </div>
    );
  },
});
