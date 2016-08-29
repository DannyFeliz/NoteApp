<template>

  <div class="notes-container">
    <note-item :note=note v-for="note in notesList"></note-item>
  </div>

</template>

<script>
  import store from "../../stores/notes";
  import noteItem from "./Note.vue";
  export default{
    components: {
      "note-item" : noteItem
    },
    data(){
      return {
        notesList: []
      }
    },
    ready() {
      this.getNotes();
    },
    methods: {
      getNotes() {
        let self = this;
        store.getNotes().then(response => {
          self.notesList = response;
        });
      }
    }
  }
</script>

<style>

  .notes-container .note-item {
    display: inline-block;
    border: solid 2px black;
    margin: 5px;
    padding: 15px;
  }
</style>
