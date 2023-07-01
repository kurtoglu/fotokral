import React, { useEffect, useState } from "react"
import { Button, Container, Row, Col } from "react-bootstrap";
import { Field, Form, Formik } from 'formik';

function gelendata(data){
    

}

function parseData(data) {
    const formData = new FormData();
    for (let [key, val] of Object.entries(data)) {
        formData.append(key, val);
    }
    return formData;
}

export default function RandevAl() {

    const [Lokasyon, setLokasyon] = useState(false)
    const [Kmodel, setKmodel] = useState(false)
    const [Ismodel, setIsmodel] = useState(false)
    const [flist, setFlist] = useState(false)

    useEffect(() => {
        fetch('http://localhost/fotokral/api.php?islem=lokasyon')
            .then(res => {
                return res.json()
            })
            .then(data => setLokasyon(data))
            .catch(res => console.log(res))

        fetch('http://localhost/fotokral/api.php?islem=kmodel')
            .then(res => {
                return res.json()
            })
            .then(data => setKmodel(data))
            .catch(res => console.log(res))
        fetch('http://localhost/fotokral/api.php?islem=ismodel')
            .then(res => {
                return res.json()
            })
            .then(data => setIsmodel(data))
            .catch(res => console.log(res))
        fetch('http://localhost/fotokral/api.php?islem=flist')
            .then(res => {
                return res.json()
            })
            .then(data => setFlist(data))
            .catch(res => console.log(res))

        
    }, [])








    return <Container>

        <Formik
            initialValues={{
                rid: '',
                adsoyad: '',
                gadsoyad: '',
                telefon: '',
                tarih: '',
                bas_saat: '',
                bit_saat: '',
                ismodel: '1',
                kanvas: '',
                film: '',
                drone: '',
                gece_cekimi: '',
                kmodel: '',
                lokasyon: '',
                firma: '',
            }}
            onSubmit={(values) => {

                fetch('http://localhost/fotokral/post.php', {
                    method: 'POST',
                    body: parseData(values)
                })
                    .then(res => { return res.json() })
                    .then(data => {
                        values.rid = data.rid;
                        values.adsoyad = data.adsoyad;
                        values.gadsoyad = data.gadsoyad;
                        values.telefon = data.telefon;
                        values.tarih = data.tarih;
                        values.bas_saat = data.bas_saat;
                        values.bit_saat = data.bit_saat;
                        values.ismodel = data.ismodel;
                        values.kanvas = data.kanvas;
                        values.film = data.film;
                        values.gece_cekimi = data.gece_cekimi;
                        values.kmodel = data.kmodel;
                        values.lokasyon = data.lokasyon;
                        values.firma = data.firma;
                        console.log(data.lokasyon)
                    })
                    .catch(error => console.log(error))
            }}
        >{({ values }) => (
            <Form>
                <Row>
                    <Col>
                        <h2>Müşteri Bilgileri</h2>
                        <Field name="rid" value={values.rid} type="hidden" />
                        <div className="input-group input-group-sm mb-1">
                            <span className="input-group-text col-3" id="ladsoyad">Adı Soyadı</span>
                            <Field value={values.adsoyad} name="adsoyad" type="text" className="form-control" aria-label="Ad Soyad" aria-describedby="ladsoyad" required />
                        </div>
                        <div className="input-group input-group-sm mb-1">
                            <span className="input-group-text col-3" id="lgelinad">Gelinin Adı</span>
                            <Field value={values.gadsoyad} name="gadsoyad" type="text" className="form-control" aria-label="Gelinin Adı" aria-describedby="lgelinad" />
                        </div>
                        <div className="input-group input-group-sm mb-1">
                            <span className="input-group-text col-3" id="ltelefon">Telefon</span>
                            <Field value={values.telefon} name="telefon" type="tel" className="form-control" aria-label="Telefon" aria-describedby="ltelefon" />
                        </div>
                        <div className="input-group input-group-sm mb-1">
                            <span className="input-group-text col-3" id="ltarih">Tarih</span>
                            <Field value={values.tarih} name="tarih" type="date" className="form-control" aria-label="Tarih" aria-describedby="ltarih" />
                            <Field value={values.bas_saat} name="bas_saat" type="time" className="form-control" aria-label="Saat" aria-describedby="lsaat" />
                            <Field value={values.bit_saat} name="bit_saat" type="time" className="form-control" aria-label="Saat" aria-describedby="lsaat" />
                        </div>
                        <div className="input-group input-group-sm mb-1">
                            <span className="input-group-text  col-3" id="lismodel">İş Modeli</span>
                            <Field value={values.ismodel} as="select" name="ismodel" className="form-select" id="ismodel" required>
                                <option value="">Seçiniz</option>
                                {Ismodel && Ismodel.map(l => (
                                    <option key={l.pval} value={l.pval}>{l.pad}</option>
                                ))}
                            </Field >
                        </div>


                    </Col>
                    <Col>
                        <h2>Albüm Bilgileri</h2>
                        <div className="input-group-text input-group-sm mb-1 py-2">
                            <div className="form-check form-check-inline form-switch">
                                <Field values={values.kanvas} name="kanvas" className="form-check-input" type="checkbox" role="switch" id="secKanvas" />
                                <label className="form-check-label" htmlFor="secKanvas">Kanvas</label>
                            </div>
                            <div className="form-check form-check-inline form-switch">
                                <Field values={values.film} name="film" className="form-check-input" type="checkbox" role="switch" id="secFilm" />
                                <label className="form-check-label" htmlFor="secFilm">Film</label>
                            </div>
                            <div className="form-check form-check-inline form-switch">
                                <Field values={values.drone} name="drone" className="form-check-input" type="checkbox" role="switch" id="secDron" />
                                <label className="form-check-label" htmlFor="secDron">Drone</label>
                            </div>
                            <div className="form-check form-check-inline form-switch">
                                <Field values={values.gece_cekimi} name="gece_cekimi" className="form-check-input" type="checkbox" role="switch" id="secGeceCekimi" />
                                <label className="form-check-label" htmlFor="secGeceCekimi">Gece Çekimi</label>
                            </div>
                        </div>

                        <div id="kmodel" className="input-group input-group-sm mb-1 " >
                            <span className="input-group-text  col-3" id="lkanvasmodel">Kanvas Modelleri</span>
                            <Field value={values.kmodel} as="select" name="kmodel" className="form-select" id="kanvasmodel">
                                <option value="">Seçiniz</option>
                                {Kmodel && Kmodel.map(l => (
                                    <option key={l.uid} value={l.uid}  >{l.urunad}</option>
                                ))}


                            </Field>
                        </div>

                        <div className="input-group  input-group-sm mb-1 ">
                            <span className="input-group-text  col-3" id="lil">Lokasyon {values.lokasyon} </span>
                            <Field value={values.lokasyon} as="select" name="lokasyon" className="form-select" id="il" >
                                <option value="">Seçiniz</option>
                                {Lokasyon && Lokasyon.map(l => (
                                    <option key={l.lid} value={l.lid}  >{l.lokasyon}</option>
                                ))}
                            </Field>
                        </div>
                        <div className="input-group input-group-sm mb-1 ">
                            <span className="input-group-text  col-3" id="lisalan">İşi Alan</span>
                            <Field value={values.firma} name="firma" type="text" list="isalanlist" className="form-control" aria-label="Tarih" aria-describedby="lisalan" />
                            <datalist id="isalanlist">
                                {flist && flist.map(l => (
                                    <option key={l.is_firma} value={l.is_firma}>{l.is_firma}</option>
                                ))}
                            </datalist>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex"> <Button type="submit">dfsdfsdf</Button>
                    </Col>

                </Row>
            </Form>
        )}
        </Formik >

    </Container >
}