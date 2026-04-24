export function createSMSNotifier() {
  return {
    update(task) {
      setTimeout(() => {
            console.log(`SMS: New task → ${task}`);
        }, 2000);
    }
  };
}
