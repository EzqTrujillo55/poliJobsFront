
    const getOferta = async () => {
        var token= localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/api/ofertas', {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '
            }
        });
    
        return response.json();
    };
   

const Ofertas = {
    getOferta
};

export default Ofertas;