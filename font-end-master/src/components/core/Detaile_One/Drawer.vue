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
        levell: "/truong-phong/"
      },
      {
        to: "/cong-viec",
        icon: "mdi-account-multiple-check",
        text: "Công việc",
        levell: "/truong-phong/"
      },
      {
        to: "/thanh-vien",
        icon: "mdi-account-multiple",
        text: "Thành viên",
        levell: "/truong-phong/"
      },
      {
        to: "/thong-tin-ban-than",
        icon: "mdi-account",
        text: "Thông tin tài khoản",
        levell: "/truong-phong/"
      },
      {
        to: "/thong-bao",
        icon: "mdi-bell",
        text: "Thông báo",
        levell: "/truong-phong/"
      },
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
