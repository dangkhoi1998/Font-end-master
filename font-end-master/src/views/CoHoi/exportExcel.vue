<template>
	<div>
		<v-btn @click="$refs.inputUpload.click()" color="green" dark>
			Import CSV
		</v-btn>
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
      exportCSV: function (){
        const rows = this.items.map(e => {
            return [e.index, e.cus_Name, e.phone_Num, e.pro_Name, e.email]
        })
        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.json_to_sheet(this.items)
        XLSX.utils.book_append_sheet(wb, ws, 'test')
        XLSX.writeFile(wb, 'test.csv')
      }
    }
};
</script>

<style>
</style>
