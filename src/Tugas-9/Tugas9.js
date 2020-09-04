import React, { Component } from "react";
import "./Tugas9.css";

class Tugas9 extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Form Pembelian Buah</h1>
          <div className="form-group">
            <table className="table-form">
              <tbody>
                <tr>
                  <td> Nama Pelanggan</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td> Daftar Item</td>
                  <td>
                    <div>
                      <input type="checkbox"></input>
                      <label>Semangka</label>
                    </div>
                    <div>
                      <input type="checkbox"></input>
                      <label>Jeruk</label>
                    </div>
                    <div>
                      <input type="checkbox"></input>
                      <label>Nanas</label>
                    </div>
                    <div>
                      <input type="checkbox"></input>
                      <label>Salak</label>
                    </div>
                    <div>
                      <input type="checkbox"></input>
                      <label>Anggur</label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button> Kirim </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Tugas9;
