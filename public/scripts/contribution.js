

$(() => {
  $("form").submit(function(event) {
    event.preventDefault();
    const queryString = $(this).siblings(".contribution-body").html();
    $.ajax({
      method: "PUT",
      url: `/story/1`,
      data: {'contribution_data': queryString}
    }).done(response => {
      console.log(response);
    })
  });
})
