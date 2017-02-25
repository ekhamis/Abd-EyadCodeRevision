import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-form',
    templateUrl: './add-form.component.html',
    styles: []
})
export class AddFormComponent implements OnInit {

    add(name: string, password: string, url: string) {
        if (name === '' || password === '' || url === '') {
            alert('All fields must be completed');
        } else {
            let newUser = { name: name, password: password, url: url };
            if (name && password) { 
                this.data.push(newUser) };
            console.log(newUser);
            alert(newUser.name + ' was successfully added')
        }
    }

    constructor() { }

    ngOnInit() {
    }

}
