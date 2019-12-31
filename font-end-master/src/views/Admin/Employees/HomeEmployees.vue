<template>
  <div>
    <div class="lds-hourglass" v-if="isLoading"></div>
    <div v-if="!isLoading">
      <app-employees
      :headers="headers"
      :list-api="getemployee"
      :update-api="updateEmployeeApi">
        <template v-slot:formEmployees="{ item }" >
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6" class="py-0">
                <v-text-field v-model="item.nameEmpl" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Họ và tên" outlined required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6" class="py-0">
                <v-text-field v-model="item.phoneNum" :rules="phone" label="Số điện thoại" outlined required></v-text-field>
              </v-col>
              <v-col cols="12"  sm="6" md="6"  class="py-0">
                <v-text-field v-model="item.addresss" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Địa chỉ" outlined required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6" class="py-0">
                <v-text-field v-model="item.email" label="Email" :rules="[v => !!v || 'Thông tin bắt buộc ', v => /.+@gmail.+/.test(v)  || 'Bạn nhập sai email']" outlined required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6" class="py-0">
                <datetime-picker :lableName="`Năm sinh`" v-model="item.dateOfBirth" @date="item.dateOfBirth=$event"></datetime-picker>
              </v-col>
              <v-col cols="12" sm="6" md="6" class="py-0">
                <v-combobox v-model="item.levell" height="30" :items="items" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" outlined  label="Chức vụ"></v-combobox>
              </v-col>
              <v-col cols="12" sm="6" md="6" class="py-0">
                <v-combobox v-model="item.idDepartment" :items="idDepartment" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Phòng ban" outlined required></v-combobox>
              </v-col>
              <v-col cols="12" sm="6" md="6" class="py-0">
                <v-combobox v-model="item.userr"  :items="department_name" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Tên đăng nhập" outlined required></v-combobox>
              </v-col>
              <v-col cols="12" sm="6" md="6" class="py-0">
                <v-text-field :type="show1 ? 'text' : 'password'" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show1 = !show1"  v-model="item.pass" :rules="[rules.password, rules.length(6)]" label="Mật khẩu" outlined required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6" class="py-0">
                <v-combobox v-model="item.stt" height="30" :items="stt" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" outlined  label="Trạng thái"></v-combobox>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </app-employees>
    </div>
  </div>
</template>

<script>
  import Employees from '../../../components/Admin/table/Employees'
  import { getemployee, updateEmployeeApi } from '../../../api/GetApi/getApiAdmin'
  import { getDepartmentApi } from '../../../api/getApi'
  import { loading } from '../../../mixins/loading.mixin'
  export default {
    mixins: [loading],
    data() {
      return {
        show1: false,
        getemployee,
        updateEmployeeApi,
        rules: {
          email: v => (v || '').match(/@/) || 'Please enter a valid email',
          length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
          password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
            'Mật khẩu phải chứa chữ in hoa, ký tự số và ký tự đặc biệt',
          required: v => !!v || 'This field is required',
        },
        stt: ['false', 'true'],
        items: ['truong phong', 'nhan vien'],
        department_name: [],
        idDepartment: ['1', '2', '3'],
        headers: [
          { text: 'Họ và Tên', align: 'left', value: 'nameEmpl' },
          { text: 'Số điện thoại', align: 'left', value: 'phoneNum' },
          { text: 'Địa chỉ', align: 'left', value: 'addresss' },
          { text: 'Ngày tháng', align: 'left', value: 'dateOfBirth' },
          { text: 'Email', align: 'left', value: 'email' },
          { text: 'Chức vụ', align: 'left', value: 'levell' },
          { text: 'Phòng ban', align: 'left', value: 'iddepartment' },
          { text: 'Trạng thái', align: 'left', value: 'stt' },
          { text: 'Actions', align: 'left', value: 'actions' },
        ],
      }
    },
    components: {
      appEmployees: Employees,
    },
    created () {
      this.getItem()
    },
    methods: {
      getItem () {
        this.isLoading = true
        getDepartmentApi()
          .then(response => {
            for (const i in response.data) {
              this.department_name.push(response.data[i]['department_name'])
            }
          })
          .finally(() => {
            this.isLoading = false
          })
      },
    },
    computed: {
      phone () {
        return this.$store.state.phone
      }
    }
  }
</script>
