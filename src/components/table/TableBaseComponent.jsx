import React, { Component } from "react";
import { Table } from "antd";
import _ from "lodash";
import { set } from "mobx";
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

    delRows(){
        let _resData ="";
        // _resData = Array.from([...this.state.data, ...this.state.selectData]);
        // this.state.selectData.fore
        // _resData = this.state.data.filter((d)=>{
        //     this.state.selectData.forEach(f=>{
        //         return f.key === d.key
        //     })
        // })

        _.dropWhile(this.state.data, this.state.selectData);
        console.log(_resData)
        return _resData;
    }

    render() {
        //console.log(this.state.data)
        const rowSelection = {
            hideDefaultSelections: true,
            selections: [
                {
                    text: "删除",
                    onSelect: () => {
                        this.setState({
                            data: this.delRows()
                        });
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
