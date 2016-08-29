<template>

  <div class="notes-container">

    <waterfall
              :align="align"
              :line-gap="200"
              :min-line-gap="100"
              :max-line-gap="220"
              :single-max-width="300"
               :watch="notesList">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot
        v-for="item in notesList"
        :width="item.width"
        :height="item.height"
        :order="$index"
        move-class="item-move"
        transition="wf"
      >
        <note-item :note=item :index="$index"></note-item>
      </waterfall-slot>
    </waterfall>


  </div>

</template>

<script>
  import store from "../../stores/notes";
  import noteItem from "./Note.vue";

  var Waterfall = require('vue-waterfall');


  export default{
    ready() {
      document.body.addEventListener('click', function () {
        this.shuffle()
        // app.$broadcast('wf-reflow') // manually trigger reflow action
      }, false)
    },
    components: {
      "note-item": noteItem,
      'waterfall': Waterfall.waterfall,
      'waterfall-slot': Waterfall.waterfallSlot
    },
    data(){
      return {
        align: "center",
        notesList: [],
        line: 'v',
        isBusy: false
      }
    },
    ready() {
      this.getNotes();
    },
    methods: {
      getNotes() {
        let self = this;
        store.getAll().then(response => {
          for (let i in response) {
            response[i].width = Math.round(Math.random() * 400);
            response[i].height = Math.round(Math.random() * 300);
          }
          self.notesList = response;
        });
      },
      shuffle: function () {
        console.log("Run");
        this.notesList.sort(function () {
          return Math.random() - 0.5
        })
      }
    },
    events: {
      'wf-reflowed': function () {
        this.isBusy = false
      }
    }
  }





</script>

<style>

  .notes-container {
    min-height: 520px;
  }

  .notes-container .note-item {
    display: inline-block;
    /*border: solid 2px black;*/
    /*margin: 5px;*/
    /*padding: 15px;*/
  }

  .item-move {
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
    -webkit-transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }
</style>
