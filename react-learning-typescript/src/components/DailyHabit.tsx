
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

/*
DailyHabitWithObjectDestructuring is similar to DailyHabitWithProps except one key difference that it uses object
destructuring instead of using props directly via dot notation.
Object destructuring is a feature in JavaScript that allows one to extract values from objects and assign those to variables 
in a more concise and readable way. Instead of accessing object properties using dot notation, one can use a syntax that 
looks similar to the object literal syntax.
This approach is fine but if there are a bunch of properties then it become complex and syntax also becomes too much to
handle and understand.
 */
export function DailyHabitWithObjectDestructuring({
    title, 
    description
}: {
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

type DailyHabitType ={
    title: string;
    description: string;
};

/*
DailyHabitWithCustomTypeDefinition is similar to DailyHabitWithObjectDestructuring except one key difference that it uses
concept of type and defines the properties as a type which can be used in declaration and also be used elsewhere thereby
removing the issue with complexity arising due to multiple properties and avoids code repetition.

Here type or interface any one of the way could have worked, for example if DailyHabitType was defined as an interface 
then also same funtion would have worked without any change.

interface DailyHabitType {
    title: string;
    description: string;
};

 */
export function DailyHabitWithCustomTypeDefinition({ title, description}: DailyHabitType) {
    return <article>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </article>
}