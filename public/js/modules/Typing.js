export default {
    name: 'Usertyping',
    props: ['typer'],

    template: `

    <div>
    <div>{{typer}}</div>
    <!-- other chat components -->
  </div>
    `,

    //value in the message box for typing event and stop typing event

    data() {
        return {
            typing: '',
            message: '',
            typing:  false,
            typer: '',

        }
    },

    watch: {
     new_message(value) {
        value ? socket.emit('typer', this.nickname) : socket.emit('stoptyping');
    },
  },
        methods: {
            handleUserTyping() {}
        },

      
    }