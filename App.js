function loadAuthorName(){
    let parentElement=document.getElementById('author-card');
    fetch('https://inshorts.deta.dev/news?category=science').then((respond)=>{
      return respond.json();
    }).then((res)=>{
      for(let obj of res.data){
        // author name
        let authorElement = document.createElement('p');
        let authorNode = document.createTextNode("by "+obj['author']);
        authorElement.appendChild(authorNode);
        parentElement.appendChild(authorElement);
        // content
        let headingElement = document.createElement('p');
        let textNode = document.createTextNode(obj['content']);
        headingElement.appendChild(textNode);
        parentElement.appendChild(headingElement);
      }
    })
  }
  loadAuthorName();
