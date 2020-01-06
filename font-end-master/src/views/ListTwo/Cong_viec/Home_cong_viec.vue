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
import { getTaskApi } from '../../../api/ListTwo/getApi'
import { UpdateOpportunity } from '../../../api/ListOne/updateApi'
import table from '../../../components/List/Table'
export default {
  data: () => ({
    getTaskApi,
    UpdateOpportunity,
    headers: [
      { text: 'Họ và Tên', align: 'left', sortable: false, value: 'cusName' },
      { text: 'Số điện thoại', align: 'left', value: 'phoneNum' },
      { text: 'Tên sản phẩm', align: 'left', value: 'proName' },
      { text: 'Email', align: 'left', value: 'email' },
      { text: 'Số lượng', align: 'left', value: 'amountt' },
      { text: 'Giá', align: 'left', value: 'price' },
      { text: 'Ngày mua', align: 'left', value: 'dateOfPurchase' },
      { text: 'Giao vận', align: 'left', value: 'delivery' },
      { text: 'Nguồn', align: 'left', value: 'sources' },
      { text: 'Trạng thái', align: 'center', value: 'stt' },
    ],
  }),
  components: {
    appTable : table
  }
}
</script>
