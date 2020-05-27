<template>
  <div class="books">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Books />
  </div>
</template>

<script lang="ts">
import Books from '@/components/Books.vue';

export default {
  name: 'ListBooks',
  components: {
    Books
  }
}
</script>
