<template>
    <div class="stuff">
        <span class="volatile-billboard-animations-container">
	<div class="billboard-row" role="region" aria-label="Featured Content">
		<div class="ptrack-container billboard-presentation-tracking">
			<div class="billboard-presentation-tracking ptrack-content" >
				<div class="billboard-presentation-tracking ptrack-content" >
					<div class="billboard billboard-pane billboard-pane-main billboard-originals full-bleed-billboard trailer-billboard">
						<div class="billboard-motion dismiss-mask">
							<div class="motion-background-component bottom-layer full-screen">
								<div class="hero-image-wrapper">
									<img class="hero static-image image-layer" src="https://occ-0-2433-990.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb7syvKEJb5Geva8tpwJkjTl1WoKj4YoiRMBaqI2kcKRms0Tjpfm7ozsrcPXMZpy6dg1xWPUHtgRbSNwGlRBhQpTxbbH.webp?r=4d5" alt="">
										<div class="trailer-vignette vignette-layer"></div>
=										<div class="embedded-components button-layer"></div>
									</div>
									<div class="embedded-components button-layer">
										<span class="ActionButtons">
										</span>
										<span class="maturity-rating ">
											<span class="maturity-number">TV-MA</span>
										</span>
									</div>
								</div>
							</div>
							<div class="fill-container">
								<div class="info meta-layer">
									<div class="logo-and-text meta-layer">
										<div class="titleWrapper" style="transform-origin: left bottom; transform: scale(1) translate3d(0px, 0px, 0px); transition-duration: 1300ms; transition-delay: 0ms;">
											<div class="billboard-title">
												<img class="title-logo" src="https://occ-0-2433-990.1.nflxso.net/dnm/api/v6/5e0byrbbfBPBmtxyXMpKqMuqOQY/AAAABco5h8O_1BWVcuInz0Sv2xgKRZuD3-DR3SirO1AQ_BeW45d90r00DFCb0Bk0lrGFfk7JEou1tbBHUQxdZFbByQMfKpM2r_wTGsh1Ba94SetR6rkSaa77c_Zmq-X6iLSU_2sjjriCJ5esBsRBVUpOsZ9wc_CkPWrTUWgFHDxZfnAVxw.webp?r=ce7" title="American Son" alt="American Son">
												</div>
											</div>
											<div class="info-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 1300ms; transition-delay: 0ms; opacity: 1;">
												<div class="info-wrapper-fade" style="opacity: 1; transition-duration: 600ms; transition-delay: 200ms;">
													<div class="episode-title-container"></div>
													<div class="synopsis-fade-container">
														<div class="synopsis no-supplemental">
															<!-- -->One incident. Zero answers. And the excruciating weight of waiting -- and searching for common ground amidst chaos.
															<!-- -->
														</div>
													</div>
												</div>
											</div>
											<div class="billboard-links button-layer forward-leaning">
												<a role="link" aria-label="Play - start with Audio Description turned on" data-uia="play-button-a11y" class="visually-hidden  playLink" href="/watch/81024100?trackId=254015180&amp;tctx=0%2C0%2Cc29fc646-dfff-43c4-9081-dbb0469d47bc-101801512%2C4a3c807c-1aa5-4ea5-b346-9b504df97da8_11870711X20XX1572913067623%2C4a3c807c-1aa5-4ea5-b346-9b504df97da8_ROOT&amp;ad=true">
													<span class="visually-hidden">&nbsp;</span>
												</a>
												<a data-uia="play-button" role="link" aria-label="Play" class=" playLink" href="/watch/81024100?trackId=254015180&amp;tctx=0%2C0%2Cc29fc646-dfff-43c4-9081-dbb0469d47bc-101801512%2C4a3c807c-1aa5-4ea5-b346-9b504df97da8_11870711X20XX1572913067623%2C4a3c807c-1aa5-4ea5-b346-9b504df97da8_ROOT">
													<span tabindex="-1" class="nf-icon-button nf-flat-button nf-flat-button-uppercase" data-uia="">
														<font-awesome-icon icon="play" class="header-button-icons" />
														<span class="nf-flat-button-text">Play</span>
													</span>
												</a>
												<div class="ptrack-content flex" >
													<a role="button" aria-live="assertive" tabindex="0" class="nf-icon-button mylist-button flex" aria-label="Add To My List" data-uia="myListButton">
														<font-awesome-icon icon="plus" class="header-button-icons" />
														<span class="nf-icon-button-label">My List</span>
													</a>
												</div>
												<a tabindex="0" class="nf-icon-button nf-flat-button nf-flat-button-uppercase" role="link" href="/title/81024100" data-uia="">
                                                    <font-awesome-icon icon="question-circle" class="header-button-icons" />
                                                    <span class="nf-flat-button-text">More Info</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.stuff {
    background: #fff;
}
.volatile-billboard-animations-container {
    display: block;
    z-index: 1;
    position: relative;
}
.volatile-billboard-animations-container .billboard-row {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
}
.billboard-row {
    user-select: none;
    touch-action: pan-y;
    margin-bottom: 20px;
    background-color: #000;
    position: relative;
    padding-bottom: 40%;
}
.billboard-row .billboard {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 56.25vw;
    z-index: 0;
    top: -80px;
}

.billboard-row .billboard .billboard-motion {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.billboard-row .billboard .bottom-layer {
    z-index: 2;
}

.billboard-row .billboard .hero-image-wrapper .static-image {
    position: absolute;
    background-position: center center;
    background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    opacity: 1;
    transition: opacity 400ms cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
}
.billboard-row .billboard .hero-image-wrapper .trailer-vignette {
    background: -webkit-linear-gradient(13deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 85%);
    background: -moz- oldlinear-gradient(13deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 85%);
    background: -o-linear-gradient(13deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 85%);
    background: linear-gradient(77deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 85%);
    position: absolute;
    top: 0;
    left: 0;
    right: 26.09%;
    bottom: 0;
    opacity: 1;
    transition: opacity 500ms;
}
.billboard-row .billboard .hero-image-wrapper .hero-vignette {
    background-size: 100% 100%;
    background-position: 0 top;
    background-repeat: repeat-x;
    background-color: transparent;
    width: 100%;
    height: 14.7vw;
    top: auto;
    bottom: -1px;
    opacity: 0.87;
}
.billboard-row .billboard .embedded-components {
    font-size: 2.5vw;
    position: absolute;
    right: 0;
    bottom: 35%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}

.billboard-row .billboard .billboard-motion .ActionButtons {
    width: 2.4vw;
    height: 2.4vw;
    position: relative;
    margin: 0 1.1vw 0 0;
}
.ActionButtons {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}

.billboard-row .billboard .maturity-rating {
    border: solid 3px #dcdcdc;
    border-style: none none none solid;
    background-color: rgba(51, 51, 51, 0.6);
    font-size: 1.1vw;
    padding: .5vw 3.5vw .5vw .8vw;
    display: flex;
    align-items: center;
    height: 2.4vw;
    box-sizing: border-box;
}
.maturity-rating {
    display: inline-block;
}
.billboard-row .billboard .fill-container {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
}
.fill-container {
    height: 100%;
    width: 100%;
}
.billboard-row .billboard .info {
    position: absolute;
    top: 0;
    bottom: 35%;
    left: 4%;
    width: 36%;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}
.billboard-row .billboard .info .logo-and-text {
    width: 100%;
    transition: -webkit-transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.billboard-row .billboard .info .billboard-title {
    min-height: 13.2vw;
    position: relative;
    margin-bottom: 1.2vw;
}
.billboard-row .billboard .info .billboard-title .title-logo {
    width: 90%;
    transform-origin: bottom left;
}
.billboard-row .billboard .info .synopsis.no-supplemental {
    margin: 0.5vw 0 0 0;
}
.billboard-row .billboard .info .synopsis {
    color: #fff;
    font-weight: normal;
    line-height: normal;
    width: 100%;
    font-size: 1.4vw;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin-top: .1vw;
}
.billboard-row .billboard .info .billboard-links {
    margin-top: 1.5vw;
    white-space: nowrap;
    display: flex;
}
/* .billboard-row .billboard .button-layer {
    position: relative;
    z-index: 10;
} */
.billboard-row .billboard .info .billboard-links > a {
    display: flex;
    align-items: center;
}
.visually-hidden {
    clip: rect(1px, 1px, 1px, 1px) !important;
    height: 1px !important;
    overflow: hidden !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 1px !important;
}
.billboard-row .billboard .mylist-button .nf-icon-button-icon, .billboard-row .billboard .remindme-button .nf-icon-button-icon, .billboard-row .billboard .mylist-button .playRing, .billboard-row .billboard .remindme-button .playRing {
    margin-right: 0.71em;
    background-color: transparent;
    font-size: inherit;
    transition: none;
}
.nf-icon-button .nf-icon-button-icon {
    display: inline-block;
    font-size: 2.0vw;
    vertical-align: middle;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.25);
    transition: transform 150ms ease;
}
[class^="icon-"], [class*=" icon-"] {
    font-family: 'nf-icon';
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    transform: translateZ(0);
}
.billboard-row .billboard .mylist-button .nf-icon-button-label, .billboard-row .billboard .remindme-button .nf-icon-button-label {
    padding: 0;
    margin: 0;
    top: auto;
}
.nf-icon-button .nf-icon-button-label {
    display: inline-block;
    font-size: 1.1vw;
    margin-left: 0.6vw;
    margin-right: 1.7vw;
    font-weight: bold;
    vertical-align: middle;
    white-space: nowrap;
}
.billboard-links.forward-leaning .btn-flat, .bigRowItem .forward-leaning .btn-flat, .billboard-links.forward-leaning .nf-icon-button:not(.audio-btn), .bigRowItem .forward-leaning .nf-icon-button:not(.audio-btn), .billboard-links.forward-leaning .nf-flat-button, .bigRowItem .forward-leaning .nf-flat-button, .billboard-links.forward-leaning .btn-flat-primary, .bigRowItem .forward-leaning .btn-flat-primary, .billboard-links.forward-leaning .nf-flat-button-primary, .bigRowItem .forward-leaning .nf-flat-button-primary {
    background-color: rgba(51, 51, 51, 0.4);
    border-width: 0;
    padding: 0.75em 2.3em;
    height: 1.2vw;
    border-radius: 0.2vw;
    box-shadow: none;
    font-size: 1.1vw;
    margin-bottom: 0.75em;
}
.billboard-links .ptrack-content{
    margin: 0 auto;
}

.header-button-icons {
    transform: translate(-20px, 0);
}

</style>
