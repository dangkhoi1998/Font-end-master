<template>
  <section class="mt-lg-5">
      <v-row>
        <v-col xl="4" v-for="item in desserts" md="12" class="mb-r">
          <material-stats-card
          color="green"
          icon="mdi-store"
          title="Doanh số theo tuần"
          :value="item.totalSale"
          sub-icon="mdi-calendar"
          :sub-text="`Tổng kết của theo:` + item.day + `/` + item.month + `/` + item.year"
        />
        </v-col>
        <v-col xl="4" v-for="item in dessertsTuan" md="12" class="mb-r">
            <material-stats-card
              color="orange"
              icon="mdi-content-copy"
              title="Doanh số theo tháng"
              :value="item.totalSale"
              small-value="GB"
              sub-icon="mdi-alert"
              sub-icon-color="error"
              :sub-text="`Tổng kết của tháng:` + item.month + `/` + item.year"
              sub-text-color="text-primary"
            />
        </v-col>
        <v-col xl="4" v-for="item in dessertsThang" md="12" class="mb-r">
            <material-stats-card
              color="red"
              icon="mdi-information-outline"
              title="Doanh số theo năm"
              :value="item.totalSale"
              sub-icon="mdi-tag"
              :sub-text="`Tổng kết theo năm:` + item.year"
            />
        </v-col>
      </v-row>
    </section>
</template>

<script>
  export default {
    data () {
      return {
        desserts:{},
        dessertsTuan:{},
        dessertsThang:{},
      } 
    },
    props: {
      getApi: {
        require: true,
        type: Function,
        default: null
      },
      getApiTuan: {
        require: true,
        type: Function,
        default: null
      },
      getApiThang: {
        require: true,
        type: Function,
        default: null
      },
    },
    created () {
      this.getApi(this.$route.params.idEmpl)
      .then(response => {
        this.desserts = response.data
      })
      this.getApiTuan(this.$route.params.idEmpl)
      .then(response => {
        console.log('ddddddđ',response)
        this.dessertsTuan = response.data
      })
      this.getApiThang(this.$route.params.idEmpl)
      .then(response => {
        this.dessertsThang = response.data
      })
    },
  }
</script>
<style scoped>
.cascading-admin-card {
  margin: 20px 0;
}
.cascading-admin-card .admin-up {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: -20px;
}
.cascading-admin-card .admin-up .fas,
.cascading-admin-card .admin-up .far {
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
  padding: 1.7rem;
  font-size: 2rem;
  color: #fff;
  text-align: left;
  margin-right: 1rem;
  border-radius: 3px;
}
.cascading-admin-card .admin-up .data {
  float: right;
  margin-top: 2rem;
  text-align: right;
}
.admin-up .data p {
  color: #999999;
  font-size: 12px;
}
.classic-admin-card .card-body {
  color: #fff;
  margin-bottom: 0;
  padding: 0.9rem;
}
.classic-admin-card .card-body p {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 0;
}
.classic-admin-card .card-body h4 {
  margin-top: 10px;
}
</style>