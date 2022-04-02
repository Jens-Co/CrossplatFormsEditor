<template>
    <div id="app" class="container">
        <form>
			<div class="form">
				<div class="formcontent">
					<h1>Modal Form</h1>
					<div>
						<label for="formname"></label>
						<input id="formname" type="text" v-model="formname" placeholder="Form Name">
					</div>
					<div>
						<label for="formtitle"></label>
						<input id="formtitle" type="text" v-model="formtitle" placeholder="Form Title">
					</div>
					<div>
						<label for="modalformcontent"></label>
						<textarea id="formcontent" v-model="formcontent" placeholder="Form Content" rows="4" cols="50"></textarea>
					</div>
					<div>
						<label for="button1Text"></label>
						<input id="button1Text" type="text" v-model="button1text" placeholder="Button 1 text">
					</div>
					<div>
						<label for="butonactiontype1"></label><br>
							<select id="buttonactiontype1" v-model="actiontype1">
								<option value="" disabled selected hidden>Select actiontype</option>
								<option value="noaction">no action</option>
								<option value="server">server</option>
								<option value="commands">commands</option>
								<option value="form">form</option>
						</select>
					</div>
					<div>
						<label for="button1Action"></label>
						<input id="button1Action" type="text" v-model="button1action" placeholder="Button 1 Action">
					</div>
					<div>
						<label for="button2Text"></label>
						<input id="button2Text" type="text" v-model="button2text" placeholder="Button 2 text">
					</div>
					<div>
						<label for="butonactiontype2"></label><br>
							<select id="buttonactiontype2" v-model="actiontype2">
								<option value="" disabled selected hidden>Select actiontype</option>
								<option value="noaction">no action</option>
								<option value="server">server</option>
								<option value="commands">commands</option>
								<option value="form">form</option>
						</select>
					</div>
					<div>
						<label for="button2Action"></label>
						<input id="button2Action" type="text" v-model="button2action" placeholder="Button 2 Action">
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
		//form
			formname: [""],
			formtitle : [""],
			formcontent: [""],
			//button1
			actiontype1: "",
			button1text: [""],
			button1action: [""],
			// button2
			actiontype2: "",
			button2text: [""],
			button2action: [""]
	}),
	methods: {
		createConfig () { 
			var actiontype1 = this.actiontype1
			var button1Action = this.button1action
			var actiontype2 = this.actiontype2
			var button2Action = this.button2action

			var action1
			var action2

			// button action 1
			if (actiontype1.indexOf('command') > -1) {
				action1 = {
					[actiontype1]: [button1Action]
				}
			} else {
				action1 = {
					[actiontype1] : button1Action
				}
			}

			// button action 2
			if (actiontype2.indexOf('command') > -1) {
				action2 = {
					[actiontype2]: [button2Action]
				}
			} else {
				action2 = {
					[actiontype2] : button2Action
				}
			}

			var formArray
			var button1 = [{
						text: this.button1text,
						actions: action1
					}]
			var button2 = [{
						text: this.button2text,
						actions: action2
					}]
		
			// Create full Json obj
			formArray = {[this.formname] : 
				[{ 
					"type": "modal_form", 
					"title": this.formtitle, 
					"content": this.formcontent, 
					button1,
					button2
				}]
			}

			if (actiontype1.indexOf('noaction') > -1) {
				for (var i = 0; i < button1.length; i++) {
					delete button1[i].actions
				}
			}
			if (actiontype2.indexOf('noaction') > -1) {
				for (var o = 0; o < button2.length; o++) {
					delete button2[o].actions
				}
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