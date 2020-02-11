import React, {Component} from "react";

class Test extends Component{

    async postData(){
        alert('testing..')
        try{
            let result = await  fetch('https://webhook.site/b8fc40ab-2f90-467c-a3f1-7646812e963b', {

                method: 'post',
                mode:'no-cors',
                headers: {
                    'Accept': 'aplication/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    key1: 'myusername'
                })
            });

            console.log(result)

        }catch(e){
            console.log(e)
        }
    }


    render() {

        return (

            <div className="Test">
                <button onClick={()=> this.postData()}>presiona y ve la magia!</button>

            </div>
        );
    }

}

export default Test;