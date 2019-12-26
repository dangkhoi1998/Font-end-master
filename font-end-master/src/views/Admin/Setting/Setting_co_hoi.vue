<template>
  <v-card>
    <v-row class="mx-3">

      <v-col cols="12" sm="4">
        <app-table
        :text="text1"
        :headers="headers1"
        :list-api="listApi">
          <template v-slot:formDepartment="{ item }" >
            <form class="mt-3">
              <v-container>
                <v-text-field v-model="item.status" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Trạng thái" outlined required></v-text-field>
                <v-text-field v-model="item.color" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Color" outlined required></v-text-field>
              </v-container>
            </form>
          </template>
      </app-table>
      </v-col>

      <v-col cols="12" sm="4">
        <app-table
        :text="text2"
        :headers="headers2"
        :list-api="listApi">
          <template v-slot:formDepartment="{ item }" >
            <form>
              <v-container>
                <v-text-field v-model="item.delivery" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Giao vận" outlined required></v-text-field>
                <v-text-field v-model="item.color" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Color" outlined required></v-text-field>
              </v-container>
            </form>
          </template>
        </app-table>
      </v-col>

      <v-col cols="12" sm="4">
        <app-table
        :text="text3"
        :headers="headers3"
        :list-api="listApi">
        <template v-slot:formDepartment="{ item }" >
            <form>
              <v-container>
                <v-text-field v-model="item.source" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Nguồn" outlined required></v-text-field>
                <v-text-field v-model="item.color" :rules="[v => !!v || 'Thông tin bắt buộc ' ]" label="Color" outlined required></v-text-field>
              </v-container>
            </form>
          </template>
        </app-table>
      </v-col>

    </v-row>
  </v-card>
</template>

<script>
import table from '../../../components/Shared/Setting/table'
import { getOpportunityApi } from '../../../api/GetApi/getApiAdmin'
export default {
  data: () => ({
    listApi: getOpportunityApi,
    text1: 'Trạng thái',
    text2: 'Giao vận',
    text3: 'Nguồn',
    headers1: [
      { text: 'Trạng thái', align: 'left', sortable: true, value: 'status', },
      { text: 'Color', align: 'left', sortable: false, value: 'color', },
      { text: 'Action', align: 'right', value: 'action' },
    ],
    headers2: [
      { text: 'Giao vận', align: 'left', sortable: true, value: 'delivery', },
      { text: 'Color', align: 'left', sortable: false, value: 'color', },
      { text: 'Action', align: 'right', sortable: false, value: 'action' },
    ],
    headers3: [
      { text: 'Nguồn', align: 'left', sortable: true, value: 'source', },
      { text: 'Color', align: 'left', sortable: false, value: 'color', },
      { text: 'Action', align: 'right', sortable: false, value: 'action' },
    ]
  }),
  components: {
    appTable: table
  }
}
</script>