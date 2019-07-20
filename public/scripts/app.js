$(()=> {
  const createTweetElement = function(tweet) {
    const $article = $("<article>").addClass("tweet");
    const $header = $("<header>");
    $article.append($header);

    const $div = $("<div>").addClass("profile-image");
    const $img = $("<img>").attr("src", tweet.user.avatars);
    $div.append($img);
    $header.append($div);

    const $p = $("<p>").addClass("name").text(tweet.user.name);
    $header.append($p);

    const $span = $("<span>").addClass("username").text(tweet.user.handle);
    $header.append($span);

    const $div1 = $("<div>").addClass("tweet-content").text(tweet.content.text);
    $article.append($div1);

    const $footer = $("<footer>");
    $article.append($footer);

    const $span1 = $("<span>").addClass("date").text(moment(tweet.created_at).fromNow());
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

  const tweetData = [];
  

  const renderTweets = function(tweets) {
    $("#all-tweets").empty();
    for (let tweet of tweets) {
      const $article = createTweetElement(tweet);
      $("#all-tweets").prepend($article);
    }
  };
  renderTweets(tweetData);


  $("#create-new-tweet").submit(function(event) {
    event.preventDefault();
    if ($("#create-new-tweet textarea").val().length <= 0) {
      $(".isa_error").text("Oops your tweet is too short!");
      toggleError("show");
    } else if ($("#create-new-tweet textarea").val().length > 140) {
      $(".isa_error").text("Tweet is too long. Limit is 140 characters.");
      toggleError("show");
    } else {
      event.preventDefault();
      toggleError("hide");
      $.post("/tweets", $(this).serialize(), (data, status) =>  {
        $("#create-new-tweet textarea").val("");
        $(".counter").text("140");
        loadTweets();
      });
    }
  });


  const loadTweets = function() {
    $.ajax("/tweets", {method: "GET"})
      .then(renderTweets);
  };
  loadTweets();


  $(".arrow-button").click(function() {
    $(".new-tweet").slideToggle("slow");
  });

  
  const toggleError = function(toggle) {
    if (toggle === "show") {
      $(".isa_error").slideDown("slow");
    } else {
      $(".isa_error").hide();
    }
  };
  toggleError("hide");
});


