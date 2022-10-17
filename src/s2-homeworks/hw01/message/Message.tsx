import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    src={'https://steamuserimages-a.akamaihd.net/ugc/308866714995341540/7AAB025F7AD230D36E09F9E3FB09FF2C5F52F241/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'}
                    alt={'avatar'} id={'hw1-avatar-' + props.message.id}

                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        Борис
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        lorem20

                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                00.21
            </div>
        </div>
    )
}

export default Message
