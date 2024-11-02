<script setup>
import { ref } from 'vue'
import Todos from '../components/Todos.vue';

const todos = ref([
  {
    id: 1,
    checked: true,
    title: '111'
  }
]);

const handleAdd = (data) => {
  // console.log('handleAdd', data);

  const len = todos.value.length;
  // 添加项
  todos.value.push({
    id: len + 1,
    checked: false,
    title: data
  })
};
const handleRemove = (index) => {
  // console.log('handleRemove', index)

  // 移除当前项
  todos.value.splice(index, 1)
};
</script>

<template>
  <Todos :datas="todos" @add="handleAdd" @remove="handleRemove" />
</template>
