<template>

<div>
	<div class="lolomoRow lolomoRow_title_card" data-list-context="popularTitles">
		<h2 class="rowHeader">
			<span class="rowTitle" aria-label="popular on netflix">
				<div class="row-header-title">Popular on Netflix</div>
			</span>
		</h2>
		<div class="rowContainer rowContainer_title_card" id="row-1">
			<div class="ptrack-container">
				<div class="rowContent slider-hover-trigger-layer">
					<div class="slider">
						<span class="handle handlePrev active" tabindex="0" role="button" aria-label="See previous titles">
							<b class="indicator-icon icon-leftCaret"></b>
						</span>
						<ul class="pagination-indicator">
							<li class="active"></li>
							<li class=""></li>
							<li class=""></li>
							<li class=""></li>
							<li class=""></li>
							<li class=""></li>
							<li class=""></li>
						</ul>
						<button @click="getMovies">Test Get Movies</button>
						<div class="sliderMask showPeek">
							<div class="sliderContent row-with-x-columns" >
								<div class="slider-item slider-item-">
									<div class="title-card-container">
										<div id="title-card-1-33" class="slider-refocus title-card" v-for="post in posts" :key="post.id" >
											<div class="ptrack-content"  v-if="post.rating >= 7"  >
												<a href="/watch/80057281?tctx=1%2C33%2C%2C%2C" v-bind:aria-label="post.title" tabindex="-1" aria-hidden="true" class="slider-refocus">
													<div class="boxart-size-16x9 boxart-container">
														<img class="boxart-image boxart-image-in-padded-container" v-bind:src="post.image" alt="">
															<div class="fallback-text-container" aria-hidden="true">
																<p class="fallback-text">{{post.title}}</p>
															</div>
														</div>
														<div class="click-to-change-JAW-indicator">
															<div class="bob-jawbone-chevron">
																<svg class="svg-icon svg-icon-chevron-down" focusable="true">
																	<use filter="" xlink:href="#chevron-down"></use>
																</svg>
															</div>
														</div>
													</a>
												</div>
												<div class="bob-container">
													<span></span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<span class="handle handleNext active" tabindex="0" role="button" aria-label="See more titles">
								<b class="indicator-icon icon-rightCaret"></b>
							</span>
						</div>
					</div>
					<span class="jawBoneContent"></span>
				</div>
			</div>
		</div>

	<div class="lolomoRow lolomoRow_title_card" data-list-context="popularTitles">
		<h2 class="rowHeader">
			<span class="rowTitle" aria-label="popular on netflix">
				<div class="row-header-title">Trending Now</div>
			</span>
		</h2>
		<div class="rowContainer rowContainer_title_card" id="row-1">
			<div class="ptrack-container">
				<div class="rowContent slider-hover-trigger-layer">
					<div class="slider">
						<span class="handle handlePrev active" tabindex="0" role="button" aria-label="See previous titles">
							<b class="indicator-icon icon-leftCaret"></b>
						</span>
						<div class="sliderMask showPeek">
							<div class="sliderContent row-with-x-columns" >
								<div class="slider-item slider-item-">
									<div class="title-card-container">
										<div id="title-card-1-33" class="slider-refocus title-card" v-for="post in posts" :key="post.id">
											<div class="ptrack-content">
												<a href="/watch/80057281?tctx=1%2C33%2C%2C%2C" v-bind:aria-label="post.title" tabindex="-1" aria-hidden="true" class="slider-refocus">
													<div class="boxart-size-16x9 boxart-container">
														<img class="boxart-image boxart-image-in-padded-container" v-bind:src="post.image" alt="">
															<div class="fallback-text-container" aria-hidden="true">
																<p class="fallback-text">{{post.title}}</p>
															</div>
														</div>
														<div class="click-to-change-JAW-indicator">
															<div class="bob-jawbone-chevron">
																<svg class="svg-icon svg-icon-chevron-down" focusable="true">
																	<use filter="" xlink:href="#chevron-down"></use>
																</svg>
															</div>
														</div>
													</a>
												</div>
												<div class="bob-container">
													<span></span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<span class="handle handleNext active" tabindex="0" role="button" aria-label="See more titles">
								<b class="indicator-icon icon-rightCaret"></b>
							</span>
						</div>
					</div>
					<span class="jawBoneContent"></span>
				</div>
			</div>
		</div>

	<div class="lolomoRow lolomoRow_title_card" data-list-context="popularTitles"  v-for="genre in genres" :key="genre">
		<h2 class="rowHeader">
			<span class="rowTitle" aria-label="popular on netflix">
				<div class="row-header-title">{{genre}}</div>
			</span>
		</h2>
		<div class="rowContainer rowContainer_title_card" id="row-1">
			<div class="ptrack-container">
				<div class="rowContent slider-hover-trigger-layer">
					<div class="slider">
						<span class="handle handlePrev active" tabindex="0" role="button" aria-label="See previous titles">
							<b class="indicator-icon icon-leftCaret"></b>
						</span>
						<div class="sliderMask showPeek">
							<div class="sliderContent row-with-x-columns" >
								<div class="slider-item slider-item-">
									<div class="title-card-container">
										<div id="title-card-1-33" class="slider-refocus title-card" v-for="post in posts" :key="post.id">
											<div class="ptrack-content">
												<a href="/watch/80057281?tctx=1%2C33%2C%2C%2C" v-bind:aria-label="post.title" tabindex="-1" aria-hidden="true" class="slider-refocus">
													<div class="boxart-size-16x9 boxart-container">
														<img class="boxart-image boxart-image-in-padded-container" v-bind:src="post.image" alt="">
															<div class="fallback-text-container" aria-hidden="true">
																<p class="fallback-text">{{post.title}}</p>
															</div>
														</div>
														<div class="click-to-change-JAW-indicator">
															<div class="bob-jawbone-chevron">
																<svg class="svg-icon svg-icon-chevron-down" focusable="true">
																	<use filter="" xlink:href="#chevron-down"></use>
																</svg>
															</div>
														</div>
													</a>
												</div>
												<div class="bob-container">
													<span></span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<span class="handle handleNext active" tabindex="0" role="button" aria-label="See more titles">
								<b class="indicator-icon icon-rightCaret"></b>
							</span>
						</div>
					</div>
					<span class="jawBoneContent"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
window.axios = require('axios')

export default {
    data () {
    return {
      posts: null,
      genres: ['All Action', 'All Anime', 'All Childrens', 'All Classics', 'All Comedies', 'All Cult', 'All Documentaries', 'All Dramas', 'All Faith and Spirituality', 'All Horror', 'All Independent', 'All International', 'All Music', 'All Musicals', 'All Romance', 'All Sci-Fi', 'All Sports', 'All Thrillers'],
      testingGenres: [{
          name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Anime', ids: [10695, 11146, 2653, 2729, 3063, 413820, 452, 6721, 43040, 7424, 9302]},
          {name: 'All Childrens', ids: [10056, 27480, 27950, 28034, 28083, 28233, 48586, 2653, 5455, 561, 6218, 6796, 6962, 78120, 783, 89513]},
          {name: 'All Classics', ids: [10032, 11093, 13158, 29809, 2994, 31273, 31574, 31694, 32392, 46553, 46560, 46576, 46588, 47147, 47465, 48303, 48586, 48744, 76186]},
          {name: 'All Comedies', ids: [1009, 10256, 10375, 105, 10778, 11559, 11755, 1208951, 1333288, 1402, 1747, 17648, 2030, 2700, 31694, 3300, 34157, 3519, 3996, 4058, 4195,
          43040, 4426, 4906, 52104, 52140, 52847, 5286, 5475, 5610, 56174, 58905, 59169, 61132, 61330, 6197, 63092, 63115, 6548, 711366, 7120, 72407, 7539, 77599, 77907, 78163,
          78655, 79871, 7992, 852492, 869, 89585, 9302, 9434, 9702, 9736]},
          {name: 'All Cult', ids: [10944, 3675, 4734, 74652, 7627, 9434]},
          {name: 'All Documentaries', ids: [10005, 10105, 10599, 1159, 15456, 180, 2595, 26126, 2760, 28269, 3652, 3675, 4006, 4720, 48768, 49110, 49547, 50232, 5161, 5349,
          55087, 56178, 58710, 60026, 6839, 7018, 72384, 77245, 852494, 90361, 9875]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},
          {name: 'All Action', ids: [10702, 11804, 11828, 1192487, 1365, 1568, 2125, 2653, 43040, 43048, 4344, 46576, 75418, 76501, 77232, 788212, 801362, 852490, 899, 9584]},

       ]

    }
  },
      methods: {
      getMovies: function () {
        axios({
        "method":"GET",
        "url":"https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"unogs-unogs-v1.p.rapidapi.com",
        "x-rapidapi-key":"3bdbc5bc7emsh74f15a0ee8aa3bfp1566ccjsn584d1c60ac0f"
        },"params":{
        "q":"get:new7-!1800,2019-!0,5-!0,10-!0-!Any-!Any-!Any-!gt100-!{ downloadable }",
        "t":"ns",
        "cl":"all",
        "st":"adv",
        "ob":"Relevance",
        "p":"1",
        "sa":"and"
        }
        })
        .then((response)=>{
          this.posts = response.data.ITEMS;
          console.log(this.posts)
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    },

}
</script>

<style scoped>
.lolomoRow.lolomoRow_title_card {
    margin: 3vw 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.lolomoRow {
    position: relative;
}
.lolomoRow .rowHeader {
    line-height: 1.3;
    margin: 0;
}
.rowContainer .rowContent {
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.slider {
    padding: 0 60px;
}
.slider {
    position: relative;
    margin: 0;
    padding: 0 4%;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
}
.slider .sliderMask.showPeek {
    overflow-x: visible;
}

.slider .sliderMask {
    overflow-x: hidden;
    padding-bottom: 1px;
}
.slider .sliderMask .sliderContent {
    white-space: nowrap;
}
.slider .sliderMask .sliderContent .slider-item {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1;
    display: inline-block;
    position: relative;
    white-space: normal;
    vertical-align: top;
    padding: 0 2px;
}

img.boxart-image.boxart-image-in-padded-container {
    width: 293px;
    height: 200px;
}

.title-card:not(.loadingTitle) {
    display: block;
}
.title-card {
    position: relative;
    z-index: 1;
}

.title-card:hover {
    z-index: 10;
    transform: scaleX(2) scaleY(1.4);
}

.title-card-container {
    display: flex;
}

.fallback-text-container {
    display: none;
}

.click-to-change-JAW-indicator {
    display: none;
}

</style>