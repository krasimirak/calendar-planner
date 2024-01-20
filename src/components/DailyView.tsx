import { getPrevDay, getNextDay, formatDateShort } from "../utils/calendarUtils";

interface DailyViewProps {
    date: Date
}

export default function DailyView(props: DailyViewProps) {
    const { date } = props;
    const prev = getPrevDay(date);
    const next = getNextDay(date);

    return (<>
        <h1>{formatDateShort(date)}</h1>
        <div className="two-columns">
            <div>
                <h2>To Do List</h2>

                <ul>
                    <li>Learn TypeScript</li>
                    <li>Meal prep</li>
                </ul>
            </div>

            <div>
                <h2>Habit Tracker</h2>

                <ul>
                    <li>Running</li>
                    <li>2L water</li>
                    <li>No alarm snooze</li>
                </ul>
            </div>

            <div>
                <h2>Shopping list</h2>

                <ul>
                    <li>pasta</li>
                    <li>fish</li>
                    <li>lemons</li>
                </ul>
            </div>
        </div>
        <div className="buttons-wrapper">
            <button>{formatDateShort(prev)}</button>
            <button>{formatDateShort(next)}</button>
        </div>
    </>);
}