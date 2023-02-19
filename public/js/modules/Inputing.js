export default {
    name: 'Userinputing',
    props: ['inputer'],

    template: `

    <div>
    <div>{{inputer}}</div>
    
  </div>
    `,

  

    data() {
        return {
            inputing: '',
            message: '',
            inputing:  false,
            inputer: '',

        }
    },

    watch: {
     new_message(value) {
        value ? socket.emit('inputer', this.nickname) : socket.emit('stoptyping');
    },
  },
        methods: {
            handleUserInputing() {}
        },

      
    }