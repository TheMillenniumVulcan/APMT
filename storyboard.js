$('#myTabs a').click(function (e) {
  e.preventDefault()
  if($(this).html() === "Backlog") {
	  $("div.page-header").html("<h1>Stoyboard - Backlog <small>Display the backlog tasks grouped by sprints</small></h1>");
  } else {
	  $("div.page-header").html("<h1>Stoyboard - Active Sprint <small>All the issues in the current sprint</small></h1>");
  }
  $(this).tab('show')
})