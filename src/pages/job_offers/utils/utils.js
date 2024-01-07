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

export const reduceJob = (jobArrs) =>
    jobArrs.reduce((totalArr, jobArr, index) => {
        if (index === 0) {
            return totalArr;
        }
        return [...totalArr, {
            id: jobArr[0],
            title: jobArr[1],
            description: jobArr[2],
            address: jobArr[3],
            schedule: jobArr[4],
            schedule_notes: jobArr[5],
            salary: jobArr[6],
            salary_notes: jobArr[7],
            currency: jobArr[8],
            created: jobArr[9],
            phone: jobArr[10],
            cellphone: jobArr[11],
            email: jobArr[12],
            owner: jobArr[13]
        }]
    }, [])
