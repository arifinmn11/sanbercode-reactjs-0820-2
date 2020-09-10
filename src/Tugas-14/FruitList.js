import React, { useContext, useEffect } from "react";
import { FruitContext } from "./FruitContext";
import axios from "axios";

const FruitList = () => {
  const [fruit, setFruit, inputFruit, setinputFruit] = useContext(FruitContext);

  useEffect(() => {
    if (fruit.length === 0) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          if (res.status === 200) {
            setFruit(res.data);
          } else {
            console.log("fail");
          }
        });
    }
  });

  const handleEdit = (e) => {
    var fruitID = parseInt(e.target.value);
    var dataFruit = fruit.find((x) => x.id === fruitID);
    setinputFruit({
      id: dataFruit.id,
      name: dataFruit.name,
      price: dataFruit.price,
      weight: dataFruit.weight,
    });
  };

  const handleDelete = (e) => {
    var fruitID = parseInt(e.target.value);
    var dataFruit = fruit.filter((x) => x.id !== fruitID);

    axios
      .delete(
        `http://backendexample.sanbercloud.com/api/contestants/${fruitID}`
      )
      .then((res) => {
        setFruit([...dataFruit]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <table className="table-tugas14">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Berat</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {fruit.map((el, i) => {
          return (
            <tr key={el.id}>
              <td> {i + 1} </td>
              <td> {el.name}</td>
              <td> {el.weight / 1000} kg</td>
              <td> {el.price}</td>
              <td style={{ textAlign: "center" }}>
                <button
                  value={el.id}
                  style={{ marginRight: "5px" }}
                  onClick={handleEdit}
                >
                  Edit
                </button>
                <button value={el.id} onClick={handleDelete}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default FruitList;
