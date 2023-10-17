<script setup lang="ts">
import { onMounted } from 'vue'
import WebApp from '@twa-dev/sdk'

// Event occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).
WebApp.onEvent('themeChanged', function () {
  document.documentElement.className = WebApp.colorScheme
})

// Show main button
WebApp.MainButton.setParams({
  text: 'Main Button'
})
WebApp.MainButton.onClick(function () {
  WebApp.showAlert('Main Button was clicked')
})
WebApp.MainButton.show()
WebApp.isClosingConfirmationEnabled = true
// Function to call showPopup API
function showPopup() {
  WebApp.showPopup(
    {
      title: 'Title',
      message: 'Some message',
      buttons: [{ id: 'link', type: 'default', text: 'Open ton.org' }, { type: 'cancel' }]
    },
    function (btn: any) {
      if (btn === 'link') {
        WebApp.openLink('https://ton.org/')
      }
    }
  )
}

// Function to toggle main TWA button
function toggleMainButton() {
  if (WebApp.MainButton.isVisible) {
    WebApp.MainButton.hide()
  } else {
    WebApp.MainButton.show()
  }
}

WebApp.setHeaderColor('secondary_bg_color')

WebApp.onEvent('themeChanged', function () {
  document.body.setAttribute('style', '--bg-color:' + WebApp.backgroundColor)
})
function open1() {
  WebApp.openTelegramLink('https://t.me/trendingapps')
}
function open2() {
  WebApp.openLink('https://ton.org/')
}
function open3() {
  WebApp.openLink('https://telegra.ph/api', { try_instant_view: true })
}
onMounted(() => {
  function setViewportData() {
    var sizeEl = document.getElementById('viewport-params-size')
    if (!sizeEl) return
    sizeEl.innerText =
      'width: ' + window.innerWidth + ' x ' + 'height: ' + WebApp.viewportStableHeight

    var expandEl = document.getElementById('viewport-params-expand')
    if (!expandEl) return
    expandEl.innerText = 'Is Expanded: ' + (WebApp.isExpanded ? 'true' : 'false')
  }
  setViewportData()
  WebApp.onEvent('viewportChanged', setViewportData)
})
</script>

<template>
  <main>
    <h1>Modals</h1>
    <button @click="WebApp.showAlert('Hello World!')">Launch Alert</button>
    <button @click="showPopup">Launch Popup</button>

    <h1>Links</h1>
    <ul>
      <li>
        <div @click="open1">Open link within Telegram</div>
      </li>
      <li>
        <div @click="open2">Open link in external browser</div>
      </li>
      <li>
        <div @click="open3">Open link inside Telegram webview</div>
      </li>
    </ul>

    <h1>Buttons</h1>
    <button @click="WebApp.expand">Expand Webview</button>
    <button @click="toggleMainButton">Toggle Main Button</button>
  </main>
  <div id="viewport"></div>
  <div id="viewport-params-size"></div>
  <div id="viewport-params-expand"></div>
</template>
