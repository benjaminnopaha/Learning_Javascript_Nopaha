import { createTaskManager } from "./TaskManager.js"

import { createEmailNotifier } from "./observers/EmailNotifier.js";
import { createSMSNotifier } from "./observers/SMSNotifier.js";
import { createUINotifier } from "./observers/UINotifier.js";

const taskManager = createTaskManager();

const email = createEmailNotifier();
const sms = createSMSNotifier();
const ui = createUINotifier();

taskManager.addObserver(email);
taskManager.addObserver(sms);
taskManager.addObserver(ui);

taskManager.addTask("Done with all projects for the day!");