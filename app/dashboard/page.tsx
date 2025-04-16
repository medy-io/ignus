import React from "react";
import { Card, Grid } from "@radix-ui/themes"
import { DayData, printOutCurrentWeek } from '@/app/dateTime';

const Dashbaord = () => {

    return (
    <main className="m-4">
        <section>
        <h3 className="text-4xl mb-3">March</h3>
        <Grid columns="4" gap="4" rows="repeat(2, auto)" width="auto">
        {printOutCurrentWeek().map((d: DayData, index: number) => (
        <Card className="mb-2" key={index}>
            <h4 className="text-lg font-medium">{d.dayOfWeek} {d.dayOfMonth}</h4>
                <section className="pt-4">
                    <h5 className="font-normal text-base">Focus: Strength</h5>
                    {index === 2 ? 
                    <ul>
                        <li>Yes</li>
                    </ul> : null}
                </section>
        </Card>))}
        </Grid>
        </section>
    </main>
    )
}

export default Dashbaord;