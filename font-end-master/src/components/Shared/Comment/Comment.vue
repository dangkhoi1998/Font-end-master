<template>
  <v-card-text>
    <b-card>
      <v-form 
      ref="form"
      v-model="form">
        <v-row>
          <v-col cols="12" class="my-0 py-0">
            <v-textarea
              v-model="comment.note"
              outlined
              class="my-0 py-0"
              name="input-7-4"
              label="Comment"
                :rules="[v => !!v || 'Thông tin bắt buộc ']"
              value=""
            ></v-textarea>
          </v-col>

          <v-col cols="12" sm="6" class="my-0 py-0">
            <datetime-picker :textdense="dense = 'dense' " :lableName ="lable = 'Ngày hẹn'" @date="comment.appointment_time=$event"></datetime-picker>
          </v-col>

          <v-col cols="12" sm="6" class="my-0 py-0">
            <v-combobox
              v-model="comment.contact_time"
              :items="contact_time"
              outlined dense
              label="Thời gian hẹn"
            ></v-combobox>
          </v-col>

          <v-col cols="12" sm="6" class="my-0 py-0">
            <v-row>
              <v-btn-toggle
                rounded
              >
                <v-col cols="12" sm="3" class="my-0 py-0">
                  <v-btn class="my-0 py-0" @click=" comment.icon = 'mdi-email' " outlined color="orange" height="41">
                    <v-icon class="v-icon1"  >mdi-email</v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="12" sm="3" class="my-0 py-0">
                  <v-btn class=" my-0 py-0" @click=" comment.icon = 'mdi-phone' " outlined color="orange" height="41">
                    <v-icon class="v-icon1" >mdi-phone</v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="12" sm="3" class="my-0 py-0">
                  <v-btn class=" my-0 py-0" @click=" comment.icon = 'mdi-bell' " outlined color="orange" height="41">
                    <v-icon class="v-icon1"  >mdi-bell</v-icon>
                  </v-btn>
                </v-col>

                <v-col cols="12" sm="3" class="my-0 py-0">
                  <v-btn class=" my-0 py-0" @click="comment.icon = 'mdi-account-multiple' " outlined color="orange" height="41">
                    <v-icon class="v-icon1" height="33" >mdi-account-multiple</v-icon>
                  </v-btn>
                </v-col>

              </v-btn-toggle> 
            </v-row>
          </v-col>

          <v-col cols="12" sm="6" class="my-0 py-0">
            <v-btn :disabled="!form" color="primary"  @click="SaveCommnet()">Lưu lại</v-btn>
            <v-btn :disabled="!form" color="cyan" class="ml-5" @click="EditCommnet()">Sửa</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </b-card>
  </v-card-text>
</template>

<script>
import { PostComment } from '../../../api/Comment/main'
export default {
  name: 'app-comment',
  data: () => ({
    form: false,
    comment: {},
  }),
  methods: {
    SaveCommnet () {
      PostComment(this.comment)
      .then(response => {
      })
      .catch(function (error) {
        console.log(error)
      })
      this.$emit('commentAdd', this.comment)
      this.comment = {}
    },
    EditCommnet () {
      console.log('1111', this.comment)
      this.$emit('Edit', this.comment)
    }
  },
  computed: {
    contact_time () {
      return this.$store.state.contact_time
    }
  },
  props: {
    editCommet: {
      type: Object,
      default: {}
    },
  },
  watch: {
    editCommet (val) {
      this.comment = {... val}
    }
  }
}
</script>
