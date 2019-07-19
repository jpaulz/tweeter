$(()=> {
  const createTweetElement = function(tweet) {
    const $article = $("<article>").addClass("tweet");
    const $header = $("<header>");
    $article.append($header);
    
    const $div = $("<div>").addClass("profile-image");
    $header.append($div);

    const $p = $("<p>").addClass("name").text(tweet.user.name);
    $header.append($p);

    const $span = $("<span>").addClass("username").text(tweet.user.handle);
    $header.append($span);

    const $div1 = $("<div>").addClass("tweet-content").text(tweet.content.text);
    $article.append($div1);

    const $footer = $("<footer>");
    $article.append($footer);

    const $span1 = $("<span>").addClass("date").text(tweet.created_at);
    $footer.append($span1);

    const $div2 = $("<div>").addClass("tweet-actions");
    $footer.append($div2);

    const $a = $("<a>&#9873</a>");
    $div2.append($a);

    const $a1 = $("<a>&#9850</a>");
    $div2.append($a1);

    const $a2 = $("<a>&#10084</a>");
    $div2.append($a2);

    $("#all-tweets").append($article);
    return $article;
  };

  const tweetData = [
  ];
  
  
  const renderTweets = function(tweets) {
    $("#all-tweets").empty();
    for (let tweet of tweets) {
      const $article = createTweetElement(tweet);
      $("#all-tweets").append($article);
    }
  };
  renderTweets(tweetData);

  $("#create-new-tweet").submit(function(event) {
    event.preventDefault();
    console.log("thing", $("#create-new-tweet textarea").val());
    if ($("#create-new-tweet textarea").val().length <= 0) {
      alert("Your tweet is empty!");
    } else if ($("#create-new-tweet textarea").val().length > 140) {
      alert("Your tweet is too loooong!");
    } else {
      event.preventDefault();
      $.post("/tweets", $(this).serialize(), (data, status) =>  {
        $("#create-new-tweet textarea").val("");
        loadTweets();
      });
      console.log($(this).serialize());
    }
  });


  const loadTweets = function() {

    $.ajax("/tweets", {method: "GET"})
      .then(renderTweets);
  };
  loadTweets();

});