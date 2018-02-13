<template lang="html">
  <div class="">
    <nav class="panel column is-offset-2 is-8">
    <p class="panel-heading">
      <b>Vue.js Phonebook</b>
      <button class="button is-link is-outlined" @click="openAdd">
        Add New
      </button>
    </p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="search">
        <span class="icon is-small is-left">
          <i class="fas fa fa-search"></i>
        </span>
      </p>
    </div>

    <a class="panel-block">
      <span class="column is-9">
        marksheet
      </span>

      <span class="panel-icon column is-1">
        <i class="fas fa fa-eye has-text-primary"></i>
      </span>

      <span class="panel-icon column is-1">
        <i class="fas fa fa-edit has-text-info"></i>
      </span>

      <span class="panel-icon column is-1">
        <i class="fas fa fa-trash has-text-danger"></i>
      </span>
    </a>

  </nav>

  <Add :openmodal="addActive"  @closeRequest="close"></Add>
  </div>
</template>

<script>
// modal
let Add = require('./Add.vue');

export default{

  components:{
    Add
  },

    data(){
      return{
        addActive : ''
      }
    },

    methods:{
      openAdd(){
        this.addActive = 'is-active'
      },
      close(){
        this.addActive = ''
      }

    }

  }

</script>

<style lang="css">
</style>
