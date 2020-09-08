import React, { Component } from "react";
import "./Tugas12.css";
class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      conditionForm: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.newInput = {
      nama: this.state.nama,
      harga: this.state.harga,
      berat: this.state.berat,
    };
    this.setState({
      dataHargaBuah: [...this.state.dataHargaBuah, this.newInput],
      nama: "",
      harga: "",
      berat: "",
    });
  }

  handleEdit(event) {
    event.preventDefault();
    this.index = event.target.name;
    const dataEdit = this.state.dataHargaBuah[this.index];
    this.setState({
      nama: dataEdit.nama,
      harga: dataEdit.harga,
      berat: dataEdit.berat,
      index: event.target.name,
      conditionForm: true,
    });
  }

  handleUpdate(event) {
    event.preventDefault();
    this.state.dataHargaBuah.splice(this.index, 1);
    let newInput = {
      nama: this.state.nama,
      harga: this.state.harga,
      berat: this.state.berat,
      index: this.state.index,
    };

    this.setState({
      dataHargaBuah: [...this.state.dataHargaBuah, newInput],
      nama: "",
      harga: "",
      berat: "",
      conditionForm: false,
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      nama: "",
      harga: "",
      berat: "",
      conditionForm: false,
    });
  }

  handleDelete(event) {
    event.preventDefault();
    const index = this.state.dataHargaBuah.indexOf(event.target.name);
    this.state.dataHargaBuah.splice(index, 1);
    this.setState({
      dataHargaBuah: this.state.dataHargaBuah,
    });
  }

  render() {
    const { nama, harga, berat } = this.state;
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Tabel Harga Buah</h1>
        <table className="table-tugas12">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.dataHargaBuah.map((val, index) => {
              return (
                <tr key={index}>
                  <td>{val.nama}</td>
                  <td>{val.harga}</td>
                  <td>{val.berat / 1000} Kg</td>
                  <td style={{ textAlign: "center" }}>
                    <button onClick={this.handleEdit} name={index}>
                      Edit
                    </button>
                    <button onClick={this.handleDelete} name={index}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <form
          onSubmit={
            this.state.conditionForm ? this.handleUpdate : this.handleSubmit
          }
          style={{ margin: "10px 20px" }}
        >
          <div style={{ margin: "10px 0" }}>
            <label>Masukkan buah:</label>
            <input
              type="text"
              name="nama"
              value={nama}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ margin: "10px 0" }}>
            <label>Masukan Harga</label>
            <input
              type="number"
              name="harga"
              value={harga}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ margin: "10px 0" }}>
            <label>Masukkan Berat:</label>
            <input
              type="number"
              name="berat"
              value={berat}
              onChange={this.handleChange}
            />
          </div>
          {this.state.conditionForm ? (
            <div>
              <button type="submit" value="Update">
                Update
              </button>
              <button onClick={this.handleCancel}> Cancel</button>
            </div>
          ) : (
            <button type="submit" value="Submit">
              Submit
            </button>
          )}
        </form>
      </>
    );
  }
}

class Tugas12 extends Component {
  render() {
    return (
      <>
        <Lists />
      </>
    );
  }
}

export default Tugas12;
