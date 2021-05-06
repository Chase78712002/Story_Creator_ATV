

$(() => {
  $("form").submit(function(event) {
    event.preventDefault();
    const queryString = $(this).siblings(".contribution-body").html();
    const contribID = $(".story-contribution").attr("id");
    const storyID = $(".view-story").attr("id");
    console.log('view-story id in ajax', storyID);
    $.ajax({
      method: "PUT",
      url: `/story/1`,
      data: {
        'contribution_data': queryString,
        'contribution_id': contribID
      }
    }).done(response => {
      console.log(response);
      console.log(response.contrib_id);
      $(`#${response.contrib_id}`).slideUp();
    })
  });
})
