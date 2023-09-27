import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';
  bookName1: String = 'The Heaven'
  bookName2: String = 'War and Peace'

  isDisabled: boolean = false

  clickEvent(){
    // alert('Click event is working!!')
    console.log('working')
  }


  onInputEvent(event: any){
    console.log(event.target.value)
  }


  addToCart(event: any){
    alert(event.target.value + ' added successfully.')
    console.log(event.target.value)
  }

  name!: String;
}
