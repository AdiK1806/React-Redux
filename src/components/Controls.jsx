import { useRef } from "react";
import { useDispatch } from "react-redux";
useRef

const Controls=()=>{

      const dispatch=useDispatch();
      const inputElement=useRef();

      const handleIncrement=()=>{
        dispatch({type:'INCREMENT'});
      }

      const handleDecrement=()=>{
        dispatch({type:'DECREMENT'});
      }

      const handleAdd=()=>{    
        dispatch({type:'ADD',payload:{
          num:inputElement.current.value}
        });
        inputElement.current.value="";
      }

      const handleSubtract=()=>{
        dispatch({type:'SUBTRACT',payload:{
          num:inputElement.current.value}
        });
        inputElement.current.value="";
      }

      const handlePrivacyToggle=()=>{
        dispatch({type:'PRIVACY_TOGGLE'});
      }

      const handleReset=()=>{
        dispatch({type:'RESET'});
      }



    return<>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
                  <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
                  <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
                  <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle}>PRIVATE MODE</button>
                  <button type="button" class="btn btn-secondary" onClick={handleReset}>RESET</button>
                </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">

            <input  ref={inputElement} className="number-input" type="text" placeholder="Enter number"  />
            <button onClick={handleAdd} type="button" className="btn btn-info">Add</button>

            <button onClick={handleSubtract} type="button" className="btn btn-danger">Subtract</button>





       </div>
      </>
    
}

export default Controls;