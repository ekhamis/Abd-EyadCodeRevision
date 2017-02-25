import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent /*implements OnInit - Eyad question: what is for?*/ {

    data = [
        { name: 'Udemy', password: 'Udemy123', url: 'www.udemy.com' },
        { name: 'GitHub', password: 'Git123', url: 'www.github.com' }
    ]

    add(webN: string, webP: string, webL: string) {
        if (webN === '' || webP === '' || webL === '') {
            alert('All fields must be completed')
        } else {
            let newUser = { name: webN, password: webP, url: webL }
            if (webN && webP) {
                this.data.push(newUser)
            };
            console.log(newUser)
            alert(newUser.name + ' was successfully added')
        }
    }

    edit(Ename: string, Epass: string, Eurl: string) {
        if (Ename === '' || Eurl === '') {
            alert('All fields must be completed')
        }
        for (let x of this.data) {
            if (Ename === x.name && Eurl === x.url) {
                if (Epass === '') {
                    alert('Enter the new password');
                } else {
                    x.password = Epass;
                    alert('Password Changed')
                    console.log('The new password is: ' + x.password);
                    console.log(JSON.stringify(this.data, null, `  `));
                    // }
                }
            }
        }
    }


    remove(deleteE: string) {
        if (deleteE === '') {
            alert('Which URl shall be removed?')
        }
        for (let i of this.data) {
            if (deleteE === i.url) {
                let retVal = confirm(`Are you sure?`);
                if (retVal === false) {
                    return false;
                } else {
                    this.data = this.data.filter(item => item.url !== deleteE);
                    alert(deleteE + ' was sucssesfully deleted');
                    console.log(JSON.stringify(this.data, null, `  `));
                }
            }
        }
    }

    tooglePasswords() {
        let x = document.getElementById('data-view');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }

        setTimeout(() => {
            x.style.display = 'none';
        }, 7000);

        // Eyad question: what are below functions used for?
        // constructor() { }

        // ngOnInit() {
        // }
    }
}
