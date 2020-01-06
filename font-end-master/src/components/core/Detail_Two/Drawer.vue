<template>
  <div>
    <core-drawer :links="links" />
  </div>
</template>

<script>
export default {
  data: () => ({
    params: '$route.params.idEmpl',
    links: [
      {
        to: "/list-two/trang-chu/",
        icon: "mdi-view-dashboard",
        text: "Trang chủ",
      },
      {
        to: "/list-two/cong-viec/",
        icon: "mdi-account-multiple-check",
        text: "Công việc"
      },
      {
        to: "/list-two/thong-tin-ban-than/",
        icon: "mdi-account",
        text: "Thông tin tài khoản"
      },
      {
        to: "/list-two/thong-bao/",
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
