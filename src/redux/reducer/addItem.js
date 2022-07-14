const addItem = [{}];

const addItems = (state=addItem, actions) =>{
        switch(actions.type){
            case "ADDITEM":
                return [
                    ...state,
                    actions.payload
                ]
                break;
            
            case "DELITEM" : 
                return state = state.filter((x)=>{
                    return x.id!=actions.payload.id
                })
                break;
            
            default: return state;
            break;
        }
}

export default addItems;