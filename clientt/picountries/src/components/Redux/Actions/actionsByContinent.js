import { BYCONTINENT } from "./action-types";

export function byContinent(continent){
    return ({
            type: BYCONTINENT,
            payload:continent
    })
}