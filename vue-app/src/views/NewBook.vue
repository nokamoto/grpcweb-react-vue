<template>
  <div class="books">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CreateBook />
  </div>
</template>

<script lang="ts">
import CreateBook from '@/components/CreateBook.vue';

export default {
  name: 'NewBook',
  components: {
    CreateBook
  }
}
</script>
