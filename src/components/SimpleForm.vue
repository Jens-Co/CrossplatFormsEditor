<template>
    <div id="app" class="container">
        <form>
			<div class="form">
				<div class="formcontent">
					<h1>Simple Form</h1>
					<div>
						<label for="formname"></label>
						<input id="formname" type="text" v-model="form.formName" placeholder="Form Name">
					</div>
					<div>
						<label for="formtitle"></label>
						<input id="formtitle" type="text" v-model="form.formtitle" placeholder="Form Title">
					</div>
					<div>
						<label for="formcontent"></label>
						<input id="formcontent" type="text" v-model="form.formcontent" placeholder="Form Content">
					</div>
				</div>
			
				<div class="form-buttons">
					<div class="button-row" v-for="(button, index) in formButtons" :key="index">
						<div class="button-group col-md-6">

							<span class="float-right" style="cursor:pointer"
								@click="deleteButton( index )">
								&times;
							</span>
							<label for="buttonstext"></label><br>
							<input id="buttontext" v-model="button.text" :name="`formButtons[${index}][text]`" type="text" class="form-control" placeholder="Button Text">
							
							<label for="buttonurl"></label><br>
							<input id="buttonurl" v-model="button.image" :name="`formButtons[${index}][image]`" type="text" class="form-control" placeholder="Button Image URL">
							
							<label for="butonactiontype"></label><br>
							<select id="buttonactiontype" v-model="button.actiontype">
								<option value="" disabled selected hidden>Select actiontype</option>
								<option value="server">server</option>
								<option value="command">command</option>
								<option value="form">form</option>
							</select>
							<label for="buttonaction"></label><br>
							<input id="buttonaction" v-model="button.action" :name="`formButtons[${index}][action]`" type="text" class="form-control" placeholder="Button Action">
						</div>
					</div>
				</div>
			
			<div class="sitebuttons">
					<div class="button-group">
						<button @click="addButton" type="button" class="btn btn-secondary">Add button</button>
					</div>
					<div class="button-group">
						<button @click="createConfig" type="button" class="btn btn-secondary">Generate Config</button>
					</div>
				</div>
			</div>

        </form>

	</div>
</template>

<script>
const YAML = require('yaml');
export default {
    name: "App",
    data: () => ({
			form: [{
				formname: "",
				formtitle: "",
				formcontent: ""
			}],
            formButtons: [{
                text: "",
                image: "",
                actiontype: "",
                action: ""
            }]
    }),
    methods: {
        addButton () {
            this.formButtons.push({
                text: "",
                image: "",
                actiontype: "",
                action: ""
                })
            },
        deleteButton (index) {
            this.formButtons.splice(index,1)
        },
		createConfig () {

			var employees = [this.form, this.formButtons]
			const doc = new YAML.Document()
			doc.contents = employees
			console.log(doc.toString())
		}
    }
}
</script>

<style scoped>
    h1{
        font-weight: 300;
    }
</style>
