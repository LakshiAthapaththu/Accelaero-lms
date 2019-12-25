import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import {Card, Col, Avatar, Modal, Form, Input, DatePicker, Button, Upload} from 'antd';
import { Skeleton, Icon } from 'antd';
const { Meta } = Card;
let id = 0;

const { MonthPicker, RangePicker } = DatePicker;
const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const formItemLayout2 = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16},
};

const formItemLayoutForUploader = {
    labelCol: { span: 8 },
    wrapperCol: { span: 14 },
};

const rangeConfig = {
    rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};



class ContentElement extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            course_id: props.course_id,
            course_name: props.name,
            module_code:props.module_code,
            description:props.description,

            visible_edit_modal: false,
            visible_new_material_modal: false,
            visible_view_modal:false
        };

    }

    // state = { visible_edit_modal: false,
    //           visible_new_course_modal: false,
    //           visible_view_modal:false};

    showEditModal = () => {
        this.setState({
            visible_edit_modal: true,
        });
    };

    showNewMaterialModal = () => {
        this.setState({
            visible_new_material_modal: true,
        });

    };

    showViewModal = () => {
        this.setState({
            visible_view_modal: true,
        });

    };

    handleOkEdit = e => {
        console.log(e);
        this.setState({
            visible_edit_modal: false,
        });
    };

    handleCancelEdit = e => {
        console.log(e);
        this.setState({
            visible_edit_modal: false,
        });
    };

    handleOkAdd = e => {
        console.log(e);
        this.setState({
            visible_new_material_modal: false,
        });
    };

    handleCancelAdd = e => {
        console.log(e);
        this.setState({
            visible_new_material_modal: false,
        });
    };

    handleOkView = e => {
        console.log(e);
        this.setState({
            visible_view_modal: false,
        });
    };

    handleCancelView = e => {
        console.log(e);
        this.setState({
            visible_view_modal: false,
        });
    };

    remove = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(id++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    // handleSubmit = e => {
    //     e.preventDefault();
    //
    //     this.props.form.validateFields((err, fieldsValue) => {
    //         if (err) {
    //             return;
    //         }
    //
    //         // Should format date value before submit.
    //         const rangeValue = fieldsValue['range-picker'];
    //         const rangeTimeValue = fieldsValue['range-time-picker'];
    //         const values = {
    //             ...fieldsValue,
    //             'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    //             'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
    //             'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
    //             'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
    //             'range-time-picker': [
    //                 rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
    //                 rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
    //             ],
    //             'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    //         };
    //         console.log('Received values of form: ', values);
    //     });
    // }

    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };



    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        };

        return(
            <Col span={8}>
                <Card
                    style={{ width: 500, marginTop: 16 }}
                    actions={[
                        <Icon type="edit" key="edit" onClick={this.showEditModal}/>,
                        <Icon type="plus-circle" key="plus-circle"  onClick={this.showNewMaterialModal}/>,
                        <Icon type="caret-down" key="caret-down" onClick={this.showViewModal}/>,
                        <Icon type="delete" key="delete" onClick={(id)=>this.props.delete_item(this.props.course_id)} />,
                    ]}
                >
                    <Skeleton loading={false} avatar active>
                        <Meta
                            avatar={
                                <Avatar src="https://cdn4.iconfinder.com/data/icons/school-subjects/256/Literature-512.png" />
                            }
                            title={this.props.name}
                            description={this.props.module_code}

                        />
                        <h4>{this.props.description}</h4>
                    </Skeleton>
                </Card>
                <Modal
                    title= {this.state.course_name}
                    visible={this.state.visible_edit_modal}
                    onOk={this.handleOkEdit}
                    onCancel={this.handleCancelEdit}
                >
                    <Form.Item {...formItemLayout} label="Module name">
                        {getFieldDecorator('modulename', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input module name',
                                },
                            ],
                        })(<Input placeholder= {this.state.course_name} />)}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Module Code">
                        {getFieldDecorator('modulecode', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input module code',
                                },
                            ],
                        })(<Input placeholder={this.state.module_code} />)}
                    </Form.Item>

                    <Form.Item {...formItemLayout2} label=" Description">
                        {getFieldDecorator('description', {
                            rules: [
                                {
                                    required: false,
                                    // message: 'Please input module code',
                                },
                            ],
                        })(<Input placeholder={this.state.description} />)}
                    </Form.Item>
                </Modal>

                <Modal title= {this.state.course_name}
                       visible={this.state.visible_view_modal}
                       onOk={this.handleOkView}
                       onCancel={this.handleCancelView}>


                    <h3>Course Name : {this.state.course_name}</h3>
                    <h3>Course Name : {this.state.module_code}</h3>
                    <h3>Course Name : {this.state.description}</h3>
                    <h3>Course Name : course material</h3>


                </Modal>

                <Modal
                    title= "Add Course Manterial"
                    visible={this.state.visible_new_material_modal}
                    onOk={this.handleOkAdd}
                    onCancel={this.handleCancelAdd}
                >
                    <Form.Item {...formItemLayout} label="name">
                        {getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input material name',
                                },
                            ],
                        })(<Input placeholder= "name" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout2} label=" Description">
                        {getFieldDecorator('description_material', {
                            rules: [
                                {
                                    required: false,
                                    // message: 'Please input module code',
                                },
                            ],
                        })(<Input placeholder="description" />)}
                    </Form.Item>

                    <Form.Item {...formItemLayout2} label="RangePicker">
                        {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
                    </Form.Item>

                    <Form.Item {...formItemLayoutForUploader} label="Upload" extra="Select from your PC">
                        {getFieldDecorator('upload', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button>
                                    <Icon type="upload" /> Click to upload
                                </Button>
                            </Upload>,
                        )}
                    </Form.Item>

                </Modal>
            </Col>
        )
    }

}

const ContentElementComp = Form.create({ name: 'cont_element' })(ContentElement);
export default ContentElementComp