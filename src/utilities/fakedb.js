// use local storage to manage card data
const addToDb = id =>{
    let designCard = {};

    //get the design card from local storage
    const storedCard = localStorage.getItem('design-card');
    if(storedCard){
        designCard = JSON.parse(storedCard);
    }

    // add quantity
    const quantity = designCard[id];
    if(quantity){
        const newQuantity = quantity + 1;
        designCard[id] = newQuantity;
    }
    else{
        designCard[id] = 1;
    }
    localStorage.setItem('design-card', JSON.stringify(designCard));
}

const getStoreCard = () => {

    let designCard = {};
        //get the design card from local storage
        const storedCard = localStorage.getItem('design-card');
        if(storedCard){
            designCard = JSON.parse(storedCard);
        }
    
        return designCard;
}

const removeFromDb = id =>{
    const storedCard = localStorage.getItem('design-card');
    if(storedCard){
        const designCard = JSON.parse(storedCard);
        if(id in designCard){
            delete designCard[id];
            localStorage.setItem('design-card', JSON.stringify(designCard));
        }
    }
}

const deletedesignCard = () =>{
    localStorage.removeItem('design-card');
}


const addToLocalStorage = (time) => {
  
    localStorage.setItem('breakTime', time);
    
  };
  
  const getStoredBreakTime = () => {
    let breakTime = 0;
  
    const storedBreakTime = localStorage.getItem('breakTime');
    if (storedBreakTime) {
      breakTime = JSON.parse(storedBreakTime);
    }
    return breakTime;
  };
  
export {
    addToDb, 
    getStoreCard,
    removeFromDb,
    deletedesignCard,
    addToLocalStorage,
    getStoredBreakTime
}