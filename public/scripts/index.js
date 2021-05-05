
$(() => {
  const createStoryElem = (storyObj) => {
    let status = 'In progress';
    if (storyObj.complete) {
      status = 'Completed';
    }
    const $storyElem = $(`
      <article class="story">
        <div class="story-header" id=${storyObj.id}>
          <h3>${storyObj.name}</h3>
          <h3>${status}</h3>
        </div>
        <div class="story-title">${storyObj.story}</div>
      </article>
    `);
    return $storyElem;
  };

  const createContributionElem = (contribObj) => {

    const $contribElem = $(`
      <p>${contribObj.contribution}</p>
    `)
    return $contribElem;
  }

  const renderStory = (storiesArr, tagName, cb) => {
    for (story of storiesArr) {
      const $story = cb(story);
      $(`${tagName}`).append($story);
    }
  }

  $.ajax({
    method: "GET",
    url: "/story",
  }).done(function(stories) {
    renderStory(stories, ".container", createStoryElem);

    $(".story").click(function() {
      const story_id = $(this).children().attr('id');

      $(".container").remove();

      $.ajax({
        method: "GET",
        url: `/story/${story_id}`
      }).done(story=> {
        renderStory(story,"body", createStoryElem);
      })


      $.ajax({
        method: "GET",
        url: `/contribution/${story_id}`,
      }).done(contributions => {
        renderStory(contributions, "body", createContributionElem);
      })


      $("body").append('<p>Hi there!!</p>');

    })

  });



});
