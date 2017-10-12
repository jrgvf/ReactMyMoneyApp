import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {
  
  renderRows() {
    const list = this.props.list || []
    return list.map(bc => (
      <tr key={bc._id}>
        <td>{bc.name}</td>
        <td>{bc.month}</td>
        <td>{bc.year}</td>
        <td>
          <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
            <i className='fa fa-pencil'></i>
          </button>
          <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
            <i className='fa fa-trash-o'></i>
          </button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th className='table-actions'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: state.billingCycle.list
})
const mapDispatchToProps = dispatch => bindActionCreators({
  showUpdate,
  showDelete
}, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)