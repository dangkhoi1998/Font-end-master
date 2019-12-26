<template>
  <v-card>
    <v-row class="mx-4">
      <v-col cols="12" sm="5">
        <v-timeline dense v-for="item in items">
          <v-timeline-item small>{{item.name_empl}}</v-timeline-item>
          <v-timeline-item small>{{item.email}}</v-timeline-item>
          <v-timeline-item small>{{item.phone_num}}</v-timeline-item>
          <v-timeline-item small>{{item.addresss}}</v-timeline-item>
          <v-timeline-item small>{{item.date_of_birth}}</v-timeline-item>
          <v-timeline-item small>{{item.level}}</v-timeline-item>
          <v-timeline-item small>{{item.id_department}}</v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col cols="12" sm="7">
        <v-form>
          <v-row >
            <v-col class="py-0" cols="12" sm="6">
              <v-text-field v-model="Employee.name_empl" outlined label="Họ và tên"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-text-field  v-model="Employee.date_of_birth" outlined label="Ngày sinh"></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="6">
              <v-text-field v-model="Employee.phone_num" outlined label="Số điện thoại"></v-text-field>
            </v-col>
            <v-col class="py-0" cols="12" sm="6">
              <v-text-field v-model="Employee.email" outlined label="Email"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" class="py-0">
              <v-text-field v-model="Employee.address" outlined label="Địa chỉ"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0" >
              <v-text-field v-model="Employee.user" label="Tên đăng nhập" outlined required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <v-text-field v-model="Employee.password" label="Mật khẩu" outlined required></v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="to" class="info btn btn-3" text @click="111">Cập nhập hồ sơ</v-btn>
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
    }),
    props: {
      items: {
        require: true,
        type: [Object, Array, String],
        default: null
      },
      to: {
        require: true,
        type: String,
        default: null
      },
    }
  }
</script>
