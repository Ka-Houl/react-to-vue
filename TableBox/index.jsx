import React from "react"

export default class TableBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {}

    render() {
        const { tableOption = {} } = this.props

        return (
            <div className={"tableBox"} tableOption={tableOption}>
                11111111111111
            </div>
        )
    }
}
