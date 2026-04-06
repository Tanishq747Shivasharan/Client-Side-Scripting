import { useRef, useState} from "react";

export default function List(props){

    let updatenameRef = useRef();

    let [list,setList] = useState([{
        "id":1,
        "name":"aditya",
        "age":20,
        "phone":1234567890,
        "address":"solapur",
    },
    {
        "id":2,
        "name":"tanishq",
        "age":19,
        "phone":1234567890,
        "address":"pune",
    },
    {
        "id":3,
        "name":"abhishek",
        "age":21,
        "phone":1234567890,
        "address":"solapur",
    },
    {
        "id":4,
        "name":"aditya gundla",
        "age":19,
        "phone":1234567890,
        "address":"hyderabad",
    },
    {
        "id":5,
        "name":"samarth",
        "age":24,
        "phone":1234567890,
        "address":"akkalkot",
    },
    {
        "id":6,
        "name":"aryan",
        "age":20,
        "phone":1234567890,
        "address":"vishakhapatnam",
    },
    {
        "id":7,
        "name":"prjwal",
        "age":30,
        "phone":1234567890,
        "address":"mumbai",
    }
]);

    function handleDelete(data){
        setList(list.filter(removeitem => removeitem != data));
    }

    function handleUpdate(idtoupdate){
        
      let datatochange = list.filter(data => {
        data.id == idtoupdate
       });

       datatochange.name = updatenameRef.current.value;

       setList([...list, datatochange ]);

    }

    return(
        <div>
            <ul>
                {list.map((item) => {
                   return <div key={item.id} className="studentContainer">
                            <div>{item.name}</div>
                            <div>{item.age}</div>    
                            <div>{item.address}</div>    
                            <div>{item.phone}</div>
                             <button onClick={() => {
                                handleDelete(item);
                            }}>remove student</button>
                            
                            <input name="nameUpdate" onChange={() => {
                                handleUpdate(item.id);
                            }} className="updateData" ref={updatenameRef} title="entername" type="text" />
                           
                            

                            <button style={{backgroundColor:"blue", color:"white"}} onClick={() => {
                                handleUpdate(item);
                            }}>update</button>
                            
                            <br/>
                    </div>
                    
                })}
            </ul>
        </div>
    );
}
