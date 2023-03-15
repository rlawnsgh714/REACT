const Ex02 = ({ name, age }) => {
  //   const info = {
  //     name: "누시다",
  //     age: 30,
  //   };
  const hi = `이름 ${name} 나이 ${age}`;
  const list = [
    10,
    function () {
      return "test";
    },
  ];
  const [ele, ele2] = list;
  return (
    <div>
      <h1>{hi}</h1>
      <h2>{ele}</h2>
      <h3>{ele2()}</h3>
    </div>
  );
};

export default Ex02;
