---
hero:
  title: Expand
  desc: 基于 antd 的二次封装
  actions:
    - text: 开始 ⚽
      link: /components
features:
  - icon: https://cdn.siroi.top/image/%E5%9C%B0%E7%90%83.png
    title: 组件化
    desc: React组件，积木式搭建 🌏
  - icon: https://cdn.siroi.top/image/%E5%AE%87%E8%88%AA%E5%91%98.png
    title: 原子性
    desc: 组件原子化，抽离于业务 🧑‍🚀
  - icon: https://cdn.siroi.top/image/%E5%A4%96%E6%98%9F%E4%BA%BA.png
    title: 独立化
    desc: 复杂特性独立化，动静分离 👽
footer: Open-source MIT Licensed | Copyright © 2022 [siroi](https://www.siroi.top)
---
<style>
  .title {
    font-size:24px;
    margin:0 auto !important; 
    width:50%;
    text-align:center;
    font-weight:700;
    position: relative;
  }
  .title:after {
      content: " ";
      position: absolute;
      left: 50%;
      bottom: -2px;
      width: 100%;
      height: 0px;
      margin:0 auto;
      background-image: linear-gradient(to right top, #1799d1, #3ba3d6, #53addc, #67b7e1, #79c1e7);
      /* border-top: 1px solid #5A8BFF; */
      transform:translateX(-50%);
      }
  .subTitle {
    margin:0 auto !important; 
    width:30%;
    text-align:center;
    font-style:italic;
    font-weight:600;
    padding-top:2px
  }

  .error {
    min-width:20%;
    max-width:50%;
    margin:0 auto !important; 
    text-align:center;
    font-weight:600;
    background-image: linear-gradient(to right top, #c47ccf, #d46dbb, #e05da2, #e65087, #e74669);
    color:white;
  }
</style>
<!-- <span style="background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);-webkit-background-clip:text;color:transparent; font-size: 24px;">Hello Expand</span> -->
<div style="width:100%">
  <p class="title">Hello Expand</p>
  <p class="subTitle">不止于 antd</p>
  <br>
  <p class="error">Antd5.0 is not supported</p>
</div>

> 涉及两部分，UI组件和自定义hooks，缓慢更新ing 

