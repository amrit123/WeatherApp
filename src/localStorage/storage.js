export const loadState=()=>{

    try{
        const searilizedState=localStorage.getItem("stations");
        
        if(searilizedState===null){
            return [];
        }
        return JSON.parse(searilizedState);
    }catch(err){
        return undefined;
    }
}

export const saveState=(state)=>{
    try{
const searilizedState=JSON.stringify(state);
localStorage.setItem("stations",searilizedState);
    }catch(err){

    }
}