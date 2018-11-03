export function displayReviews(data) {
  data.forEach(x => {
    const reviews = x.ratings;
    const uniqueId = x.place_id;
    const ul = document.querySelector(`#${uniqueId} .toggle-content`);
    reviews.forEach((r, i) => {
      const stars = r.stars;
      const comment = r.comment;
      const dataAtt = i;
      const li = document.createElement("li");
      li.setAttribute("data-index", i);
      li.innerHTML = `Stars: ${stars}. Comment: ${comment}`;

      li.classList.add("class", "review");
      ul.appendChild(li);
    });
    // select number of stars
    const commentStar = document.createElement('select');
    commentStar.setAttribute('id', 'comment-star-select');

    const option1 = document.createElement('option');
    option1.setAttribute('value', 'zero');
    option1.innerHTML = 'select stars';
    commentStar.appendChild(option1);

    const option2 = document.createElement('option');
    option2.setAttribute('value', 'one');
    option2.innerHTML = '*';
    commentStar.appendChild(option2);

    const option3 = document.createElement('option');
    option3.setAttribute('value', 'two');
    option3.innerHTML = '**';
    commentStar.appendChild(option3);

    const option4 = document.createElement('option');
    option4.setAttribute('value', 'three');
    option4.innerHTML = '***';
    commentStar.appendChild(option4);

    const option5 = document.createElement('option');
    option5.setAttribute('value', 'four');
    option5.innerHTML = '****';
    commentStar.appendChild(option5);

    const option6 = document.createElement('option');
    option6.setAttribute('value', 'five');
    option6.innerHTML = '*****';
    commentStar.appendChild(option6);

    ul.appendChild(commentStar)

    // create input element
    const addCommentLine = document.createElement('input');
    addCommentLine.placeholder = 'add comment';
    ul.appendChild(addCommentLine);

    const commentBtn = document.createElement('button');
    commentBtn.innerHTML = 'submit';
    ul.appendChild(commentBtn);
  });
}
