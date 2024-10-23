import React from 'react';
import Logo from "../../assets/image/logo.png";
import './sign.scss'
import {Link, useNavigate} from "react-router-dom";
import {Button, ConfigProvider, Form, Input} from "antd";
import axios from "axios";

const SignIn = () => {

    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            // const loginData = {
            //     ...values
            // }
            // const {data} = await axios.post(
            //     `${url}/api/v1/admin/login`,loginData,
            //     {withCredentials: true}
            // );
            //
            // const error_message = data.errorMessage;
            // const {success} = data;
            //
            // if (success) {
            //     setTimeout(() => {
            //         navigate("/");
            //     }, 1000);
            // } else {
            //     message.warning(error_message)
            // }
        } catch (error) {
            console.error(error);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className='sign-in'>
            <Link className="top_back_button" to={'/'}>

            </Link>

            <div className="ident">
                <img src={Logo} style={{maxWidth: '64px'}} alt="Fitess Logo"/>
                <p>З поверненням!<br/>Раді вас бачити!</p>
            </div>

            <div className="inputs">

                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    className="row-col"
                    autoComplete="off"
                >
                    <Form.Item
                        className="username"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Вкажіть ваш email",
                            },
                        ]}
                    >
                        <ConfigProvider
                            theme={{
                                components: {
                                    Input: {
                                        colorBgContainer: '#494358',
                                        borderRadius: '28px',
                                        colorBorder: 'transparent',
                                        controlOutline: 'none',

                                        fontFamily: 'Montserrat Alternates',
                                        fontSize: 16,
                                        colorText: '#333333',

                                        colorTextPlaceholder: '#999999',
                                        paddingBlock: 10,
                                        paddingInline: 18,

                                    }
                                }
                            }}
                        >
                        <Input name="email" placeholder="Введіть ваш email" style={{height: '58px', padding: '20px 18px'}}/>
                        </ConfigProvider>
                    </Form.Item>

                    <Form.Item
                        className="username"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Введіть пароль користувача",
                            },
                        ]}
                    >
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Input: {
                                            colorBgContainer: '#494358',
                                            borderRadius: '28px',
                                            colorBorder: 'transparent',
                                            controlOutline: 'none',

                                            fontFamily: 'Montserrat Alternates',
                                            fontSize: 16,
                                            colorText: '#333333',

                                            colorTextPlaceholder: '#999999',
                                            paddingBlock: 10,
                                            paddingInline: 18,
                                            colorIcon: 'rgba(255,255,255,1)',
                                            actionIconColor: 'rgba(255,255,255,1)',
                                        }
                                    }
                                }}
                            >
                                <Input.Password name="password" placeholder="Введіть ваш пароль"/>
                            </ConfigProvider>
                    </Form.Item>

                    <Form.Item>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        colorPrimary: '#FFFFFF',
                                        colorPrimaryHover: '#FFFFFF',
                                        colorPrimaryActive: '#FFFFFF',

                                        borderRadius: 28,

                                        fontFamily: 'Montserrat Alternates',
                                        fontSize: 16,
                                        fontWeight: 600,

                                        primaryColor: '#1E232C',

                                        paddingContentHorizontal: 20,

                                        borderWidth: 0,
                                    }
                                }
                            }}
                        >
                        <Button
                            type="primary"
                            className='login_button'
                            htmlType="submit"
                            style={{width: "100%"}}
                        >
                            Login
                        </Button>
                        </ConfigProvider>
                    </Form.Item>
                </Form>

            </div>
        </div>
    );
};

export default SignIn;