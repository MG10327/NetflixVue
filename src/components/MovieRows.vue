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
                    <button @click="getMovies">Click To Test Api (Remove Later)</button>
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
      posts: null
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
    }
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
    transform: scale(1.7);
    z-index: 10;
}

.title-card-container {
    display: flex;
}


</style>