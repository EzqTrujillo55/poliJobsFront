    const crearCV = (numeroCedula, nombreCompleto, fechaNacimiento, telefono, mail, nacionalidad, escuela, colegio,
                    universidad, idiomas, otrosConocimientos, sexo, direccion, descripcion ) => {

        var url = 'https://webhook.site/b8fc40ab-2f90-467c-a3f1-7646812e963b';
        var data = {Cedula: numeroCedula, Nombre: nombreCompleto, Fecha:fechaNacimiento, Telefono: telefono, Mail: mail,
            Nacionalidad:nacionalidad, Escuela: escuela, Colegio: colegio, Universidad: universidad, Idiomas: idiomas,
            Conocimientos: otrosConocimientos, Sexo: sexo, Direccion:direccion, Descripcion: descripcion};

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .then(response => {
                console.log('hecho');
            })
            .catch(error => console.error('Ha ocurrido un problema:', error));

    }

const Curriculum = {
    crearCV,
};

export default Curriculum;