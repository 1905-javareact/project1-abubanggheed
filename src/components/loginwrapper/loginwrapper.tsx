import React from 'react';
import { LoginPage } from '../login/page';
import { connect } from 'react-redux';
import { IState } from '../../reducers';


const mapStateToProps = (state: IState) => ({
  userId: state.self.userId
})

interface ILoginWrapperProps {
  userId: number
}

export const LoginWrapper = WrappedComponent => connect(mapStateToProps)((props:ILoginWrapperProps) => (
  <>
    {props.userId ? <WrappedComponent /> : <LoginPage />}
  </>
))
