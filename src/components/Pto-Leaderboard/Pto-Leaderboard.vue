<template>
  <h5 class="text-uppercase">Leaderboard</h5>
  <h1 class="text-uppercase">Race to the top</h1>
  <div class="row">
    <div class="col-md-2 col-sm-12 col-xs-12">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="col-md-5 col-sm-12 col-xs-12">
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
  </div>
</template>

<script src="./Pto-Leaderboard.js"></script>