<template>

  <div class="form-container">
    <h2>Create Note</h2>
    <hr>
    <form @submit.prevent="create()">
      <div class="form-group">
        <label for="title" class="form-group">Title</label>
        <input type="text" name="title" id="title" class="form-control" v-model="title">
      </div>

      <div class="form-group">
        <label for="body" class="form-group">Body</label>
        <textarea name="body" id="body" class="form-control" v-model="body"></textarea>
      </div>

      <div class="form-group">
        <label for="body" class="form-group">Color</label>
        <select name="title" id="color" class="form-control" v-model="color">
          <option v-for="noteColor in colorsList" :value="noteColor"
                  :selected="noteColor == color ? noteColor : ''">
                  {{ noteColor | capitalize}}
          </option>
        </select>
      </div>


      <div class="form-group">
        <button class="btn btn-primary">Create note</button>
      </div>

    </form>
  </div>

</template>

<script>
  import store from "../../stores/notes";
  export default{
    data(){
      return {
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
      create: function () {
        let note = new FormData();
        note.append("title", this.title);
        note.append("body", this.body);
        note.append("user_id", this.user_id);
        note.append("type", this.type);
        note.append("status", this.status);
        note.append("color", this.color);

        store.create(note).then(response => {
          console.log(response);
        });
      }
    }
  }
</script>
