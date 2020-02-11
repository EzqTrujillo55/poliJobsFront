import React from "react";
import "../styles/SeeOfert.css";
import "../styles/App.css";
import Carrera from "../services/SearchCarrera";
import Tipo from "../services/SearchTipoOferta";
import Day from "../services/Searchday";
import Horario from "../services/SearchHorario";
import Time from "../services/SearchTime";
import Ofertas from "../services/ofertas";
import {Card, AutoComplete,Icon, Button, Tooltip} from 'antd';
class Createofert extends React.Component {
  state = {
    tarrCarrera: [],
    arrCarrera: [],
    tarrDay: [],
    arrDay: [],
    tarrTipo: [],
    arrTipo: [],
    tarrHorario: [],
    arrHorario: [],
    tarrTime: [],
    arrTime: [],
    nomEmpresa: "Wiam",
    conocimientos: "",
    descripcion: "",
    salario: "",
    tipo: "",
    tiempo: "",
    carreraRel: "",
    dias: "",
    tiempoHorarios: "",
    horarios: "2020-02-10T09:00:00+01:00"
  };

  handleChangeInput = ($e, input) => {
    const newState = {};
    newState[input] = $e.target.value;
    this.setState(newState);
    console.log(input, $e.target.value);
  };

  handleChange($e, input) {
    const newState = {};
    newState[input] = $e.target.value;
    this.setState(newState);
    console.log(input, $e.target.value);
  }

  crear = () => {
    Ofertas.createOfert(
      this.state.nomEmpresa,
      this.state.conocimientos,
      this.state.descripcion,
      this.state.salario * 1,
      this.state.tipo,
      this.state.tiempo,
      this.state.carreraRel,
      this.state.tiempoHorarios,
      this.state.dias,
      this.state.horarios
    );

    //Auth.login(this.state.usuario, this.state.pass);
  };

  async componentDidMount() {
    this.setState({ tarrCarrera: await Carrera.getCarrera() });
    this.setState({ arrCarrera: this.state.tarrCarrera["hydra:member"] });
    this.setState({ tarrDay: await Day.getDay() });
    this.setState({ arrDay: this.state.tarrDay["hydra:member"] });
    this.setState({ tarrTipo: await Tipo.getTipo() });
    this.setState({ arrTipo: this.state.tarrTipo["hydra:member"] });
    this.setState({ tarrHorario: await Horario.getHorario() });
    this.setState({ arrHorario: this.state.tarrHorario["hydra:member"] });
    this.setState({ tarrTime: await Time.getTime() });
    this.setState({ arrTime: this.state.tarrTime["hydra:member"] });
  }

  render() {
    return (
      <div className="crearOferta">
        <Card  title="Crear Ofertas" style={{ width: 400, marginLeft:"auto", marginRight:"auto", marginTop:"5%" }} extra={<Tooltip placement="top" title="Agregar Oferta"><Button onClick={this.crear}><Icon type="plus-circle" /></Button></Tooltip>}> 
          <div>
            <label className="Leters">Nombre empresa</label>
          </div>
          <div>
            <input
              onChange={e => this.handleChangeInput(e, "nomEmpresa")}
              size={50}
            />
          </div>
          <div>
            <label className="Leters">Conocimientos</label>
          </div>
          <div>
            <input
              onChange={e => this.handleChangeInput(e, "conocimientos")}
              size={50}
            />
          </div>
          <div>
            <label className="Leters">Descripcion</label>
          </div>
          <div>
            <input
              onChange={e => this.handleChangeInput(e, "descripcion")}
              size={50}
            />
          </div>
          <div>
            <label className="Leters">Salario</label>
          </div>
          <div>
            <input
              onChange={e => this.handleChangeInput(e, "salario")}
              size={50}
            />
          </div>

          <div>
            <label className="Leters">Tipo de oferta</label>
          </div>
          <div className="task-cards">
            <select onChange={e => this.handleChange(e, "tipo")} name="select">
              {this.state.arrTipo.map((item, index) => (
                <option value={item['@id']}>{item.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="Leters">Tipo Jornada</label>
          </div>
          <div>
            <select
              onChange={e => this.handleChange(e, "tiempo")}
              name="select"
            >
              {this.state.arrTime.map((item, index) => (
                <option value={item['@id']}>{item.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="Leters">Carrera Relacionada</label>
          </div>
          <div>
            <select
              onChange={e => this.handleChange(e, "carreraRel")}
              name="select"
            >
              {this.state.arrCarrera.map((item, index) => (
                <option value={item['@id']}>{item.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="Leters">Horario</label>
          </div>
          <div>
            <select 
              onChange={e => this.handleChange(e, "tiempoHorarios")}
              name="select"
            >
              {this.state.arrHorario.map((item, index) => (
                <option value={item['@id']}>{item.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="Leters">Dias</label>
          </div>
          <div>
            <select onChange={e => this.handleChange(e, "dias")} name="select">
              {this.state.arrDay.map((item, index) => (
                <option value={item['@id']}>{item.name}</option>
              ))}
            </select>
          </div>
          
            
          
          </Card>
          </div>
    );
  }
}
export default Createofert;
