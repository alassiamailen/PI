import { FILTER_COUNTRIES_BY_ACTIVITIES } from "./action-types";

export function filterCountriesByActivities(activity){

return({
    type:FILTER_COUNTRIES_BY_ACTIVITIES,
    payload:activity
})
}