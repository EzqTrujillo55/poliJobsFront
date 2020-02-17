import React, {Component} from "react";
import {Link} from "react-router-dom";
import Ofertas from '../services/ofertas';
import {Modal} from 'antd';
class ListaOfertas extends Component {
    state={
        tarrOfertas:[],
        arrOfertas:[],
        aux:[]
    }
    
    async componentDidMount(){
        this.setState({tarrOfertas: await Ofertas.getOferta()})
        this.setState({arrOfertas: this.state.tarrOfertas['hydra:member']});
        console.log('listo' , this.state.arrOfertas);
    }

    showTareas=async(ofertaId)=>{
        const ofertas = this.state.arrOfertas;
        //console.log(this.state.arrTar);
        const detOfer = [];
        ofertas.forEach((oferta)=>{
            if(oferta.id==ofertaId){
             detOfer.push(oferta);
        }
        })
        this.setState({aux:detOfer})
        console.log(this.state.aux);
        this.setState({
            visible: true,
          });
    }

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

    render() {
        return (
            <div className="container">
                <div className="row pt-5">
                    {this.state.arrOfertas.map(i => {
                        return (
                            <div className="col-md-6 pt-5" key={i.id}>
                                <div className="card">
                                    <div className="card-header" align="center"><b>{i.NombreEmpresa}</b></div>
                                    <div className="card-footer">
                                        <div className="card-header">Conocimientos requeridos: {i.Conocimientos}</div>
                                        <Link className="btn btn-primary text-white" onClick={()=>this.showTareas(i.id)} >Mas informacion</Link>

                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <Modal
          title="Detalle de oferta"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
            >
          {this.state.aux.map((item)=>(
              <div>
                  
                  <p>Nombre Empresa: {item.NombreEmpresa}</p>
                  <p>Conocimientos Requeridos: {item.Conocimientos}</p>
                  <p>Salario: {item.Salario}</p>
                  <p>Descripción: {item.Descripcion}</p>
                  </div>
            ))}
           
        </Modal>
            </div>
        )
    }
}

export default ListaOfertas;