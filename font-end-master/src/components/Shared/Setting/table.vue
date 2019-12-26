<template>
 <div>
  <material-card class="nhanvien" color="orange" text>
    <template v-slot:header>
      <v-col cols="12" sm="10">
        <h5><v-icon class="mr-3">mdi-account-multiple-check</v-icon>{{text}}</h5>
      </v-col>
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              color="white"
              dark
              text
              v-on="on"
            >
              <h5>...</h5>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              @click="dialog = true"
            >
              <v-list-item-title><v-icon color="blue">add_circle</v-icon> Thên mới</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </template>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      no-data-text="Không có dữ liệu"
    >
      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          edit
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          delete
        </v-icon>
      </template>
    </v-data-table>
  </material-card>
  <v-dialog v-model="dialog" max-width="500px">
    <material-card class="card-tabs" color="orange">
      <template v-slot:header>
        <v-tabs background-color="transparent" slider-color="white">
          <span
            class="subheading font-weight-light mx-3"
            style="align-self: center"
          >{{text}}</span>
        </v-tabs>
      </template>
      <slot name="formDepartment" :item="items"></slot>
      <v-card-actions class="my-0 py-0">
        <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1"  @click="thoat()"><span style="color:white;">Thoát</span></v-btn>
          <v-btn color="orange darken-1" @click="AddDepartment()" v-if="btnPhongban"><span style="color:white;">Lưu lại</span></v-btn>
          <v-btn color="orange darken-1" @click="EditDepartment()" v-else><span style="color:white;">Lưu lại</span></v-btn>
      </v-card-actions>
    </material-card>
  </v-dialog>

  <v-dialog v-model="dialog1" max-width="500px">

    <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Bạn có chắc chẵn xóa ?
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>
    </v-card>

  </v-dialog>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        desserts: [
        ],
        dialog: false,
        dialog1: false,
        items: {},
        editedIndex: -1,
        btnPhongban: true,
      }
    },
    props: {
      headers: {
        type: [Object, Array],
        default: false
      },
      text: {
        type: String,
        default: false
      },
      listApi: {
        type: Function,
        default: false
      }
    },
    created () {
      this.getItem()
    },
    methods: {
      getItem () {
        this.listApi()
          .then(response => {
            this.desserts = response.data
          })
      },
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.items = Object.assign({}, item)
        this.show()
      },
      deleteItem (item) {
        this.dialog1 = true
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },
      thoat () {
        this.dialog = false
      },
      show () {
        this.dialog = true
      }
    },
  }
</script>
