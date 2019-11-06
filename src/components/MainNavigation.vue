<template>
  <div class="hello">
    <div class="pinning-header">
      <div class="pinning-header-container" style="top: 0px; position: relative; background: transparent;">
        <div class="main-header has-billboard menu-navigation" role="navigation" style="">
          <a aria-label="Netflix" class="logo icon-logoUpdate active" href="/browse">
          </a>
          <ul class="tabbed-primary-navigation">
            <a href="/browse"><img src="../assets/Netflix_2015_logo.svg" alt="" class="netflix_logo"></a>
            <li class="navigation-menu">
              <a class="menu-trigger" role="button" aria-haspopup="true" tabindex="0">Browse</a>
            </li>
            <li class="navigation-tab">
              <a class="current active" href="/browse">Home</a>
            </li>
            <li class="navigation-tab">
              <a href="/browse/genre/83">TV Shows</a>
            </li>
            <li class="navigation-tab">
              <a href="/browse/genre/34399">Movies</a>
            </li>
            <li class="navigation-tab">
              <a href="/browse/genre/1592210">Recently Added</a>
            </li>
            <li class="navigation-tab">
              <a href="/browse/my-list">My List</a>
            </li>
          </ul>
          <div class="secondary-navigation">
            <div class="nav-element">
              <div class="searchBox">
                <button class="searchTab" tabindex="0" aria-label="Search" data-uia="search-box-launcher">
                  <font-awesome-icon icon="search" class="top-icons" />
                </button>
              </div>
            </div>
            <div class="nav-element show-kids">
              <a href="/Kids">KIDS</a>
            </div>
            <div class="nav-element show-dvd">
              <a href="https://dvd.netflix.com/SubscriptionAdd?preselect=1u&amp;dsrc=STRWEB_NAV">DVD</a>
            </div>
            <div class="nav-element">
              <span class="notifications">
                <button class="notifications-menu" aria-haspopup="true" aria-expanded="false" aria-label="Notifications">
                  <font-awesome-icon icon="bell" class="top-icons" />
                </button>
              </span>
            </div>
            <div class="nav-element">
              <div class="account-menu-item">
                <div class="account-dropdown-button flex">
                  <a href="/YourAccount" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-label="Marcus - Account &amp; Settings">
                    <span class="profile-link" role="presentation">
                      <img class="profile-icon" src="https://occ-0-2433-990.1.nflxso.net/art/0a23d/bd81473c570e4f6898dae0375550d809c230a23d.png" alt="">
                      </span>
                    </a>
                    <span class="caret" role="presentation"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MainNavigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.pinning-header .tabbed-primary-navigation .navigation-menu .menu-trigger {
    display: flex;
    align-items: center;
    font-weight: bold;
    height: 100%;
}

.netflix_logo {
  width: 90px;
  margin: 0 45px;
}

.nav-element {
  margin: 0 10px;
}

.nav-element button {
  background: transparent;
  border: none;
}

.top-icons {
    width: 25px;
    height: 25px;
    color: #fff;
    cursor: pointer;
}

.pinning-header .pinning-header-container {
    left: 15px;
    right: 0;
    top: 15px;
    position: relative;
    z-index: 2;
}

.pinning-header {
    height: 70px;
}

.pinning-header-container {
  top: 0px;
  position: relative;
  background: transparent;
}

.pinning-header .main-header.menu-navigation.has-billboard:not(.solid) {
    background-color: #e4151500;
}

.pinning-header .main-header .logo {
    font-size: 25px;
}

.pinning-header .main-header .logo {
    text-decoration: none;
    font-size: 1.8em;
    color: #E50914;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
}

.pinning-header .tabbed-primary-navigation {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

.pinning-header .secondary-navigation {
    display: flex;
    align-items: center;
    flex-grow: 1;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -moz-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    position: absolute;
    right: 4%;
    top: 0;
    height: 100%;
}

.pinning-header .account-dropdown-button {
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.akira-header .account-dropdown-button .caret, .pinning-header .account-dropdown-button .caret {
    margin-left: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #fff transparent transparent transparent;
}
@media screen and (max-width: 890px)  {
.navigation-tab {
    display: none;
}
}
</style>
