const submit = document.querySelector(".main__magic__form-button");
const input = document.querySelector(".main__magic__form-input");
const answer = document.querySelector(".main__magic__ball-triangle__answer");
const error = document.querySelector(".main__magic__form-error");
const magicBall = document.querySelector(".main__magic__ball");
const eight = document.querySelector(".main__magic__ball-eight");
const triangle = document.querySelector(".main__magic__ball-triangle");

const answers = [
  "Без<br>сомнения",
  "Предрешено",
  "Никаких<br>сомнений",
  "Определённо<br>да",
  "Можешь<br>быть<br>уверен",
  "Хорошие<br>перспективы",
  "Скорее<br>всего",
  "Да",
  "Знаки<br>говорят — да",
  "Да",
  "Пока не ясно,<br> попробуй снова",
  "Спроси<br>позже",
  "Лучше<br>не<br>рассказывать<br>сейчас",
  "Нельзя<br>сейчас<br>предсказать",
  "Сконцентрируйся<br>и<br>спроси снова",
  "Не рассчитывай<br>на это",
  "Вряд ли",
  "Перспективы<br>не очень",
  "Нет",
  "Маловероятно",
];
const randomIndex = Math.floor(Math.random() * answers.length);


function getAnswer(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    answer.innerHTML = arr[randomIndex]
}

submit.addEventListener("click", () => {
  if (!input.value.trim()) {
    error.style.display = "inline";
  } else {
    error.style.display = "none";
    magicBall.classList.add("shake-animation");

    setTimeout(() => {
      magicBall.classList.remove("shake-animation");

      eight.classList.add("fade-hide");

      magicBall.classList.add("hide-before");

      setTimeout(() => {
        eight.style.display = "none";

        triangle.style.display = "flex";
        getAnswer(answers)

      }, 400);

    }, 2000);
  }
});
