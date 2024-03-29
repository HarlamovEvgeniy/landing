export const initialState = {
  isSticky: false,
  isSidebarSticky: true,
  isAuth: false
};

export function reducer(state, { type }) {
  switch (type) {
    case 'SET_USER': 
      return {
        ...state,
        isAuth: true,
      }
    case 'SET_STICKY':
      return {
        ...state,
        isSticky: true,
      };
    case 'REMOVE_STICKY':
      return {
        ...state,
        isSticky: false,
      };
    case 'SET_SIDEBAR_STICKY':
      return {
        ...state,
        isSidebarSticky: true,
      };
    case 'REMOVE_SIDEBAR_STICKY':
      return {
        ...state,
        isSidebarSticky: false,
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
