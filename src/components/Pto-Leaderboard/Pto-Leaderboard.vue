<template>
  <p class="text-uppercase font-transducer pt-3 m-0">Leaderboard</p>
  <span class="text-uppercase font-transducer font-heading">Race to the top</span>
  <div v-if="loading" class="text-center mt-4">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
  <div v-else class="row mt-4">
    <div class="col-md-2 col-sm-12 col-xs-12">
      <p class="font-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div class="col-md-5 col-sm-12 col-xs-12 mb-4">
      <p class="text-uppercase font-transducer">Men</p>
      <div class="position-relative mb-4" v-for="player in leaderboard['men']" :key="player.id">
        <div class='small-slanted'>
          <p class="font-transducer"><i>#</i>{{player?.rank}}</p>
        </div>
        <div class="background">
          <img src="../../../public/backgroundImages/bg-img.png" alt="Athlete Image" loading="lazy"/>
        </div>
        <div class="bg-image">
          <img :src="player.imageUrl" alt="Athlete Image" loading="lazy"/>
        </div>
        <div class='large-slanted d-flex'>
          <div class="name position-relative">            
            <div class="flagImage"><img src="../../../public/backgroundImages/denmarkFlag.png" alt="Flag Image" loading="lazy"/></div>
            <p class="font-transducer mb-0 font-responsive"><span>{{player?.first}}</span><br />{{player?.last}}</p>
          </div>
          <div class="font-transducer points"><p class="mb-0">{{player?.points}} <br /><span>PTS</span></p></div>
        </div>
      </div>
    </div>
    <div class="col-md-5 col-sm-12 col-xs-12">
      <p class="text-uppercase font-transducer">Women</p>
      <div class="position-relative mb-4" v-for="player in leaderboard['women']" :key="player.id">
        <div class='small-slanted'>
          <p class="font-transducer"><i>#</i>{{player?.rank}}</p>
        </div>
        <div class="background">
          <img src="../../../public/backgroundImages/bg-img.png" alt="Athlete Image" loading="lazy"/>
        </div>
        <div class="bg-image">
          <img :src="player.imageUrl" alt="Athlete Image" loading="lazy"/>
        </div>
        <div class='large-slanted d-flex'>
          <div class="name position-relative">            
            <div class="flagImage"><img src="../../../public/backgroundImages/denmarkFlag.png" alt="Flag Image" loading="lazy"/></div>
            <p class="font-transducer mb-0 font-responsive"><span>{{player?.first}}</span><br />{{player?.last}}</p>
          </div>
          <div class="font-transducer points"><p class="mb-0">{{player?.points}} <br /><span>PTS</span></p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Pto-Leaderboard.js"></script>