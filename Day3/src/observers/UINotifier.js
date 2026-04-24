export function createUINotifier() {
  return {
    update(task) {
      setTimeout(() => {
            console.log(`UI updated with task: ${task}`);
        }, 4000);
    }
  };
}
