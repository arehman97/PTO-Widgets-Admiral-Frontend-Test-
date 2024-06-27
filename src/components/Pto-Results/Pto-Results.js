import axios from 'axios';

export default {
  data() {
    return {
      gender: 'men',
      loading: false,
      seasonsMen: [],
      seasonsWomen: [],
      selectedMenSeason: '',
      selectedWomenSeason: '',
      races: {
        men: [],
        women: []
      },
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
    async handleMenSeasonChange(event) {
      const selectedValue = event.target.value;
      this.selectedMenSeason = selectedValue;
      this.loading = true;
      try {
        const menStatsResponse = await axios.get('https://stats.protriathletes.org/api/t100/points/MPRO?id=' + selectedValue);
        this.races.men = menStatsResponse?.data?.races;
        this.results.men = menStatsResponse?.data?.athletes;
      } catch (error) {
        console.error('Error fetching results:', error);
      } finally {
        this.loading = false;
      }
    },
    async handleWomenSeasonChange(event) {
      const selectedValue = event.target.value;
      this.selectedWomenSeason = selectedValue;
      this.loading = true;
      try {
        const womenStatsResponse = await axios.get('https://stats.protriathletes.org/api/t100/points/FPRO?id=' + selectedValue);
        this.races.women = womenStatsResponse?.data?.races;
        this.results.women = womenStatsResponse?.data?.athletes;
      } catch (error) {
        console.error('Error fetching results:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchResults() {
      this.loading = true;
      try {
        const menStatsResponse = await axios.get('https://stats.protriathletes.org/api/t100/points/men');
        const womenStatsResponse = await axios.get('https://stats.protriathletes.org/api/t100/points/women');
        //Men
        this.seasonsMen = menStatsResponse?.data?.t100_seasons
        this.races.men = menStatsResponse?.data?.races;
        this.results.men = menStatsResponse?.data?.athletes;
        this.selectedMenSeason = menStatsResponse?.data?.t100_season?.id;

        //Women
        this.seasonsWomen = womenStatsResponse?.data?.t100_seasons;
        this.races.women = womenStatsResponse?.data?.races;
        this.results.women = womenStatsResponse?.data?.athletes;
        this.selectedWomenSeason = womenStatsResponse?.data?.t100_season?.id;
      } catch (error) {
        console.error('Error fetching results:', error);
      } finally {
        this.loading = false;
      }
    },
    getMedalImage(overallRank) {
      switch (overallRank) {
        case 1:
          return '/backgroundImages/gold.png';
        case 2:
          return '/backgroundImages/silver.png';
        case 3:
          return '/backgroundImages/bronze.png';
        default:
          return '';
      }
    }
  }
};