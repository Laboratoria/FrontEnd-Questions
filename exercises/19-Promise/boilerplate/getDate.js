function getDate() {
    console.log("NO es el mock");
    return new Promise((resolve, reject) => {
      const start = new Date(2012, 0, 1),
        end = new Date();
      setTimeout(() =>
        resolve(
          new Date(
            start.getTime() + Math.random() * (end.getTime() - start.getTime())
          )
        )
      );
    });
  }
  
  module.exports = { getDate };
  