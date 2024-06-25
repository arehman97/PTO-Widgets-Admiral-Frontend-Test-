<template>
  <p class="text-uppercase font-transducer pt-3 m-0">Leaderboard</p>
  <span class="text-uppercase font-transducer font-heading">Race to the top</span>
  <div class="row mt-2">
    <div class="col-md-2 col-sm-12 col-xs-12">
      <p class="font-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="col-md-5 col-sm-12 col-xs-12 mb-4">
      <p class="text-uppercase font-transducer">Men</p>
      <div class="card">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: gender === 'men' }" @click="gender = 'men'">Men</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: gender === 'women' }" @click="gender = 'women'">Women</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item" v-for="player in leaderboard[gender]" :key="player.id">
              {{ player.name }} - {{ player.points }} pts
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-5 col-sm-12 col-xs-12">
      <p class="text-uppercase font-transducer">Women</p>
      <div class="position-relative">
        <div class='small-slanted'>
          <p class="font-transducer"><i>#</i>1</p>
        </div>
        <div class='large-slanted d-flex'>
          <p class="font-transducer mb-0 name"><span>Lucy</span><br />Charles-Barclay</p>
          <div class="font-transducer points"><p class="mb-0">50 <br/><span>PTS</span></p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Pto-Leaderboard.js"></script>