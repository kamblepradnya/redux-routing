 import types from '../action_types';
const markCell = cellId => {
  return{
    type: types.MARK_CELL,
    payload: cellId,
  }
}

const onTodoSubmit = (todoName) => {
	return{
		type : 'CREATE_TODO',
		payload : todoName
	}
}
export {
  markCell,
  onTodoSubmit
};
