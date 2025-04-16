export interface CalendarObject {
    getDayOfMonth: (day: number) => Date;
    year: number;
    month: number;
    date: Date;
    today: number;
    numberOfDaysInMonth:  number;
}

export interface DayData {
    dayOfWeek: string, 
    month: string;
    dayOfMonth: string;
}

export function getDaysInMonth(): CalendarObject {
    const date = new Date();
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = new Date(y, (m + 1), 0);
    const t = date.getDate();
    return {
        getDayOfMonth: (day: number): Date => new Date(y, (m), day),
        year: y,
        month: m,
        date: d,
        today: t,
        numberOfDaysInMonth: d.getDate()
    }
}

export function printOutMonths(): DayData[] {
    const date = getDaysInMonth();
    const daysInMonth: DayData[] = [];
    for(let i = 1; i <= date.numberOfDaysInMonth; i++) {
        const loopDate = date
                            .getDayOfMonth(i)
                            .toString()
                            .split(' ');
        daysInMonth.push({
            dayOfWeek: loopDate[0], 
            month: loopDate[1],
            dayOfMonth: loopDate[2]
            });
    }
    return daysInMonth;
}

export function printOutCurrentWeek(): DayData[] {
    const date = getDaysInMonth();
    const daysInWeek: DayData[] = [];
    const startDate = date.today-4;
    for (let i = 1; i < 8; i++) {
      const loopDate = date.getDayOfMonth(startDate+i)
                        .toString()
                        .split(' ');
      daysInWeek.push({
        dayOfWeek: loopDate[0], 
        month: loopDate[1],
        dayOfMonth: loopDate[2]
        });
    }
    return daysInWeek;
  }