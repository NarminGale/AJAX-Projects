const URL = 'https://api.chucknorris.io/jokes/random'
const btn = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')

btn.addEventListener('click', async () => {
  try {
    const data = await fetch(URL)
    const response = await data.json()
    displayData(response)
  } catch (error) {
    console.log(error)
  }
})

function displayData({ value: joke }) {
  img.classList.add('shake-img')
  // const { value: joke } = JSON.parse(data)
  content.textContent = joke

  const random = Math.random() * 1000
  console.log(random)
  setTimeout(() => {
    img.classList.remove('shake-img')
  }, random)
}
