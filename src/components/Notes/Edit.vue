<template>
  <div class="form-container">
    <h2>Edit Note</h2>
    <hr>
    <form @submit.prevent="edit()">

      <div>
        <input type="hidden"  name="id" v-model="note_id">
      </div>

      <div class="form-group">
        <label for="title" class="form-group">Title</label>
        <input type="text" name="title" id="title" class="form-control" v-model="title" required>
      </div>

      <div class="form-group">
        <label for="body" class="form-group">Body</label>
        <textarea name="body" id="body" class="form-control" v-model="body" required></textarea>
      </div>

      <div class="form-group">
        <label for="body" class="form-group">Color</label>
        <select name="title" id="color" class="form-control" v-model="color" required>
          <option v-for="noteColor in colorsList" :value="noteColor"
                  :selected="noteColor == color ? noteColor : ''">
            {{ noteColor | capitalize}}
          </option>
        </select>
      </div>


      <div class="form-group">
        <button class="btn btn-primary">Edit note</button>
      </div>

    </form>
  </div>

</template>

<script>
  import store from "../../stores/notes";
  export default{
    created() {
      this.note_id = this.$route.params.id;
      let self = this;
      store.getById(this.note_id).then(response => {
        self.title = response.title;
        self.body = response.body;
        self.color = response.color;
      });
    },
    data(){
      return {
        note_id: 0,
        title: '',
        body: '',
        user_id: 1,
        type: 'note',
        status: 'status',
        color: 'white',
        colorsList: ["red", "green", "orange", "yellow", "gray", "white", "blue", "teal"]
      }
    },
    methods: {
      edit: function () {
        let note = new FormData();
        note.append("title", this.title);
        note.append("body", this.body);
        note.append("user_id", this.user_id);
        note.append("type", this.type);
        note.append("status", this.status);
        note.append("color", this.color);

        store.edit(note, this.note_id).then(response => {
          console.log(response);
          toastr.success("Note edited successfully", "Note edited");
        });
      }
    }
  }
</script>
