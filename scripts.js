const hello = document.getElementById("hello");

//console.Log(hello);

function greeting () {
  alert("Hello!");
  hello.textContent = "Bye";
}

hello.addEventListener("click", greeting);
