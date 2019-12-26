<template>
  <div>
    <transition
      appear
      enter-class=""
      enter-active-class="animated fadeInRightBig">
      <material-card color="orange" title="Việc cần làm" text>
        <v-btn class="my-0 py-0" @click="addItem" tile outlined color="success">
          <v-icon left>add_circle_outline</v-icon> Thêm việc cần làm
        </v-btn>
        <v-list nava-item style="border-bottom: 1px solid #EEEEEE;" v-for="(item, index) in items" :key="index" avatar @click="selectNotification = item ">
          <v-list-item class="mx-0 px-0">
            <v-list-item-icon class="mx-0 px-0">
              <v-icon size="40">arrow_right</v-icon>
              </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{item.commets}}</v-list-item-title>
                <v-list-item-subtitle>
                  {{item.date}}
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar>
              <v-menu open-on-hover top offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn
                    class="mx-0 px-0"
                    color="primary"
                    text
                    v-on="on"
                    min-width="20"
                  >
                    ...
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="editItem(item)">
                    <v-list-item-title><v-icon color="blue">create</v-icon> Sửa {{item.id}}</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="getDelete(item)">
                    <v-list-item-title ><v-icon color="red">clear</v-icon>Xóa</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>
        <v-row justify="center">
            <v-dialog
              v-model="dialog"
              max-width="800"
            >
              <material-card color="orange" title="Thêm việc cần làm" text>
                <v-card>
                  <v-card-title class="headline">Mô tả</v-card-title>
                  <v-textarea v-model="item.commets" class="mx-4" label="Công việc" auto-grow outlined rows="3" row-height="50" shaped></v-textarea>
                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="dialog = false" >Thoát</v-btn>

                    <v-btn color="green darken-1" text @click="saveItem()" v-if="addUpdate" > Lưu lại </v-btn>

                    <v-btn color="green darken-1" text @click="updateItem()" v-else> Sửa </v-btn>
                  </v-card-actions>
                </v-card>
              </material-card>
            </v-dialog>
        </v-row>
      </material-card>
    </transition>
    <v-dialog v-model="dialog1" max-width="500px">
      <v-card>
        <v-card-title class="headline">Bạn có chắc chẵn xóa?</v-card-title>

        <v-list-item class="mx-0 px-0">
            <v-list-item-icon class="mx-0 px-0">
              <v-icon size="40">arrow_right</v-icon>
              </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{list.commets}}</v-list-item-title>
                <v-list-item-subtitle>
                  {{list.date}}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog1 = false" > Thoát </v-btn>

          <v-btn color="green darken-1" text @click="deleteItem()" > Xóa </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog1: false,
        items: {},
        editedIndex: -1,
        addUpdate: false,
        item: {},
        list: {}
      }
    },
    props: {
      listApi: {
        require: true,
        type: Function,
        default: null
      },
      postApi: {
        require: true,
        type: Function,
        default: null
      },
      putApi: {
        require: true,
        type: Function,
        default: null
      },
      deleteApi: {
        require: true,
        type: Function,
        default: null
      },
    },
    created () {
      this.getList()
    },
    methods: {
      getList () {
        this.listApi ()
         .then(response=> {
           this.items = response.data
         })
      },
      addItem () {
        this.dialog = true
        this.addUpdate = true
        this.item = {}
      },
      saveItem () {
        this.postApi(this.item)
          .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
        this.items.push(this.item)
        this.dialog = false
      },
      editItem (index) {
        this.editedIndex = this.items.indexOf(index)
        this.item = Object.assign({}, index)
        this.dialog = true
        this.addUpdate = false 
      },

      updateItem () {
        this.putApi(this.item)
          .then(response => {
            console.log(response)
          })  
          .catch(error => {
            console.log(error)
          })
        Object.assign(this.items[this.editedIndex], this.item)
        this.dialog = false
      },

      getDelete (index) {
        this.list = index
        this.dialog1 = true
      },

      deleteItem () {
        this.deleteApi(this.list.id)
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
        const index = this.items.indexOf(this.list)
        this.items.splice(index, 1)
        this.dialog1 = false
      },
    }
  }
</script>
