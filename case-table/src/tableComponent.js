import React from 'react';
    import './TableComponent.css'; 

    const tableComponent = () => {
              // data for the table
              const data = [
                { name: document.getElementById('nameMessage').innerHTML, 
                state: document.getElementById('stateMessage').innerHTML, 
                description: document.getElementById('descriptionMessage').innerHTML },
              ];

              return (
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>State</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row) => (
                        <tr key={row.id}>
                          <td>{row.name}</td>
                          <td>{row.state}</td>
                          <td>{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            };

            export default tableComponent;
