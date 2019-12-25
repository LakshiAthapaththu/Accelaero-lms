import React, {Component} from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import {Row, Button, Icon, Form, Input, Modal} from 'antd';
import ContentElementComp from "./ContentElement";

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const formItemLayout2 = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16},
};

class ContentBox extends Component{

    rowAddedModules = {
        1:{name:'Database Internals',
            module_code: 'CS4509',
            discription: 'Thi duff fhushfebf hfuefihe fhusheifhie fhsufh hfusufhuis uyfiuas',
            course_id:1},

        2:{name:'Bio Infromatics',
            module_code: 'CS4579',
            discription: 'Thi duff fhushfebf hfuefihe fhusheifhie fhshf fhsfhusf hufusdhfu hufhsiuf',
            course_id:2},

        3:{name:'Organizational Behaviour',
            module_code: 'MN8734',
            discription: 'Thi duff fhushfebf hfuefihe fhusheifhie hduashui ufuiefu fufdsuf ids',
            course_id:3},

        4:{name:'Database Internals',
            module_code: 'CS4509',
            discription: 'Thi duff fhushfebf hfuefihe fhusheifhie fhsufh hfusufhuis uyfiuas',
            course_id:4},

        5:{name:'Bio Infromatics',
            module_code: 'CS4579',
            discription: 'Thi duff fhushfebf hfuefihe fhusheifhie fhshf fhsfhusf hufusdhfu hufhsiuf',
            course_id:5},

        6:{name:'Organizational Behaviour',
            module_code: 'MN8734',
            discription: 'Thi duff fhushfebf hfuefihe fhusheifhie hduashui ufuiefu fufdsuf ids',
            course_id:6},

        7:{name:'Organizational Behaviour',
            module_code: 'MN8734',
            discription: 'Thi duff fhushfebf hfuefihe fhusheifhie hduashui ufuiefu fufdsuf ids',
            course_id:7},
        8:{name:'Organizational Behaviour',
            module_code: 'MN8734',
            discription: 'Thi duff fhushfebf hfuefihe fhusheifhie hduashui ufuiefu fufdsuf ids',
            course_id:8},


    };


    constructor(props) {
        super(props);
        this.state = {
               addedModules: this.generateModuleList(),
               visible_new_course_modal: false
        };

        this.deleteItem = this.deleteItem.bind(this);

    }

    showNewCourseModal = () => {
        this.setState({
            visible_new_course_modal: true,
        });

    };

    handleOkNewCourse = e => {
        console.log(e);
        this.setState({
            visible_new_course_modal: false,
        });
    };

    handleCancelNewCourse = e => {
        console.log(e);
        this.setState({
            visible_new_course_modal: false,
        });
    };

    generateModuleList(){
        var modules = [];
        var arr = {};
        var key;
        for((key) in this.rowAddedModules){
           if(Object.keys(arr).length<3){
               arr[key] = this.rowAddedModules[key]
           }


           else {
               modules.push(arr);
               arr = {};
               arr[key] = this.rowAddedModules[key]
           }
        }
        modules.push(arr);
        return modules;
    }

    deleteItem(course_id){
        delete this.rowAddedModules[course_id];
        // console.log('ho hi man awa');
        console.log(this.rowAddedModules);
        this.setState({
            addedModules: this.generateModuleList(),
            },
        )

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <div style={{ background: '#ECECEC', padding: '30px'}}>
                <Button style={{ background: '#161216', width:100, height:50, color:'#ECECEC'}} onClick={this.showNewCourseModal}>ADD</Button>
                {this.state.addedModules.map(item=>
                <Row gutter={16}>
                    {Object.keys(item).map(item1=><ContentElementComp delete_item = {this.deleteItem} course_id = {item1} name = {item[item1].name} module_code = {item[item1].module_code} description = {item[item1].discription}></ContentElementComp>)}

                </Row>)}

                <Modal
                    title= "Add New Course"
                    visible={this.state.visible_new_course_modal}
                    onOk={this.handleOkNewCourse}
                    onCancel={this.handleCancelNewCourse}
                >
                    <Form.Item {...formItemLayout} label="Module name">
                        {getFieldDecorator('modulename', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input module name',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Module Code">
                        {getFieldDecorator('modulecode', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input module code',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>

                    <Form.Item {...formItemLayout2} label=" Description">
                        {getFieldDecorator('description', {
                            rules: [
                                {
                                    required: false,
                                    // message: 'Please input module code',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>
                </Modal>

            </div>
        )
    }

}

const ContentBoxModules = Form.create({ name: 'cont_box' })(ContentBox);
export default ContentBoxModules
