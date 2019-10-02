import axios from 'axios';

class Characters{
    async getAll() {
      const data = await axios.get('https://character-database.becode.xyz/characters');
      return data;
    }
    //will be use later ...
    async getById(id) {
        const dataUniqe = await axios.get('https://character-database.becode.xyz/characters/:'+id);
        return dataUniqe;
    }
    //still working on it ...
    async deleteById(id) {
        const dataToDel = await axios.get('https://character-database.becode.xyz/DELETE/characters/:'+id);
        return dataToDel;
    }
}

const ch = new Characters();
const container = document.querySelector('#global');
ch.getAll().then(response=>{
    const chs = response.data;

    chs.forEach(ch => {
        let section = document.createElement('section');
        container.append(section);
        section.setAttribute('id', 'character');
        section.setAttribute('class', 'col-lg-3');

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
        shortDes.innerHTML = "<b>Short Description: </b>" + ch.shortDescription;
        

        let devBtns = document.createElement('div');
        section.append(devBtns);
        devBtns.setAttribute('class', 'btns col-lg-12');

        let viewLink = document.createElement('a');
        devBtns.append(viewLink);
        //viewLink.setAttribute('href', 'singlePage.html');
        viewLink.setAttribute('class', 'primary col-lg-4');

        let view = document.createElement('button');
        viewLink.append(view);
        view.setAttribute('id', ch.id);

        view.textContent = "More";
        let click = 0;

        let LinkClick = <HTMLElement>document.getElementById(ch.id);
        let longDes = document.createElement('div');
        section.append(longDes);
        longDes.setAttribute('class', 'l-des col-lg-12');

        LinkClick.addEventListener('click', ()=>{
            let getId = LinkClick.getAttribute('id');
            if(getId == ch.id)
            {    
                click++;
                
                if(click%2 == 0)
                {
                    LinkClick.textContent = "More";
                    longDes.innerHTML = "";
                }else
                {
                    longDes.innerHTML = "<b>Description : </b>"+ch.description;
                    LinkClick.textContent = "less";
                }
                
            } 
        });

        let editLink = document.createElement('a');
        devBtns.append(editLink);
        //editLink.setAttribute('href', 'singlePage.html');
        editLink.setAttribute('class', 'primary col-lg-4');

        let edit = document.createElement('button');
        editLink.append(edit);
        edit.setAttribute('id', ch.id);
        edit.textContent = "Edit";
        
        let delLink = document.createElement('a');
        devBtns.append(delLink);
        delLink.setAttribute('href', '');
        delLink.setAttribute('class', 'primary col-lg-4');

        let del = document.createElement('button');
        delLink.append(del);
        del.setAttribute('class', 'del');
        del.setAttribute('id', ch.id);
        del.textContent = "Delete";

    });
});

