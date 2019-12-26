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
        to: "/list-two/trang-chu",
        icon: "mdi-view-dashboard",
        text: "Trang chủ"
      },
      {
        to: "/list-two/cong-viec",
        icon: "mdi-account-multiple-check",
        text: "Công việc"
      },
      {
        to: "/list-two/lich-hop",
        icon: "mdi-amplifier",
        text: "Lịch họp/ Sự kiện"
      },
      {
        to: "/list-two/thong-tin-ban-than",
        icon: "mdi-account",
        text: "Thông tin bản thân"
      },
      {
        to: "/list-two/thong-bao",
        icon: "mdi-bell",
        text: "Thông báo"
      },
      {
        to: "/list-two/list",
        icon: "mdi-bell",
        text: "Bài thi cuôi kỳ"
      },
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
