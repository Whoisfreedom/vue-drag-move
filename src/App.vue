<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <vue-drag-move :dataList="dataList" :dataType="dataType"></vue-drag-move>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'This is a component about Element draging and moving',
      dataList:[
          {
              listName:'list1',
              listCode:'list1',
          },
          {
              listName:'list2',
              listCode:'list2',
          },
          {
              listName:'list3',
              listCode:'list3',
          },
          {
              listName:'list4',
              listCode:'list4',
          },
          {
              listName:'list5',
              listCode:'list5',
          },
          {
              listName:'list6',
              listCode:'list6',
          },
          {
              listName:'list7',
              listCode:'list7',
          },
      ],
      dataType:{
        name:"listName",
        code:"listCode",
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
</style>
