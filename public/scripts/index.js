$(() => {
  const createStoryElem = (storyObj) => {
    let status = "In progress";
    if (storyObj.complete) {
      status = "Completed";
    }
    const $storyElem = $(`
    <a href= "/story/${storyObj.id}"> view story </a>
      <article class="view-story">
        <div class="story-header" id=${storyObj.id}>
          <h3>${storyObj.name}</h3>
          <h3>${status}</h3>
        </div>
        <div class="story-content">${storyObj.story}</div>
        <a href= "/story/${storyObj.id}"><p class="story-footer">View Story</a>
      </article>
    `);
    return $storyElem;
  };

  // const createContributionElem = (contribObj) => {
  //   const $contribElem = $(`
  //     <article class="story-contribution">
  //       <div>
  //         <h3>${contribObj.name}</h3>
  //         <button class=${className}>
  //       </div>
  //       <p>${contribObj.contribution}</p>
  //       <div class="contribution-footer">
  //         <a href=""><i class="far fa-thumbs-up"></i></a>
  //         <p>Votes: ${contribObj.vote}</p>
  //       </div>
  //     </article>
  //   `);
  //   return $contribElem;
  // };

  const renderStory = (storiesArr, tagName, cb) => {
    for (story of storiesArr) {
      const $story = cb(story);
      $(`${tagName}`).append($story);
    }
  };

  $.ajax({
    method: "GET",
    url: "/story",
  }).done(function (stories) {
    renderStory(stories, ".container", createStoryElem);

    // $(".view-story").click(function () {
    //   const story_id = $(this).children().attr("id");

    //   $(".container").remove();

    //   $.ajax({
    //     method: "GET",
    //     url: `/story/${story_id}`,
    //   }).done((story) => {
    //     // check if the writer_id === session cookie id
    //     renderStory(story, "body", createStoryElem);

    //     $.ajax({
    //       method: "GET",
    //       url: `/contribution/${story_id}`,
    //     }).done((contributions) => {
    //       renderStory(contributions, "body", createContributionElem);
    //     });
    //   });

    // });
  });
});
