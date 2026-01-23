# 2026-01-09 Vue 学习笔记 - Day 2：Composition API 的基本用法

今天继续学习 Vue 3，主要聚焦于 Composition API 的基本用法、响应式数据的处理、与 Options API 的对比，以及组件间通信（子传父）。同时探索了如何将组件逻辑分离到独立的脚本文件中，以提高代码的可读性和可维护性。

## 1. Options API vs Composition API

- Vue 3 支持两种编写组件的方式：

    - Options API（Vue 2 的传统方式）：代码按选项组织（如 data、methods、computed 等），适合小型组件或初学者。
    - Composition API（Vue 3 新特性）：使用 (script setup) 或 setup() 函数，按逻辑关注点组织代码，更适合大型组件、逻辑复用和 TypeScript 支持。

    Options API 示例:
    ```vue
    <script>
    export default {
        data() {
            return {
                userName: "lyh",
                salary: 5000,
            };
        },
    methods: {
        addSalary() {
            this.salary += 1000;
            console.log(this.salary);
            },
        },
    };
    </script>
    ```
    Composition API 示例（推荐写法）:
    ```vue
    <script setup>
    import { reactive } from 'vue';

    const salaryInfo = reactive({
        userName: 'lyh',
        salary: 5000
    });

    function addSalary() {
        salaryInfo.salary += 1000;
        console.log(salaryInfo);
    }
    </script>
    ```
    Composition API 优势：
    - 逻辑按功能分组，便于维护大型组件。
    - 支持更好的逻辑复用（Composables）。
    - 与 TypeScript 集成更友好。
    - 性能更优（尤其配合 __script setup__）。

    官方推荐：新项目优先使用 Composition API + __script setup__。

## 2. 响应式 API：ref vs reactive

- Vue 3 响应式系统的核心：
    - ref：适用于原始值（__number、string、boolean__ 等）或需要整体替换的对象。模板中自动解包，JS 中需访问 __.value__。
    - reactive：专用于对象（object、array），直接操作属性，无需 __.value__。
    
    示例代码:
    ```vue
    <script setup>
    import { ref } from 'vue';
    import MySalaryInfo from '@/components/MySalaryInfo.vue';

    const salaryInfo = ref(); // 初始为 undefined

    function showRes() {
        console.log(salaryInfo);             // RefImpl 对象
        console.log(salaryInfo.value);        // Proxy 对象（响应式）
        console.log(salaryInfo.value.userName);
        console.log(salaryInfo.value.salary);
    }
    </script>
    ```
    结果显示:
    ![](../img/2.3.png)
    ref:
    ![](../img/2.1.png)
    reactive:
    ![](../img/2.2.png)
    最佳实践：

    - 大多数场景优先使用 __ref__（更灵活）。
    - 处理复杂对象且不想频繁写 __.value__ 时，可用 __reactive__。
    - 解构 reactive 会丢失响应式，可配合 __toRefs__ 使用。

## 3. 组件逻辑分离（Composables 思想）

将可复用逻辑提取到独立文件中，这是 Vue 3 推荐的 Composables 模式（通常放在 composables/ 目录，函数名以 use 开头）。
- 示例：提取薪资逻辑:

    创建 composables/useSalary.ts：
    ```typescript
    import { ref } from 'vue';

    export function useSalary() {
        const userName = ref('lyh');
        const salary = ref(5000);

        const addSalary = () => {
            salary.value += 1000;
            console.log('当前薪资：', salary.value);
        };

        return { userName, salary, addSalary };
    }
    ```
    在组件中使用:
    ```vue
    <script setup>
    import { useSalary } from '@/composables/useSalary';
    const { userName, salary, addSalary } = useSalary();
    </script>
    ```
    优点：

    - 逻辑与模板分离，组件更简洁。
    - 多组件复用同一逻辑。
    - 便于单元测试。

## 今日小结
今天巩固了 Composition API、响应式数据、Composables 和组件通信的基础，代码组织能力提升了不少！