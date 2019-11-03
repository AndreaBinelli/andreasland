export default {
  methods: {
    formatDate(date) {
      const options = { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }

      return new Date(date).toLocaleDateString('it-IT', options)
    },

    formatMonth(date){
      if(date == 'present'){
        //todo: translations
        return 'presente';
      }

      const options = { month: 'long', year: 'numeric', timeZone: 'UTC' }
      return new Date(date).toLocaleDateString('it-IT', options);
    }
  }
}
