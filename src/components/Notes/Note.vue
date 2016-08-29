<template>
  <div class="note-item color-{{ note.color }}">
    <h4><strong>{{note.title}}</strong></h4>
    <hr>
    <p>{{note.body}}</p>

    <div class="note__date-container text-right ">
      <span class="badge"> {{ note.created_at | hummanDate }}</span>
    </div>
    <hr>

    <div class="text-right">

      <a href="javascript:void(0)" v-link="{ name: 'EditNote', params: { id: note.note_id }}">
        <li class='glyphicon glyphicon-pencil'></li>
      </a>
      <a href="javascript:void(0)" @click="remove(note.note_id)">
        <li class="glyphicon glyphicon-trash"></li>
      </a>
    </div>
  </div>
</template>

<script>
  import store from "../../stores/notes";
  import moment from "moment";

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
    filters: {
      "hummanDate": function(date) {
        return moment(date).fromNow();
      }
    },
    methods: {
      remove(id) {
        store.remove(id).then(response => {
          console.info(response);
        });
      }
    }
  }
</script>


<style>
  .notes-item {

  }

  /*
    Colors
  */

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

