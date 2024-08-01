const userCardTemplate = document.querySelector("[data-user-template]")//4.
const userCardContainer = document.querySelector("[data-user-cards-container]")//13.
const searchInput = document.querySelector("[data-search]")//15.

let users = []//19.

searchInput.addEventListener("input", e => {//16.
  const value = e.target.value.toLowerCase()//17.
  //18.console.log(value) whatever we type in input box,it will be shown in console
  //21.console.log(users)
  users.forEach(user => {//23.
    const isVisible =//22.is the user supposed to be visible
      user.name.toLowerCase().includes(value) ||//24.if the leeter typed present either in mail or name,it
      //will be shown or filtered
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)//25.
  })
})

fetch("https://jsonplaceholder.typicode.com/users")//1.this is a fake api data generator
  .then(res => res.json())//2.res stands for reference
  .then(data => {//3.
    users = data.map(user => {//7.
      const card = userCardTemplate.content.cloneNode(true).children[0]//5.
      //6.console.log(card) it returns a document fragment.to use it, we have to give the first child
      //8.console.log(user)
      const header = card.querySelector("[data-header]")//9.
      const body = card.querySelector("[data-body]")//10.
      header.textContent = user.name//11.
      body.textContent = user.email//12.
      userCardContainer.append(card)//14.
      return { name: user.name, email: user.email, element: card }//20.
    })
  })
