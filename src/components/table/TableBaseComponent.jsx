import React, { Component } from "react";
import { Table, message } from "antd";
const colums = [
    {
        title: "姓名",
        dataIndex: "title"
    },
    {
        title: "年纪",
        dataIndex: "age"
    },
    {
        title: "地址",
        dataIndex: "address"
    }
];

const data = [];

for (let i = 1; i < 104; i++) {
    data.push({
        key: i,
        title: `Edward King ${i}`,
        age: parseInt(Math.random() * 20 + 1),
        address: `London, Park Lane no. ${i}`
    });
}

class TableBaseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            selectData: ""
        };
    }

    delRows() {
        let _resData = "";
        let _data = this.state.data;
        let _delData = this.state.selectData.map(d => {
            return d.key;
        });

        _resData = _data.filter(d => {
            return !_delData.includes(d.key);
        });

        return _resData;
    }

    render() {

        const rowSelection = {
            hideDefaultSelections: true,
            selections: [
                {
                    text: "删除",
                    onSelect: () => {
                        this.setState({
                            data: this.delRows()
                        });

                        message.success("del success", 1);
                    }
                },
                {
                    text: "取消"
                }
            ],

            onSelect: (record, selected, selectedRows, nativeEvent) => {
                this.setState({
                    selectData: selectedRows
                });
            },

            onSelectAll: (selected, selectedRows, changeRows) => {
                this.setState({
                    selectData: selectedRows
                });
            },
            onSelectInvert: selectedRows => {
                this.setState({
                    selectData: selectedRows
                });
            }
        };

        return (
            <Table
                rowSelection={rowSelection}
                columns={colums}
                dataSource={this.state.data}
            />
        );
    }
}

export default TableBaseComponent;
