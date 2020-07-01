let isCalled = false,
  timer;

const Throttling = (functionTobeCalled, interval = 600) => {
  if (!isCalled) {
    isCalled = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      isCalled = false;
    }, interval);
    return functionTobeCalled();
  }
};

export default Throttling;
