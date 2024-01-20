const monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const getMonth = (date: Date) => monthNames[date.getMonth()];

export const getNextDay = (date: Date) => {
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);

    return nextDate;
}

export const getPrevDay = (date: Date) => {
    const prevDate = new Date(date);
    prevDate.setDate(date.getDate() - 1);

    return prevDate;
}

export const formatDateShort = (date: Date) => {
    return `${date.getDate()} ${getMonth(date)}`;
}

export const formatDateFull = (date: Date) => {
   return `${date.getDate()} ${getMonth(date)} ${date.getFullYear()}`;
}