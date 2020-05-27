<template>
    <div>
        <input type="text" v-model="displayName" placeholder="display name"/>
        <button v-on:click="create(displayName)">create</button>
        <p></p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Book as BookPB, CreateBookRequest } from '../library/api/library_pb';
import { LibraryClient } from "../library/api/LibraryServiceClientPb";

export default Vue.extend({
  name: "CreateBook",
  data(){
    return {
      displayName: ""
    }
  },
  methods: {
    create(displayName: string){
      console.log(displayName);
      const client = new LibraryClient("http://localhost:8080", {}, {});

      const book = new BookPB();
      book.setDisplayName(displayName);

      const req = new CreateBookRequest();
      req.setBook(book);

      client.createBook(req, {}, (err, res) => {
          if (err || res === null) {
            console.log(err);
          } else {
            console.log(res);
          }
      })
    }
  }
});
</script>
