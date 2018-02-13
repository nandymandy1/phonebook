<template lang="html">
  <div class="modal" :class="openmodal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Add New Contact</p>
      <button class="delete" aria-label="close" @click="close"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" v-model="list.name" type="text" placeholder="Name">
        </div>
      </div>
      <div class="field">
        <label class="label">Contact Number</label>
        <div class="control">
          <input class="input" v-model="list.contact" type="text" placeholder="Contact Number">
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" v-model="list.email" type="email" placeholder="Email">
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="save">Save Contact</button>
      <button class="button" @click="close">Cancel</button>
    </footer>
  </div>
</div>
</template>

<script>
export default{
  // This will accpet the value from the Home Route whenever the function is performed by clicking the Add Button
  props:['openmodal'],
  data(){
    return{
      list:{
        name:'',
        contact:'',
        email:''
      },
      errors:{}
    }
  },
  methods:{
    close(){
      this.$emit('closeRequest')
    },
    save(){
      axios.post('/phonebook', this.$data.list).then((response) => this.close())
        .catch((error) => this.errors = error.response.data)
    }
  }
}
</script>

<style lang="css">
</style>
