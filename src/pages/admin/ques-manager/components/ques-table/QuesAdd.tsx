import { PlusOutlined } from "@ant-design/icons";
import { Button, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Radio, Rate, Select, Slider, Switch, TreeSelect, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";

export default function QuesAdd() {
    const [countOfAns , setCountOfAns] = useState(0);
    const [renderAnsInput , setRenderAnsInput] = useState<JSX.Element[]>([])
    const [renderAnsRadio , setRenderAnsRadio] = useState<JSX.Element[]>([])
    useEffect(()=>{
        const renderInputEl = [];
        const renderRadioEl = [];
        for (let i = 0; i < countOfAns; i++) {
            renderInputEl.push(
                <Form.Item key={Math.random()*Date.now()} label={`Câu ${String.fromCharCode(65+i)}`}>
                    <Input placeholder="Nhập nội dung câu hỏi"/>
                </Form.Item>
            )
            renderRadioEl.push(
                <Radio value={`${i+1}`} name="correctAns"> {String.fromCharCode(65+i)} </Radio>
            )
        }
        setRenderAnsRadio(renderRadioEl);
        setRenderAnsInput(renderInputEl);
    },[countOfAns])

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    return (
        <div>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: "100%" }}
            >
                <h2 style={{textAlign:"center",margin:"30px",fontSize:"30px"}}>Thêm mới câu hỏi</h2>
                <Form.Item label="Chương">
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
                <Form.Item label="Câu hỏi">
                    <Input placeholder="Nhập nội dung câu hỏi"/>
                </Form.Item>
                <Form.Item label="Số câu trả lời">
                    <Input type="number" max={4} placeholder="Nhập số lượng câu trả lời ( Nhiều nhất 4)" onChange={(e)=>{setCountOfAns(Number(e.target.value))
                    }}/>
                </Form.Item>
                {
                    renderAnsInput.map((item)=>(
                        item
                    ))
                }
                <Form.Item label="Đáp án">
                    <Radio.Group>
                    {
                        renderAnsRadio.map((item)=>(
                            item
                        ))
                    }
                    </Radio.Group>
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
                    <Button type="primary" block>Button</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
