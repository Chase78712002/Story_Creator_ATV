$(() => {
  const createStoryElem = (storyObj) => {
    let status = 'In progress';
    if (storyObj.complete) {
      status = 'Completed';
    }
    const $storyElem = $(`
    <article class="story">
      <div class="story-header">
        <h3>${storyObj.name}</h3>
        <h3>${status}</h3>
      </div>
      <div class="story-title">${storyObj.story}</div>
    </article>
    `);
    return $storyElem;
  };

  // const renderStory = ()

  $.ajax({
    method: "GET",
    url: "/stories",
  }).done((stories) => {
    for (story of stories) {
      const $story = createStoryElem(story);
      $(".container").append($story);
    }
  });
});
