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
        to: "/admin/ban-tin/",
        icon: "mdi-view-dashboard",
        text: "Bản tin"
      },
      {
        to: "/admin/co-hoi/",
        icon: "mdi-format-font",
        text: "Cơ hội"
      },
      {
        to: "/admin/quan-ly-khach-hang/",
        icon: "mdi-account",
        text: "Quản lý khách hàng"
      },
      {
        to: "/admin/thong-tin-tai-khoan/",
        icon: "mdi-alarm-bell",
        text: "Thông tin tài khoản"
      },
      {
        to: "/admin/nhan-vien/",
        icon: "mdi-account-group",
        text: "Nhân viên"
      },
      {
        to: "/admin/thong-bao/",
        icon: "mdi-bell",
        text: "Thông báo"
      },
      {
        to: "/admin/setting/home/",
        icon: "mdi-settings-transfer-outline",
        text: "Cài đặt",
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
