import axios from 'axios';

export default {
  data() {
    return {
      gender: 'men',
      results: {
        men: [],
        women: []
      }
    };
  },
  mounted() {
    this.fetchResults();
  },
  methods: {
    async fetchResults() {
      try {
        const response = await axios.get('https://api.example.com/results');
        this.results.men = response.data.men;
        this.results.women = response.data.women;
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    }
  }
};