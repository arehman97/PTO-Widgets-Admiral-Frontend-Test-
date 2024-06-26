import axios from 'axios';

export default {
  data() {
    return {
      gender: 'men',
      loading: true,
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
      this.loading = true;
      try {
        const menStatsResponse = await axios.get('https://rankings.test.protriathletes.org/api/t100/season/2024/standings/MPRO');
        const womenStatsResponse = await axios.get('https://rankings.test.protriathletes.org/api/t100/season/2024/standings/FPRO');
        this.leaderboard.men = this.parseAthleteData(menStatsResponse?.data?.rankings?.filter(athletes => athletes?.rank <= 5));
        this.leaderboard.women = this.parseAthleteData(womenStatsResponse?.data?.rankings?.filter(athletes => athletes?.rank <= 5));
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        this.loading = false;
      }
    },
    parseAthleteData(athletes) {
      return athletes.map(athlete => ({
        first: athlete.first,
        last: athlete.last,
        rank: athlete.rank,
        points: athlete.points,
        imageUrl: this.getAthleteImage(athlete?.pic)
      }));
    },
    getAthleteImage(pic) {
      let parsedPicture = ''
      if (pic !== null) {
        parsedPicture = JSON.parse(pic)
      }
      return parsedPicture?.img?.src; 
    }
  }
};