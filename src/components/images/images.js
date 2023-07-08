import  imageUrl from './sample.jpg'
class Images {
    render(){
        const image=document.createElement('img');
        image.alt="computer";
        image.src=imageUrl
        const body=document.querySelector('body')
        body.appendChild(image);

    }
 }
 export default Images