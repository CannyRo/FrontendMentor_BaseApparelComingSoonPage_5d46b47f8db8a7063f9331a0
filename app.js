function app() {
  //Get DOM variables and listener
  const formNode = document.getElementById("myForm");
  const inputNode = document.getElementById("myInput");
  const iconNode = document.getElementById("myIconError");
  const messageNode = document.getElementById("myError");
  // Message Error Container
  let message = "";
  // Run the sequence
  Init();
  // Functions
  function Init() {
    console.log("App on");
    message = "";
    getValue();
    submitForm();
  };
  function getValue() {
    formNode.addEventListener("change", (e) => {
      console.log(e.target.value);
    });
  };
  function isEmail(value) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
    if(value.match(emailRegex)){
        return true;
    } else {
        return false;
    }
  };
  function injectMessage(msg) {
    messageNode.textContent = msg;
  };
  function addClassError() {
    inputNode.classList.add("error--red");
    messageNode.classList.add("error--visible");
    iconNode.classList.add("error--visible");
  };
  function clearClassError() {
    inputNode.classList.contains("error--red") && inputNode.classList.remove("error--red");
    messageNode.classList.contains("error--visible") && inputNode.classList.remove("error--visible");
    iconNode.classList.contains("error--visible") && iconNode.classList.remove("error--visible");
  };
  function submitForm() {
    message = '';
    formNode.addEventListener("submit", (e) => {
      if(inputNode.value !== undefined && inputNode.value !== null && inputNode.value !== ''){
        if(!isEmail(inputNode.value)){
            e.preventDefault();
            message = "Oops! Please check your email";
            injectMessage(message);
            addClassError();
        } else {
            clearClassError();
            console.log("Request sended with success.");
        }
      }  else {
        e.preventDefault();
        message = "Oops! Please add your email";
        injectMessage(message);
        addClassError();
      }
    });
  };
}
window.addEventListener("load", app);
