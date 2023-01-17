const newdiv = document.querySelector('.main');
const newpost = async () => {

  const response2 = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data2 = await response2.json();
  let js = localStorage.getItem("users");
  let postda = JSON.parse(js)
  let finalpost = data2.filter(k => k.userId === postda.id);
  for (let i = 0; i <= finalpost.length - 1; i++) {
    let newsec = document.createElement("SECTION");
    let uesr1 = document.createElement('h1');
    const img1 = document.createElement('img');
    newsec.appendChild(img1);
    newsec.appendChild(uesr1);
    let uesr2 = document.createElement('h4');
    newsec.appendChild(uesr2);
    uesr2.innerText = `@${postda.username}`;
    let pa = document.createElement('p');
    let hr1 = document.createElement('hr');
    let com = document.createElement('TEXTAREA');
    let comico = document.createElement('i');
    pa.setAttribute("id", `${finalpost[i].id}`);
    img1.setAttribute("src", "pc.svg");
    img1.setAttribute("id", "edimg");
    com.setAttribute("type", "text");
    com.setAttribute("id", "textarea1");
    comico.setAttribute("class", "fa fa-comment-o");
    comico.setAttribute("id", "sss");

    com.setAttribute("placeholder", "Add Comment....");
    newsec.appendChild(com);
    newdiv.appendChild(newsec);
    uesr1.innerText = postda.name;
    newsec.appendChild(pa);
    newsec.appendChild(hr1);
    newsec.appendChild(com);
    newsec.appendChild(comico);
    pa.innerText = finalpost[i].body;
  }

  const newpost1 = document.querySelector('button')
  const newpost2 = document.querySelector('.modal')
  newpost1.addEventListener('click', function () {
    newpost2.style.display = ''
    newpost2.style.display = 'block'

  })
  const enpost = document.querySelector('#endpo');
  const entext = document.querySelector('#textpo');
  const afterenn = document.querySelector('#what')

  enpost.addEventListener('click', function () {
    s = entext.value
    if (s !== "") {
      newpost2.style.display = 'none'
      s = entext.value
      const newsec = document.createElement("SECTION");
      const img1 = document.createElement('img');
      const uesr1 = document.createElement('h1');
      const uesr2 = document.createElement('h4');
      const pa = document.createElement('p');
      const hr1 = document.createElement('hr');
      const com = document.createElement('TEXTAREA');
      afterenn.insertAdjacentElement("afterend", newsec);
      newsec.appendChild(img1);
      newsec.appendChild(uesr1);
      newsec.appendChild(uesr2);
      newsec.appendChild(pa);
      newsec.appendChild(hr1);
      newsec.appendChild(com);
      img1.setAttribute("src", "pc.svg");
      img1.setAttribute("id", "edimg");
      uesr1.innerText = postda.name;
      uesr2.innerText = `@${postda.username}`;
      pa.innerText = s;
      com.setAttribute("type", "text");
      pa.setAttribute("id", "textarea1");
      com.setAttribute("placeholder", "Add Comment....");
      entext.value = '';
    }
  })
  const newcom = document.querySelectorAll('#textarea1');

  newcom.forEach(box => {
    box.addEventListener('keypress', function (e) {
      const q = box.value;
      if (e.key === 'Enter') {
        e.preventDefault()
        if (q !== "") {
        const newsec2 = document.createElement("section");
        const img1 = document.createElement('img');
        const uesr1 = document.createElement('h1');
        const uesr2 = document.createElement('h4');
        const compa = document.createElement('p');
        box.insertAdjacentElement("beforebegin", newsec2);
        uesr1.innerText = postda.name;
        uesr2.innerText = `@${postda.username}`;
        compa.innerText = q;
        img1.setAttribute("src", "pc.svg");
        img1.setAttribute("id", "edimg");
        newsec2.appendChild(img1);
        newsec2.appendChild(uesr1);
        newsec2.appendChild(uesr2);
        newsec2.appendChild(compa);
        box.value = '';
        }
      }
    })
  });

  const showpo = document.querySelectorAll('section p')
  showpo.forEach(showw => {
    showw.addEventListener('click', function () {
      let re = showw.id
      let newpo = showw.innerText;
      let myco = JSON.stringify(re)
      let myco2 = JSON.stringify(newpo)
      localStorage.setItem('postid', myco)
      localStorage.setItem('postvl', myco2)
      window.location.href = "./index3.html";

    })
  })
}
newpost();

