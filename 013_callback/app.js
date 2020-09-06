//basic callback

function callback_func(name, email, tasks) {
  console.log("hello", name);
  console.log("Mail : ", email);
  //using tasks param as a function
  tasks();
}
function taskDoe() {
  console.log("Task : Go to Market");
}
function taskMike() {
  console.log("Task : Go to Carwash");
}
callback_func("Doe", "doe@mail.com", taskDoe);
callback_func("Mike", "mike@mail.com", taskMike);
