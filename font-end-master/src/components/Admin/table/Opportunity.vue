<template>
  <transition
    appear
    enter-class=""
    enter-active-class="animated fadeInLeftBig slow">
      <material-card class="nhanvien"  color="orange" title="Cơ hội" text>
        <template v-slot:header>
        </template>
        <v-card-title class="mb-0 pb-0">
          <v-layout row class="my-0 py-0" >
            <v-btn class="ma-2" tile depressed @click="addItem" outlined color="red">
              <v-icon left>mdi-account-plus-outline</v-icon>THÊM MỚI CƠ HỘ 
            </v-btn>
            <v-btn class="ma-2" tile depressed :to="'/admin/co-hoi/'+  $route.params.idEmpl + '/nhap-file'" style="text-decoration:none" outlined color="blue">
              <v-icon left>mdi-account-plus-outline</v-icon>Import excel
            </v-btn>
           <div>
            </div>
            <v-col class="shrink" style="margin-top:-13px">
              <v-btn @click="expand2 = !expand2" class="ma-2" tile outlined color="success">
                <v-icon left>mdi-pencil</v-icon>TỔNG QUAN CƠ HỘI
              </v-btn>
            </v-col>
            <v-row row class="mx-2 mt-5 ">
              <v-col cols="12" sm="" class="text-right" style="margin-top:-35px">
                <div height="30">
                  <v-text-field
                    class="mt-1"
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                    filled
                    dense
                    ></v-text-field>
                </div>
              </v-col>
            </v-row>
          </v-layout>
          <v-layout row class="my-0 py-0" style="width: 100%" >
            <transition
              appear
              enter-class=""
              enter-active-class="animated flipOutX slow"
              leave-class=""
              leave-active-class="animated rollOut fast">
              <v-col v-show="expand2" style="border-top:1px solid #d7d7d7">
                <v-row>
                  <v-col cols="12" sm="2">
                    <div style="border-right:1px solid #d7d7d7">
                      <p class="text-justify headline">14</p>
                      <p class="text-justify" style="color:red">Chưa liên hệ được</p>
                      <p class="text-justify headline">0.00%</p>
                      <p class="text-justify" style="color:red">Cơ hội rác</p>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="2">
                    <div style="border-right:1px solid #d7d7d7">
                      <p class="text-justify headline">11</p>
                      <p class="text-justify" style="color:red">Đang tham khảo</p>
                    </div>              
                  </v-col>
                  <v-col cols="12" sm="2">
                    <div style="border-right:1px solid #d7d7d7">
                      <p class="text-justify headline">04</p>
                      <p class="text-justify" style="color:#0288d1">Không có nhu cầu</p>  
                    </div>            
                  </v-col>
                  <v-col cols="12" sm="2">
                    <div style="border-right:1px solid #d7d7d7">
                      <p class="text-justify headline">03</p>
                      <p class="text-justify" style="color:#cfbe67">Cần chăm sóc</p> 
                    </div>             
                  </v-col>
                  <v-col cols="12" sm="2">
                    <div style="border-right:1px solid #d7d7d7">
                      <p class="text-justify headline">56</p>
                      <p class="text-justify" style="color:#7cb342">Đã đăng ký</p>  
                    </div>            
                  </v-col>
                  <v-col cols="12" sm="2">
                    <div style="border-right:1px solid #d7d7d7">
                      <p class="text-justify headline">10</p>
                      <p class="text-justify" style="color:red">Hẹn gọi lại sau</p>  
                    </div>            
                  </v-col>
                </v-row>
              </v-col>
            </transition>
          </v-layout>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :expanded.sync="expanded"
          item-key="idOpportunity"
          show-expand
          :search="search"
          class="elevation-1 mt-5"
        >
          <template v-slot:expanded-item="{item}">
            <td :colspan="14">
              <v-row row class="my-0 py-0">
                <v-col cols="12" sm="5" class="my-0 py-0">
                  <app-comment
                  @commentAdd="commentAdd=$event"
                  :editCommet="editCommet"></app-comment>
                </v-col>
                <v-col cols="12" sm="7">
                  <list-comment
                  :commentAdd="commentAdd"
                  :listComment="item.commCollection"
                  @editCommet="editCommet=$event"></list-comment>
                </v-col>
              </v-row>
            </td>
          </template>
          <template v-slot:item.stts="{item}">
            <v-icon size="16" :color="getColorstt(item.stt)">fiber_manual_record</v-icon>{{item.stt}}
          </template>
          <template v-slot:item.actions="{item}">
            <v-icon small class="mr-2" @click="editItem(item)" color="blue" > edit  </v-icon>
            <v-icon small @click="deleteItem(item)" color="red"> delete </v-icon>
          </template>
        </v-data-table>
        <v-dialog
          v-model="dialog"
          width="600"
          persistent
        >
          <material-card class="card-tabs" color="green">
              <template v-slot:header>
                <v-tabs background-color="transparent" slider-color="white">
                  <span
                    class="subheading font-weight-light mx-3"
                    style="align-self: center"
                  >Khách hàng</span>
                </v-tabs>
              </template>
              <v-card-text>
                <v-form ref="form" v-model="form">
                  <slot name="formOpportunity" :item="item"></slot>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="blue darken-1"  @click="dialog=false" ><span style="color: white;">Thoát</span></v-btn>
                <v-btn color="orange" :disabled="!form" v-if="addUpdate" @click="saveItem()"><span style="color: white;" >Lưu lại</span></v-btn>
                <v-btn color="orange" :disabled="!form" v-else @click="updateItem()"><span style="color: white;" >Lưu lại</span></v-btn>
              </v-card-actions>
          </material-card>
        </v-dialog>
        <!-- xóa -->
        <v-dialog v-model="dialog1" persistent max-width="500px">
          <v-card>
            <v-card-title class="headline">Bạn có chắc chẵn xóa?</v-card-title>

            <v-simple-table class="mx-5">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Họ và tên</th>
                    <th class="text-left">Số điện thoại</th>
                    <th class="text-left">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ item.cusName }}</td>
                    <td>{{ item.phoneNum }}</td>
                    <td>{{ item.email }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="green darken-1" text @click="dialog1 = false" > Thoát </v-btn>

              <v-btn color="green darken-1" text @click="Delete()" > Xóa </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!--  -->
        <v-snackbar v-model="snackbar1" color="green" top dark >
          <v-icon color="white" class="mr-3">mdi-bell-plus</v-icon>
          <div>{{text}}</div>
          <v-btn icon  @click="snackbar1 = false" >
            <v-icon>mdi-close-circle</v-icon>
          </v-btn>
        </v-snackbar>
        <!--  -->
    </material-card>
  </transition>
</template>
<script>
  import { PostOpportunityApi } from '../../../api/PostApi/PostAdmin'
  import { UpdateOpportunity } from '../../../api/updateApi/updateAdmin'
  import { DeleteOpportunity } from '../../../api/deleteApi/deleteAdmin'
  export default {
    data () {
      return {
        expanded: [],
        search: '',
        status: ['Shopee'],
        singleExpand: false,
        item: {},
        comment: {},
        dialog: false,
        dialog1: false,
        desserts: [],
        expand2: false,
        editedIndex: -1,
        addUpdate: true,
        snackbar1: false,
        text: '',
        form: false,
        commentAdd: {},
        isUpdating: false,
        editCommet: {},
      }
    },
    props: {
      headers: {
        require: true,
        type: Array,
        default: null
      },
      listApi: {
        require: true,
        type: Function
      },
      updateApi: {
        require: true,
        type: Function
      }
    },
    created () {
      this.getList()
    },
    methods: {
      getList(){
        this.listApi()
          .then(response=>{
            this.desserts = response.data
          })
      },

      editItem (index) {
        this.editedIndex = this.desserts.indexOf(index)
        this.item = Object.assign({}, index)
        this.dialog = true
        this.addUpdate = false 
      },

      addItem () {
        this.dialog = true
        this.addUpdate = true 
        this.item = {}
      },

      saveItem () {
        PostOpportunityApi(this.item)
        .then(response => {
        })
        .catch(function (error) {
          console.log(error)
        })
        this.desserts.push(this.item)
        this.snackbar()
        this.text = 'Thêm mới thành công !'
        this.dialog = false
      },

      updateItem(){
        UpdateOpportunity(this.item)
        .then(response => {
        })
        .catch(function (error) {
          console.log(error)
        })
        Object.assign(this.desserts[this.editedIndex], this.item)
        this.snackbar()
        this.text = 'Sửa thành công !'
        this.dialog = false
      },

      deleteItem (index) {
        this.item = index
        this.dialog1 = true
      },

      Delete () {
        DeleteOpportunity(this.item)
        .then(response => {
        })
        .catch(function (error) {
          console.log(error)
        })
        const index = this.desserts.indexOf(this.item)
        this.desserts.splice(index, 1)
        this.snackbar()
        this.text = 'Xóa thành công !'
        this.dialog1 = false
      },

      getColorstt (stt) {
        if (stt === 'Đang hoạt động') return 'green'
        else if (stt === 'Chờ kích hoạt') return 'orange'
        else return 'red'
      },

      snackbar () {
        this.snackbar1 = true
      },

    },
  }
</script>
<style>
  .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(3);
  }
  100% {
    transform: scale(2);
  }
}
.hvr-float-shadow {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-float-shadow:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: '';
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
  /* W3C */
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform, opacity;
  transition-property: transform, opacity;
}
.hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  /* move the element up by 5px */
}
.hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {
  opacity: 1;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}
</style>
