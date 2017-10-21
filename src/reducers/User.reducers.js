
const initialState = {
    name0:[] ,

    name1:[],
    name2:[],
    name3:[],
    name4:[],
    name5:[],
    name6:[],
    name7:[],
    name8:[],
    name9:[],
    name10:[],
    name11:[],
    name12:[],
    name13:[],
    name14:[],
    name15:[],
    name16:[],
    name17:[],
    name18:[],
    name19:[],
    name20:[],
    name21:[],
    name22:[],
    name23:[],
    name24:[],
    name25:[],
    name26:[],
    name27:[],
    name28:[],
    name29:[],
    name30:[],
    name31:[],
    name32:[],
    name33:[],
    name34:[],
    name35:[],
    name36:[],
    name37:[],
    name38:[],
    name39:[],
    name40:[],
    name41:[],
    name42:[],
    name43:[],
  pending: false,
  err: '',
  completed: false
}

const userReducers = (state = initialState, action) => {
  switch(action.type){

    case "SET_NAME_PENDING":
      break;
    case "SET_NAME_REJECTED":
      break;
    case "SET_NAME_FULFILLED":
      break;

    case "GET_NAME_PENDING":
      break;
      case "DEL_NAME_FULFILLED":
          state = {
              ...state,
              name0:[],
               name1:[],
              name2:[],
              name3:[],
              name4:[],
               name5:[],
              name6:[],
               name7:[],
              name8:[],
              name9:[],
               name10:[],
               name11:[],
               name12:[],
              name13:[],
              name14:[],
              name15:[],
               name16:[],
              name17:[],
              name18:[],
              name19:[],
              name20:[],
              name21:[],
               name22:[],
              name23:[],
              name24:[],
              name25:[],
              name26:[],
              name27:[],
               name28:[],
               name29:[],
              name30:[],
              name31:[],
               name32:[],
              name33:[],
              name34:[],
              name35:[],
              name36:[],
              name37:[],
              name38:[],
               name39:[],
              name40:[],
              name41:[],
              name42:[],
              name43:[],

              pending: false,
              err: '',
              completed: true
          }
          break;
    case "GET_NAME_FULFILLED":
      state = {
            ...state,

          name0: action.payload.data[0],
          name1: action.payload.data[1],
          name2: action.payload.data[2],
           name3: action.payload.data[3],
           name4: action.payload.data[4],
          name5: action.payload.data[5],
           name6: action.payload.data[6],
           name7: action.payload.data[7],
           name8: action.payload.data[8],
           name9: action.payload.data[9],
           name10: action.payload.data[10],
           name11: action.payload.data[11],
           name12: action.payload.data[12],
           name13: action.payload.data[13],
           name14: action.payload.data[14],
           name15: action.payload.data[15],
           name16: action.payload.data[16],
          name17: action.payload.data[17],
          name18: action.payload.data[18],
           name19: action.payload.data[19],
           name20: action.payload.data[20],
           name21: action.payload.data[21],
           name22: action.payload.data[22],
           name23: action.payload.data[23],
          name24: action.payload.data[24],
           name25: action.payload.data[25],
           name26: action.payload.data[26],
           name27: action.payload.data[27],
         name28: action.payload.data[28],
           name29: action.payload.data[29],
           name30: action.payload.data[30],
           name31: action.payload.data[31],
          name33: action.payload.data[33],
           name34: action.payload.data[34],
           name35: action.payload.data[35],
           name36: action.payload.data[36],
           name38: action.payload.data[38],
           name39: action.payload.data[39],
           name40: action.payload.data[40],
           name41: action.payload.data[41],
          name42: action.payload.data[42],
          name43: action.payload.data[43],



        pending: false,
        err: '',
        completed: true
      }
      break;

    case "GET_NAME_REJECTED":
      console.log(action);
      state = {
        ...state,
        pending: false,
        err: action.error,
        completed: false
      }
      break;
    default:
      break;
  }
  return state;
}

export default userReducers;
