import React from 'react';
import CheckBox from './Checkbox';
import boroughs from '../../boroughs';

const Checkboxes = () => {
    
       
    const [checkedItems, setCheckedItems] = React.useState(boroughs); 

    const handleChange = (event) => {
        const item = event.target.name;
        const isChecked = event.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
      }
   
       return (
           
        <React.Fragment>
            {
                boroughs.map((borough, index) => (
                  
                        <CheckBox label={borough.value} name={borough.value} checked={checkedItems[index]} onChange={() => handleChange(index)} />
                  
                ))
            }
        </React.Fragment>
    );
}


export default Checkboxes;