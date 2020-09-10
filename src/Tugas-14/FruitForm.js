import React, { useContext } from "react";
import { FruitContext } from "./FruitContext";
import axios from "axios";

const FruitForm = () => {
  const [fruit, setFruit, inputFruit, setinputFruit] = useContext(FruitContext);

  const handleChange = (e) => {
    let typeInput = e.target.name;
    switch (typeInput) {
      case "name": {
        setinputFruit({ ...inputFruit, name: e.target.value });
        break;
      }
      case "weight": {
        setinputFruit({ ...inputFruit, weight: e.target.value });
        break;
      }
      case "price": {
        setinputFruit({ ...inputFruit, price: e.target.value });
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputFruit.id) {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/fruits/${inputFruit.id}`,
          {
            name: inputFruit.name,
            price: inputFruit.price,
            weight: inputFruit.weight,
          }
        )
        .then((res) => {
          if (res.status === 200) {
            var updateFruit = fruit.find((x) => x.id === inputFruit.id);
            updateFruit.name = inputFruit.name;
            updateFruit.weight = inputFruit.weight;
            updateFruit.price = inputFruit.price;
            setFruit([...fruit]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .post("http://backendexample.sanbercloud.com/api/fruits", {
          name: inputFruit.name,
          price: inputFruit.price,
          weight: inputFruit.weight,
        })
        .then((res) => {
          var data = res.data;
          if (res.status === 201) {
            setFruit([
              ...fruit,
              {
                name: data.name,
                price: data.price,
                weight: data.weight,
              },
            ]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setinputFruit({ name: "", price: "", weight: "", id: null });
  };

  return (
    <div>
      <form style={{ margin: "20px 20px" }} onSubmit={handleSubmit}>
        <strong style={{ marginRight: "10px" }}>Nama</strong>
        <input
          required
          type="text"
          name="name"
          value={inputFruit.name}
          onChange={handleChange}
        />
        <br />
        <strong style={{ marginRight: "10px" }}>Harga</strong>
        <input
          required
          type="text"
          name="price"
          value={inputFruit.price}
          onChange={handleChange}
        />
        <br />
        <strong style={{ marginRight: "10px" }}>Berat</strong>
        <input
          required
          type="text"
          name="weight"
          value={inputFruit.weight}
          onChange={handleChange}
        />
        <br />
        <button>Save</button>
      </form>
    </div>
  );
};

export default FruitForm;
