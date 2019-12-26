<template>
	<div>
		<v-btn @click="$refs.inputUpload.click()" color="green" dark>
			Import CSV
		</v-btn>
		<input
			v-show="false"
			ref="inputUpload"
			type="file"
			@change="onFileSelected"
		/>
		<v-data-table
      :headers="headers"
      :items="items"
      item-key="id"
      show-expand
      :search="search"
      no-data-text="Không có dữ liệu"
      class="elevation-1 mt-5"
    >
		</v-data-table>
	</div>
</template>

<script>
import XLSX from 'xlsx'
export default {
	name: "import-excel-button",
	data() {
		return {
			headers: [
				{ text: 'Họ và Tên', align: 'left', sortable: false, value: 'name_empl' },
				{ text: 'Số điện thoại', align: 'left', value: 'phone_num' },
				{ text: 'Địa chỉ', align: 'left', value: 'addresss' },
				{ text: 'Ngày tháng', align: 'left', value: 'date_of_birth' },
				{ text: 'Email', align: 'left', value: 'email' },
				{ text: 'Chức vụ', align: 'left', value: 'level' },
				{ text: 'Phòng ban', align: 'left', value: 'id_department' },
				{ text: 'Trạng thái', align: 'left', value: 'stt' },
				{ text: 'Actions', align: 'left', value: 'actions' },
			],
			items: {}
		}
    },
    methods: {
        onFileSelected: function(e) {
			let files = e.target.files,
				f = files[0];
			let reader = new FileReader();
			let that = this;
			reader.onload = function(e) {
				that.loader = true;
				let data = new Uint8Array(e.target.result);
				let arr = new Array();
				for (let i = 0; i != data.length; ++i)
					arr[i] = String.fromCharCode(data[i]);
				let bstr = arr.join("");

				/* Call XLSX */
				let workbook = XLSX.read(bstr, {
					type: "binary"
				});
				let first_sheet_name = workbook.SheetNames[0];
				let worksheet = workbook.Sheets[first_sheet_name];
				const excel_data = XLSX.utils.sheet_to_json(worksheet, {
					raw: true
				});
				that.$emit("uploaded", excel_data);
			};
			reader.readAsArrayBuffer(f);
		},
  }
}
</script>

<style>
</style>
