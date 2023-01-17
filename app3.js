let kk = localStorage.getItem("postid");
let gg = localStorage.getItem("postvl")
let js = localStorage.getItem("users");
let postda = JSON.parse(js)
let postda1 = JSON.parse(kk)
let postda2 = JSON.parse(gg)
const newdiv = document.querySelector('.main');
const newcomp = async () => {
  const response3 = await fetch(`https://jsonplaceholder.typicode.com/posts/${postda1}/comments`)
  const data3 = await response3.json();
  let newsec2 = document.createElement("SECTION");
  const img1 = document.createElement('img');
  let uesr2 = document.createElement('h1');
  let uesr3 = document.createElement('h4');
  let pa2 = document.createElement('p');
  let hr2 = document.createElement('hr');
  let com2 = document.createElement('TEXTAREA');
  pa2.setAttribute("id", `${postda1}`);
  img1.setAttribute("src", "pc.svg");
  img1.setAttribute("id", "edimg");
  pa2.innerText = postda2;
  uesr2.innerText = postda.name;
  uesr3.innerText = `@${postda.username}`;
  com2.setAttribute("placeholder", "Add Comment....");
  newdiv.appendChild(newsec2);
  newsec2.appendChild(img1);
  newsec2.appendChild(uesr2);
  newsec2.appendChild(uesr3);
  newsec2.appendChild(pa2);
  newsec2.appendChild(hr2);
  newsec2.appendChild(com2);
  data3.forEach(da => {
    let newsec3 = document.createElement("SECTION");
    const img1 = document.createElement('img');
    let ges1 = document.createElement('h4');
    let ges2 = document.createElement('h5');
    ges1.innerText = da.name;
    ges2.innerText = da.body;
    ges1.setAttribute("id", "edit2");
    ges2.setAttribute("id", "edit3");
    img1.setAttribute("src", "pc.svg");
    img1.setAttribute("id", "edimg");
    newdiv.append(newsec3);
    newsec3.appendChild(img1);
    newsec3.appendChild(ges1);
    newsec3.appendChild(ges2);
  });

}
newcomp();