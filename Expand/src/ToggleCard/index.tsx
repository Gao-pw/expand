/*
 * @ClassName:
 * @Author: gaopw5
 * @Date: 2022-11-17 14:56:20
 * @Description:
 */
/**
 *  下拉切换卡片
 */
import { Select, Card, Spin, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { DefaultOptionType } from 'antd/lib/select';
import 'antd/dist/antd.css';
import styles from './style.less';

export interface ToggleCardProps {
  /**
   * @description 要渲染的内容
   * @default <h2>请输入内容</h2>
   */
  RenderDom?: React.ReactNode | undefined | null; // 要渲染的dom
  /**
   * @description 下拉框选项
   * @default [
    { label: 'label1', value: 'value1' },
    { label: 'label2', value: 'value2' }
  ]
   */
  selectOption: Array<DefaultOptionType>; // 下拉框选项
  /**
   * @description 下拉框变更的回调 接收值为下拉框的value
   * @default onChange(v){return v}
   */
  onChange: Function; // 下拉框变更的回调 接收值为下拉框的value
  /**
   * @description 默认的选择
   */
  defaultValue?: string; // 默认的选择
  /**
   * @description 标题
   * @default 请输入标题
   */
  title?: string; // 标题
  /**
   * @description 提示框，若不设置则不会进行提示
   */
  tooltips?: string; // 提示框
  /**
   * @description 内容框加载状态 true 加载 false 取消加载
   * @default false
   */
  loading: boolean; // 加载loading
  /**
   * @description 卡片是否悬浮
   * @default true
   */
  hoverable?:boolean;
}

export default ({
  RenderDom,
  selectOption = [
    { label: 'label1', value: 'value1' },
    { label: 'label2', value: 'value2' },
  ],
  onChange = (res: string | number | undefined | null) => res,
  defaultValue,
  title,
  tooltips,
  loading = false,
  hoverable = true
}: ToggleCardProps) => {
  return (
    <Card hoverable={hoverable}>
      <div className={styles['main']}>
        {selectOption.length > 0 && (
          <div className={styles['select']}>
            <Select
              options={selectOption}
              onChange={(value) => {
                onChange(value);
              }}
              style={{ width: '100%' }}
              defaultValue={defaultValue || selectOption?.[0].value}
              key={defaultValue || selectOption?.[0].value}
              disabled={loading}
            />
          </div>
        )}
        <div style={{ width: '100%' }}>
          <div>
            <span className={styles['title']}>{title || '请输入标题'}</span>
            {tooltips && (
              <Tooltip title={tooltips}>
                <QuestionCircleOutlined />
              </Tooltip>
            )}
          </div>
          <Spin spinning={loading}>{RenderDom || <h2>请输入内容</h2>}</Spin>
        </div>
      </div>
    </Card>
  );
};
