import QuesTable from"./components/ques-table/QuesTable"
import "./quesMng.scss"

export default function QuesMng() {
  return (
    <div className="page-container">
        <section className="ques-Box">
            <section className="quesMng-top">
                <button>Add new</button>
                <input type="text" placeholder="Enter your question keywords"/>
            </section>
            <section className="quesMng-bottom">
                <QuesTable/>
            </section>
        </section>
    </div>
  )
}
