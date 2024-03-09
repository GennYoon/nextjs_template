interface CreateTodoDto {
  title: string;
}

interface UpdateTodoDto extends Partial<CreateTodoDto> {
  completed?: boolean;
}
