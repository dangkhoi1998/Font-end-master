<template>
  <v-row justify="center" class="mx-4">
    <v-col cols="12" md="12" class="mb-5 pb-4">
      <material-card>
        <v-layout row class="my-0 py-0 cohoi" >
          <v-btn class="ma-2" tile depressed @click="dialog1" outlined color="red">
            <v-icon left>mdi-account-plus-outline</v-icon>THÊM CƠ HÔI
          </v-btn>
          <v-btn to="/admin/co-hoi/nhap-file"  class="ma-2" tile outlined color="success">
            <v-icon left>mdi-apps</v-icon>NHẬP TỪ FILE
          </v-btn>
            <v-col class="shrink" style="margin-top:-13px">
              <v-btn @click="expand2 = !expand2" class="ma-2" tile outlined color="success">
                <v-icon left>mdi-pencil</v-icon>TỔNG QUAN CƠ HỘI
              </v-btn>
            </v-col>
            <v-row row class="mx-2 mt-5">
            <v-col cols="12" sm="6" style="margin-top:-35px">
              <div height="30">
                <v-text-field
                  v-model="filter"
                  label="Tìm kiếm"
                  filled
                  target="#dropdown-example-1"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" sm="6" style="margin-top:-35px">
              <v-select
                v-model="filter"
                filled
                label="Lọc theo trạng thái"
                :items="status"
              ></v-select>
            </v-col>
          </v-row>
        </v-layout>
        <v-expand-transition>
          <v-col v-show="expand2" style="border-top:1px solid #d7d7d7" class="mt-3 pt-3">
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
        </v-expand-transition>
          <b-table
            hover
            :bordered="true"
            striped 
            show-empty
            small
            stacked="md"
            :items="items"
            :fields="fields"
            :per-page="7"
            :filter="filter"
          >
            <template v-slot:cell(index)="data">
              {{data.index + 1}}
            </template>
            <template v-slot:cell(stts)="row">
              <div color="red">{{row.item.stt}}</div>
            </template>
            <template v-slot:cell(actions)="data">
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
                  <v-list-item @click="dialogEdit(data.item)">
                    <v-list-item-title><v-icon color="blue">create</v-icon> Sửa</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="data.toggleDetails">
                    <v-list-item-title ><v-icon color="green" class="mr-1">comment</v-icon>Comment</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="Delete(data.item)">
                    <v-list-item-title ><v-icon color="red">clear</v-icon>Xóa</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
            
            <template v-slot:row-details="row">
              <v-card color="basil">
                <v-row row class="my-0 py-0">
                  <v-col cols="12" sm="6" class="my-0 py-0">
                    <v-card flat color="basil">
                      <v-card-text>
                        <b-card class="comment">
                          <v-row>
                            <v-col cols="12" sm="6" class=" my-0  py-0" >
                              <v-time-picker
                                v-model="picker"
                                use-seconds
                              ></v-time-picker>
                            </v-col>
          
                            <v-col cols="12" sm="6" class=" my-0  py-0" >
                              <v-textarea  filled auto-grow label="Comment..." rows="3" class="py-0 my-0"></v-textarea>
                              <div class="text-center">
                                <v-btn class="ml-3 mr-3" outlined color="teal">
                                  <v-icon>mdi-phone</v-icon>
                                </v-btn>
                                <v-btn class="ml-3 mr-3" outlined color="indigo">
                                  <v-icon>mdi-email</v-icon>
                                </v-btn>
                                <v-btn class="ma-3 mt-3" outlined color="indigo">
                                  <v-icon>mdi-bell</v-icon>
                                </v-btn>
                                <v-btn class="ma-3 mt-3" outlined color="indigo">
                                  <v-icon>mdi-account-multiple</v-icon>
                                </v-btn>
                              </div>
                              <Datepickers />
                              <v-row row>
                                <v-col cols="12" sm="8"></v-col>
                                <v-col cols="12" sm="4"><b-button elevation="7" variant="primary" class="hover-1" @click="{}">Comment</b-button></v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </b-card>
                        </v-card-text>
                      </v-card>
                  </v-col>
                  <v-col cols="12" sm="6" >
                    <v-card
                      class="mx-auto mr-4"
                      tile
                    >
                      <v-list v-for="item in row.item.comment " :key="item">
                        <v-list-item three-line>
                          <v-list-item-icon>
                            <v-icon color="indigo">mdi-phone</v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title>{{item.note}}</v-list-item-title>
                            <v-list-item-subtitle>
                              Secondary line text Lorem ipsum dolor sit amet,
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                              consectetur adipiscing elit.
                            </v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-icon>
                            <v-menu open-on-hover top offset-y>
                              <template v-slot:activator="{ on }">
                                <v-btn
                                  class="mx-0 px-0"
                                  color="primary"
                                  text
                                  v-on="on"
                                >
                                  ...
                                </v-btn>
                              </template>

                              <v-list>
                                <v-list-item >
                                  <v-list-item-title>Sửa id {{row.item.id}}</v-list-item-title>
                                </v-list-item>
                                <v-list-item @click="Delete(row.item)">
                                  <v-list-item-title >Xóa</v-list-item-title>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                          </v-list-item-icon>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </template>
          </b-table>
          <v-divider></v-divider>
          <v-row row>
            <b-col sm="7" md="6" class="my-1 mx-auto">
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                align="fill"
                size="sm"
                class="my-0"
              ></b-pagination>
            </b-col>
          </v-row>
      </material-card>
    </v-col>
    <v-dialog v-model="dialog" max-width="800px">
      <app-from-cohoi
      :btnCohoi="dialogFromcohoi"
      :cohoi="Fromcohoi"
      @btnThoat="dialog = $event"
      @btnExit="dialog = $event"
      @addlist="listitems=$event"></app-from-cohoi>
    </v-dialog>
  </v-row>
</template>

<script>
  import data from '@/components/json-data/jsondatanghia'
  import api from '../../api/http'
  import formCohoi from '../form/formCohoi'
  import Datepickers from '../Datepickers'
  export default {
    data () {
      return {
        listitems: [],
        picker: null,
        on: '',
        totalRows: 1,
        status: [],
        expanded: [],
        dialogFromcohoi: true,
        Fromcohoi: {},
        currentPage: '',
        bordered: true,
        search: '',
        headers: [
        ],
        expand2: false,
        dialog: false,
        desserts: [],
        items: [],
        fields: [],
        filter: null,
        list: []
      }
    },
    created () {
      api
      .get('cohoi1')
      .then(response => {
        this.items = response.data
        if (response.data.length > 0) {
        }
      })
    },
    methods: {
      getColor (calories) {
        if (calories === 'Đã chốt') return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
      dialog1 () {
        this.dialog = true
        this.dialogFromcohoi = true
        this.Fromcohoi = {}
      },
      dialogEdit (item) {
        this.dialog = true
        this.dialogFromcohoi = false
        this.Fromcohoi = {...item}
      },
      Delete (item) {
      },
    },
    components: {
      appFromCohoi: formCohoi,
      Datepickers,
    },
    computed: {
      sortOptions () {
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
    },
     mounted () {
      this.totalRows = this.items.length
    },
    beforeCreate () {
      var vm = this
      vm.$nextTick(function () {
        vm.fields = data.listTableCohoi
        vm.status = data.status
      })
    },
    watch: {
      listapi () {
        this.items.push(this.listitems)
      }
    }
  }
</script>
<style>
</style>
