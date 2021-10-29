$(function () {
  // Cache variables for increased performance on devices with slow CPUs.
  const flexContainer = $('div.flex-container')
  const navButton = $('button.menu-icon')
  const sideNav = $('nav.main-nav')
  const searchBox = $('.search-box')
  const searchClose = $('.search-icon-close')
  const searchInput = $('#search-input')

  // Menu Settings
  
  $('.menu-icon, .menu-icon-close').click(function (e) {
    e.preventDefault()
    e.stopPropagation()
    flexContainer.toggleClass('active') 
    sideNav.toggleClass('active')
    this.setAttribute("aria-expanded", 'true')
    // if class toggle is active, focus on close button. Otherwise, focus on menu button.
    if (sideNav[0].classList[1] === 'active') {
      setTimeout(function(){
        document.getElementById("menu-close-button").focus()
      }, 200)
    } else {
      setTimeout(function(){
        document.getElementById("home-menu-button").focus()
      }, 200)
    }
  })

  $('.menu-icon, .menu-icon-close').keydown(function (e) {
    // if space, focus moves to first list item in menu
    if (e.key === " ") {
      e.preventDefault()
      e.stopPropagation()
      flexContainer.toggleClass('active') 
      sideNav.toggleClass('active')
      this.setAttribute("aria-expanded", 'true')
      setTimeout(function(){
        document.getElementById("menu-first").focus()
      }, 200)
    }
    // if enter, focus moves to close button in menu.
    else if(e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      flexContainer.toggleClass('active') 
      sideNav.toggleClass('active')
      this.setAttribute("aria-expanded", 'true')
      setTimeout(function(){
        document.getElementById("menu-close-button").focus()
      }, 200)
    }
  })

  // Click outside of menu to close it
  flexContainer.click(function (e) {
    if (flexContainer.hasClass('active') && e.target.tagName !== 'A') {
      flexContainer.removeClass('active') 
      sideNav.removeClass('active')
      navButton[0].setAttribute("aria-expanded", 'false')
      setTimeout(function(){
        document.getElementById("home-menu-button").focus()
      }, 200)
    }
  })

  // Press Enter key to close menu when focus is on close icon
  $('.menu-icon-close').keydown(function (e) {
    if (e.key === 'Enter') {
        flexContainer.removeClass('active')
        sideNav.removeClass('active')
        navButton[0].setAttribute("aria-expanded", 'false')
        setTimeout(function(){
          document.getElementById("home-menu-button").focus()
        }, 200)
    }
  })

  // Press Escape key to close menu
  $(window).keydown(function (e) {
    if (e.key === 'Escape') {
      if (flexContainer.hasClass('active')) {
        flexContainer.removeClass('active')
        sideNav.removeClass('active')
        navButton[0].setAttribute("aria-expanded", 'false')
        setTimeout(function(){
          document.getElementById("home-menu-button").focus()
        }, 200)
      } else if (searchBox.hasClass('search-active')) {
        searchBox.removeClass('search-active')
      }
    }
  })

  // Search Settings
  $('.search-icon').click(function (e) {
    e.preventDefault()
    searchBox.toggleClass('search-active')
    searchInput.focus()

    if (searchBox.hasClass('search-active')) {
      searchClose.click(function (e) {
    		e.preventDefault()
    		searchBox.removeClass('search-active')
    	})
    }
  })
})
