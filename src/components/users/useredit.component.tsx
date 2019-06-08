import React, { PureComponent } from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

interface IUserEditDialogProps {
  editMode: boolean
  user: any
  closeEdit: () => void
  setField: (field: string) => (e: any) => void
  handleSubmit: (e: any) => void
}

export class UserEditDialog extends PureComponent<IUserEditDialogProps> {

  render() {
    let usr = this.props.user
    return (
      <Modal isOpen={this.props.editMode}>
        <ModalBody>
          <form onSubmit={this.props.handleSubmit}>
            <input value={usr.username} onChange={this.props.setField('username')} />
            <br />
            <input value={usr.firstName} onChange={this.props.setField('firstName')} />
            <br />
            <input value={usr.lastName} onChange={this.props.setField('lastName')} />
            <br />
            <input value={usr.email} onChange={this.props.setField('email')} />
            <br />
            <select value={usr.role} onChange={this.props.setField('role')}>
              <option value={'admin'}>Admin</option>
              <option value={'finance-manager'}>Finance Manager</option>
              <option value={'employee'}>Employee</option>
            </select>
            <br />
            <input type="submit" value="Save Changes" />
          </form>
        </ModalBody>
        <ModalFooter>
          <button onClick={this.props.closeEdit}>Cancel</button>
        </ModalFooter>
      </Modal>
    )
  }
}
