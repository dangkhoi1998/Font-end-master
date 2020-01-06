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
        levell: "/nhan-vien/"
      },
      {
        to: "/cong-viec",
        icon: "mdi-account-multiple-check",
        text: "Công việc",
        levell: "/nhan-vien/"
      },
      {
        to: "/thong-tin-ban-than",
        icon: "mdi-account",
        text: "Thông tin tài khoản",
        levell: "/nhan-vien/"
      },
      {
        to: "/thong-bao",
        icon: "mdi-bell",
        text: "Thông báo",
        levell: "/nhan-vien/"
      },
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
