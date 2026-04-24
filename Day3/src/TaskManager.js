export function createTaskManager() {
  let tasks = [];
  let observers = [];

  function addObserver(observer) {
    observers.push(observer);
  }

  function removeObserver(observer) {
    observers = observers.filter(obs => obs !== observer);
  }

  function notifyObservers(task) {
    observers.forEach(observer => observer.update(task));
  }

  function addTask(task) {
    tasks.push(task);
    notifyObservers(task);
  }

  return {
    addObserver,
    removeObserver,
    addTask
  };
}
