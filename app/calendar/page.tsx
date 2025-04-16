import React from "react";
import { Card, Grid, Dialog, Flex, TextField } from "@radix-ui/themes"
import { DayData, printOutMonths } from '@/app/dateTime';

const TrainingBlock = () => {
    /**
     * state -> [
     * {
     *  date: string/Date,
     *  focus: string,
     *  exercises: [
     *          {name: string, sets: number, reps: number}
     *      ]
     * },
     * ...]
     */


    /**
     * 
     */


    return (<div>
        <main className="m-4">
        <h4>Training Calendar</h4>
        <section>
            <h3 className="text-4xl mb-3">March</h3>
            <Grid columns="7" gap="2" rows="repeat(2, auto)" width="auto">
        {printOutMonths().map((d: DayData, index: number) => (
        <Dialog.Root key={index}>
            <Dialog.Trigger>
                <Card asChild className="mb-2 cursor-pointer bg-sky-500 hover:bg-sky-700">
                    <h4 className="text-lg font-medium">{d.dayOfWeek} {d.dayOfMonth}</h4>
                </Card>
            </Dialog.Trigger>
            <Dialog.Content>
                <Dialog.Title>
                    Training Day
                </Dialog.Title>
                <Dialog.Description>
                    Add your exercises below:
                </Dialog.Description>
                <Flex>
                    <label htmlFor="">Add Exercise Focus
                    <TextField.Root defaultValue="Focus" />
                    </label>
                    <label htmlFor="">Add Exercise
                    <TextField.Root defaultValue="Exercise" />
                    </label>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
        ))}
        </Grid>
        </section>
    </main>
        
    </div>)
}

export default TrainingBlock;
