import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const url =
    "https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR";

  const fetchData = async () => {
    const fetchD = await fetch(url);
    const res = await fetchD.json();
    setData(res.coins);
  };
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Hello</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {data.map(({ name, price }) => {
          return (
            <>
              <tr>
                <td className="text-center">{name}</td>
                <td>{price}</td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Home;
