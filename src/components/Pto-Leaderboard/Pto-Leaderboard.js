import axios from 'axios';

export default {
  data() {
    return {
      gender: 'men',
      leaderboard: {
        men: [],
        women: []
      }
    };
  },
  mounted() {
    this.fetchLeaderboard();
  },
  methods: {
    async fetchLeaderboard() {
      try {
        const menStatsResponse = await axios.get('https://rankings.test.protriathletes.org/api/t100/season/2024/standings/MPRO');
        const womenStatsResponse = await axios.get('https://rankings.test.protriathletes.org/api/t100/season/2024/standings/FPRO');
        this.leaderboard.men = menStatsResponse?.data.men;
        this.leaderboard.women = womenStatsResponse?.data.women;
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    }
  }
};