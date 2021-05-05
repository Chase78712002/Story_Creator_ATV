
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

  const renderStory = (storiesArr, tagName) => {
    for (story of storiesArr) {
      const $story = createStoryElem(story);
      $(`${tagName}`).append($story);
    }
  }

  $.ajax({
    method: "GET",
    url: "/story",
  }).done(function(stories) {
    renderStory(stories, ".container");

    $(".story").click(function() {
      const story_id = $(this).children().attr('id');

      $(".container").remove();

      $.ajax({
        method: "GET",
        url: `/story/${story_id}`
      }).done(story=> {
        renderStory(story,"body");
      })

      $.ajax({
        method: "GET",
        url: '/contribution',
        data: {storyId:story_id}
      }).done(contributions => {
        renderStory(contributions, "body");
      })


      $("body").append('<p>Hi there!!</p>');

    })

  });



});
