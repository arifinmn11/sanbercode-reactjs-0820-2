import React, { Component } from "react";
import "./Tugas10.css";

var dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

class TBody extends Component {
  render() {
    return (
      <tr>
        <td> {this.props.nama} </td>
        <td> {this.props.harga} </td>
        <td> {this.props.berat / 1000} kg</td>
      </tr>
    );
  }
}

class Tugas10 extends Component {
  render() {
    return (
      <div>
        <table className="table-tugas10">
          <thead>
            <tr>
              <th> Name </th>
              <th> Harga </th>
              <th> Berat </th>
            </tr>
          </thead>
          <tbody>
            {dataHargaBuah.map((element, i) => {
              return (
                <TBody
                  nama={element.nama}
                  harga={element.harga}
                  berat={element.berat}
                  key={i}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tugas10;
