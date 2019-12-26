<template>
	<div>
		<v-btn class="ma-2" @click="$refs.inputUpload.click()" tile color="green" dark>
			<v-icon right dark class="mr-3">mdi-cloud-upload</v-icon>
			Import excel
		</v-btn>
		<!-- <v-btn class="ml-3" @click="$refs.inputUpload.click()" color="green" tile dark>
			Import excel
			<v-icon right dark>mdi-cloud-upload</v-icon>
		</v-btn> -->
		
		<input
			v-show="false"
			ref="inputUpload"
			type="file"
			@change="onFileSelected"
		/>
	</div>
</template>

<script>
import XLSX from 'xlsx'

export default {
	name: "import-excel-button",
	data() {
		return {};
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
};
</script>

<style>
</style>
