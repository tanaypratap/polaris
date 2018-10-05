import * as React from 'react';

interface SubAppProps {
    message: string
}

export class SubApp extends React.Component<SubAppProps, any>{
    render(){
        return(
            <h1>Hello {this.props.message}</h1>
        )
    }
}