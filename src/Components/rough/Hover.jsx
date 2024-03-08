import AddIcon from '@mui/icons-material/Add';
import './Hover.css'
const Hover=()=>{
    return(
        <div className='product-card'>
            <img src="https://m.media-amazon.com/images/I/31LwSteMDYL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
            <p>Image</p>
            <span>₹ 50000</span>


            <div>
             <button>
                <AddIcon />
             </button>
            </div>
        </div>

        
    
    )
}

export default Hover;