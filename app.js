const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector("#btn");
const jokePara = document.querySelector("#joke");

async function getJokes() {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    let res = await axios.get(url, config);

    jokePara.innerText = res.data.joke;
  } catch (err) {
    jokePara.innerText = "Failed to load joke!";
    console.log("Error:", err);
  }
}

btn.addEventListener("click", getJokes);
