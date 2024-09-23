import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface Answer {
    correct:boolean,
    content:string
}

interface DataType {
    id:number,
    ques: string;
    chapt: number;
    point: number;
    bloom: number;
    ans: Array<Answer>;
    pics: string | null;
    tags: string[];
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
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a><EditOutlined /></a>
        <a><DeleteOutlined /></a>
      </Space>
    ),
  },
];

const QuesTable: React.FC = () => {
    const [quesData,setQuesData] = useState([])
    useEffect(()=>{
        let mockQues = localStorage.getItem("ques-data")
        if (mockQues) {
            setQuesData(JSON.parse(mockQues));
        }
    },[])
    console.log(quesData);
return <Table<DataType> columns={columns} dataSource={quesData} />
};

export default QuesTable;