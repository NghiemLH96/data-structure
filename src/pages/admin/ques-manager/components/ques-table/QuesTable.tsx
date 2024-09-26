import React, { useEffect, useState } from 'react';
import { Modal, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const QuesTable: React.FC = () => {
  const navigate = useNavigate();

  const deleteHandle = (quesId: number) => {
    modal.confirm({
      title: 'Xoá câu hỏi',
      icon: <ExclamationCircleOutlined />,
      content: 'Bạn có chắc là xoá câu hỏi này chứ?',
      okText: 'Xác nhận',
      cancelText: 'Huỷ',
      onOk:()=>{
        let updatedData = quesData.filter((item:DataType) => {
          return  item.id!=quesId
        });
        setQuesData(updatedData);
        localStorage.setItem("ques-data",JSON.stringify(updatedData))
      },
      onCancel:()=>{return}
    });
  };

  interface Answer {
    correct: boolean,
    content: string
  }

  interface DataType {
    id: number,
    key: string,
    ques: string;
    chapt: number;
    point: number;
    bloom: number;
    ans: Array<Answer>;
    pics: string | null;
  }
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <a>{id}</a>,
    },
    {
      title: 'ques',
      dataIndex: 'ques',
      key: 'ques',
    },
    {
      title: 'chapt',
      dataIndex: 'chapt',
      key: 'chapt',
    },
    {
      title: 'point',
      dataIndex: 'point',
      key: 'point',
    },
    {
      title: 'bloom',
      dataIndex: 'bloom',
      key: 'bloom',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => {
            navigate(`/admin/question-manager/edit?id=${record.id}`);
          }}><EditOutlined /></a>
          <a onClick={()=>{deleteHandle(record.id)}}><DeleteOutlined /></a>
        </Space>
      ),
    },
  ];

  const [quesData, setQuesData] = useState([]);

  const [modal, contextHolder] = Modal.useModal();

  useEffect(()=>{
    console.log(modal);
    
  },[modal])

  useEffect(() => {
    let mockQues = localStorage.getItem("ques-data")
    if (mockQues) {
      setQuesData(JSON.parse(mockQues));
    }
  }, []);
  return (
    <div>
      {contextHolder}
      <Table<DataType> columns={columns} dataSource={quesData} />
    </div>
  )
};

export default QuesTable;