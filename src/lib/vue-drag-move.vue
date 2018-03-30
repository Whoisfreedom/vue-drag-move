<template>
    <div class="main_area">
        <CheckboxList :data="dataList"></CheckboxList>
        <div class="drag_area">
            <span>测试</span>
        </div>
    </div>
</template>
<script> 
import CheckboxList from './CheckboxList.vue'
	export default{
		name:'vue-drag-move',
		data(){
			return {
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
                ]
            
			}
        },
        components:{
            CheckboxList
        },
		created(){

		},

		methods:{

        }
			 

	}
</script>
<style>

</style>

