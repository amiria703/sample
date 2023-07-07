import './button.css'
class Button{
    render(){
        const button=document.createElement('button');
        button.innerHTML='ورود';
        button.classList.add('btn-dark')
        const body=document.querySelector('body')
        body.appendChild(button);

        button.onclick=()=>{
        const p=document.createElement('p');
        p.innerHTML=' متن';
        body.appendChild(p);
        }
    }
 }
export default Button;