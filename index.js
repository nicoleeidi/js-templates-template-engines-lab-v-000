function createPost(){

}
function postComment() {
  var commenter = document.getElementById("comment").value;
  var comment = document.getElementById("commentText").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);
  var commentsDiv = document.getElementById("comments");
  var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });
  commentsDiv.innerHTML += templateHTML;
}
function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);

  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;

  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}