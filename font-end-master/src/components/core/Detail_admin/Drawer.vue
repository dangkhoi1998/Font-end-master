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
        to: "/admin/ban-tin",
        icon: "mdi-view-dashboard",
        text: "Bản tin"
      },
      {
        to: "/admin/co-hoi",
        icon: "mdi-account-multiple-check",
        text: "Cơ hội"
      },
      {
        to: "/admin/quan-ly-khach-hang",
        icon: "mdi-account",
        text: "Quản lý khách hàng"
      },
      {
        to: "/admin/thong-tin-tai-khoan",
        icon: "mdi-alarm-bell",
        text: "Thông tin tài khoản"
      },
      {
        to: "/admin/nhan-vien",
        icon: "mdi-account-group",
        text: "Nhân viên"
      },
      {
        to: "/admin/thong-bao",
        icon: "mdi-bell",
        text: "Thông báo"
      },
      {
        to: "/admin/typography",
        icon: "mdi-format-font",
        text: "Nội dung cần thiết"
      },
      {
        to: "/admin/icons",
        icon: "mdi-chart-bubble",
        text: "Icons"
      },
      {
        to: "/admin/setting/home",
        icon: "mdi-settings-transfer-outline",
        text: "Setting",
        items:[
          { title:"Cơ hội", to:"/admin/setting/seting-co-hoi",},
          { title:"Khách hàng",to:"/admin/setting/setting-khach-hang"},
          { title:"Nhân viên",to:'/admin/setting/setting-nhan-vien'}
        ]
      }
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
