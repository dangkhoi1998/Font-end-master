<template>
  <div>
    <core-app-bar
    :getNotificationsApi="getworkApi"
    :links="links"
    :to="to" />
  </div>
</template>

<script>
import { getworkApi } from '../../../api/GetApi/getApiAdmin'
export default {
  data: () => ({
    getworkApi,
    to: {
      to1: '/list-two/trang-chu',
      to2: '/list-two/thong-bao'
    },
    links: [
      {
        to: "/login",
        icon: "mdi-account-heart",
        text: "Đăng Nhâp"
      },
      {
        to: "/list-two",
        icon: "mdi-account-multiple-check",
        text: "Thêm công việc"
      },
    ],
  }),
  components: {
    CoreAppBar: () => import('../AppBar'),
  },
}
</script>
