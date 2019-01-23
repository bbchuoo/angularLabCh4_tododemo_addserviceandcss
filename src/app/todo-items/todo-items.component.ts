import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../shared/todo-item';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

    constructor(private todoListService: TodoListService) { }
    ngOnInit() {
    }
  
    getTodoList() {
      return this.todoListService.getTodoList();
    }
  
    itemClick(item: TodoItem) {
      this.todoListService.toogleItemStatus(item);
    }
  
    delete(item: TodoItem) {
      this.todoListService.deleteItem(item);
    }

}
