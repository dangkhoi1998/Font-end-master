<template>
        <material-card>
          <v-col >
            <p style="margin-top:18px; font-size:13px;margin-bottom: 3px;">1.Tệp dữ liệu CSV phải có định dạng và tiêu đề cột như bảng bên dưới. Bạn cũng cần đảm bảo rằng dữ liệu nhập tương thích bộ mã UTF-8 để tránh các trục trặc</p>
            <p style="font-size:13px;margin-bottom: 3px;">2. Nếu cột có chứa dữ liệu ngày tháng, cần đảm bảo định dạng ngày tháng là Y-m-d (2019-10-08)</p>
            <p style="font-size:13px;margin-bottom: 3px;">3. Các cơ hội trùng lặp (được thiết lập <a href="#" style="text-decoration:none">tại đây</a>) sẽ không được nhập vào hệ thống nếu:</p>
            <p style="font-size:13px; margin-left:15px;margin-top:10px;">- Cơ hội có email đã tồn tại</p>
            <p style="font-size:13px; margin-top:10px; ">Nếu bạn vẫn muốn nhập tất cả cơ hội, hãy hủy bỏ việc kiểm tra trùng lặp</p>
          </v-col>

          <v-row class="my-0 py-0">
            <v-col cols="12" sm="9" class="my-0 py-0">
              <v-btn class="ma-2 ml-3" :to="'/admin/co-hoi/' + $route.params.idEmpl" tile outlined color="success">
                <v-icon left>mdi-arrow-left-bold-circle</v-icon> Quay lại
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3" class="my-0 py-0">
              <v-row>
                <import-excel class="mx-4" @uploaded="desserts=$event"></import-excel>
                <v-btn class="ma-2" tile color="indigo" dark @click="submit()">
                  <v-icon right dark class="mr-3">mdi-message-text</v-icon> Lưu lại
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
          <!-- ------------ TABLE ----------------------- -->
          <v-col cols="12">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="10"
              class="elevation-1"
              no-data-text="Không có dữ liệu"
            ></v-data-table>
          </v-col>
          <!-- ------------------------------------------ -->
        </material-card>
</template>

<script>
  import XLSX from 'xlsx'
  import importExcel from './importExcel'
  import axios from 'axios'
  export default {
    data() {
      return {
        headers: [
          { text: 'Họ và Tên', align: 'left', sortable: false, value: 'cus_Name' },
          { text: 'Số điện thoại', align: 'left', value: 'phone_Num' },
          { text: 'Tên sản phẩm', align: 'left', value: 'pro_Name' },
          { text: 'Email', align: 'left', value: 'email' },
          { text: 'Số lượng', align: 'left', value: 'amountt' },
          { text: 'Giá', align: 'left', value: 'price' },
          { text: 'Ngày mua', align: 'left', value: 'date_of_purchase' },
          { text: 'Tên nhân viên', align: 'left', value: 'id_empl' },
          { text: 'Giao vận', align: 'left', value: 'delivery' },
          { text: 'Nguồn', align: 'left', value: 'source' },
        ],
        desserts: []
      }
    },
    components: {
      importExcel,
    },
    methods: {
      submit () {
        axios.post('http://localhost:3000/work', this.desserts)
        console.log('ddddddđ', this.desserts)
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>
