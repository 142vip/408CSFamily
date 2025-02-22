<!--
  参考链接：
    - https://www.npmjs.com/package/xmind-embed-viewer
    - https://xmindltd.github.io/xmind-embed-viewer/
  注意：
    - 使用ClientOnly内置组件，只在客户端加载，避免依赖构建出错
-->
<script>
import { XMindEmbedViewer } from 'xmind-embed-viewer'
import mapData from '../public/mind-map/index.json'

export default {
  data() {
    return {
      viewer: {},
      xmindIndex: 0,
      xmindFileList: [],
      xmindFile: mapData.length > 0 ? mapData[0].xMindPath : '../mark-map/操作系统发展历程.xmind',
    }
  },

  /**
   * 监听下来列表变更
   */
  watch: {
    async xmindIndex(newIndex, _oldVal) {
      const { xMindPath } = mapData[newIndex]

      // 打开指定
      const xmindResponse = await fetch(xMindPath)
      const data = await xmindResponse.arrayBuffer()
      this.viewer.setZoomScale(100)
      this.viewer.load(data)
    },
  },
  created() {
    this.xmindFileList = mapData.map(({ name }) => name)
  },
  mounted() {
    (async () => {
      const res = await fetch(this.xmindFile)

      this.viewer = new XMindEmbedViewer({
        el: '#x-mind-manager-container',
        file: await res.arrayBuffer(),
        // 国内：cn 全球：global
        region: 'cn',
        styles: {
          width: '100%',
          minHeight: '600px',
          height: 'auto',
          maxHeight: '1200px',
        },
      })
    })()
  },

  methods: {
    /**
     * 打开本地思维导图文件
     */
    async handleOpenLocalBtnClick() {
      const fileSelector = document.createElement('input')
      fileSelector.style.display = 'none'
      document.body.appendChild(fileSelector)
      await new Promise((resolve) => {
        fileSelector.setAttribute('type', 'file')
        fileSelector.setAttribute('accept', '.xmind')
        fileSelector.addEventListener('change', () => {
          resolve()
        })
        fileSelector.click()
      }).finally(() => {
        document.body.removeChild(fileSelector)
      })
      if (!fileSelector.files || !fileSelector.files.length) {
        return
      }
      const file = fileSelector.files[0]
      if (!file)
        return

      const data = await file.arrayBuffer()
      this.viewer.load(data)
    },
    /**
     * 恢复缩放比例
     */
    async handleZoomScaleRevertBtnClick() {
      this.viewer.setFitMap()
    },
  },
}
</script>

<template>
  <div class="x-mind-container">
    <!-- xmind思维导图管理器 -->
    <div id="x-mind-manager-container" />
    <div class="btn-container">
      <button id="openLocalBtn" @click="handleOpenLocalBtnClick">
        打开本地
      </button>
      <button id="zoomScaleBtn" @click="handleZoomScaleRevertBtnClick">
        还原缩放
      </button>

      <div class="select">
        <select v-model="xmindIndex">
          <option v-for="(xmind, index) in xmindFileList" :key="index" :value="index">
            {{ xmind }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-container {
  margin: 50px 0;
  text-align: center;
}

.select {
  display: inline-block;
  width: 200px;
  position: relative;
  vertical-align: middle;
  padding: 0;
  overflow: hidden;
  background-color: #fff;
  color: #555;
  border: 1px solid #aaa;
  text-shadow: none;
  border-radius: 4px;
  transition: box-shadow 0.25s ease;
  z-index: 1;
}

.select:hover {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
}

.select:before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #ccc;
  top: 14px;
  right: 10px;
  cursor: pointer;
  z-index: -2;
}

.select select {
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  background: transparent none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.select select:focus {
  outline: none;
}

#x-mind-manager-container {
  width: 100%;
  height: 600px;
}

button {
  background: #eb94d0;
  /* 创建渐变 */
  background-image: -webkit-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -moz-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -ms-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -o-linear-gradient(top, #eb94d0, #2079b0);
  background-image: linear-gradient(to bottom, #eb94d0, #2079b0);
  /* 给按钮添加圆角 */
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 10px;
  -moz-box-shadow: 6px 5px 24px #666666;
  font-family: Arial, serif;
  margin: 5px;
  color: #fafafa;
  font-size: 14px;
  padding: 5px;
  text-decoration: none;
}

/* 悬停样式 */
button:hover {
  cursor: pointer;
  background: #2079b0;
  background-image: -webkit-linear-gradient(top, #2079b0, #eb94d0);
  background-image: -ms-linear-gradient(top, #2079b0, #eb94d0);
  text-decoration: none;
}
</style>
