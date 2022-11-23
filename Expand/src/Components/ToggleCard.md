---
order: 1
nav:
  title: 组件
  path: /components
---

## ToggleCard (下拉切换卡片)

<Alert type="info">
  🍾 适用于内容和下拉选项联动的业务情形
</Alert>

### 基础使用

```tsx
import React, { useState } from 'react';
import { ToggleCard } from 'Expand';
import styled from 'styled-components';

const ColorSpan = styled.span`
  background-image: linear-gradient(
    to right,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  -webkit-background-clip: text;
  color: transparent;
  font-size: 24px;
`;

const context = ['i am siroi','please v me $50 to eat kfc'];

export default () => {
  const [contextIndex, setContextIndex] = useState<number>(0);
  return (
    <ToggleCard
      title={'hi~👋'}
      RenderDom={<ColorSpan>{context[contextIndex]}</ColorSpan>}
      selectOption={[0, 1].map((v) => ({ label: v, value: v }))}
      onChange={(value) => setContextIndex(Number(value))}
    />
  );
};
```

### 悬浮和 loading 🍺

`悬浮` ：antd-card 中默认的 **_hoverable_** 属性 <br> `loading` : 下拉框切换时卡片内容的 **_加载_** 状态

```tsx
import React, { useState, useEffect } from 'react';
import { ToggleCard } from 'Expand';
import styled from 'styled-components';

const ColorSpan = styled.span`
  background-image: linear-gradient(
    to right,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
  -webkit-background-clip: text;
  color: transparent;
  font-size: 24px;
`;

const context = ['禁止鼠标悬浮❌', '允许鼠标悬浮✔'];

export default () => {
  const [contextIndex, setContextIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [hoverable, setHoverable] = useState<boolean>(false);
  useEffect(() => {
    setLoading(false);
    setHoverable(contextIndex === 0 ? false : true);
  }, [contextIndex]);
  return (
    <ToggleCard
      title={'是否启用悬浮😏'}
      RenderDom={<ColorSpan>{context[contextIndex]}</ColorSpan>}
      selectOption={[
        { label: '禁止', value: 0 },
        { label: '允许', value: 1 },
      ]}
      onChange={(value) => {
        setLoading(true);
        setTimeout(()=>{setContextIndex(Number(value))}, 2000);
      }}
      hoverable={hoverable}
      loading={loading}
    />
  );
};
```

### 额外的 tooltips
设置 `tooltips` 属性展示额外的提示内容

```tsx
import React, { useState } from 'react';
import { ToggleCard } from 'Expand';
import styled from 'styled-components';

const ColorSpan = styled.span`
  color: 'black';
  font-size: 24px;
`;

const context = ['please v me $50 ','i love 🍔'];

export default () => {
  const [contextIndex, setContextIndex] = useState<number>(0);
  return (
    <ToggleCard
      title={'hi~👋'}
      RenderDom={<ColorSpan>{context[contextIndex]}</ColorSpan>}
      selectOption={[0, 1].map((v) => ({ label: v, value: v }))}
      onChange={(value) => setContextIndex(Number(value))}
      tooltips={'今天是星期四!!'}
    />
  );
};
```

<API src="../ToggleCard/index.tsx"></API>
