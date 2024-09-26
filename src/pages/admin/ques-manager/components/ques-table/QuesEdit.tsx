import { PlusOutlined } from "@ant-design/icons";
import { Button, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Radio, Rate, Select, Slider, Switch, TreeSelect, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function QuesEdit() {
    interface Answer {
        correct: boolean,
        content: string
    }

    interface DataType {
        id: number;
        key: String;
        ques: String;
        chapt: number;
        point: number;
        bloom: number;
        ans: Array<Answer>;
        pics: string | null;
    }

    const [countOfAns, setCountOfAns] = useState(0);
    const [loadList , setLoadList] = useState(false)
    const [formInitialValue , setFormInitialValue ] = useState<DataType|undefined>(undefined)
    const [renderAnsInput, setRenderAnsInput] = useState<JSX.Element[]>([])
    const [renderAnsRadio, setRenderAnsRadio] = useState<JSX.Element[]>([])
    const [quesData, setQuesData] = useState<DataType[]>([]);

    const [form] = Form.useForm();
    const queryParam = new URLSearchParams(useLocation().search).get("id")
    
    useEffect(()=>{
        let mockQues = localStorage.getItem("ques-data")
        if (mockQues) {
            setQuesData(JSON.parse(mockQues));
        }
        setLoadList(true)
    },[])

    useEffect(()=>{
        const editingAcc = quesData.find(item=>item.id == Number(queryParam))
        console.log(editingAcc);
        
        setFormInitialValue(editingAcc);
    },[loadList])

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
  return (
    <div>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: "100%" }}
            >
                <h2 style={{ textAlign: "center", margin: "30px", fontSize: "30px" }}>Cập nhật câu hỏi</h2>
                <Form.Item label="Chương" name="chapter" >
                    <Select defaultValue={"null"} >
                        <Select.Option disabled value="null">Chọn chương</Select.Option>
                        <Select.Option value="1">Chương 1</Select.Option>
                        <Select.Option value="2">Chương 2</Select.Option>
                        <Select.Option value="3">Chương 3</Select.Option>
                        <Select.Option value="4">Chương 4</Select.Option>
                        <Select.Option value="5">Chương 5</Select.Option>
                        <Select.Option value="6">Chương 6</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Câu hỏi" name={"question"}>
                    <Input placeholder="Nhập nội dung câu hỏi" />
                </Form.Item>
                <Form.Item label="Số câu trả lời" name={"ansCount"}>
                    <Input type="number" max={4} placeholder="Nhập số lượng câu trả lời ( Nhiều nhất 4)" onChange={(e) => {
                        setCountOfAns(Number(e.target.value))
                    }} />
                </Form.Item>
                {
                    renderAnsInput.map((item) => (
                        item
                    ))
                }
                <Form.Item label="Đáp án" name={"correct"}>
                    <Radio.Group>
                        {
                            renderAnsRadio.map((item) => (
                                item
                            ))
                        }
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Điểm" name={"score"}>
                    <Input placeholder="Nhập số điểm (cao nhất 5 điểm)" type="number" max={5} />
                </Form.Item>
                <Form.Item label="Bloom" name="bloom">
                    <Select defaultValue={"null"} >
                        <Select.Option disabled value="null">Chọn phân loại</Select.Option>
                        <Select.Option value="1">Nhớ</Select.Option>
                        <Select.Option value="2">Hiểu</Select.Option>
                        <Select.Option value="3">Đặc thù</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card" maxCount={1}>
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Button">
                    <Button type="primary" block onClick={() => {
                        
                    }}>Thêm</Button>
                </Form.Item>
            </Form>
    </div>
  )
}
