# View Day Schedule

A horizontal timeline for displaying daily events. Handles overlapping events, a live "now" marker, and day navigation — no dependencies beyond React.

### **[View demo here](https://view-day-schedule.vercel.app/)**
To customise the styles to suit your preference refer to the code in the demo index.html page.


## Install via npm

```bash
npm install view-day-schedule
```

## Usage:

```js
import Scheduler from "./Scheduler";

const events = [
  { name: "Stand-up", date: new Date(2026, 6, 6, 9, 0) },
  { name: "Design review", date: new Date(2026, 6, 6, 10, 30) },
  { name: "Lunch", date: new Date(2026, 6, 6, 12, 0) },
];

export default function App() {
  return (
    <Scheduler
      events={events}
      onDateChange={(date) => console.log("Selected:", date)}
    />
  );
}
```


Note: This is a React port of **[vue-day-schedule](https://github.com/craigdanj/vue-day-schedule)**
