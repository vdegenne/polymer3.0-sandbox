import { getApp } from "./server";

const app = getApp();

app.listen(3000, () => {
  console.log('app is listening');
});
