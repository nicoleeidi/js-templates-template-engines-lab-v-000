function createPost(){

}
// function postComment() {
//   var commenter = document.getElementById("comment").value;
//   var comment = document.getElementById("commentText").value;
//   var commentTemplate = document.getElementById("comment-template").innerHTML; // same as below
//   var templateFn = _.template(commentTemplate); //same
//   var commentsDiv = document.getElementById("comments"); //same as below
//   var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter }); //same as below
//   commentsDiv.innerHTML += templateHTML; //same
// }
function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;
  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({ 'commenter': commenterName, 'comment': commentText });
}
