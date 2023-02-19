export default {
    template: `
    <section>
        <h1>You're on the login page!</h1>

        <form id="my-form">
            <label for="username">Enter Username:</label>
            <input v-model="uname" type="text" name="username" required placeholder="username">

            <label for="password">Enter Password:</label>
            <input v-model="pword" type="password" name="password" required placeholder="password">

            <input @click="submitData" type="submit" value="Submit">
        </form>        
    </section>
    `,

    data: function() {
        return {
            uname: "",
            pword: ""
        }
    },

    methods: {
        submitData() {
            // hit an api with a Fetch call
            // refer to the mailForm example from last semester -> the node mailer setup

            debugger;
        }
    }
}