import * as React from "react"
import { Button, Divider, Input } from "antd"

import { connect } from "react-redux"

import { RouteComponentProps } from "react-router"

import { changeName, changeRole } from "@reducers/r_user"

interface IProps extends RouteComponentProps {
  r_user: any,
  changeName: () => void,
  changeRole: (data: string) => void
}

interface IState {
  role: string
}

class Base extends React.Component<IProps, IState>{

  constructor(props: IProps) {
    super(props)
  }

  state: IState = {
    role: null
  }

  changeName = () => {
    const { changeName } = this.props
    if (changeName) {
      changeName()
    }
  }

  changeRole(event: React.ChangeEvent<HTMLInputElement>): void {
    const { target: { value: role } } = event
    this.setState({ role })
    const { changeRole } = this.props
    if (changeRole) {
      changeRole(role)
    }
  }

  render() {
    const { r_user: { name, role } } = this.props
    const { role: roleState } = this.state
    return (
      <div>
        <div>{name}</div>
        <Divider />
        <div>
          <Input size={"small"} value={roleState} onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.changeRole(event)} />
          <Divider type={"vertical"} />
          Role: {role}
        </div>
        <Divider />
        <Button type={"primary"} onClick={this.changeName}>改变</Button>
      </div>
    )
  }
}

export default connect((state: any) => ({ r_user: state.r_user }), { changeName, changeRole })(Base)
