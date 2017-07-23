// https://judge.softuni.bg/Contests/Compete/Index/699#2
class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;       // JS Date object
        this.status = 'Open';           // "Open", "In Progress" or "Complete"
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (value < Date.now()) {
            throw new Error('Deadline is set to a past date.');
        }
        this._deadline = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get isOverdue() {
        return this.deadline < Date.now() && this.status !== 'Complete';
    }

    static comparator(a, b) {
        let isOverdueA = (a.isOverdue) ? 1 : -1;
        let isOverdueB = (b.isOverdue) ? 1 : -1;

        let inProgressStatusA = (a.status === 'In Progress') ? 1 : -1;
        let inProgressStatusB = (b.status === 'In Progress') ? 1 : -1;

        let openStatusA = (a.status === 'Open') ? 1 : -1;
        let openStatusB = (b.status === 'Open') ? 1 : -1;

        let completeStatusA = (a.status === 'Complete') ? 1 : -1;
        let completeStatusB = (b.status === 'Complete') ? 1 : -1;

        if (a.status === b.status || a.isOverdue === b.isOverdue) {
            return a.deadline.getTime() - b.deadline.getTime();
        }

        if (isOverdueA > isOverdueB) return -1;
        if (isOverdueA < isOverdueB) return 1;
        if (inProgressStatusA > inProgressStatusB) return -1;
        if (inProgressStatusA < inProgressStatusB) return 1;
        if (openStatusA > openStatusB) return -1;
        if (openStatusA < openStatusB) return 1;
        if (completeStatusA > completeStatusB) return -1;
        if (completeStatusA < completeStatusB) return 1;

        return 0;
    }

    toString() {
        let result = '[' + this.statusIcon + '] ' + this.title + ' ';
        if (this.isOverdue) {
            result += '(overdue)';
        } else if (this.status === 'Complete') {
            // do not print anything after the title
        } else {
            result += '(deadline: ' + this.deadline + ')';
        }
        return result;
    }

    get statusIcon() {
        if (this.isOverdue) {
            return "\u26A0";
        }
        if (this.status === 'Open') {
            return "\u2731";
        }
        if (this.status === 'In Progress') {
            return "\u219D";
        }
        if (this.status === 'Complete') {
            return "\u2714";
        }

        return '';
    }
}


let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = 'Complete';
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => { 
    tasks.sort(Task.comparator); 
    console.log(tasks.join('\n'));
 }, 1000); // Sort and print one second later

// should throw an Error
/*let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
task1.deadline = new Date(2005, '4', '20');

*/

