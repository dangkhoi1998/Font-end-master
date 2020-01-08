<template>
  <div>
    <v-timeline :items="items">
      <v-timeline-item icon="mdi-account" fillDot>
        <transition
          appear
          enter-class=""
          enter-active-class="animated fadeInRightBig delay-1s">
          <v-card class="elevation-2 ">
              <v-card-title  class="headline">Họ và tên: {{items.nameEmpl}}</v-card-title>
          </v-card>
        </transition>
      </v-timeline-item>
      <v-timeline-item class="text-right" icon="phone_in_talk" fillDot>
        <transition
          appear
          enter-class=""
          enter-active-class="animated fadeInLeftBig delay-2s faster">
        <v-card class="elevation-2">
          <v-card-title class="headline">Số điện thoại: {{items.phoneNum}}</v-card-title>
        </v-card>
        </transition>
      </v-timeline-item>
      <v-timeline-item icon="account_balance" fillDot>
        <transition
          appear
          enter-class=""
          enter-active-class="animated fadeInRightBig delay-2s">
          <v-card class="elevation-2">
            <v-card-title class="headline">Địa chỉ:  {{items.addresss}} </v-card-title>
          </v-card>
          </transition>
      </v-timeline-item>
      <v-timeline-item icon="event_available" fillDot>
        <transition
        appear
        enter-class=""
        enter-active-class="animated fadeInLeftBig delay-3s faster">
          <v-card class="elevation-2">
            <v-card-title class="headline">Ngày sinh:  {{items.dateOfBirth}} </v-card-title>
          </v-card>
        </transition>
      </v-timeline-item>
      <v-timeline-item icon="email" fillDot>
        <transition
        appear
        enter-class=""
        enter-active-class="animated fadeInRightBig delay-3s">
          <v-card class="elevation-2">
            <v-card-title class="headline" >Email:  {{items.email}} </v-card-title>
          </v-card>
        </transition>
      </v-timeline-item>
      <v-timeline-item fillDot icon="beach_access">
        <transition
        appear
        enter-class=""
        enter-active-class="animated fadeInLeftBig delay-4s faster">
          <v-card class="elevation-2">
            <v-card-title class="headline">Chức vụ:  {{items.levell}} </v-card-title>
          </v-card>
        </transition>
      </v-timeline-item>
      <v-timeline-item fillDot icon="assignment_ind" v-if="items.idDepartment">
         <transition
          appear
          enter-class=""
          enter-active-class="animated fadeInRightBig delay-4s">
            <v-card class="elevation-2">
              <v-card-title class="headline">Phòng Ban:  {{items.idDepartment.idDepartment}} </v-card-title>
            </v-card>
         </transition>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
    }),
    props: {
      items: {
        require: true,
        type: Object,
        default: null
      }
    },
  }
</script>
<style lang="scss">
  .rotate-in-ver {
	-webkit-animation: rotate-in-ver 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both;
	        animation: rotate-in-ver 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both;
}
@-webkit-keyframes rotate-in-ver {
  0% {
    -webkit-transform: rotateY(-360deg);
            transform: rotateY(-360deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
    opacity: 1;
  }
}
@keyframes rotate-in-ver {
  0% {
    -webkit-transform: rotateY(-360deg);
            transform: rotateY(-360deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
    opacity: 1;
  }
}
</style>
