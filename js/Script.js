"use strict";

// --------------------
// Splash Screen Script
// --------------------
const countdown = document.getElementById("countdown");

if (countdown) {
  let timeLeft = 4;

  const timer = setInterval(() => {
    timeLeft--;

    if (timeLeft > 0) {
      countdown.textContent =
        "Entering site in " + timeLeft + " seconds...";
    } else {
      clearInterval(timer);
      window.location.href = "home.html";
    }
  }, 1000);
}

function skipIntro() {
  window.location.href = "home.html";
}

// ------------------------------
// Action Impact Simulator Script
// ------------------------------
const actionCards = document.querySelectorAll(".action-card");
const totalScoreText = document.getElementById("total-score");
const impactLevelText = document.getElementById("impact-level");
const aisPage = document.querySelector(".ais-page");

if (
  actionCards.length > 0 &&
  totalScoreText &&
  impactLevelText &&
  aisPage
) {
  let totalScore = 0;

  actionCards.forEach((card) => {
    const button = card.querySelector(".select-btn");

    if (!button) return;

    button.addEventListener("click", () => {
      const points =
        parseInt(card.getAttribute("data-points")) || 0;

      if (!card.classList.contains("selected")) {
        card.classList.add("selected");
        totalScore += points;
        button.textContent = "Selected";
      } else {
        card.classList.remove("selected");
        totalScore -= points;
        button.textContent = "Select";
      }

      if (totalScore < 0) totalScore = 0;

      totalScoreText.textContent =
        "Total Score: " + totalScore;

      if (totalScore <= 5) {
        impactLevelText.textContent =
          "Impact Level: Low";
        aisPage.style.backgroundImage =
          "url('images/low.jpg')";
      } 
      else if (totalScore <= 12) {
        impactLevelText.textContent =
          "Impact Level: Medium";
        aisPage.style.backgroundImage =
          "url('images/medium.jpg')";
      } 
      else {
        impactLevelText.textContent =
          "Impact Level: High";
        aisPage.style.backgroundImage =
          "url('images/high.jpg')";
      }
    });
  });
}

// --------------------
// Feedback Form Script
// --------------------
const feedbackForm =
  document.getElementById("feedback-form");

const messageField =
  document.getElementById("message");

const charCount =
  document.getElementById("char-count");

const formMessage =
  document.getElementById("form-message");

if (messageField && charCount) {
  const maxLength =
    parseInt(messageField.getAttribute("maxlength")) || 0;

  messageField.addEventListener("input", () => {
    const remaining =
      maxLength - messageField.value.length;

    charCount.textContent =
      remaining + " characters remaining";
  });
}

if (feedbackForm) {

  feedbackForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const fullName =
      document.getElementById("fullName");

    const email =
      document.getElementById("email");

    const phone =
      document.getElementById("phone");

    const topic =
      document.getElementById("topic");

    const date =
      document.getElementById("date");

    const datetime =
      document.getElementById("datetime");

    const nameError =
      document.getElementById("name-error");

    const emailError =
      document.getElementById("email-error");

    const phoneError =
      document.getElementById("phone-error");

    const topicError =
      document.getElementById("topic-error");

    const dateError =
      document.getElementById("date-error");

    const datetimeError =
      document.getElementById("datetime-error");

    const messageError =
      document.getElementById("message-error");

    let isValid = true;

    // Clear errors
    const clearError = (field,error) => {
      if(error) error.textContent="";
      if(field) field.style.border =
        "1px solid #cfd8d3";
    };

    const setError = (field,error,msg) => {
      isValid = false;

      if(error)
        error.textContent = msg;

      if(field)
        field.style.border =
          "2px solid red";
    };

    clearError(fullName,nameError);
    clearError(email,emailError);
    clearError(phone,phoneError);
    clearError(topic,topicError);
    clearError(date,dateError);
    clearError(datetime,datetimeError);
    clearError(messageField,messageError);

    if(formMessage)
      formMessage.textContent="";

    // Name validation
    if (!fullName.value.trim()) {
      setError(
        fullName,
        nameError,
        "Please enter your full name."
      );
    }

    // Email validation
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.trim()) {
      setError(
        email,
        emailError,
        "Please enter your email."
      );
    }
    else if (!emailPattern.test(email.value)) {
      setError(
        email,
        emailError,
        "Enter a valid email."
      );
    }

    // Phone validation
    const phonePattern =
      /^[0-9+\s()-]{7,20}$/;

    if (!phone.value.trim()) {
      setError(
        phone,
        phoneError,
        "Enter phone number."
      );
    }
    else if (!phonePattern.test(phone.value)) {
      setError(
        phone,
        phoneError,
        "Invalid phone number."
      );
    }

    // Topic
    if (!topic.value) {
      setError(
        topic,
        topicError,
        "Select a topic."
      );
    }

    // Date
    if (!date.value) {
      setError(
        date,
        dateError,
        "Choose a date."
      );
    }

    // DateTime
    if (!datetime.value) {
      setError(
        datetime,
        datetimeError,
        "Choose date & time."
      );
    }

    // Message
    if (!messageField.value.trim()) {
      setError(
        messageField,
        messageError,
        "Enter a message."
      );
    }

    // Success
    if (isValid) {

      if(formMessage){
        formMessage.textContent =
          "Form submitted successfully!";
        formMessage.style.color = "green";
      }

      feedbackForm.reset();

      if(charCount)
        charCount.textContent = "";
    }

  });

}