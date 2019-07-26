# react_high
react高阶组件学习-demo

==高阶组件=====

>可以接收一个组件，并返回一个新组件的 **函数**



==== 代理方式的高阶组价 ====

> 接收一个参数组件， 在 render 函数中，将被包裹组件渲染出来，并返回一个新的组件
>
> 1. 操纵prop
> 2. 抽取状态
> 3. 访问ref
> 4. 包装组件
>
> 特点：
>
> 继承于 Component
>
> return  WrappedComponent



==== 继承方式的高阶组件 ====

> 继承关联作为参数的组件和返回的组件，加入传入的参数组件 WrappedComponent，那么返回的新组件继承自 WrappedComponent
>
> 1. 操纵 prop
> 2. 操纵生命周期函数 
>
> 特点：
>
> 继承于 WrappedComponent
>
> return super.render()

