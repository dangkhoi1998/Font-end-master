<template>
  <div>
    <app-notification class="animated jackInTheBox" :listApi="getworkApi"></app-notification>
  </div>
</template>

<script>
import { getworkApi } from '../../../api/ListOne/getApi'
import Notification from '../../../components/Shared/Notification'
export default {
  data: () => ({
    getworkApi
  }),
  components: {
    appNotification: Notification
  },
  created () {
  },
  methods: {
  }
}
</script>
