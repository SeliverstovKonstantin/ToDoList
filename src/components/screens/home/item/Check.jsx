import React from "react";
import { BsCheck } from "react-icons/bs";
import classNames from "classnames";


const Check = ({isCompleted}) => {
    return(
        <div className={classNames("border-2 rounded-lg border-blue-400  w-6 h-6 mr-3 flex items-center justify-center", 
            {"bg-blue-600": isCompleted,
            })}>
            {isCompleted &&
            <BsCheck size={24} className="text-gray-900 " />
            }       
        </div>
    )
}

export default Check