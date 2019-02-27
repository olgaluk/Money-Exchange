module.exports = function makeExchange(currency) {
  const initialValue = currency;
  const boxValue = {};
  if (initialValue > 0 && initialValue < 10000) {
    boxValue.H = ~~(initialValue / 50);
    boxValue.Q = ~~((initialValue % 50)/25);
    boxValue.D = ~~(((initialValue % 50)%25)/10);
    boxValue.N = ~~((((initialValue % 50)%25)%10)/5);
    boxValue.P = ~~((((initialValue % 50)%25)%10)%5);
    for (let key in boxValue) {
      if (!boxValue[key]) {
        delete boxValue[key];
      }
    }
  }
  if (initialValue >= 10000) {
    boxValue.error = "You are rich, my friend! We don't have so much coins for exchange";
  }
  return boxValue;
}
