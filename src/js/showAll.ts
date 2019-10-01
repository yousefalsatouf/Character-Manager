import axios from 'axios';

class Characters{
    async asyncMethod() {
      const data = await axios.get('https://character-database.becode.xyz/characters');
      return data;
    }
}

const ch = new Characters();
const container = document.querySelector('.container');

ch.asyncMethod().then(response=>{
    const chs = response.data;

    chs.forEach(ch => {
        let section = document.createElement('section');
        container.append(section);
        section.setAttribute('id', 'character');
        section.setAttribute('class', 'col-lg-5');

        let devImg = document.createElement('div');
        section.append(devImg);
        devImg.setAttribute('class', 'img col-lg-12');
        let img = document.createElement('img');
        devImg.append(img);
        img.setAttribute('src', "data:image/png;base64,"+ch.image);
        let devName = document.createElement('div');
        section.append(devName);
        devName.setAttribute('class', 'title col-lg-12');
        let name = document.createElement('h2');
        devName.append(name);
        name.textContent = ch.name;

        let devShortDes = document.createElement('div');
        section.append(devShortDes);
        devShortDes.setAttribute('class', 'des col-lg-12');
        let shortDes = document.createElement('p');
        devShortDes.append(shortDes);
        shortDes.textContent = ch.shortDescription;
        let devBtns = document.createElement('div');
        section.append(devBtns);
        devBtns.setAttribute('class', 'btns col-lg-12');

        let view = document.createElement('button');
        devBtns.append(view);
        view.setAttribute('class', 'primary col-lg-3');
        view.textContent = "View";
        let edit = document.createElement('button');
        devBtns.append(edit);
        edit.setAttribute('class', 'primary col-lg-3');
        edit.textContent = "Edit";
        
        let del = document.createElement('button');
        devBtns.append(del);
        del.setAttribute('class', 'del col-lg-3');
        del.textContent = "Delete";
        console.log(ch);

    });
});

