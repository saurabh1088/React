
/*
DailyHabitWithProps uses props without object destructuring. Key value pair passed to DailyHabitWithProps will be accessible
from props object as shown in example below.

<DailyHabitWithProps title={'Daily Habit'} description={'One must have some good daily habits'}/>
OR
<DailyHabitWithProps title='Daily Habit' description='One must have some good daily habits'/>
 */
export default function DailyHabitWithProps(props: {
    title: string;
    description: string;
}) {
    return <article>
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        <button>Add</button>
    </article>
}

export function DailyHabitWithObjectDestructuring({title, description}: {
    title: string;
    description: string;
}) {
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </article>
}