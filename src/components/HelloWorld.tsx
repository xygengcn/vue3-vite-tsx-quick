import { defineComponent, PropType, ref, watch } from 'vue';
import './index.scss';
const HelloWorld = defineComponent({
  name: 'App',
  props: {
    msg: {
      type: String as PropType<string>,
      required: true,
    },
  },
  emits: ['change'],
  setup(props, context) {
    // 计数
    const count = ref(0);

    // 点击事件
    const handleClick = () => {
      count.value++;
    };

    watch(count, () => {
      context.emit('change', count);
    });
    return () => (
      <div class="app">
        <h2>这是子组件</h2>
        <div>props：{props.msg}</div>
        <div>计数：{count.value}</div>
        <button onClick={handleClick}>+1</button>
      </div>
    );
  },
});
export default HelloWorld;
