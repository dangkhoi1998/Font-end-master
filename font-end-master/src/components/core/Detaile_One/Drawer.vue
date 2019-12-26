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
        to: "/list-one/trang-chu",
        icon: "mdi-view-dashboard",
        text: "Trang chủ"
      },
      {
        to: "/list-one/cong-viec",
        icon: "mdi-account-multiple-check",
        text: "Công việc"
      },
      {
        to: "/list-one/thanh-vien",
        icon: "mdi-account-multiple",
        text: "Thành viên"
      },
      {
        to: "/list-one/thong-tin-ban-than",
        icon: "mdi-account",
        text: "Thông tin bản thân"
      },
      {
        to: "/list-one/thong-bao",
        icon: "mdi-bell",
        text: "Thông báo"
      },
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
