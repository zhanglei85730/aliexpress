import React from 'react';
import { connect } from 'dva';
import { Button, Form, Input, Icon, Select } from 'antd';
import Header from '../components/Header';
import styles from './DownloadDetail.css';
import Table01Component from '../components/Table01';
import DownloadDetailForm from '../components/DownloadDetailForm';
const FormItem = Form.Item;
const Option = Select.Option;
function DownloadDetail({ location }) {
  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  // }

  // function handleBlur() {
  //   console.log('blur');
  // }

  // function handleFocus() {
  //   console.log('focus');
  // }
  // function handleSubmit(e){
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // }
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <DownloadDetailForm/>
      {/* <Form layout="inline" onSubmit={handleSubmit} >
        <FormItem>
          <Input type="input" placeholder="请输入姓名" />
        </FormItem>
        <FormItem>
          <Input type="input" placeholder="输入年龄" />
        </FormItem>       
        <FormItem>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </FormItem>
      </Form> */}
      <Table01Component/>
    </div>
  );
}



function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DownloadDetail);
