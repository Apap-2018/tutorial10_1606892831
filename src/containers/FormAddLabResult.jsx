import React from 'react';


export const FormAddLabResult = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Update Status Pasien</h2>
            <input type="hidden" name="id" value={props.pasien.id} />
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.pasien.nama} readOnly/>
            </div>
            <div className="form-group">
                <label>Tanggal Rujukan</label>
                <input type="date" className="form-control" name="tanggalRujukan" defaultValue={!props.pasien.tanggalRujukan ? "" : props.pasien.tanggalRujukan} readOnly/>
            </div>
            <div className="form-group">
                <label>Jenis</label>
                <input type="text" className="form-control" name="jenis"/>
            </div>
            <div className="form-group">
                <label>Hasil Lab<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="hasil"/>
            </div>
            <button className="btn btn-success" value="submit">Kirim</button>
        </form>
    )
}