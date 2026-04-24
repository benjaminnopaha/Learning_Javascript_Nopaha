export function createEmailNotifier() {
  return {
    update(task) {
        setTimeout(() => {
            console.log(`Email: New task added → ${task}`);
        }, 3000);
    }
  };
}
