<template>
  <v-responsive class="overflow-y-auto" max-height="315">
    <v-card class="mx-auto animated jackInTheBox fast" style="height: 64px; max-height: 400px" tile v-for="item in listComment">
      <v-list-item three-line class="mx-1 px-1">

        <v-list-item-icon class="mr-1 px-1">
          <v-icon color="orange">comment</v-icon>
        </v-list-item-icon>
               
        <v-list-item-content>
          <v-list-item-title class="mt-1 mb-0 pb-0">{{item.note}}</v-list-item-title>

          <v-list-item-subtitle class="mb-5">  
            <v-row row class="my-0 py-0">
              <v-col cols="12" md="9" class="my-0 py-0">
                <span class="ml-3 mr-1">{{item.contactTime}}</span>
                <span class="ml-1 mr-1">{{item.appointmentTime}}</span>
                <v-icon class="v-icon1" height="10" size="15" :color="getColorComments(item.icon)" >{{item.icon}}</v-icon>
              </v-col>

              <v-col cols="12" sm="3" class="my-0 py-0">
                {{item.datee}}
              </v-col>

            </v-row>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-row>
            <v-col></v-col>
            <div class="text-center">
              <v-menu 
              origin="center center"
              transition="scale-transition">
                <template v-slot:activator="{ on }">
                  <a class="mr-5" color="black" dark v-on="on" text>...</a>
                </template>
                <v-list>

                  <v-list-item @click="EditItem(item)">
                    <v-list-item-title>
                      <v-icon color="">mdi-box-cutter</v-icon> Chỉnh sửa ...
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item @click="Delete(item)">
                    <v-list-item-title>
                      <v-icon color="">mdi-delete-circle</v-icon> Xóa ...
                    </v-list-item-title>
                  </v-list-item>
                  

                </v-list>
              </v-menu>
            </div>
          </v-row>
        </v-list-item-action>

      </v-list-item>
    </v-card>
  </v-responsive>  
</template>

<script>
import { getComment} from  '../../../api/Comment/main'
import { DeleteCommentNhanvien } from '../../../api/deleteApi/deleteAdmin'
import axios from 'axios'
export default {
  name: 'list-comment',
  data: () => ({
    items: [],
    selectNotification: {},
  }),
  methods: {
    getColorComments (color) {
      if (color === 'mdi-email') return 'green'
      else if (color === 'mdi-phone') return 'orange'
      else if (color === 'mdi-bell') return 'red'
      else if (color === 'mdi-account-multiple') return 'blue'
      else return 'red'
    },

    Delete (item) {
      this.deleteComment(item['idCom'])
        .then(response => {
          for (var i = 0; i < this.listComment.length; i++) {
            if (this.listComment[i].idCom === item['idCom']) {
              this.listComment.splice(i, 1)
              this.listComment[this.listComment.length - 1]
            }
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    EditItem (val) {
      this.$emit('editCommet', val)
    }
  },
  watch: {
    selectNotification (notification) {
      this.$emit('selectNotification', notification)
    },
    commentAdd (val) {
      const indexxx = this.listComment.findIndex(item => item.note === val.note)
      if (indexxx < 0) {
        this.listComment.push(val)
      }
    },
    listComment (val) {
      this.items = val
    }
  },
  props: {
    commentAdd: {
      type: Object,
      default: {}
    },
    listComment: {
      type: [Object, Array],
      default: {}
    },
    deleteComment: {
      type: Function,
      default: {}
    }
  }
}
</script>
