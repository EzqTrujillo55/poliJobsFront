import React from 'react';
import '../styles/SeeOfert.css';
import '../styles/App.css';
import Carrera from "../services/SearchCarrera";
import Tipo from "../services/SearchTipoOferta";
import Day from "../services/Searchday";
import Horario from "../services/SearchHorario";
import Time from "../services/SearchTime";


class Createofert extends React.Component{
    state ={
        tarrCarrera:[],
        arrCarrera:[],
        tarrDay:[],
        arrDay:[],
        tarrTipo:[],
        arrTipo:[],
        tarrHorario:[],
        arrHorario:[],
        tarrTime:[],
        arrTime:[],

    };

    async componentDidMount(){
        this.setState({tarrCarrera: await Carrera.getCarrera()});
        this.setState({arrCarrera: this.state.tarrCarrera['hydra:member']});
        this.setState({tarrDay: await Day.getDay()});
        this.setState({arrDay: this.state.tarrDay['hydra:member']});
        this.setState({tarrTipo: await Tipo.getTipo()});
        this.setState({arrTipo: this.state.tarrTipo['hydra:member']});
        this.setState({tarrHorario: await Horario.getHorario()});
        this.setState({arrHorario: this.state.tarrHorario['hydra:member']});
        this.setState({tarrTime: await Time.getTime()});
        this.setState({arrTime: this.state.tarrTime['hydra:member']});
    }

    render(){
        return(
            <div className="SeeOfert" >
                <div className="ContenedorOfertas">
                    <h1 className="Leters" >Crear Ofertas</h1>
                    <div>
                        <label className="Leters">Nombre empresa</label>
                    </div>
                    <div>
                        <input size={50}/>
                    </div>
                    <div>
                        <label className="Leters">Conocimientos</label>
                    </div>
                    <div>
                        <input size={50}/>
                    </div>
                    <div>
                        <label className="Leters">Descripcion</label>
                    </div>
                    <div>
                        <input size={50}/>
                    </div>
                    <div>
                        <label className="Leters">Salario</label>
                    </div>
                    <div>
                        <input size={50}/>
                    </div>
                    <div>
                        <label className="Leters">Nombre empresa</label>
                    </div>
                    <div>
                        <input size={50}/>
                    </div>
                    <div>
                        <label className="Leters">Horario</label>
                    </div>
                    <div>

                        <input type="date" id="start" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </div>
                    <div>
                        <label className="Leters">Oferta</label>
                    </div>
                    <div className="task-cards">
                        <select name="select">
                            {this.state.arrTipo.map((item,index)=>(
                                <option value="value1">{item.name}</option>


                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="Leters">Tiempo</label>
                    </div>
                    <div>
                        <select name="select">
                            {this.state.arrTime.map((item,index)=>(
                                <option value="value1">{item.name}</option>


                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="Leters">Carrera Relacionada</label>
                    </div>
                    <div>
                        <select name="select">
                            {this.state.arrCarrera.map((item,index)=>(
                                <option value="value1">{item.name}</option>


                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="Leters">Tiempo Horarios</label>
                    </div>
                    <div>
                        <select name="select">
                            {this.state.arrHorario.map((item,index)=>(
                                <option value="value1">{item.name}</option>


                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="Leters">Dias</label>
                    </div>
                    <div>
                        <select name="select">
                            {this.state.arrDay.map((item,index)=>(
                                <option value="value1">{item.name}</option>


                            ))}
                        </select>
                    </div>
                    <div>
                        <button >CREAR OFERTA</button>
                    </div>

                </div>



            </div>
        )

    }

}
export default Createofert;
