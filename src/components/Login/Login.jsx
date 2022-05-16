import React, { useState } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Modal
} from 'antd';
import "antd/dist/antd.css";
import { render } from '@testing-library/react';


const Login = () => {
    render()
        const { Option } = Select;
        const AutoCompleteOption = AutoComplete.Option;
        const residences = [
            {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                    {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                            {
                                value: 'xihu',
                                label: 'West Lake',
                            },
                        ],
                    },
                ],
            },
            {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                    {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                            {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men',
                            },
                        ],
                    },
                ],
            },
        ];
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24,
                },
                sm: {
                    span: 8,
                },
            },
            wrapperCol: {
                xs: {
                    span: 24,
                },
                sm: {
                    span: 16,
                },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
            const [form] = Form.useForm();
            const onFinish = (values) => {
                console.log('Received values of form: ', values);
            };
            const prefixSelector = (
                <Form.Item name="prefix" noStyle>
                    <Select
                        style={{
                            width: 70,
                        }}
                    >
                        <Option value="86">+86</Option>
                        <Option value="87">+87</Option>
                    </Select>
                </Form.Item>
            );
            const [autoCompleteResult, setAutoCompleteResult] = useState([]);
            const onWebsiteChange = (value) => {
                if (!value) {
                    setAutoCompleteResult([]);
                } else {
                    setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
                }
            };
            const websiteOptions = autoCompleteResult.map((website) => ({
                label: website,
                value: website,
            }));
            return (
                <Modal
                    visible={visible}
                    title="Giriş Yap"
                    okText="Kayıt Ol"
                    cancelText="Giriş"
                    onCancel={onCancel}
                    onOk={() => {
                        form
                            .validateFields()
                            .then((values) => {
                                form.resetFields();
                                onCreate(values);
                            })
                            .catch((info) => {
                                console.log('Validate Failed:', info);
                            });
                    }}
                >
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="girisyap"
                        onFinish={onFinish}
                        initialValues={{
                            residence: ['zhejiang', 'hangzhou', 'xihu'],
                            prefix: '86',
                        }}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>
                    
                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                                },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>
                        </Form.Item>

                    </Form>
                </Modal>
            );
        };
        //popup and form code


        const CollectionsPage = () => {
            const [visible, setVisible] = useState(true);

            //With this, we will get all field values.
            const onCreate = (values) => {
                console.log('Received values of form: ', values);
                setVisible(true);
            };

            return (
                <div>

                    <CollectionCreateForm
                        visible={visible}
                        onCreate={onCreate}
                        onCancel={() => {
                            setVisible(false);
                        }}
                    />
                </div>
            );
        };

        return (
            <div className="MainDiv">
                <div class="jumbotron text-center">
                </div>

                <div className="container">

                    <CollectionsPage />
                </div>
            </div>
        );
    }

export default Login;
