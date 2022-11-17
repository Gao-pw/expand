/*
 * @ClassName: 
 * @Author: gaopw5
 * @Date: 2022-11-17 14:56:20
 * @Description: 
 */
/**
 *  下拉切换卡片
 */
 import React from 'react';
import { Select,Card } from 'antd'
import { OptionProps } from 'antd/lib/select';

interface ToggleCardProps {
    RenderDom:React.ReactNode, // 要渲染的dom
    selectOption?:Array<OptionProps>, // 下拉框选项
    onChange?:Function,
}

export default ({RenderDom}:ToggleCardProps) =>{
    return <Card hoverable>
        {RenderDom}
    </Card>
};