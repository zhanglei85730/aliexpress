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
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <DownloadDetailForm/>     
      <Table01Component/>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DownloadDetail);
