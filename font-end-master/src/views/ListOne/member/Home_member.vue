<template>
  <div>
    <app-table
    class="animated rotateInDownRight"
    :headers="headers"
    :get-api="getTaskApi"
    :update-api="UpdateOpportunity"></app-table>
  </div>  
</template>

<script>
import { getTaskApi } from '../../../api/ListOne/getApi'
import { UpdateOpportunity } from '../../../api/ListOne/updateApi'
import table from '../../../components/List/TableTruongphong'
export default {
  data: () => ({
    getTaskApi,
    UpdateOpportunity,
    headers: [
      { text: 'Họ và Tên', align: 'left', sortable: false, value: 'nameEmpl' },
      { text: 'Số điện thoại', align: 'left', value: 'phoneNum' },
      { text: 'Chức vụ', align: 'left', value: 'levell' },
      { text: 'Email', align: 'left', value: 'email' },
      { text: 'Địa chỉ', align: 'left', value: 'addresss' },
      { text: 'Ngày sinh', align: 'left', value: 'dateOfBirth' },
      { text: 'Tên tài khoản', align: 'left', value: 'userr' },
      { text: 'Password', align: 'left', value: 'pass' },
      { text: 'Phòng ban', align: 'left', value: 'idDepartment.departmentName' },
    ],
  }),
  components: {
    appTable : table
  }
}
</script>
