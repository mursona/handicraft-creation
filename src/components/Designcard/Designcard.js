import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoreCard } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Design from '../Design/Design';
import './Designcard.css'
const Designcard = () => {


    const [designs, setdesigns] = useState([]);    
    const [cardcounts, setCardcounts] = useState([]);    

    useEffect(() => {
        fetch('handcrafts.json')
        .then(res => res.json())
        .then(data => setdesigns(data))
    }, [])

    useEffect(() => {
        const storedCard = getStoreCard();
        const saveCard = [];
        for (const id in storedCard) {
            const addedDesign = designs.find(design => design.id === id);
            if (addedDesign) {
                const quantity  = storedCard[id];
                addedDesign.quantity = quantity;
                saveCard.push(addedDesign);
            }
        }

        setCardcounts(saveCard);
    }, [designs])

    const handleAddToCard = (selecteddesign) => {
        // console.log(selecteddesign);
        let newCard = [];
        // cardcounts.push(design); //this not use - use diff way that's is efficient way

        const exists = cardcounts.find(design => design.id === selecteddesign.id);
        if (!exists) {
            selecteddesign.quantity = 1;
            newCard = [...cardcounts, selecteddesign];
        }
        else{
            const rest = cardcounts.filter(design => design.id !== selecteddesign.id);
            exists.quantity = exists.quantity + 1;
            newCard = [...rest, exists];
        }
        setCardcounts(newCard);
        addToDb(selecteddesign.id);

    }

    return (
        <div className='designboard-container'>
            <div className="design-container">
                {
                    designs.map(design =><Design 
                        key={design.id} 
                        design={design}
                        handleAddToCard={handleAddToCard}
                    ></Design>)
                }
            </div>
            <div className="card-container">
                <Card cardcounts={cardcounts}></Card>
            </div>
        </div>
    );
};

export default Designcard;