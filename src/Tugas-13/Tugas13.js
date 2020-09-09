import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Tugas13.css";
function Tugas13() {
  const [dataFruit, setdataFruit] = useState(null);
  const [inputData, setinputData] = useState({
    name: "",
    price: "",
    weight: "",
    id: null,
  });
  useEffect(() => {
    if (dataFruit === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setdataFruit(res.data);
        });
    }
  }, [dataFruit]);

  const submitForm = (e) => {
    e.preventDefault();
    if (inputData.id === null) {
      axios
        .post("http://backendexample.sanbercloud.com/api/fruits", {
          name: inputData.name,
          price: inputData.price,
          weight: inputData.weight,
        })
        .then((res) => {
          var data = res.data;
          if (res.status === 201) {
            setdataFruit([
              ...dataFruit,
              {
                name: data.name,
                price: data.price,
                weight: data.weight,
              },
            ]);
            setinputData({ name: "", price: "", weight: "", id: null });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/fruits/${inputData.id}`,
          {
            name: inputData.name,
            price: inputData.price,
            weight: inputData.weight,
          }
        )
        .then((res) => {
          var newData = dataFruit.map((x) => {
            if (x.id === inputData.id) {
              x.name = inputData.name;
              x.weight = inputData.weight;
              x.price = inputData.price;
            }
            return x;
          });
          setdataFruit(newData);
          setinputData({ name: "", price: "", weight: "", id: null });
        });
    }
  };

  const changeInputName = (e) => {
    var value = e.target.value;
    setinputData({ ...inputData, name: value });
    // console.log(inputData);
  };
  const changeInputPrice = (e) => {
    var value = e.target.value;
    setinputData({ ...inputData, price: value });
    // console.log(inputData);
  };
  const changeInputWeight = (e) => {
    var value = e.target.value;
    setinputData({ ...inputData, weight: value });
    // console.log(inputData);
  };
  const deleteFruit = (event) => {
    var fruitID = parseInt(event.target.value);
    axios
      .delete(
        `http://backendexample.sanbercloud.com/api/contestants/${fruitID}`
      )
      .then((res) => {
        console.log(res);
        var newData = dataFruit.filter((x) => x.id !== fruitID);
        setdataFruit(newData);
      });
  };

  const editForm = (e) => {
    var fruitID = parseInt(e.target.value);
    var fruit = dataFruit.find((x) => x.id === fruitID);
    setinputData({
      id: fruit.id,
      name: fruit.name,
      price: fruit.price,
      weight: fruit.weight,
    });
  };
  return (
    <>
      <div style={{ width: "70vw", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center" }}>Daftar Peserta Lomba</h1>
        <table className="table-tugas13">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataFruit !== null &&
              dataFruit.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.weight}</td>
                    <td style={{ textAlign: "center" }}>
                      <button
                        value={item.id}
                        style={{ marginRight: "5px" }}
                        onClick={editForm}
                      >
                        Edit
                      </button>
                      <button value={item.id} onClick={deleteFruit}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <br />
        <br />
        <form style={{ textAlign: "left" }} onSubmit={submitForm}>
          <strong style={{ marginRight: "10px" }}>Nama</strong>
          <input
            required
            type="text"
            value={inputData.name}
            onChange={changeInputName}
          />
          <br />
          <strong style={{ marginRight: "10px" }}>Harga</strong>
          <input
            required
            type="text"
            value={inputData.price}
            onChange={changeInputPrice}
          />
          <br />
          <strong style={{ marginRight: "10px" }}>Berat</strong>
          <input
            required
            type="text"
            value={inputData.weight}
            onChange={changeInputWeight}
          />
          <br />
          <button>Save</button>
        </form>
      </div>
    </>
  );
}

export default Tugas13;
