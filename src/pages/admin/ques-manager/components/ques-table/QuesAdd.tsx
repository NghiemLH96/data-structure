import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Radio, Select, Upload } from "antd";
import modal from "antd/es/modal";
import { useEffect, useState } from "react";

export default function QuesAdd() {
    const [countOfAns, setCountOfAns] = useState(0);
    const [renderAnsInput, setRenderAnsInput] = useState<JSX.Element[]>([])
    const [renderAnsRadio, setRenderAnsRadio] = useState<JSX.Element[]>([])
    const [form] = Form.useForm();
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
    const [quesData, setQuesData] = useState<DataType[]>([]);
    useEffect(() => {
        let mockQues = localStorage.getItem("ques-data")
        if (mockQues) {
            setQuesData(JSON.parse(mockQues));
        }
    },[])
    const clearForm = () => {
        form.resetFields();
    };
    
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Câu hỏi đã thêm thành công',
        });
      };

    const addNewQues = () => {
        const formValue = form.getFieldsValue();
        let newAnswerList: Array<Answer> = [];
        newAnswerList = Object.keys(formValue)
            .filter(key => key.startsWith("answer"))
            .map(key => formValue[key])
            .map((item, index) => { return { correct: index == Number(formValue.correct) ? true : false, content: item } })
        const newQues: DataType = {
            id: Number(Math.random() * Date.now()),
            ques: formValue.question,
            key: String(Math.random() * Date.now()),
            chapt: Number(formValue.chapter),
            point: Number(formValue.score),
            bloom: Number(formValue.bloom),
            ans: newAnswerList,
            pics: null,
        }
        modal.confirm({
            title: 'Thêm câu hỏi',
            icon: <ExclamationCircleOutlined />,
            content: 'Bạn có chắc muốn thêm câu hỏi này chứ?',
            okText: 'Xác nhận',
            cancelText: 'Huỷ',
            onOk: () => {
                let updated = [...quesData, newQues];
                setQuesData(updated);
                localStorage.setItem("ques-data",JSON.stringify(updated))
                success();
                clearForm();
            },
            onCancel: () => { return }
        });

    }
    useEffect(() => {
        const renderInputEl = [];
        const renderRadioEl = [];
        for (let i = 0; i < countOfAns; i++) {
            renderInputEl.push(
                <Form.Item key={Math.random() * Date.now()} label={`Câu ${String.fromCharCode(65 + i)}`} name={`answer${i + 1}`}>
                    <Input placeholder="Nhập nội dung câu hỏi" />
                </Form.Item>
            )
            renderRadioEl.push(
                <Radio value={i} name="correctAns"> {String.fromCharCode(65 + i)} </Radio>
            )
        }
        setRenderAnsRadio(renderRadioEl);
        setRenderAnsInput(renderInputEl);
    }, [countOfAns])

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
                <h2 style={{ textAlign: "center", margin: "30px", fontSize: "30px" }}>Thêm mới câu hỏi</h2>
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
                        addNewQues();
                    }}>Thêm</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
