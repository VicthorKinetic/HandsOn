const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()


request.open('GET', 'http://stl4zd.tst.protheus.totvscloud.com.br:24135/rest/USERS?=00048', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  console.log(data)
  if (request.status >= 200 && request.status < 400) {
	  data.forEach(local => {
		  const card = document.createElement('tr')
		  card.setAttribute('class', 'card')

		  const h1 = document.createElement('th')
		  h1.textContent = local.resources.id
		  
		  const p = document.createElement('td')
		  p.textContent = `${local.resources.title}...`

		  container.appendChild(card)
		  card.appendChild(h1)
		  card.appendChild(p)
	  })
  } 
  else 
  {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()

/*const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()


request.open('GET', 'http://stl4zd.tst.protheus.totvscloud.com.br:24135/rest/ESTABLISHMENT', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  console.log(data)
  if (request.status >= 200 && request.status < 400) {
	  data.forEach(local => {
		  const card = document.createElement('tr')
		  card.setAttribute('class', 'card')

		  const h1 = document.createElement('th')
		  h1.textContent = local.COD_ESTAB_ERP

		  const p = document.createElement('td')
		  p.textContent = `${local.DES_ESTAB}...`

		  container.appendChild(card)
		  card.appendChild(h1)
		  card.appendChild(p)
	  })
  } 
  else 
  {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()*/