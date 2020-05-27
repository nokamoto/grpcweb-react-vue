<template>
    <div>
      <ul>
          <li v-for="book in books" :key="book.getName()">{{ book.getDisplayName() }}</li>
      </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from 'vuex'

export default Vue.extend({
  name: "Books",
  computed: {
    ...mapState(['books'])
  },
  mounted () {
    this.$store.dispatch('listBooks')
  }
});
</script>
