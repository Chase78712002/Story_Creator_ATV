

$(() => {
  $(".accept").submit(function(event) {
    event.preventDefault();
    const queryString = $(this).siblings(".contribution-body").html();
    const contribID = $(this).parent(".story-contribution").attr("id");
    const storyID = $(".view-story").attr("id");
    console.log('view-story id in ajax', storyID);
    $.ajax({
      method: "POST",
      url: `/story/${storyID}`,
      data: {
        'contribution_data': queryString,
        'contribution_id': contribID
      }
    }).done(response => {
      console.log(response);
      console.log(response.contrib_id);
      let parsedID = contribID.split("_")[1];
      console.log("Parsed ID: ", typeof parsedID);
      $(`#${response.contrib_id}`).slideUp();
      window.location.href = `/story/${storyID}`;
      $.ajax({
        method: "POST",
        url: `/contribution/${parsedID}`
      }).done(response => {
        console.log(response);
      })

    })
  });

  $(".fa-thumbs-up").click(function() {
    const contribID = $(this).parents(".story-contribution").attr("id");
    const storyID = $(".view-story").attr("id");
    let parsedID = contribID.split("_")[1];
    console.log("Parsed ID: ", parsedID);
    // update the database
    $.ajax({
      method: "POST",
      url: `/contribution/vote/${parsedID}`,
    }).done(response => {
      console.log(response);
      // refresh the page
      window.location.href = `/story/${storyID}`;
    })

  })

})

