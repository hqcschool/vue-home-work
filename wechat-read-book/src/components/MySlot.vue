<template>
    <div>
        <div>
            <slot name="xiaofang" :userlist="userlist" ></slot>
            <slot name="zhangsan" :userlist="userlist2"></slot>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            userlist:[
                {
                    name:'小芳',
                    age:18
                },
                {
                    name:'张三',
                    age:20
                }
            ],
            userlist2:[
                {
                    name:'小丽',
                    age:18
                },
                {
                    name:'小明',
                    age:20
                }
            ]
        };
    },
    methods: {
        
    },
};
</script>
<style>
.abc{
    font-size: 30px;
}
</style>
