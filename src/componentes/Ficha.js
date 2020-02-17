import React, {Component} from "react";

class Ficha extends Component {
    state = {tarrOfertas:[],
        arrOfertas:[]};

    async componentDidMount() {
        const item = await fetch( `http://localhost:8000/api/ofertas/${this.props.match.params.id}`);
        const dataItem = await item.json();
        console.log(dataItem);
        this.setState({tarrOfertas: dataItem[0]});
      
    };

    render() {
        const {NombreEmpresa, conociminetos , descripdion , salario} = this.state.tarrOfertas;
        return (
            <div className="container text-center pt-5">
                Returno
                <div className="row card col-md-4 mx-auto">Nombre Empresa :<b>{NombreEmpresa}</b></div>
                <div className="row card col-md-4 mx-auto">Conocimientos <b>{conociminetos}</b></div>
                <div className="row card col-md-4 mx-auto">Descripcion :<b>{descripdion}</b></div>
                <div className="row card col-md-4 mx-auto">Salario :<b>{salario}</b></div>
            </div>
        )
    }
}

export default Ficha;