<template>
  <div>
    <transition
      appear
      enter-class=""
      class="my-0 py-0"
      enter-active-class="animated fadeInRightBig ">
      <material-card color="orange" text >
        <template v-slot:header>
            <div class="mx-4" v-if="text">{{text}}</div>
            <v-btn v-else class="ma-2" tile text  color="" @click="addItem()">
              <v-icon left>mdi-account-plus-outline</v-icon>{{textBtn}}
            </v-btn>
          </template>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
          no-data-text="Không có dữ liệu"
        >
          <template v-slot:item.actions="{item}">
              <v-icon small class="mr-2" @click="editItem(item)" >edit</v-icon>
              <v-icon small @click="deleteItem(item)" > delete  </v-icon>
          </template>
        </v-data-table>
      </material-card>
    </transition>
      <v-dialog v-model="dialog" max-width="500px">
        <material-card class="card-tabs" color="orange">
          <template v-slot:header>
            <v-tabs background-color="transparent" slider-color="white">
              <span
                class="subheading font-weight-light mx-3"
                style="align-self: center"
              >{{textBtn}}</span>
            </v-tabs>
          </template>
          <slot name="formDepartment" :item="item"></slot>
          <v-card-actions>
              <div class="flex-grow-1"></div>
                <v-btn color="blue darken-1"  @click="dialog=false"><span style="color:white;">Thoát</span></v-btn>
                <v-btn color="orange darken-1" @click="AddDepartment()" v-if="btnPhongban"><span style="color:white;">Lưu lại</span></v-btn>
                <v-btn color="orange darken-1" @click="EditDepartment()" v-else><span style="color:white;">Lưu lại</span></v-btn>
            </v-card-actions>
        </material-card>
      </v-dialog>
      <v-dialog v-model="dialog1" max-width="500px">
        <v-card>
          <v-card-title class="headline">Bạn có chắc chẵn xóa?</v-card-title>

          <v-simple-table class="mx-5">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Mã phòng ban</th>
                  <th class="text-left">Phòng ban</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ items.idDepartment}}</td>
                  <td>{{ items.departmentName}}</td>
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
  </div>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [],
        dialog: false,
        dialog1: false,
        item: {},
        items: {},
        btnPhongban: true,
      }
    },
    props: {
      headers: {
        require: true,
        type: Array,
        default: null
      },
      getApi: {
        require: true,
        type: Function,
        default: null
      },
      postApi: {
        require: true,
        type: Function,
        default: null
      },
      deleteApi: {
        require: true,
        type: Function,
        default: null
      },
      text: {
        require: true,
        type: String,
        default: null
      },
      textBtn: {
        require: true,
        type: String,
        default: null
      }
    },
    created () {
      this.getApi()
      .then(response => {
        this.desserts = response.data
      })
    },
    methods: {
      addItem () {
        this.btnPhongban = true
        this.dialog = true
        this.item = {}
      },
      AddDepartment () {
        this.postApi(this.item)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        this.desserts.push(this.item)
        this.dialog = false
      },
      editItem (index) {
        this.editedIndex = this.desserts.indexOf(index)
        this.item = Object.assign({}, index)
        this.dialog = true
        this.btnPhongban = false
      },
      EditDepartment () {
        api
        .put('department/' + this.item.id , {
          department_name: this.item.department_name,
          id_department: this.item.id_department
        })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        Object.assign(this.desserts[this.editedIndex], this.item)
        this.dialog = false
      },
      deleteItem (index) {
        this.items = index
        this.dialog1 = true
      },
      Delete (item) {
        this.deleteApi(this.items)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        const index = this.desserts.indexOf(item)
        this.desserts.splice(index, 1)
        this.dialog1 = false
      }
    }
  }
</script>
