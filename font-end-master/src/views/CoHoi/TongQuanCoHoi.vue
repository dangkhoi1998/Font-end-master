<template>
  <div style="width: 100%; background: #fff; position: relative;" class="extFormXuLy">
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex xs6><v-flex class="mt-3 text ml-3" xs12><h3>Kế hoạch tàu đến cảng</h3> </v-flex></v-flex>
        <v-flex xs6 class="text-xs-right pl-3">
          <v-flex class="mt-3" xs12 style="display: flex; height: 21px;">
            <div class="ml-2">
              <v-icon size="16">file_copy</v-icon>
              <a href="javascript:;" @click="themTauDenCang()"> Thêm mới</a>
            </div> 
            <div class="ml-2" style="border-right: 1px solid #aecaf0;"></div>
            <div class="ml-3 ">
              <v-icon size="16">replay</v-icon>
              <a href="javascript:;" @click="lamMoi()"> Refresh</a>
            </div>
            <div class="ml-2" style="border-right: 1px solid #aecaf0;"></div>
            <div class="ml-3">
              <v-icon size="16">save</v-icon>
              <a href="javascript:;" @click="luuTauDenCang()">Lưu lại</a>
            </div>
            <div class="ml-2" style="border-right: 1px solid #aecaf0;"></div>
            <div class="ml-3">
              <v-icon size="16">reply</v-icon>
              <a href="javascript:;" @click="quayLai()">Quay lại</a>
            </div>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-form
      ref="formTauDenCang"
      v-model="validFormTauDenCang"
      lazy-validation
      class="mt-2"
   >
      <v-flex xs12 d-flex>
        <v-layout row wrap>
          <v-flex xs4 class="pr-1">

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Thời gian đến PS :</label></v-flex>
                <v-flex xs7>
                  <datetime-picker
                    v-model="detailTauDenCang['timeOfArrival']"
                    :first-day="1"
                    :show-dst="false"
                    :show-hours="true"
                    :show-minutes="true"
                    :show-seconds="false"
                    class="px-1 py-1 mx-0 my-0"
                  ></datetime-picker>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Đại lý đến:</label></v-flex>
                <v-flex  xs7 class="">
                  <v-text-field class="py-0 my-0" placeholder="Nhập đại lý đến"  v-model="detailTauDenCang['arrivalShipAgency']"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>SĐT đại lý:</label></v-flex>
                <v-flex xs7>
                  <v-text-field class="py-0 my-0"  placeholder="Nhập sđt"  v-model="detailTauDenCang['telNo']"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12 class="mb-3">
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Cảng rời cuối cùng:</label></v-flex>
                <v-flex xs7>
                  <v-select
                    clearable
                    :items="lastPortOfCallCodeItems"
                    item-text="text"
                    item-value="value"
                    v-model="detailTauDenCang['lastPortOfCallCode']"
                    class="py-0 my-0"
                    placeholder="Chọn hạng bằng TT"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Tên quốc gia:</label></v-flex>
                <v-flex  xs7 class="">
                  <v-text-field clearable class="py-0 my-0" placeholder="Nhập tên quốc gia" v-model="detailTauDenCang['portGoingToStateName']"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Bến cảng đến:</label></v-flex>
                <v-flex xs7>
                  <v-select
                    clearable
                    :items="arrivalPortCodeItems"
                    item-text="text"
                    item-value="value"
                    v-model="detailTauDenCang['arrivalPortCode']"
                    class="py-0 my-0"
                    placeholder="Chọn hạng bằng TT"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Cầu cảng đến:</label></v-flex>
                <v-flex  xs7 class="">
                  <v-select
                    clearable
                    :items="portWharfCodeItems"
                    item-text="text"
                    item-value="value"
                    v-model="detailTauDenCang['portWharfCode']"
                    class="py-0 my-0"
                    placeholder="Chọn hạng bằng TT"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Cập mạn vào tàu:</label></v-flex>
                <v-flex xs7>
                  <v-text-field clearable class="py-0 my-0" placeholder=""  v-model="detailTauDenCang['capMan']"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Mục đích:</label></v-flex>
                <v-flex  xs7 class="">
                  <v-text-field clearable class="py-0 my-0" placeholder="Nhập mục đích" v-model="detailTauDenCang.purposeCode"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Hàng hóa:</label></v-flex>
                <v-flex xs7>
                  <v-select
                  clearable
                  :items="cargoItems"
                  item-text="text"
                  item-value="value"
                  v-model="detailTauDenCang.cargoCode"
                  class="py-0 my-0"
                  placeholder="Chọn hàng hóa"
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Số hành khách :</label></v-flex>
                <v-flex xs7>
                  <v-text-field class="py-0 my-0"  placeholder="Nhập số hành khách" v-money="formatGT" v-model="detailTauDenCang.passengerNumber"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Số thuyền viên:</label></v-flex>
                <v-flex  xs7 class="">
                  <v-text-field class="py-0 my-0"  placeholder="Nhập số thuyền viên" v-money="formatGT" v-model="detailTauDenCang.crewNumber"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Số người khác:</label></v-flex>
                <v-flex xs7>
                  <v-text-field class="py-0 my-0"  placeholder="Nhập số thuyền viên" v-money="formatGT" v-model="detailTauDenCang.crewNumberOther"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Thuyền trưởng:</label></v-flex>
                <v-flex xs7>
                  <v-text-field class="py-0 my-0"  placeholder="Nhập thuyền trưởng"  v-model="detailTauDenCang.shipCaptain"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>

          </v-flex>

          <v-flex xs4 class="pr-2">

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Thời gian cập bến :</label></v-flex>
              <v-flex xs7>
                <datetime-picker
                v-model="detailTauDenCang['timeOfPORTArrival']"
                :first-day="1"
                :show-dst="false"
                :show-hours="true"
                :show-minutes="true"
                :show-seconds="false"
                class="px-1 py-1 mx-0 my-0"
                ></datetime-picker>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Thời gian thủ tục đến :</label></v-flex>
              <v-flex xs7>
                <datetime-picker
                v-model="detailTauDenCang['timeOfApproval']"
                :first-day="1"
                :show-dst="false"
                :show-hours="true"
                :show-minutes="true"
                :show-seconds="false"
                class="px-1 py-1 mx-0 my-0"
                ></datetime-picker>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Mớn nước mũi (m):</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field class="py-0 my-0" placeholder="Nhập mớn nước mũi" v-money="formatClearanceHeight" v-model="detailTauDenCang['shownDraftxF']"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Mớn nước lái (m):</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field class="py-0 my-0" placeholder="Nhập mớn nước lái" v-money="formatClearanceHeight" v-model="detailTauDenCang['shownDraftxA']"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Tuyến luồng:</label></v-flex>
              <v-flex  xs7 class="">
                <v-select
                clearable
                placeholder="Chọn tuyến luồng"
                :items="chanelCodeListItems"
                item-text="shipTypeName"
                item-value="shipTypeCode"
                v-model="detailTauDenCang.chanelCodeList"
                class="py-0 my-0"
                ></v-select>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Số giờ neo không tính phí:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field clearable class="py-0 my-0" placeholder="Nhập số giờ neo" v-model="detailTauDenCang['anchoringDuration']"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"></v-flex>
              <v-flex  xs7 class="mb-3">
                <v-checkbox clearable v-model="detailTauDenCang['kdua']" hide-details style="height:15px;" label="Không đưa vào danh sách neo đậu" class=""></v-checkbox>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Số LĐĐ:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field clearable class="py-0 my-0" placeholder="Nhập số LĐĐ" v-model="detailTauDenCang.tugBoatName"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Ghi chú tàu đến:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field clearable class="py-0 my-0" multi-line rows="2" v-model="detailTauDenCang['remarks']"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Loại thủ tục đến:</label></v-flex>
              <v-flex  xs7 class="">
                <v-select
                  clearable
                  placeholder="Chọn loại thủ tục"
                  :items="shipTypeItems"
                  item-text="shipTypeName"
                  item-value="shipTypeCode"
                  v-model="detailTauDenCang.shipTypeCode"
                  class="py-0 my-0"
                ></v-select>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"></v-flex>
              <v-flex  xs7 class="">
                <v-checkbox clearable v-model="detailTauDenCang.hasTugBoat" hide-details style="height:15px;" label="Tàu chưa vào cảng" class=""></v-checkbox>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs4 class="px-2">
            <v-layout row wrap>
              <v-flex xs4 class="pt-1 text-xs-right pr-1"><label>Tàu:</label> <label style="color: red;">*</label></v-flex>
              <v-flex  xs8 class="">
                <v-text-field clearable  placeholder="Nhập tên tàu" :rules="[v => !!v || 'Trường dữ liệu bắt buộc phải nhập']" v-model="detailTauLaiHoTro.nameOfShip"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Quốc tịch:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field clearable  placeholder="Nhập quốc tịch"  v-model="detailTauDenCang.flagStateOfShip"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Hô hiệu:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field clearable  placeholder="Nhập hô hiệu"  v-model="detailTauDenCang.callSign"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Số IMO:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field clearable  placeholder="Nhập số IMO"  v-model="detailTauDenCang.iMONumber"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Loại tàu:</label></v-flex>
              <v-flex  xs7 class="">
                <v-select
                clearable
                :items="shipTypeCodeItems"
                item-text="shipTypeCode"
                item-value="shipTypeName"
                v-model="detailTauDenCang.shipTypeCode"
                class="py-0 my-0"
                placeholder="Chọn loại tàu"
                ></v-select>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Cấp độ an ninh:</label></v-flex>
              <v-flex  xs7 class="">
                <v-select
                clearable
                :items="securityLevelItems"
                item-text="text"
                item-value="value"
                v-model="detailTauDenCang.securityLevelCode"
                class="py-0 my-0"
                placeholder="Chọn cấp độ an ninh"
                ></v-select>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Chủ tàu:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field clearable  placeholder="Nhập tên chủ tàu"  v-model="detailTauDenCang.shipOwnersName"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Người khai thác:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field clearable  placeholder="Nhập người khai thác"  v-model="detailTauDenCang.shipOperatorName"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>NT:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field  placeholder="Nhập NT" v-money="formatGT" v-model="detailTauDenCang.nt"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>GT:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field  placeholder="Nhập GT" v-money="formatGT" v-model="detailTauDenCang.gt"
                ></v-text-field>
              </v-flex>
            </v-layout>


            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>DWT:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field  placeholder="Nhập DWT" v-money="formatGT" v-model="detailTauDenCang.dwt"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Breadth (m):</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field  placeholder="Nhập breadth" v-money="formatClearanceHeight" v-model="detailTauDenCang.breadth"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>LOA (m):</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field  placeholder="Nhập tên máy trưởng" v-money="formatClearanceHeight" v-model="detailTauDenCang.loa"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Mớn nước t.kế (m):</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field  placeholder="Nhập mớn nước thiết kế" v-money="formatClearanceHeight" v-model="detailTauDenCang.maxDraft"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Chiều cao t.không (m):</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field  placeholder="Nhập tên máy trưởng" v-money="formatClearanceHeight" v-model="detailTauDenCang.clearanceHeight"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Công suất máy:</label></v-flex>
              <v-flex  xs7 class="">
                <v-text-field  placeholder="Nhập tên máy trưởng" v-money="formatGT" v-model="detailTauDenCang.power"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row wrap>
              <v-flex xs5 class="pt-1 text-xs-right pr-1"><label>Đơn vị:</label></v-flex>
              <v-flex  xs7 class="">
                <v-select
                  clearable
                  :items="hangBangMtItems"
                  item-text="text"
                  item-value="value"
                  v-model="detailTauDenCang.hangBangMT"
                  class="py-0 my-0"
                  placeholder="Chọn hạng bằng MT"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-form>
  </div>
   
</template>

<script>
// import axios from 'axios'
import DatetimePicker from './DatetimePicker.vue'
export default {
  name: 'my-form',
  components: {
    'datetime-picker': DatetimePicker
  },
  props: {
    type: '',
    documentTypeCode: '',
    documentStatusCode: '',
    id: '',
    code: '',
    statusCode: ''
  },
  directives: {money: VMoney},
  data: () => ({
    formatClearanceHeight: {
      decimal: '.',
      thousands: ',',
      prefix: '',
      suffix: ' m',
      precision: 2,
      masked: false
    },
    formatGT: {
      decimal: '.',
      thousands: ',',
      prefix: '',
      suffix: '',
      precision: 0,
      masked: false
    },
    lastPortOfCallCodeItems: [],
    arrivalPortCodeItems: [],
    portWharfCodeItems: [],
    cargoItems: [],
    chanelCodeListItems: [],
    shipTypeCodeItems: [],
    securityLevelItems: [],
    homeValue: 350000,
    detailTauDenCang: {
      expiredDate: ''
    },
    money: {
      decimal: ',',
      thousands: '.',
      prefix: 'R$ ',
      suffix: ' #',
      precision: 2,
      masked: false
    },
    addNotification: {},
    enabled: false,
    thoiGianDiDSDT: '',
    hangBangTtItems: [
      {
        text: 'Hạng 1',
        value: 1
      },
      {
        text: 'Hạng 2',
        value: 2
      },
      {
        text: 'Hạng 3',
        value: 3
      },
      {
        text: 'Hạng 4',
        value: 4
      }
    ],
    hangBangMtItems: [
      {
        text: 'Hạng 1',
        value: 1
      },
      {
        text: 'Hạng 2',
        value: 2
      },
      {
        text: 'Hạng 3',
        value: 3
      },
      {
        text: 'Hạng 4',
        value: 4
      }
    ],
    validFormTauDenCang: true,
    shipTypeItems: []
  }),
  watch: {
    // notification (notification) {
    //   this.detailTauDenCang = notification
    // }
  },
  computed: {
    // principal: function () {
    //   return this.homeValue - this.downpayment
    // }
  },
  created () {
    var vm = this
    vm.loadShipType()
    if (vm.id) {
      vm.loadTauDenCang()
    } else {
      vm.detailTauDenCang = {}
    }
  },
  methods: {
    loadShipType: function () {
      var vm = this
      vm.$store.dispatch('loadShipType').then(function (result) {
        vm.shipTypeItems = result
      }).catch(function (xhr) {
        console.log(xhr)
      })
    },
    loadTauDenCang: function () {
      var vm = this
      let data = {
        'id': vm.id
      }
      vm.$store.dispatch('loadDetailTauDenCang', data).then(function (result) {
      }).catch(function (xhr) {
        console.log(xhr)
      })
    },
    themTauDenCang: function () {
      var vm = this
      vm.detailTauDenCang['id'] = ''
      if (vm.$refs.formTauDenCang.validate()) {
        vm.$store.dispatch('addTauDenCang', vm.detailTauDenCang).then(function (result) {
          vm.detailTauDenCang = result
        }).catch(function (xhr) {
          console.log(xhr)
        })
      }
    },
    deletePhuongTienThuyNoiDia: function () {
      var vm = this
      let data = {
        id: vm.id
      }
      vm.$store.dispatch('deletePhuongTienThuyNoiDia', data).then(function (result) {
      }).catch(function (xhr) {
        console.log(xhr)
      })
    },
    lamMoi: function () {
      var vm = this
      vm.detailTauDenCang = {}
    },
    luuTauDenCang: function () {
      var vm = this
      if (vm.$refs.formTauDenCang.validate()) {
        vm.$store.dispatch('editPhuongTienThuyNoiDia', vm.detailTauDenCang).then(function (result) {
          vm.detailTauDenCang = result
        }).catch(function (xhr) {
          console.log(xhr)
        })
      }
    },
    quayLai: function () {
      var vm = this
      vm.$router.push({
        path: '/quan-ly-tau-bien/' + vm.type + '/' + vm.documentTypeCode + '/' + vm.documentStatusCode + '/' + vm.code
      })
    }
  }

}
</script>
