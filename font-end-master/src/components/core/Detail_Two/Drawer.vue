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
        levell: "/list-two/"
      },
      {
        to: "/cong-viec",
        icon: "mdi-account-multiple-check",
        text: "Công việc",
        levell: "/list-two/"
      },
      {
        to: "/thong-tin-ban-than",
        icon: "mdi-account",
        text: "Thông tin tài khoản",
        levell: "/list-two/"
      },
      {
        to: "/thong-bao",
        icon: "mdi-bell",
        text: "Thông báo",
        levell: "/list-two/"
      },
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
