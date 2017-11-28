<template>
	<div>
		
    <div>
         <ul>
           <li @click="preview"></li>
         </ul>
    </div>
    <table width="300" class="table">
        <tr>
            <td class="td">1</td>
            <td class="td">2</td>
        </tr>
        <tr>
            <td class="td">3</td>
            <td class="td">4</td>
        </tr>
    </table>
    <modal-dialog ref="dialog" @dialogClose="selected=undefined">
       <div solt='header'>
         <div class="dismiss" @click.prevent="$refs.dialog.close()">关闭</div>
       </div>
       <div>内容</div>
    </modal-dialog>
	</div>
</template>
<script type="text/javascript">

   import ModalDialog from '@/views/layout/dialog';
   import _ from 'lodash';

	 export default {
    data() {
      return {
        activeName2: 'first',
        selected:undefined,
        book:[{'id':2,"title":"安卓编程","author":["顾浩鑫"]},
              {'id':2,"title":"安卓编程","author":["顾浩鑫"]},
              {'id':2,"title":"安卓编程","author":["顾浩鑫"]}
            ],
        result:[]

      };
    },
    created(){
       this.result = _.uniq(this.book);
       // console.log(this.result,"result")
       // console.log(_.uniq([2, 1, 2]))
       // console.log(_.uniq(this.book))
       console.log(_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x'))
       console.log(_.uniqBy(this.book, 'id'))
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      preview(book){
          this.selected = book;
          console.log(this.selected)
          this.$refs.dialog.open();
      }
    },
    components:{
       ModalDialog
    }
  };
</script>
<style scoped>
	 div ul li{
    list-style: none;
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    margin-left: 20px;
   }
   .td{border:1px #0066ff solid;}
   .table{border-collapse:collapse;}
</style>