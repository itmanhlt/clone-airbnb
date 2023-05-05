import React from 'react'
import { Button, Form, Input, message } from 'antd';
import { authService } from '../../../services/AuthService';
import { useDispatch } from 'react-redux';
import { getUserLogin } from '../../../toolkits/reducers/UserSlice';
import { NavLink } from 'react-router-dom';


export default function LogInPage() {
  const dispatch = useDispatch()

  const onFinish = (values) => {
    const loginAccount = async () => {
      try {
        const res = await authService().sigIn(values)
        message.success('Login successful')
        dispatch(getUserLogin(res.data.content))
      } catch (error) {
        message.error('You entered the wrong account or password !')
      }
    }
  
    loginAccount()
  };

  return (
    <div className='w-screen h-screen bg-center bg-cover' style={{ backgroundImage: 'url(../img/auth_bg.png)' }}>
      <div className='h-full flex items-center justify-center'>
        <div className='w-[380px] bg-white rounded mx-auto shadow-lg'>
          <h2 className='text-center text-3xl font-semibold pt-5'>Login</h2>
          <Form
            className='p-5 '
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email !',
                },
                {
                  type: 'email',
                  message: 'Email is not correct form !',
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password !',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>



            <Form.Item
              wrapperCol={{
                span: 24,
              }}
              className='text-right'
            >
              <Button className='bg-rose-500 w-full text-center hover:bg-rose-400 ' type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
              className='text-center'
            >
          
                <NavLink to={'/register'} className='text-blue-500 hover:text-blue-400 duration-150'>
                  you don't have account ?
                </NavLink>
            </Form.Item>


          </Form>
        </div>
      </div>
    </div>
  )
}
