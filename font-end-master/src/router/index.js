import Vue from 'vue'
import Router from 'vue-router'
import login from '@/Login/dangNhap'
import detailAdmin from '@/views/Detail_Admin'
import bantin from '@/views/Admin/News/Bantin'
import HomeOpportunity from '@/views/Admin/Opportunity/HomeOpportunity'
import DetailOpportunity from '@/views/Admin/Opportunity/DetailOpportunity'
import DetailEmployees from '@/views/Admin/Employees/DetailEmployees'
import HomeEmployees from '@/views/Admin/Employees/HomeEmployees'
import Nhapfile from '@/views/CoHoi/Nhapfile'
import DetailOmnichannel from '@/views/Admin/Omnichannel/DetailOmnichannel'
import HomeOmnichannel from '@/views/Admin/Omnichannel/HomeOmnichannel'
import typography from '@/views/Typography'
import thongbao from '@/views/Admin/Notification/Home_Notification'
import DetailUserProfile from '@/views/Admin/UserProfile/Detail_UserProfile'
import HomeUserProfile from '@/views/Admin/UserProfile/Home_UserProfile'
import FromUserProfile from '@/views/Admin/UserProfile/From_UserProfile'
import Icons from '@/views/Icons'
import NotFound from '@/components/NotFound'
import fromword from '@/views/form/formWork'
import detailListNone from '@/views/Detail_ListNone'
import HomeInformation from '@/views/ListOne/generalInformation/HomeInformation'
import DetailTask from '@/views/ListOne/Task/Detail_Task'
import HomeTask from '@/views/ListOne/Task/Home_Task'
import Homenotification from '@/views/ListOne/Notification/HomeNotification'
import DetailInformation from '@/views/ListOne/generalInformation/Detai_lInformation'
import ListCV from '@/views/ListOne/generalInformation/from_list_CV'
import Detailyourself from '@/views/ListOne/Yourself/Detail_yourself'
import Homeyourself from '@/views/ListOne/Yourself/Home_yourself'
import Capnhattt from '@/views/ListOne/Yourself/Cap_nhat_tt'
import Detailmember from '@/views/ListOne/member/Detail_member'
import Homemember from '@/views/ListOne/member/Home_member'
import DetailTwo from '@/views/Detail_Two'
import DetailTrangChu from '@/views/ListTwo/Trang_chu/Detail_trang_chu'
import HomelistTwo from '@/views/ListTwo/Trang_chu/Home'
import HomeCongViec from '@/views/ListTwo/Cong_viec/Home_cong_viec'
import HomeThongBao from '@/views/ListTwo/Thong_bao/Home_thong_bao'
import HomeTTBT from '@/views/ListTwo/Thong_tin_ban_than/Home_TT_BT'
import List from '@/views/ListTwo/Thong_tin_ban_than/List'
import twoCapnhat from '@/views/ListTwo/Thong_tin_ban_than/Cap_nhat'
import Setting from '@/views/Admin/Setting/DetialSetting'
import SettingCoHoi from '@/views/Admin/Setting/Setting_co_hoi'
import ListThi from '@/views/ListTwo/Bai_thi/List'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'login' } },
    { path: '/login', name: 'login', component: login },
    {
      path: '/admin/:idEmpl',
      name: 'detailAdmin',
      component: detailAdmin,
      children: [
        { path: 'ban-tin/', name: 'Bản tin', names: 'Bản tin', component: bantin },
        { path: 'them-cong-viec', name: 'fromword', component: fromword },
        {
          path: 'co-hoi/',
          name: 'Cơ hội',
          component: DetailOpportunity,
          children: [
            { path: '', name: 'Cơ hội', component: HomeOpportunity },
            { path: 'nhap-file', name: 'Nhập file', component: Nhapfile },
          ],
        },
        { path: 'nhan-vien/',
          name: 'Nhân viên',
          component: DetailEmployees,
          children: [
            { path: '', name: 'Nhân viên', component: HomeEmployees },
          ],
        },
        { path: 'quan-ly-khach-hang/',
          name: 'Quản lý khách hàng',
          component: DetailOmnichannel,
          children: [
            { path: '', name: 'Quản lý khách hàng', component: HomeOmnichannel },
          ],
        },
        { path: 'thong-bao/', name: 'Thông báo', component: thongbao },
        {
          path: 'thong-tin-tai-khoan/',
          name: 'Thông tin tài khoản',
          component: DetailUserProfile,
          children: [
            { path: '', name: 'Thông tin tài khoản', component: HomeUserProfile },
            { path: 'cap-nhat-ho-so', name: 'Cập nhật hồ sơ', component: FromUserProfile },
          ],
        },
        { path: 'icons', name: 'Icons', component: Icons },
        {
          path: 'setting',
          name: 'Setting',
          component: Setting,
          children: [
            { path: 'seting-co-hoi', name: 'Setting cơ hội', component: SettingCoHoi },
          ],
        },
      ],
    },
    // trang List one
    {
      path: '/truong-phong/:idEmpl',
      name: 'Trang chủ',
      component: detailListNone,
      children: [
        {
          path: 'trang-chu',
          name: 'Trang chủ',
          component: DetailInformation,
          children: [
            { path: '', name: 'Trang chủ', component: HomeInformation },
            { path: 'them-cong-viec', name: 'Thêm công việc', component: ListCV },
          ],
        },
        {
          path: 'cong-viec',
          name: 'DetailTask',
          component: DetailTask,
          children: [
            { path: '', name: 'Công việc', component: HomeTask },
          ],
        },
        {
          path: 'thong-tin-ban-than',
          name: 'Detailyourself',
          component: Detailyourself,
          children: [
            { path: '', name: 'Thông tin bản thân', component: Homeyourself },
            { path: 'cap-nhat-thong-tin/:id', name: 'Cập nhật thông tin', component: Capnhattt },
          ],
        },
        {
          path: 'thanh-vien',
          name: 'Detailyourself',
          component: Detailmember,
          children: [
            { path: '', name: 'Thành viên', component: Homemember },
          ],
        },
        { path: 'thong-bao', name: 'Thông báo', component: Homenotification },
      ],
    },
    {
      path: '/nhan-vien/:idEmpl',
      name: 'Trang chủ',
      component: DetailTwo,
      children: [
        {
          path: '',
          name: 'Trang chủ',
          component: DetailTrangChu,
          children: [
            { path: 'trang-chu', name: 'thanhvien', component: HomelistTwo },
            { path: 'cong-viec', name: 'List công việc', component: HomeCongViec },
            { path: 'thong-bao', name: 'Thông báo', component: HomeThongBao },
            {
              path: 'thong-tin-ban-than/',
              name: 'Thông tin bản thân',
              component: HomeTTBT,
              children: [
                { path: '', name: 'Thông báo', component: List },
                { path: 'cap-nhat-ho-so', name: 'Cập nhật', component: twoCapnhat },
              ],
            },
            { path: 'list', name: 'List danh sách', component: ListThi },
          ],
        },
      ],
    },
    {
      path: '*',
      component: NotFound
    }
  ],
})
