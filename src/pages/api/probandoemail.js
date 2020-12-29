export const userLogin = async ({ email }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@test.com") {
        reject();
      } else {
        resolve();
      }
    }, 3000);
  });
};
