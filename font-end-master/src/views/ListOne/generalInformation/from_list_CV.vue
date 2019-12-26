<template>
  <div>
    <them-cong-viec ></them-cong-viec>
  </div>
</template>
<script>
  import api from '../../../api/http'
  import {getEmployeeApi, getworkApi} from '../../../api/getApi'
  import ThemCongViec from '../../../components/Shared/Them_cong_viec'
  export default {
    data() {
      return {
      }
    },
    components: {
      ThemCongViec
    }
  }
</script>