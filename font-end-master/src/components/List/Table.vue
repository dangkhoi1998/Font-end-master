<template>
  <transition
    appear
    enter-class=""
    enter-active-class="animated fadeInLeftBig ">
    <material-card class="nhanvien" color="orange" text>
      <template v-slot:header>
        <h4 class="ml-4" >Quản lý công việc</h4>
        <v-col cols="12" sm="4"></v-col>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          class="mx-6"
          hide-details
          filled
          dense
        ></v-text-field>
      </template>
        <v-data-table
          :headers="headers"
          :items="desserts"
          item-key="idOpportunity"
          show-expand
          :search="search"
          no-data-text="Không có dữ liệu"
          class="elevation-1 mt-5"
        >
          <template v-slot:item.stt="{item}">
            <v-select
              style="width: 140px"
              class="mt-4"
              :items="stt"
              :label="item.stt"
              solo
              @click="editStt(item)"
              dense
            ></v-select>
          </template>
          <template v-slot:expanded-item="{item}">
            <td :colspan="headers.length" style="width: 100%;">
              <v-row row class="my-0 py-0">
                <v-col cols="12" sm="5" class="my-0 py-0">
                  <v-card-text>
                    <b-card>
                      <v-row row>
                        <v-col cols="12" class="my-0 py-0">
                          <v-textarea
                            outlined
                            class="my-0 py-0"
                            name="input-7-4"
                            label="Comment"
                            value=""
                          ></v-textarea>
                        </v-col>
                        <v-col cols="12" sm="6" class="my-0 py-0">
                          <v-row class="mt-2">
                            <v-btn-toggle
                              rounded
                            >
                              <v-col cols="12" sm="3">
                                <v-btn class="ma-2 my-0 py-0" outlined color="orange" height="41">
                                  <v-icon class="v-icon1"  >mdi-email</v-icon>
                                </v-btn>
                              </v-col>
                              <v-col cols="12" sm="3" >
                                <v-btn class="ma-2 my-0 py-0" outlined color="orange" height="41">
                                  <v-icon class="v-icon1" >mdi-phone</v-icon>
                                </v-btn>
                              </v-col>
                              <v-col cols="12" sm="3" >
                                <v-btn class="ma-2 my-0 py-0" outlined color="orange" height="41">
                                  <v-icon class="v-icon1"  >mdi-bell</v-icon>
                                </v-btn>
                              </v-col>
                              <v-col cols="12" sm="3" >
                                <v-btn class="ma-2 my-0 py-0" outlined color="orange" height="41">
                                  <v-icon class="v-icon1" height="33" >mdi-account-multiple</v-icon>
                                </v-btn>
                              </v-col>
                            </v-btn-toggle> 
                          </v-row>
                        </v-col>
                        <v-col cols="12" sm="6" class="my-0 py-0">
                          <v-select label="Ngày tháng" class="mt-5" outlined dense></v-select>
                        </v-col>

                        <v-col cols="12" sm="6"  class="my-0 py-0">
                          <v-select label="Thời gian hẹn " outlined dense></v-select>
                        </v-col>

                        <v-col cols="12" sm="6"  class="my-0 py-0">
                          <v-select label="Thời gian liên lạc" outlined dense></v-select>
                        </v-col>
                      </v-row>
                      <v-row >
                        <v-col cols="12" sm="12">
                          <b-button style="width:100%;border-radius:20px" elevation="7" variant="primary" class="hover-1" @click="{}">Lưu lại</b-button>
                        </v-col>
                      </v-row>
                    </b-card>
                    </v-card-text>
                </v-col>
                <v-col cols="12" sm="7">
                  <v-card
                    class="mx-auto"
                    max-width=""
                    tile
                  >
                    <v-list-item three-line class="mx-1 px-1">
                      <v-list-item-icon class="mr-1 px-1">
                        <v-icon color="orange">comment</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title class="mt-1">Nội dung comment của khách chốt khách</v-list-item-title>
                        <v-list-item-subtitle >  
                          <v-row row>
                            <v-chip class="ml-5" >12/10/2019</v-chip>
                              <v-icon size="31">mdi-email</v-icon>
                          </v-row>
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-btn icon>
                          <v-icon color="">delete</v-icon>
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </v-card>
                </v-col>
              </v-row>
          </td>
          </template>
      </v-data-table>
    </material-card>
  </transition>
</template>
<script>
  export default {
    data: () => ({
      search: '',
      stt: ['Đã chốt', 'Đã đăng ký', 'Liên hệ sau'],
      desserts: [],
    }),
    created () {
      this.getItem()
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
      updateApi: {
        require: true,
        type: Function,
        default: null
      }
    },
    methods: {
      getItem () {
        this.getApi(this.$route.params.idEmpl)
          .then(response => {
            this.desserts = response.data
          })
      },
      editStt (item) {
        console.log('ddddđ', item)
      }
    }
  }
</script>
