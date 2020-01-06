<template>
  <v-card>
    <v-row class="mx-4">
      <v-col cols="12" sm="5">
        <v-timeline dense v-for="item in items">
          <v-timeline-item small>{{item.nameEmpl}}</v-timeline-item>
          <v-timeline-item small>{{item.email}}</v-timeline-item>
          <v-timeline-item small>{{item.phoneNum}}</v-timeline-item>
          <v-timeline-item small>{{item.addresss}}</v-timeline-item>
          <v-timeline-item small>{{item.dateOfBirth}}</v-timeline-item>
          <v-timeline-item small>{{item.levell}}</v-timeline-item>
          <v-timeline-item v-if="item.idDepartment" small>{{item.idDepartment.departmentName}}</v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col cols="12" sm="7">
        <v-form>
          <v-row>
            <v-col class="py-0" cols="12" sm="6">
              <v-text-field v-model="Employee.nameEmpl" outlined label="Họ và tên"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-text-field  v-model="Employee.dateOfBirth" outlined label="Ngày sinh"></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="6">
              <v-text-field v-model="Employee.phoneNum" outlined label="Số điện thoại"></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="6">
              <v-text-field v-model="Employee.email" outlined label="Email"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" class="py-0">
              <v-text-field v-model="Employee.addresss" outlined label="Địa chỉ"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0" >
              <v-text-field v-model="Employee.userr" label="Tên đăng nhập" outlined required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-text-field v-model="Employee.pass" label="Mật khẩu" outlined required></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="info btn btn-3" text @click="Save()">Cập nhập hồ sơ</v-btn>
          </v-card-actions>
        </v-form>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      Employee: {},
      dialog: true,
      items: {}
    }),
    props: {
      getApi: {
        require: true,
        type: Function,
        default: null
      },
      updateApi: {
        require: true,
        type: Function,
        default: null
      },
      to: {
        require: true,
        type: String,
        default: null
      },
    },
    created () {
      this.listApi()
    },
    methods: {
      listApi () {
        this.getApi()
          .then(response => {
            this.items = response.data
            for(const i in response.data) {
              this.Employee = response.data[i]
            }
          })
      },
      Save () {
        console.log('ddđ', this.Employee)
        this.updateApi(this.Employee)
      }
    }
  }
</script>
