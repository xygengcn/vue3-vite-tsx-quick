import { defineComponent } from "vue";
import "./index.scss";
const HelloWorld =defineComponent({
  name: "App",
  setup() {
    return () => (
      <div class="app">


        这是子组件
       
      </div>
    );
  },
});
export default HelloWorld;