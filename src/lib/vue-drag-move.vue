<template>
    <div class="main_area">
        <ul class="drag_area">
            <li v-for="(item,index) in dataList" :key="item[dataType.code]">{{item[dataType.name]}}</li>
        </ul>
    </div>
</template>
<script> 
	export default{
        props:{
            dataList:{
                type:Array,
                default:[],
                require:true
            },
            dataType:{
                type:Object,
                default:{},
                require:true,
            }
            
        },
		name:'vue-drag-move',
		data(){
			return {
                
            
			}
        },
        components:{
        },
		created(){

		},

		methods:{

        }
			 

	}
</script>
<style>
ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

