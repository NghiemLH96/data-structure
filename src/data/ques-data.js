
  const seedQues = [
    {
        ques: "Question1",
        key:"1",
        chapt:1,
        point:0.25,
        bloom:1,
        ans:[
            {
                correct:false,
                content:"Answer 1"
            },{
                correct:false,
                content:"Answer 2"
            },{
                correct:false,
                content:"Answer 3"
            },{
                correct:false,
                content:"Answer 4"
            }
        ],
        pics:null,
        tags: ['tag1','tag2'] 
    },{
        ques: "Question2",
        key:"2",
        chapt:1,
        point:0.25,
        bloom:1,
        ans:[
            {
                correct:false,
                content:"Answer 1"
            },{
                correct:false,
                content:"Answer 2"
            },{
                correct:false,
                content:"Answer 3"
            },{
                correct:false,
                content:"Answer 4"
            }
        ],
        pics:null,
        tags: ['tag1','tag2'] 
    },{
        ques: "Question3",
        key:"3",
        chapt:1,
        point:0.25,
        bloom:1,
        ans:[
            {
                correct:false,
                content:"Answer 1"
            },{
                correct:false,
                content:"Answer 2"
            },{
                correct:false,
                content:"Answer 3"
            },{
                correct:false,
                content:"Answer 4"
            }
        ],
        pics:null,
        tags: ['tag1','tag2'] 
    },{
        ques: "Question4",
        key:"4",
        chapt:1,
        point:0.25,
        bloom:1,
        ans:[
            {
                correct:false,
                content:"Answer 1"
            },{
                correct:false,
                content:"Answer 2"
            },{
                correct:false,
                content:"Answer 3"
            },{
                correct:false,
                content:"Answer 4"
            }
        ],
        pics:null,
        tags: ['tag1','tag2'] 
    },{
        ques: "Question5",
        key:"5",
        chapt:1,
        point:0.25,
        bloom:1,
        ans:[
            {
                correct:false,
                content:"Answer 1"
            },{
                correct:false,
                content:"Answer 2"
            },{
                correct:false,
                content:"Answer 3"
            },{
                correct:false,
                content:"Answer 4"
            }
        ],
        pics:null,
        tags: ['tag1','tag2'] 
    },{
        ques: "Question6",
        key:"6",
        chapt:1,
        point:0.25,
        bloom:1,
        ans:[
            {
                correct:false,
                content:"Answer 1"
            },{
                correct:false,
                content:"Answer 2"
            },{
                correct:false,
                content:"Answer 3"
            },{
                correct:false,
                content:"Answer 4"
            }
        ],
        pics:null,
        tags: ['tag1','tag2'] 
    },{
        ques: "Question7",
        key:"7",
        chapt:1,
        point:0.25,
        bloom:1,
        ans:[
            {
                correct:false,
                content:"Answer 1"
            },{
                correct:false,
                content:"Answer 2"
            },{
                correct:false,
                content:"Answer 3"
            },{
                correct:false,
                content:"Answer 4"
            }
        ],
        pics:null,
        tags: ['tag1','tag2'] 
    },{
        ques: "Question8",
        key:"8",
        chapt:1,
        point:0.25,
        bloom:1,
        ans:[
            {
                correct:false,
                content:"Answer 1"
            },{
                correct:false,
                content:"Answer 2"
            },{
                correct:false,
                content:"Answer 3"
            },{
                correct:false,
                content:"Answer 4"
            }
        ],
        pics:null,
        tags: ['tag1','tag2'] 
    },{
        ques: "Question9",
        key:"9",
        chapt:1,
        point:0.25,
        bloom:1,
        ans:[
            {
                correct:false,
                content:"Answer 1"
            },{
                correct:false,
                content:"Answer 2"
            },{
                correct:false,
                content:"Answer 3"
            },{
                correct:false,
                content:"Answer 4"
            }
        ],
        pics:null,
        tags: ['tag1','tag2'] 
    },{
        ques: "Question10",
        key:"10",
        chapt:1,
        point:0.25,
        bloom:1,
        ans:[
            {
                correct:false,
                content:"Answer 1"
            },{
                correct:false,
                content:"Answer 2"
            },{
                correct:false,
                content:"Answer 3"
            },{
                correct:false,
                content:"Answer 4"
            }
        ],
        pics:null,
        tags: ['tag1','tag2'] 
    }
  ]
function uuid(){
    seedQues.map((item)=>{
        item.id = Math.ceil(Math.random()*Date.now())
    })
}
uuid()
localStorage.setItem("ques-data",JSON.stringify(seedQues))