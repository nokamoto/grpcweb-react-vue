import Vue from "vue";
import Vuex from "vuex";
import {Book as BookPB, ListBookRequest} from "../library/api/library_pb";
import {LibraryClient} from "../library/api/LibraryServiceClientPb";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: new Array<BookPB>()
  },
  mutations: {
    setBooks(state, books) {
      state.books = books
    }
  },
  actions: {
    listBooks({commit}) {
      const client = new LibraryClient("http://localhost:8080", {}, {});

      const req = new ListBookRequest();
  
      client.listBook(req, {}, (err, res) => {
        if (err || res === null) {
          console.log(err);
          // throw err;
          const dummy = [new BookPB(), new BookPB()];
          dummy[0].setName("books/dummy0");
          dummy[0].setDisplayName("Dummy0");
          dummy[1].setName("books/dummy1");
          dummy[1].setDisplayName("Dummy1");

          commit('setBooks', dummy);
        } else {
          console.log(res);
          
          commit('setBooks', res.getBooksList());
        }
      })
    }
  },
  modules: {}
});
