<script setup>
import { ref, computed, useAttrs } from 'vue'

const attrs = useAttrs()
const datas = attrs.datas
const emits = defineEmits(['add', 'remove', 'update'])
const todoFilter = ref('')
const datasFilter = computed(() => {
  return datas.filter((data) => data.title.includes(todoFilter.value))
})

const todo = ref('')

const handleAdd = () => {
  if (todo.value === '') return
  emits('add', todo.value)
  todo.value = ''
  todoFilter.value = ''
}
const handleRemove = (index) => {
  emits('remove', index)
}
</script>

<template>
  <div class="todo">
    <form class="todo-action" @submit.prevent="handleAdd">
      <label class="todo-label" for="todo">
        <span>Add a todo：</span>
      </label>
      <input class="todo-input mr10" type="text" v-model.trim="todo" id="todo" placeholder="add" />
      <button class="todo-btn" type="submit">Add</button>
    </form>
    <div class="todo-filter">
      <input class="todo-input" type="text" v-model.trim="todoFilter" placeholder="filter" />
    </div>
    <ul class="todo-list">
      <li
        class="todo-list-item"
        v-for="(todo, index) in datasFilter"
        :key="todo.id"
        :title="todo.title"
      >
        <input type="checkbox" v-model="todo.checked" @change="$emit('update', index)" />
        <span :class="todo.checked ? 'checked' : ''">{{ todo.title }}</span>
        <button class="todo-btn" type="button" @click="handleRemove(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<style lang="css">
.mr10 {
  margin-right: 10px;
}
.todo-input {
  border: 1px solid #ccc;
  padding: 5px;
  line-height: 1.4;
  vertical-align: top;
}
.todo-btn {
  border: 1px solid #ccc;
  padding: 5px 10px;
  line-height: 1.4;
}
.todo-filter {
  margin: 10px 0;
}
.todo-list .todo-btn {
  padding: 2px 5px;
}
.todo-list-item {
  padding: 5px;
}
.todo-list-item span {
  padding: 0 5px;
}
.todo-list-item .checked {
  text-decoration: line-through;
  color: red;
}
</style>
