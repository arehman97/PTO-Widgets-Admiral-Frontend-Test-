<template>
  <p class="text-uppercase font-transducer pt-3 m-0">Results</p>
  <span class="text-uppercase font-transducer font-heading">Race to the top</span>
  <div class="mt-4 mb-2">
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
                <select class="font-transducer form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <table>
              <thead class="bg-white">
                <th>
                  <div class=""><img src="../../../public/backgroundImages/top100.png" alt="Top 100 Image" loading="lazy"/></div>
                </th>
                <th class="text-center">Miami</th>
                <th class="text-center">Singapore</th>
                <th class="text-center">San Francisco</th>
                <th class="text-center">London</th>
                <th class="text-center">Ibiza</th>
                <th class="text-center">Las Vegas</th>
                <th class="text-center">Dubai</th>
                <th class="text-center">World Championship</th>
                <th class="text-center">Score</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="font-transducer mb-0 font-responsive font-table-name"><span>Alistair</span><br />Brownlee</p>
                  </td>
                  <td>
                    <div class="d-flex justify-content-center">
                      <div class="d-flex color-box">
                        <span class="font-transducer">35</span>
                        <div class="image-div"><img src="../../../public/backgroundImages/gold.png" alt="Prize Image" loading="lazy"/></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="font-transducer text-center mb-0">16</p>
                  </td>
                  <td>
                    <p class="font-transducer text-center mb-0">7</p>
                  </td>
                  <td>
                    <div class="d-flex justify-content-center">
                      <div class="d-flex color-box">
                        <span class="font-transducer">35</span>
                        <div class="image-div"><img src="../../../public/backgroundImages/silver.png" alt="Prize Image" loading="lazy"/></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="font-transducer text-center mb-0">1</p>
                  </td>
                  <td>
                    <p class="font-transducer text-center mb-0">6</p>
                  </td>
                  <td>
                    <p class="font-transducer text-center mb-0">16</p>
                  </td>
                  <td>
                    <p class="font-transducer text-center mb-0"><span class="color-box">21</span></p>
                  </td>
                  <td>
                    <p class="font-transducer text-center mb-0"><span class="score">91</span></p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="nav-women" role="tabpanel" aria-labelledby="nav-women-tab">...</div>
    </div>
  </div>
</template>

<script src="./Pto-Results.js"></script>