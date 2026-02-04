export interface Guide {
  id: string;
  name: string;
  status: string;
}

export const initialState = {
  guides: [] as Guide[]
};

export const guideReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "addGuide":
      return {
        ...state,
        guides: [...state.guides, action.payload]
      };

    case "updateGuideStatus":
      return {
        ...state,
        guides: state.guides.map(g =>
          g.id === action.payload.id
            ? { ...g, status: action.payload.status }
            : g
        )
      };

    default:
      return state;
  }
};
