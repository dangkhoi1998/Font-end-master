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
        to: "/ban-tin/",
        icon: "mdi-view-dashboard",
        text: "Bản tin",
        levell: "/admin/"
      },
      {
        to: "/co-hoi/",
        icon: "mdi-format-font",
        text: "Cơ hội",
        levell: "/admin/"
      },
      {
        to: "/quan-ly-khach-hang/",
        icon: "mdi-account",
        text: "Quản lý khách hàng",
        levell: "/admin/"
      },
      {
        to: "/thong-tin-tai-khoan/",
        icon: "mdi-alarm-bell",
        text: "Thông tin tài khoản",
        levell: "/admin/"
      },
      {
        to: "/nhan-vien/",
        icon: "mdi-account-group",
        text: "Nhân viên",
        levell: "/admin/"
      },
      {
        to: "/thong-bao/",
        icon: "mdi-bell",
        text: "Thông báo",
        levell: "/admin/"
      },
      {
        to: "/setting/home/",
        icon: "mdi-settings-transfer-outline",
        text: "Cài đặt",
        items:[
          { title:"Cơ hội", to:"/admin/setting/seting-co-hoi",},
          { title:"Khách hàng",to:"/admin/setting/setting-khach-hang"},
          { title:"Nhân viên",to:'/admin/setting/setting-nhan-vien'}
        ],
        levell: "/admin/"
      }
    ]
  }),
  components: {
    CoreDrawer: () => import('../Drawer'),
  },
}
</script>
