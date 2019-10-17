// Copyright IBM Corp. 2018,2019. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { Entity, model, property, belongsTo } from '@loopback/repository';
import { TodoList, TodoListWithRelations } from './todo-list.model';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;

  @property({
    type: 'string',
  })

  @belongsTo(() => TodoList)
  todoListId: number;
  remindAtAddress?: string; // address,city,zipcode

  // TODO(bajtos) Use LoopBack's GeoPoint type here
  @property({
    type: 'string',
  })
  remindAtGeo?: string; // latitude,longitude

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
  todoList?: TodoListWithRelations;
}

export type TodoWithRelations = Todo & TodoRelations;
