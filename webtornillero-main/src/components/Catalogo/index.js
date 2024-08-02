import React, { useEffect, useState , useMemo} from 'react';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import "./styles.css"

const Catalogo = ({handleCount}) => {
    const [items, setItems] = useState([["0",0]])
    const [records, setRecords] = useState([]);

    const columns = useMemo(
        () => [
        {
            accessorKey: 'img',
            header: 'Imagen',
            size: 50,
        },
        {
            accessorKey: 'name',
            header: 'Nombre',
            size: 350,
        },
        {
            accessorKey: 'category',
            header: 'Categoría',
            size: 10,
        },
        {
            accessorKey: 'txt',
            header: 'Acción',
            size: 50,
            enableColumnActions: false,
            enableSorting: false,
        },
        ],
        [],
    );

    const addItem = (e, c) => {
        let ele = document.getElementById(e)
        const cant = parseInt(ele.value)
        console.log(items);
        console.log(1);
        console.log(e);
        const tmp = includesSearch(e);
        console.log(tmp);
        if (tmp !== 0) {
            const updatedItems = [...items]
            updatedItems[tmp][1] += cant;
            setItems(updatedItems)
            handleCount(cant);
        }
        else {
            handleCount(cant);
            setItems(items => [...items, [e,cant,c]]);
        }
    }
    

    const includesSearch = (e) => {
        for(let i = 0; i < items.length; i++) {
            if (items[i][0] === e) {
                return i;
            }
        }
        return 0;
    }

    

    useEffect(() => {
        if (items && items.length !== 1){
            localStorage.setItem("cart", JSON.stringify(items));
        }
        return
    }, [items])
    

    useEffect(() => {
        async function getRecords() {
            try {
                const response = await fetch(`https://serverwt.onrender.com/record/`);
        
                if (!response.ok) {
                    const message = `An error occurred: ${response.statusText}`;
                    window.alert(message);
                    return;
                }
        
                const records = await response.json();
                setRecords(records);
            }
            catch (err) {
                console.log(err);
            }
        }
        getRecords();
        if (localStorage.getItem("cart") !== null && localStorage.getItem("cart") !== undefined){
            setItems(JSON.parse(localStorage.getItem("cart")))
        } 
        return
    }, [])
    

    return (
        <>
        <MaterialReactTable columns={columns} data={records.map(row => {
            return {
                id: row._id,
                img: <>
                        <img alt='Product' src={row.img} style={{width: "100px"}}/>
                    </>,
                name: row.name,
                category: row.name ? row.name.split(' ')[0][0].toUpperCase() + row.name.split(' ')[0].slice(1).toLowerCase(): "",
                txt: <>
                        <div className="input-group select-cant">
                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>{addItem(row._id, row.name)}}>Añadir al Carrito</button>
                            <input type="number" className="form-control" placeholder="Cantidad" defaultValue={1} min={1} id={row._id}/>
                        </div>
                    </>
            }
        })} enablePagination={true}
                localization={MRT_Localization_ES}/>
        <div>
            <div className="row m-0 my-2 row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">    
            </div>
        </div>
        </>
    )
}

export default Catalogo;