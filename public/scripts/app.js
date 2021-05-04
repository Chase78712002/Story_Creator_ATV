$(() => {
  const createStoryElem = (storyObj) => {
    let status = 'In progress';
    if (storyObj.complete) {
      status = 'Completed';
    }
    const $storyElem = $(`
    <a href="/story/${storyObj.id}">
      <article class="story">
        <div class="story-header">
          <h3>${storyObj.name}</h3>
          <h3>${status}</h3>
        </div>
        <div class="story-title">${storyObj.story}</div>
      </article>
    </a>
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
  }).done((stories) => {
    renderStory(stories, ".container");
  });

  // $.ajax({
  //   method: "GET",
  //   ulr: "/story/:id",
  // }).then(story => {
  //   console.log(story);
  // })


});
