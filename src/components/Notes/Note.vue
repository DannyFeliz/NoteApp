<template>
  <div class="note-item color-{{ note.color }}">
    <h4><strong>{{note.title}}</strong></h4>
    <hr>
    <p>{{note.body}}</p>
    <a href="#" @click="remove(note.note_id)">Delete</a>
  </div>
</template>

<script>
  import store from "../../stores/notes";
  export default{
    name: "note-item",
    props: {
      note: {}
    },
    data(){
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      remove(id) {
        store.removeNote(id).then(response => {
          console.info(response);
        });
      }
    }
  }
</script>


<style>
  .notes-item {

  }

  .color-red {
    background-color: #ff8a80;
  }

  .color-green {
    background-color: #ccff90;
  }

  .color-orange {
    background-color: #ffd180;
  }

  .color-yellow {
    background-color: #ffff8d;
  }

  .color-gray {
    background-color: #cfd8dc;
  }

  .color-blue {
    background-color: #80d8ff;
  }

  .color-teal {
    background-color: #a7ffeb;
  }

</style>

