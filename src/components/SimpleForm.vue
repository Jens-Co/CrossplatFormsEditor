<template>
    <div id="app" class="container">
        <form>
			<div class="forms" style="float:left;margin-right:10px;">

				<div>
					<label for="formname">Form Name </label>
					<input id="formname" type="text" v-model="form.formName">
				</div>

				<div>
					<label for="formtitle">Form Title </label>
					<input id="formtitle" type="text" v-model="form.formtitle">
				</div>

				<div>
					<label for="formcontent">Form Content </label>
					<input id="formcontent" type="text" v-model="form.formcontent">
				</div>

			</div>
            <div class="form-buttons" style="float:left;margin-right:10px;">
                <div class="button-row" v-for="(button, index) in formButtons" :key="index">
                    <div class="button-group col-md-6">

                        <span class="float-right" style="cursor:pointer"
                            @click="deleteButton( index )">
                            &times;
                        </span>

						<div>
							<label for="buttontext">Button Text</label>
							<input id="buttontext" v-model="button.text" :name="`formButtons[${index}][text]`" type="text" class="form-control" placeholder="Button Text">
						</div>

						<div>
							<label for="buttonurl">Image URL</label>
							<input id="buttonurl" v-model="button.image" :name="`formButtons[${index}][image]`" type="text" class="form-control" placeholder="Button Image URL">
						</div>

						<div>
							<label for="buttonactiontype">Action-type:</label>
								<select id="buttonactiontype" v-model="button.actiontype">
									<option value="server">server</option>
									<option value="command">command</option>
									<option value="form">form</option>
								</select>
						</div>	

						<div>
							<label for="buttonaction">Action</label>
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
