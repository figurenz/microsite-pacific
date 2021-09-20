$(function () {
  // Cache variables for increased performance on devices with slow CPUs.
  var flexContainer = $('div.flex-container')
  var navButton = $('button.menu-icon')
  var sideNav = $('nav.main-nav')
  var searchBox = $('.search-box')
  var searchClose = $('.search-icon-close')
  var searchInput = $('#search-input')

  // Menu Settings
  $('.menu-icon, .menu-icon-close').click(function (e) {
    e.preventDefault()
    e.stopPropagation()
    flexContainer.toggleClass('active') 
    sideNav.toggleClass('active')
    this.setAttribute("aria-expanded", 'true')
  })

  $('.menu-icon, .menu-icon-close').keydown(function (e) {
    if(e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      flexContainer.toggleClass('active') 
      sideNav.toggleClass('active')
      this.setAttribute("aria-expanded", 'true')
    }
  })

  // Click outside of menu to close it
  flexContainer.click(function (e) {
    if (flexContainer.hasClass('active') && e.target.tagName !== 'A') {
      flexContainer.removeClass('active') 
      sideNav.removeClass('active')
      navButton[0].setAttribute("aria-expanded", 'false')
    }
  })

  // Press Enter key to close menu when focus is on close icon
  $('.menu-icon-close').keydown(function (e) {
    if (e.key === 'Enter') {
        flexContainer.removeClass('active')
        sideNav.removeClass('active')
        navButton[0].setAttribute("aria-expanded", 'false')
    }
  })

  // Press Escape key to close menu
  $(window).keydown(function (e) {
    if (e.key === 'Escape') {
      if (flexContainer.hasClass('active')) {
        flexContainer.removeClass('active')
        sideNav.removeClass('active')
        navButton[0].setAttribute("aria-expanded", 'false')
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
