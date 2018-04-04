<template>
  <div>
    <button> {{ text }} </button>
  </div>
</template>

<script>
export default {
  data () {
    return{
      text: '请输入内容',
      time: '',
      finished: false
    }
  },

  methods: {
    markAsFinished: function () {
      this.finished = true;
    },

    markAsUnfinished: function () {
      this.finished = false;
    },

    changeText: function () {
      
    }
  }
}
</script>

<style>

</style>
