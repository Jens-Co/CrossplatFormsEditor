<template>
    <div id="app" class="container">
        <form>

            <label>Form Name: </label>
            <input type="text" v-model="formname">

            <label>Form Title: </label>
            <input type="text" v-model="formtitle">

            <label>Form Content: </label>
            <input type="text" v-model="formcontent">

            <div class="form-buttons">
                <div class="button-row" v-for="(button, index) in formButtons" :key="index">
                    <div class="button-group col-md-6">

                        <span class="float-right" style="cursor:pointer"
                            @click="deleteButton( index )">
                            &times;
                        </span>

                        <label>Button Text</label>
                        <input v-model="button.text" :name="`formButtons[${index}][text]`" type="text" class="form-control" placeholder="Button Text">
                    
                        <label>Button Image</label>
                        <input v-model="button.image" :name="`formButtons[${index}][image]`" type="text" class="form-control" placeholder="Button Image URL">

                        <label>Action-type:</label>
                            <select v-model="actiontype">
                                <option value="server">server</option>
                                <option value="command">command</option>
                                <option value="form">form</option>
                            </select>

                        <label>Button Action</label>
                        <input v-model="button.action" :name="`formButtons[${index}][action]`" type="text" class="form-control" placeholder="Button Action">

                    </div>
                </div>
            </div>

            <div class="button-group">
                <button @click="addButton" type="button" class="btn btn-secondary">Add button</button>
            </div>
            <hr>

        </form>
    </div>
</template>

<script>
export default {
    name: "App",
    data: () => ({
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
        }
    }
</script>

<style scoped>
    h1{
        font-weight: 300;
    }
</style>
