<template>
  <div>
    <app-simple-data
    :textBtn="text"
    :getApi="getDepartmentApi"
    :headers="headers">
      <template v-slot:formDepartment="{ item }" >
        <v-form >
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="item.department_name" label="Tên phòng ban" outlined required></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="item.id_department" label="Mã phòng ban" outlined required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-form>
      </template>
    </app-simple-data>
  </div>
</template>
<script>
import simpleData from '../../../components/Shared/TrangChu/simpleData'
import {getDepartmentApi} from '../../../api/getApi'
export default {
  data: () => ({
    text: 'Phòng ban',
    getDepartmentApi,
    headers: [
      { text: 'STT', value: 'stt', align: 'left'},
      { text: 'Mã phòng ban', value: 'id_department', align: 'left'},
      { text: 'Phòng ban', value: 'department_name', align: 'left'},
      { text: 'Actions', value: 'actions', align: 'left'},
    ],
  }),
  components: {
    appSimpleData: simpleData
  },
  created () {
  },
}
</script>
