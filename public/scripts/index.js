$(() => {
  const createStoryElem = (storyObj) => {
    let status = "In progress";
    if (storyObj.complete) {
      status = "Completed";
    }
    const $storyElem = $(`
      <article class="view-story">
        <div class="story-header" id=${storyObj.id}>
          <h3>${storyObj.name}</h3>
          <h3>${status}</h3>
        </div>
        <div class="story-content">${storyObj.story}</div>
        <a href= "story/${storyObj.id}"><p class="story-footer">View Story</a>
      </article>
    `);
    return $storyElem;
  };

  const renderStory = (storiesArr, tagName, cb) => {
    for (let i = storiesArr.length - 1; i >= 0; i--) {
      const $story = cb(storiesArr[i]);
      $(`${tagName}`).append($story);
    }
  };

  $.ajax({
    method: "GET",
    url: "/story",
  }).done(function (stories) {
    console.log('story in ajax ', stories);
    renderStory(stories, ".container", createStoryElem);
  });
});
