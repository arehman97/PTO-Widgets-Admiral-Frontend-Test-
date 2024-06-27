<template>
  <p class="text-uppercase font-transducer pt-3 m-0">Results</p>
  <span class="text-uppercase font-transducer font-heading">Race to the top</span>
  <div v-if="loading" class="text-center mt-4">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
  <div v-else class="mt-4 mb-2">
    <nav>
      <div class="nav nav-tabs font-transducer results-nav" id="nav-tab" role="tablist">
        <button class="nav-link active border-gray-line text-uppercase" id="nav-men-tab" data-bs-toggle="tab" data-bs-target="#nav-men" type="button" role="tab" aria-controls="nav-men" aria-selected="true">Men</button>
        <button class="nav-link text-uppercase" id="nav-women-tab" data-bs-toggle="tab" data-bs-target="#nav-women" type="button" role="tab" aria-controls="nav-women" aria-selected="false">Women</button>
      </div>
    </nav>
    <div class="tab-content mt-4" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-men" role="tabpanel" aria-labelledby="nav-men-tab">
        <div class="bg-gray">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="d-flex">
                <div class="d-flex price-div">
                  <div class="image-div"><img src="../../../public/backgroundImages/gold.png" alt="Prize Image" loading="lazy"/></div>
                  <span>1st place</span>
                </div>
                <div class="d-flex price-div">
                  <div class="image-div"><img src="../../../public/backgroundImages/silver.png" alt="Prize Image" loading="lazy"/></div>
                  <span>2nd place</span>
                </div>
                <div class="d-flex price-div">
                  <div class="image-div"><img src="../../../public/backgroundImages/bronze.png" alt="Prize Image" loading="lazy"/></div>
                  <span>3rd place</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 d-flex justify-content-end position-relative">
              <div class="select-season">
                <p class="font-transducer">Season</p>
                <select class="font-transducer form-select form-select-lg mb-3" aria-label=".form-select-lg example" @change="handleMenSeasonChange" v-model="selectedMenSeason">
                    <option v-for="season in seasonsMen" :key="season.id" :value="season.id">
                      {{ season.name }}
                    </option>
                </select>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <table>
              <thead class="bg-white">
                <tr>
                  <th>
                    <div class=""><img src="../../../public/backgroundImages/top100.png" alt="Top 100 Image" loading="lazy"/></div>
                  </th>
                  <th class="text-center" v-for="race in races['men']" :key="race.id">{{race?.name}}</th>
                  <th class="text-center">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="athlete in results['men']" :key="athlete.id">
                  <td>
                    <p class="font-transducer mb-0 font-responsive font-table-name"><span>{{ athlete.first }}</span><br />{{ athlete.last }}</p>
                  </td>
                  <td v-for="race in races['men']" :key="race.id">
                    <div class="d-flex justify-content-center" v-if="athlete.resultsByRace[race.id]">
                      <div class="d-flex" :class="{ 'color-box': athlete.resultsByRace[race.id].is_qualifying_score }">
                        <span class="font-transducer" :class="{ 'image-span': athlete.resultsByRace[race.id].overall_rank < 4 }">{{ athlete.resultsByRace[race.id].t100_points }}</span>
                        <div class="image-div" v-if="athlete.resultsByRace[race.id].overall_rank < 4">
                          <img :src="getMedalImage(athlete.resultsByRace[race.id].overall_rank)" alt="Medal Image" loading="lazy"/>
                        </div>
                      </div>
                    </div>
                    <div v-else class="text-center">-</div>
                  </td>
                  <td><p class="font-transducer text-center mb-0"><span class="score">{{ athlete.score }}</span></p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-women" role="tabpanel" aria-labelledby="nav-women-tab">
        <div class="bg-gray">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="d-flex">
                <div class="d-flex price-div">
                  <div class="image-div"><img src="../../../public/backgroundImages/gold.png" alt="Prize Image" loading="lazy"/></div>
                  <span>1st place</span>
                </div>
                <div class="d-flex price-div">
                  <div class="image-div"><img src="../../../public/backgroundImages/silver.png" alt="Prize Image" loading="lazy"/></div>
                  <span>2nd place</span>
                </div>
                <div class="d-flex price-div">
                  <div class="image-div"><img src="../../../public/backgroundImages/bronze.png" alt="Prize Image" loading="lazy"/></div>
                  <span>3rd place</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 d-flex justify-content-end position-relative">
              <div class="select-season">
                <p class="font-transducer">Season</p>
                <select class="font-transducer form-select form-select-lg mb-3" aria-label=".form-select-lg example" @change="handleWomenSeasonChange" v-model="selectedWomenSeason">
                    <option v-for="season in seasonsWomen" :key="season.id" :value="season.id">
                      {{ season.name }}
                    </option>
                </select>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <table>
              <thead class="bg-white">
                <tr>
                  <th>
                    <div class=""><img src="../../../public/backgroundImages/top100.png" alt="Top 100 Image" loading="lazy"/></div>
                  </th>
                  <th class="text-center" v-for="race in races['women']" :key="race.id">{{race?.name}}</th>
                  <th class="text-center">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="athlete in results['women']" :key="athlete.id">
                  <td>
                    <p class="font-transducer mb-0 font-responsive font-table-name"><span>{{ athlete.first }}</span><br />{{ athlete.last }}</p>
                  </td>
                  <td v-for="race in races['women']" :key="race.id">
                    <div class="d-flex justify-content-center" v-if="athlete.resultsByRace[race.id]">
                      <div class="d-flex" :class="{ 'color-box': athlete.resultsByRace[race.id].is_qualifying_score }">
                        <span class="font-transducer" :class="{ 'image-span': athlete.resultsByRace[race.id].overall_rank < 4 }">{{ athlete.resultsByRace[race.id].t100_points }}</span>
                        <div class="image-div" v-if="athlete.resultsByRace[race.id].overall_rank < 4">
                          <img :src="getMedalImage(athlete.resultsByRace[race.id].overall_rank)" alt="Medal Image" loading="lazy"/>
                        </div>
                      </div>
                    </div>
                    <div v-else class="text-center">-</div>
                  </td>
                  <td><p class="font-transducer text-center mb-0"><span class="score">{{ athlete.score }}</span></p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Pto-Results.js"></script>