function Header(){

    window.addEventListener('load',function(){  



        const valores=fetch('https://opentdb.com/api.php?amount=30&caterory=18').then(res=>{
            
            res.json().then(dados=>{
                
                mostraDados(dados);
                });
        }).catch(erro=>{
            console.log(erro+" erro na requisição")
        });
        
    });
        
    
            }
            function mostraDados(dados){
    
                const response_code=document.querySelector('#response_code');
                difficulty = document.querySelector('#difficulty');
                   var response_code= dados.length;
                difficulty.innerHTML=`${nresponse_code}`
                        
                        
                const response_code=document.querySelector('#response_code');
                question = document.querySelector('#question');
                   var response_code= dados.length;
                   question.innerHTML=`${nresponse_code}`
            
                
                dados.forEach(acesso => {
                
                    response_code.innerHTML += `
                    <td>${acesso.difficulty} <br> ${acesso.question}</td>
                    <td></td>
                    `
                console.log(dados.length)
                           
                 });
                

        }
    
   

    return(
        <>
        <table id="response_code"></table>
            <h1>Dificuldade</h1> <br></br> <h2 id='difficulty'>()</h2>

            <h1>Questão</h1> <br></br> <h2 id='question'>()</h2>  
            
        </>
    )

export default Header