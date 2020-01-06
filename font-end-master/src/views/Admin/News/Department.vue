<template>
  <div>
    <app-simple-data
    :textBtn="text"
    :getApi="getPhongban"
    :postApi="PostPhongban"
    :delete-api="DeletePhongban"
    :update-api="UpdatePhongban"
    :headers="headers">
      <template v-slot:formDepartment="{ item }" >
        <v-form >
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-text-field v-model="item.departmentName" label="Tên phòng ban" outlined required></v-text-field>
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
import { getPhongban } from '../../../api/GetApi/getApiAdmin'
import { PostPhongban } from '../../../api/PostApi/PostAdmin'
import { UpdatePhongban } from '../../../api/updateApi/updateAdmin'
import { DeletePhongban } from '../../../api/deleteApi/deleteAdmin'
export default {
  data: () => ({
    text: 'Phòng ban',
    getPhongban,
    PostPhongban,
    UpdatePhongban,
    DeletePhongban,
    headers: [
      { text: 'Mã phòng ban', value: 'idDepartment', align: 'left'},
      { text: 'Phòng ban', value: 'departmentName', align: 'left'},
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
