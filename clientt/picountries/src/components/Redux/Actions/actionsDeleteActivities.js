import axios from "axios";
import { DELETE_ACTIVITIES } from "./action-types";

export function deleteActivities(id) {
  return async (dispatch) => {
    try {
      await axios.get(`http://localhost:3001/delete/${id}`);

      return dispatch({
        type: DELETE_ACTIVITIES,
        payload: id,
    })
      
    } catch (error) {
      console.log(error);
    }
  };
}
