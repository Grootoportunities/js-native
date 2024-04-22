function DeleteUserAction(userID) {
  this.type = "DELETE-USER";
  this.userID = userID;
}

const action = new DeleteUserAction(1);
const action2 = new DeleteUserAction(2);

console.log(action);
console.log(action2);
