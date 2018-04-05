function getToken() {
  const now=new Date;
  return now.getTime();
}
console.log(getToken())