<template>
    <transition
    appear
    enter-class=""
    enter-active-class="animated fadeInRightBig">
      <material-card color="orange" title="Tiến trình công việc của nhân viên" text>
          <v-simple-table>
              <template v-slot:default>
              <thead>
                  <tr>
                      <th class="text-left mt-3 pt-3" style="width:160px">Họ và tên</th>
                      <th class="text-left mt-3 pt-3" style="width:100px">Đã chốt</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="item in desserts" :key="item.name_empl">
                      <td class="mt-3 pt-3">{{ item.name_empl}}</td>
                      <td class="mt-3 pt-3">{{ item.dachot}}/{{item.kpi}}</td>
                      <td class="mt-5 pt-5">
                          <v-progress-linear
                              :value="item.dachot"
                              :max="item.kpi"
                              height="5"
                              stripede
                              color="#6fddf3c7"
                          ></v-progress-linear>
                      </td>
                  </tr>
              </tbody>
              </template>
          </v-simple-table>
      </material-card>
    </transition>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name_empl: 'Trang autoshopee',
            dachot: 50,
            kpi:100
          },
          {
            name_empl: 'Trinh autoshopee',
            dachot: 60,
            kpi:100
          },
          {
            name_empl: 'Linh autoshopee',
            dachot: 20,
            kpi:100
          },
          {
            name_empl: 'Nguyễn Tiến Nghĩa',
            dachot: 40,
            kpi:100
          },
          {
            name_empl: 'Nguyễn Đăng Khởi',
            dachot: 22,
            kpi:100
          },
          {
            name_empl: 'Tùng Cao',
            dachot: 27,
            kpi:100
          },
          {
            name_empl: 'Cường DEV',
            dachot: 38,
            kpi:100
          },
        ],
      }
    },
  }
</script>
