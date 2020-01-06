<template>
  <transition
    appear
    enter-class=""
    enter-active-class="animated fadeInLeftBig">
    <material-card class="card-tabs" color="green">
      <template v-slot:header>
        <v-tabs  background-color="transparent" slider-color="white">
          <span
            class="subheading font-weight-light mx-3"
            style="align-self: center"
          >List công việc</span>
        </v-tabs>
      </template>
      <v-tabs-items >
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in items" :key="i">
            <v-expansion-panel-header class="my-0 py-0">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>
                      <v-layout row>
                        <v-col cols="6">
                          <v-card class="d-flex flex-row mb-4 font-weight-medium" flat tile>{{item.workName}}</v-card>
                          <v-chip class="mx-2" v-for="phong in item.idDepartment" :key="phong" outlined color="orange" label small>{{phong.departmentName}}</v-chip>
                        </v-col>
                        <v-col cols="6">
                          <v-card class="d-flex flex-row-reverse" flat tile >
                            <v-chip class="ml-5" color="primary">
                              <v-icon left color="indigo darken-3">mdi-fire</v-icon >{{item.prioritize}}
                            </v-chip>
                            <v-chip pill class="ml-3" v-for="nhanvien in item.idEmpl" :key="nhanvien" >
                              <v-icon left color="red">mdi-account</v-icon>
                              {{nhanvien.nameEmpl}}
                            </v-chip>
                          </v-card>
                        </v-col>
                      </v-layout>
                    
                  </v-list-item-title>
                  <v-list-item-subtitle class="mr-auto">
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title>Đang thiếu nội dung{{item.prioritize}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-tabs-items>
    </material-card>
  </transition>
</template>
<script>
import { getCongvec } from '../../../api/GetApi/getApiAdmin'
export default {
  data () {
    return {
      items: {}
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      getCongvec ()
        .then(response=>{
          this.items = response.data
        })
    }
  }
}
</script>
