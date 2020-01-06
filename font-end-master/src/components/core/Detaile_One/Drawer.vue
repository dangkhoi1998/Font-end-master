<template>
  <div>
    <core-drawer :links="links" />
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        to: "/trang-chu",
        icon: "mdi-view-dashboard",
        text: "Trang chủ",
        levell: '/list-one/'
      },
      {
        to: "/cong-viec",
        icon: "mdi-account-multiple-check",
        text: "Công việc",
        levell: '/list-one/'
      },
      {
        to: "/thanh-vien",
        icon: "mdi-account-multiple",
        text: "Thành viên",
        levell: '/list-one/'
      },
      {
        to: "/thong-tin-ban-than",
        icon: "mdi-account",
        text: "Thông tin tài khoản",
        levell: '/list-one/'
      },
      {
        to: "/thong-bao",
        icon: "mdi-bell",
        text: "Thông báo",
        levell: '/list-one/'
      },
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
