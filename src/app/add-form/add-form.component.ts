import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {

  constructor(private todoListService: TodoListService){

  }
   addTodo($event){
      this.todoListService.addTodo(this.todoText);
    }
    
    placeholderText = "請在此輸入待辦事項";
    
    todoText = ''
  


}
