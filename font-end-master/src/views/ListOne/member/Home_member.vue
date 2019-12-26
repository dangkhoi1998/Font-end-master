<template>
  <transition
    appear
    enter-class=""
    enter-active-class="animated jackInTheBox ">
    <material-card class="nhanvien"  color="orange" text>
      <template v-slot:header>
        <h4 class="ml-4" >Thành viên</h4>
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
        :search='search'
        :headers="headers"
        :items="desserts"
        sort-by="calories"
        class="elevation-1"
      >
      </v-data-table>
    </material-card>
  </transition>
</template>
<script>
  export default {
    data: () => ({
      search: '',
      dialog: false,
      headers: [
        {
          text: 'Họ và Tên',
          align: 'left',
          sortable: false,
          value: 'name_empl',
        },
        { text: 'Số điện thoại',align: 'left', value: 'phone_num' },
        { text: 'Email',align: 'left', value: 'email' },
        { text: 'Địa chỉ',align: 'left', value: 'address' },
        { text: 'Ngày sinh',align: 'left', value: 'date_of_birth' },
        { text: 'Chức vụ',align: 'left', value: 'level' },
      ],
      desserts: [
        { 
          name_empl: 'Nguyễn Tiến Nghĩa',
          phone_num: '0327715848',
          email: 'nghia060398@gmail.com',
          address: 'Đức Giang - Hoài Đức',
          date_of_birth: '06-03-1998',
          level: 'Nhân vien',
          pass: '123',
        },
        {
          name_empl: 'Nguyễn Đăng Khởi',
          phone_num: '0327715848',
          email: 'nghia060398@gmail.com',
          address: 'Đức Giang - Hoài Đức',
          date_of_birth: '06-03-1998',
          level: 'nghia1',
          pass: '123',
        },
        {
          name_empl: 'Nguyễn Đăng Khởi',
          phone_num: '0327715848',
          email: 'nghia060398@gmail.com',
          address: 'Đức Giang - Hoài Đức',
          date_of_birth: '06-03-1998',
          level: 'nghia1',
          pass: '123',
        },
        {
          name_empl: 'Nguyễn Đăng Khởi',
          phone_num: '0327715848',
          email: 'nghia060398@gmail.com',
          address: 'Đức Giang - Hoài Đức',
          date_of_birth: '06-03-1998',
          level: 'nghia1',
          pass: '123',
        },
      ],
    }),

  }
</script>
