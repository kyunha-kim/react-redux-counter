enum ActionType {
  FETCH_POSTS = "FETCH_POSTS",
  DELETE_POSTS = "DELETE_POSTS",
}

export interface Post {
  userId: number;
  id: number;
  title: string;
}

interface Action {
  type: ActionType;
  payload: Post[];
}

const todos = (state = [], action: Action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default todos;
