const Ex03 = () => {
  const a = 10 > 2 && "aaa";
  const b = 10 < 2 && "bbb";

  const num = null;
  const result = num || "결과";
  const num1 = 100;
  const result1 = num1 || "결과";

  const doA = (num) => {
    console.log(typeof num);
    const formatNum =
      typeof num === "number" ? num.toLocaleString() : "숫자가 아님";
    return formatNum;
  };

  console.log(doA(1300));
  console.log(doA("1300"));

  return (
    <div>
      <h1>formatNum = {doA(1300)}</h1>
      <h1>formatNum = {doA("1300")}</h1>

      <h2>a = {a}</h2>
      <h2>b = {b}</h2>
      <h3>{`result = ${result} result1 = ${result1}`}</h3>
    </div>
  );
};

export default Ex03;
