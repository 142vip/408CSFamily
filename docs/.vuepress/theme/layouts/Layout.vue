<!--
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2022-04-24 08:37:48
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-24 08:47:23
-->
<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">自定义页脚</div>

    </template>

    <template #navbar-before>
      <div class="my-footer">搜索框</div>

    </template>

    <template #sidebar-top>
      <div class="sidebar-top">广告区域</div>

    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>