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

  $("#create-new-tweet").submit(function(event) {
    console.log("Handler for .submit() called.");
    event.preventDefault();
  });
  
  
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];


  
  // const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
 
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      const $article = createTweetElement(tweet);
      $("#all-tweets").append($article);
    }
  };
  renderTweets(tweetData);
});

