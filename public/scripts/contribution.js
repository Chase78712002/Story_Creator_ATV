

$(() => {
  $("form").submit(function(event) {
    event.preventDefault();
    console.log("Hello World")
    // const queryString = $(this).siblings(".contribution-body").html();
    const queryString = $(this).serialize();
    // const serialized = $(queryString).serialize();
    console.log("Query String: ", queryString);
    // $.ajax({
    //   method: "PUT",
    //   url: `/story/:id`,
    // }).done
  });
})
