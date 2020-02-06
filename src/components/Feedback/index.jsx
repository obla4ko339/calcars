import React from "react"
import './style.css'


export default class Feedback extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isFeedback:false,
            userName:"",
            userTelephone:"",
            isAssign:true,
            btnTrue:false
        }
        
    }

    handleFeedback(){
        this.setState({
            isFeedback:true
        })
    }

    handleFeedbackClose(){
        this.setState({
            isFeedback:false
        })
    }

    handleName(e){
        this.setState({userName:e.currentTarget.value})
    }

    handleTelephone(e){
        this.setState({userTelephone:e.currentTarget.value})
    } 



    hendleBtn(data){
        data.preventDefault()
        if(this.state.userName !== "" && this.state.userTelephone !== ""){
            this.props.handleBtnProps(data, this.state)
            this.setState({btnTrue:true})
            
            setTimeout(()=>{
                this.setState({isFeedback:false})   
            },2000)
        }
    }





    render(){
        return(
            <div className="container_feedback">
                
                <div className="btnCallBack" onClick={(e)=>{this.handleFeedback()}}>
                      Заказать расчет
                </div>

                <div className={this.state.isFeedback ? "container_form_visible" : "container_form_hidden" }>
                <div className="overlay"></div>
                <div className="feedBack_center">
                    <div className="container_feedback_form">
                        
                        <form action="#" method="post">
                            <div className="conainer_input">
                                <div className="close_feedBack" onClick={(e)=>{this.handleFeedbackClose()}}>X</div> 
                                <div className="feedbackTitle">Заказать расчет</div>
                                <div className="feedbackSubText">Отправьте нам свой номер телефона и мы Вам позвоним!</div>
                                <hr/>
                                <div>
                                    <input type="text" name="name_user" id="name_user" placeholder="Ваше имя:" onChange={(e)=>{this.handleName(e)}} className="name_user input__field"/>
                                </div>

                                <div>
                                    <input type="tel" name="tel_user" id="tel_user" className="tel_user input__field" onChange={(e)=>{this.handleTelephone(e)}} placeholder="Ваш номер:" />
                                </div>

                                <div className="container_check_assign_data">
                                    <div>
                                        <input type="checkbox" name="check_assign_data" id="check_assign_data" checked/>
                                    </div>
                                    <div className="title_check_assign_data">
                                        Даю согласие на обработку своих персональных данных
                                    </div>
                                </div>

                                <div>
                                    <input type="submit" name="btn_feedback" id="btn_feedback" className="btn_feedback" value="Заказать" onClick={(e)=>this.hendleBtn(e)} />
                                </div>

                                <div>
                                    {
                                        this.state.btnTrue ? <div className="thankIs">Спасибо! Наш менеджер Свяжется с Вами!</div> : ""
                                    }
                                </div>

                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}