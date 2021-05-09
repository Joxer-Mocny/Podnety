
import {useState, useEffect} from 'react'
import '../App'

const AddTask = ({ onAdd}) => {
 const [text, setName] = useState ('')
 const [text1, setAdress] = useState ('')
 const [text2, setText ] = useState ('')
  
  
 const [day , setDate] = useState('')
 const [month , setMonth] = useState('')
 const [year , setYear] = useState('')

 const getDay = () =>  setDate(new Date().getDate())


 

 const getMonth = () =>  setMonth(new Date().getMonth()+ 1)
 
 
 
const getYear = () =>  setYear(new Date().getFullYear())


useEffect(() => {
  getDay();
  getMonth();  
  getYear();
  
}, []) 

 
 
 const [image, setImage] = useState('')
  
  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'filip')
    
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/joxer13',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
  
    setImage(file.secure_url)
    
  }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Prosím podajte podnet')
            return
        }
        

        onAdd ({ text, text1, text2, day, month, year, image })
        
        setName ('')
        setAdress ('')
        setText ('')
        setImage ('')
        setDate('')
        setMonth('')
        setYear('')
     
       
    } 

    
    

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Meno a priezvisko</label>
                <input type='text' palceholder='Meno a priezvisko' value={text} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Adresa</label>
                <input type='text' palceholder='Adresa' value={text1} onChange={(e) => setAdress(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Popis podnetu</label>
                <input type='text' palceholder='Popis podnetu' value={text2} onChange={(e) => setText(e.target.value)}  />
                  
    
                </div>
              
   
   
                <div className="form-control">
      <h1>Upload Image</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
        
      />
     
        <img src={image} style={{ width: '300px' }}  onChange={(e) => setImage(e.targer.value)} />
        
    </div>

            <input type='submit' value= 'Uložiť podnet'
            className= 'btn btn-block' />
        </form>
        
    )
}



export default AddTask
