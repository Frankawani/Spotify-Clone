export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finnish developing
  //token:
  //  "BQAg-iEo608spRSeMtx9aEIXkKebLkHvdudWVW36bn19peQkhk340rqEwigJ_T1qPhWRgX89gLANHplVpEGhymi5nBnMKOi3r3E9CsGBdkz8zKOvASrJ5tEFG4t3FIIekLabm5hyo26Wj7GOwfQ_GnhaVcqWF16_jR_n4ieOJV5PNeypqUM5Pw2Gu8u-CJpYlWGkFqFbKnWCSL289Efg",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
