<template lang="html">
  <div class="modal" :class="openmodal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Add New Entry</p>
      <button class="delete" aria-label="close" @click="close"></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" :class="{'is-danger':errors.name}" v-model="list.name" type="text" placeholder="Name">
        </div>
        <small v-if="errors.name" class="has-text-danger">{{ errors.name[0] }}</small>
      </div>
      <div class="field">
        <label class="label">Contact Number</label>
        <div class="control">
          <input class="input" :class="{'is-danger':errors.contact}" v-model="list.contact" type="text" placeholder="Contact Number">
        </div>
        <small v-if="errors.contact" class="has-text-danger">{{ errors.contact[0] }}</small>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" :class="{'is-danger':errors.email}" v-model="list.email" type="email" placeholder="Email">
        </div>
        <small v-if="errors.email" class="has-text-danger">{{ errors.email[0] }}</small>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="save">Save</button>
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
      axios.post('/phonebook', this.$data.list)
      .then((response) =>{
        this.close()
        this.$parent.lists.push(response.data);
        this.$parent.lists.sort(function(a,b){
          if(a.name >b.name){
            return 1;
          }
          else if(a.name < b.name){
            return -1;
          }
        })
        this.list = ""
      })
        .catch((error) => this.errors = error.response.data.errors)
    }
  }
}
</script>

<style lang="css">
</style>
