import React, {useState} from 'react';
import './App.css';
import computer from './images/PC.jpg';

const Motherboard = ({ components, onComponentClick }) => {
    return (
        <>
            <div className="main-image">
                <img src={computer} alt="" />
                <div className="motherboard">
                    {components.map((component, index) => (
                        <div
                            key={index}
                            className="motherboard-component"
                            style={{ top: component.position[0], left: component.position[1] }}
                            onClick={() => onComponentClick(component)}
                        >
                            {component.name}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};


const App = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const motherboardComponents = [
        { name: 'CPU', description: 'The Central Processing Unit (CPU) is the brain of the computer, responsible for executing instructions and performing calculations.', position: ['34%', '26%'] },
        { name: 'RAM', description: 'Random Access Memory (RAM) is a type of computer memory that is used to store data that is being actively used or processed.', position: ['28%', '41%'] },
        { name: 'GPU', description: 'The Graphics Processing Unit (GPU) is responsible for rendering graphics and images, making it essential for visual tasks such as gaming and video playback.', position: ['55%', '20%'] },
        { name: 'Storage', description: 'Data Storage includes devices like Hard Disk Drives (HDD) and Solid State Drives (SSD), used for long-term data storage on the computer.', position: ['85%', '65%'] },
        { name: 'Motherboard', description: 'The Motherboard is the main circuit board that connects and facilitates communication between various hardware components, including the CPU, RAM, and GPU.', position: ['46%', '20%'] },
        { name: 'Power unit', description: 'The Power Unit provides electrical power to the computer components, converting external power into the appropriate voltage for the system.', position: ['82%', '12%'] },
    ];

    const handleComponentClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className="app">
            <h1>System Unit Viewer</h1>
            <Motherboard components={motherboardComponents} onComponentClick={handleComponentClick}/>
            {selectedComponent && (
                <div className="component-description">
                    <h2>{selectedComponent.name}</h2>
                    <p>{selectedComponent.description}</p>
                </div>
            )}
        </div>
    );
};

export default App;
