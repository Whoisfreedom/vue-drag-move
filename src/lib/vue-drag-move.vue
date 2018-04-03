<template>
    <div class="main_area">
        <ul class="drag_area">
            <li class="drag_item" v-for="(item,index) in dataList" :key="item[dataType.code]">{{item[dataType.name]}}</li>
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
        directives: {
            focus: {
                // 指令的定义
                bind: function (el) {
                    let oDiv = el;   //当前元素
                    oDiv.onmousedown = function (e) {
                        window.event? window.event.cancelBubble = true : e.stopPropagation();
                        //鼠标按下，计算当前元素距离可视区的距离
                        let disX = e.clientX - oDiv.offsetLeft;
                        let disY = e.clientY - oDiv.offsetTop;

                        document.onmousemove = function (e) {
                            window.event? window.event.cancelBubble = true : e.stopPropagation();
                            //通过事件委托，计算移动的距离 
                            let l = e.clientX - disX;
                            let t = e.clientY - disY;
                            l = l>=0?l:0;
                            t = t>=0?t:0;
                            //移动当前元素  
                            oDiv.style.left = l + 'px';
                            oDiv.style.top = t + 'px';
                            //将此时的位置传出去
                            
                        };
                        document.onmouseup = function (e) {
                            window.event? window.event.cancelBubble = true : e.stopPropagation();
                            let l = e.clientX - disX;
                            let t = e.clientY - disY;
                            l = l>=0?l:0;
                            t = t>=0?t:0;

                        
                            document.onmousemove = null;
                            document.onmouseup = null;
                        };
                        

                    }
                }
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
.drag_area{
    position: relative;
}
.drag_item{
    position: absolute;
    width: auto;
    left: 0;
    top: 0;
}
</style>

