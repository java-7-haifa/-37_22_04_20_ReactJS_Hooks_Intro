import React,{useState, useEffect} from 'react';

export default () => {
    const [inputValue,setInputValue] = useState('');
    const [names,setNames] = useState([]);

    const click = () => console.log('click');
    
    useEffect(()=>{
        const initNames = localStorage.getItem('names') || '[]';
        setNames(JSON.parse(initNames));
    },[]);

    useEffect(() => {
        document.addEventListener('click',click);
        localStorage.setItem('names',JSON.stringify(names));
        return () => {
            document.removeEventListener('click',click);
        }
    },[names]);

    return (
        <div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button onClick={()=>setNames([...names,inputValue])}>add</button>
            <hr/>
            <ul>
                {names.map(n => <li>{n}</li>)}
            </ul>
        </div>
    )
}