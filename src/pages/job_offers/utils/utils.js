import {useGetElapsedTime} from "../../../core/utils/calendar-functions.js";

const conf = {
    seconds: "segundos",
    minutes: "minutos",
    hours: "horas",
    days: "dias",
    weeks: "semanas",
    months: "meses",
    years: "años"
}
export const useCreateJobDescription = (job) => {
    const jobCreationTime = new Date(job.created);
    const elapsedTime = useGetElapsedTime(jobCreationTime, conf);
    return `${job.salary} ${job.currency} - ${job.title} - hace ${elapsedTime}`;
}