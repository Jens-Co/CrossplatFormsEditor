<template>
    <div id="app" class="container">
        <form>
			<div class="forms">

				<div>
					<input id="formname" type="text" v-model="form.formName" placeholder="Form Name">
				</div>
				<div>
					<input id="formtitle" type="text" v-model="form.formtitle" placeholder="Form Title">
				</div>
				<div>
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
						<div>
							<input id="buttontext" v-model="button.text" :name="`formButtons[${index}][text]`" type="text" class="form-control" placeholder="Button Text">
						</div>
						<div>
							<input id="buttonurl" v-model="button.image" :name="`formButtons[${index}][image]`" type="text" class="form-control" placeholder="Button Image URL">
						</div>
						<div>
							<select id="buttonactiontype" v-model="button.actiontype">
								<option value="" disabled selected hidden>Select actiontype</option>
								<option value="server">server</option>
								<option value="command">command</option>
								<option value="form">form</option>
							</select>
						</div>	
						<div>
							<input id="buttonaction" v-model="button.action" :name="`formButtons[${index}][action]`" type="text" class="form-control" placeholder="Button Action">
						</div>
                    </div>
                </div>
            </div>

            <div class="button-group">
                <button @click="addButton" type="button" class="btn btn-secondary">Add button</button>
            </div>
			<div class="button-group">
                <button @click="createConfig" type="button" class="btn btn-secondary">Generate Config</button>
            </div>
            <hr>

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
