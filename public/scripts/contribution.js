

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

  $(".far-fa-thumbs-up").click(function() {
    alert("vote is clicked!!");
    // everytime it is clicked
    // update the database
      // increase the vote column for that specific contribution by 1

    // refresh the page
  })

})

