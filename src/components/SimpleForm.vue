<template>
    <div id="app" class="container">
        <form>
			<div class="form">
				<div class="formcontent">
					<h1>Simple Form</h1>
					<div>
						<label for="formname"></label>
						<input id="formname" type="text" v-model="formname" placeholder="Form Name">
					</div>
					<div>
						<label for="formtitle"></label>
						<input id="formtitle" type="text" v-model="formtitle" placeholder="Form Title">
					</div>
					<div>
						<label for="formcontent"></label>
						<input id="formcontent" type="text" v-model="formcontent" placeholder="Form Content">
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
								<option value="commands">commands</option>
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
				</div>
			</div>

        </form>

		<div class="button-group">
			<button @click="createConfig" type="button" class="btn btn-secondary">Generate Config</button>
		</div>

		<div class="config">
			<pre id="list" ></pre>
		</div>

	</div>
</template>

<script>
const YAML = require('yaml');
export default {
    name: "App",
    data: () => ({
			formname: [""],
			formtitle : [""],
			formcontent: [""],

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
			// Full buttons obj array
			var buttonData = []

			// Button loop for array of obj
			for(var i = 0; i < this.formButtons.length; i++) {

				// All button obj
				var buttonObj = this.formButtons[i]
				var getButtonText = buttonObj["text"]
				var getButtonImg =  buttonObj["image"]
				var getButtonAction = buttonObj["action"]
				var getButtonType = buttonObj["actiontype"]

				var action

				if (getButtonType.indexOf('command') > -1) {
					action = {
						[getButtonType]: [getButtonAction]
					}
				} else {
					action = {
						[getButtonType] : getButtonAction
					}
					
				}
				
				// Json array of button obj
				var buttonArray =  {
					text: getButtonText,
					image: getButtonImg,
					actions: action
				}
				// Push each Json array into a full buttons obj array
				buttonData.push(buttonArray)
			}

			var formArray 
			// Create full Json obj
			formArray = {[this.formname] : 
				[{ 
					"type": "simple_form", 
					"title": this.formtitle, 
					"content": this.formcontent, 
					"buttons": buttonData,
				}]
			}

			// Convert Json form to
			var converting = formArray
			const doc = new YAML.Document()
			doc.contents = converting
			var str = doc.toString().replace(/- -/g,"-")
			document.getElementById("list").innerHTML = str;
			console.log(str)
			
		}
	}
}
</script>

<style scoped>
    h1{
        font-weight: 300;
    }
</style>
