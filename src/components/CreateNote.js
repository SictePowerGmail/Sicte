import React, { Component } from 'react'
import axios from 'axios'

export default class CreateNote extends Component {

  state = {
    tasks: []
  }

  async componentDidMount(){
    const res = await axios.get('https://sicte.herokuapp.com/api/tasks');
    this.setState({tasks: res.data});
    console.log(this.state.tasks)
  }

  render() {
    return (
      <div>
      <div className="container">
          <div className="row">
              <div className="col s5">
                  <div className="card">
                      <div className="card-content">
                          <form onSubmit={this.addTask}>
                              <div className="row">
                                  <div className="input-field col s12">
                                      <input name="TipoTrabajo" onChange={this.handleChange} type="text" placeholder="TipoTrabajo" value={this.state.TipoTrabajo}/>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="input-field col s12">
                                      <input name="OT" onChange={this.handleChange} type="text" placeholder="OT" value={this.state.OT}/>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="input-field col s12">
                                      <input name="CM" onChange={this.handleChange} type="text" placeholder="CM" value={this.state.CM}/>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="input-field col s12">
                                      <input name="DiaAgenda" onChange={this.handleChange} type="text" placeholder="DiaAgenda" value={this.state.DiaAgenda}/>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="input-field col s12">
                                      <input name="Trabajo" onChange={this.handleChange} type="text" placeholder="Trabajo" value={this.state.Trabajo}/>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="input-field col s12">
                                      <input name="Cantidad" onChange={this.handleChange} type="text" placeholder="Cantidad" value={this.state.Cantidad}/>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="input-field col s12">
                                      <input name="NombreResponsable" onChange={this.handleChange} type="text" placeholder="NombreResponsable" value={this.state.NombreResponsable}/>
                                  </div>
                              </div>
                              <div className="row">
                                  <div className="input-field col s12">
                                      <input name="Cedula" onChange={this.handleChange} type="text" placeholder="Cedula" value={this.state.Cedula}/>
                                  </div>
                              </div>
                              <button type="submit" className="btn light-blue darken-4">
                                  Enviar
                              </button>
                          </form>
                      </div>
                  </div>
              </div>
              <div className="col s7">
                  <table>
                      <thead>
                          <tr>
                              <th>TipoTrabajo</th>
                              <th>OT</th>
                              <th>CM</th>
                              <th>DiaAgenda</th>
                              <th>Trabajo</th>
                              <th>Cantidad</th>
                              <th>NombreResponsable</th>
                              <th>Cedula</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              this.state.tasks.map(task => {
                                  return(
                                      <tr key={task._id}>
                                          <td>{task.TipoTrabajo}</td>
                                          <td>{task.OT}</td>
                                          <td>{task.CM}</td>
                                          <td>{task.DiaAgenda}</td>
                                          <td>{task.Trabajo}</td>
                                          <td>{task.Cantidad}</td>
                                          <td>{task.NombreResponsable}</td>
                                          <td>{task.Cedula}</td>
                                          <td>
                                              <button className="btn light-blue darken-4" style={{margin: '2px'}} onClick={() => this.editTask(task._id)}>
                                                  <i className="material-icons">edit</i>
                                              </button>
                                              <button className="btn light-blue darken-4" style={{margin: '2px'}} onClick={() => this.deleteTask(task._id)}>
                                                  <i className="material-icons">delete</i>
                                              </button>
                                          </td>
                                      </tr>
                                  )
                              })
                          }
                      </tbody>
                  </table>
              </div>
          </div>

      </div>
  </div>

    )
  }
}
