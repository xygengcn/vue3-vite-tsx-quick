import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld';
export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class="app">
        <h1>这是父组件，更新依赖:2023-04-20</h1>
        <HelloWorld
          msg="hahah"
          onChange={(count) => {
            console.log('change', count.value);
          }}
        ></HelloWorld>
      </div>
    );
  },
});
