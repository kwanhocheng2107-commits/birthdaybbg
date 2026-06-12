# Codex 交接说明

## 当前项目是什么

这是一个送给女朋友的生日网页，项目名是《给你的第1个生日宇宙》。它是一个手机端优先的纵向单页网页，包含生日倒计时、回忆时间线、互动卡片、小游戏、生日信和本地留言盒。

用户是编程小白，后续需要一步一步带着做。改动时要保持结构清晰，解释要简洁，避免一次性重构太多。

## 技术栈

- HTML
- CSS
- 原生 JavaScript
- 无 React
- 无后端
- 无数据库
- 无登录
- 留言使用浏览器 `localStorage`
- 手机端优先

## 重要文件

- `index.html`
  - 正式生日网页入口。
  - 包含所有页面模块结构。
  - 引用 `style.css`、`meteor.js`、`script.js`。

- `style.css`
  - 全站视觉、响应式、字体、动画。
  - 包含星尘串行转场、星光呼吸、流星样式。

- `script.js`
  - 生日倒计时。
  - 进入生日宇宙星尘串行转场流程。
  - 卡片翻转。
  - 生日签和问答。
  - 留言盒 localStorage。

- `meteor.js`
  - 独立的流星背景生成逻辑。
  - 当前仍在调试阶段。

- `meteor-demo.html`
  - 只用于测试流星背景。
  - 不是正式页面模块。

- `PROJECT_SPEC.md`
  - 固定需求和项目规格。

- `TODO.md`
  - 当前完成情况、未完成问题、建议开发顺序。

- `CODEX_HANDOFF.md`
  - 当前交接说明。

## 现在不能乱改的地方

- 不要随意重构 `index.html` 的整体模块结构。
- 后续修改只能小步迭代：一次解决一个明确问题，不要整体重构或顺手大改。
- 不要随意改倒计时三状态逻辑：
  - `BIRTHDAY_START_DATE`
  - `BIRTHDAY_END_DATE`
  - `DEV_UNLOCK`
  - `getBirthdayState()`
  - `updateCountdown()`
- 正式模式下，生日倒计时结束后才能进入完整内容；不要把 `DEV_UNLOCK` 当作正式逻辑。
- 不要把留言盒改成云端同步；当前明确要求只用 `localStorage`。
- 不要引入 React、后端、数据库或登录。
- 不要在调流星时顺手改入口动画。
- 不要在调入口动画时顺手改流星背景。
- 不要删除 `prefers-reduced-motion` 相关处理。
- 不要把所有文字都改成手写体；正文必须保持可读。
- 不要恢复旧的 `universe-staging`、`universe-entered`、`html.universe-transitioning` 入口机制。
- 不要把月亮放回 `.gate` 内；当前月亮是全局背景元素，需要在转场前后始终保留。
- 不要让倒计时页和第二页同时重叠展示；当前转场要求严格串行：倒计时页退场后第二页再淡入。

## 后续每次修改前应该先检查什么

1. 先看用户要求属于哪一块：
   - 倒计时
   - 入口切换动画
   - 背景流星
   - 时间线
   - 卡片
   - 小游戏
   - 生日信
   - 留言盒
   - 字体/排版

2. 只读相关文件和片段，不要先全局乱改。

3. 如果是入口切换动画，先检查：
   - `script.js` 的 `enterUniverse()`
   - `style.css` 的 `.gate--stardust`
   - `style.css` 的 `body.is-transitioning`
   - `style.css` 的 `body.is-revealing`
   - `style.css` 的 `body.has-entered`
   - `style.css` 的 `.site-main`
   - `style.css` 的 `.moon`

4. 如果是流星背景，先检查：
   - `index.html` 中 `.meteor-layer`
   - `style.css` 中 `.meteor-layer`、`.meteor`、`@keyframes meteorFly`
   - `meteor.js` 中 `METEOR_DEFAULTS`、`spawnMeteor()`、`startMeteorLayer()`
   - `meteor-demo.html` 的 `window.METEOR_SETTINGS`

5. 如果是字体/排版，先检查：
   - Google Fonts 引用。
   - `:root` 里的字体变量。
   - `h1`、`h2`、`.eyebrow`、`.title-number`。
   - 移动端是否会掉字。

6. 如果是留言盒，先检查：
   - `STORAGE_KEY`
   - `getMessages()`
   - `saveMessages()`
   - `renderMessages()`
   - 表单 submit 逻辑。

7. 如果是小游戏，先确认流程不能被打乱：
   - 先抽生日签。
   - 再进入记忆问答。
   - 答对后解锁隐藏告白。

## 如果上下文丢失，如何恢复项目理解

1. 先读这三个文档：
   - `PROJECT_SPEC.md`
   - `TODO.md`
   - `CODEX_HANDOFF.md`

2. 再读正式页面结构：
   - `index.html`

3. 再按任务类型读对应代码：
   - 页面样式和动画：`style.css`
   - 功能逻辑：`script.js`
   - 流星调试：`meteor.js`、`meteor-demo.html`

4. 运行基础检查：

```bash
node --check script.js
node --check meteor.js
```

5. 在浏览器中验证：
   - 正式页：`file:///Users/steven/Documents/New%20project/index.html`
   - 流星 demo：`file:///Users/steven/Documents/New%20project/meteor-demo.html`

## 当前特别提醒

- 用户刚刚要求“先不要继续开发”，本次只更新 `TODO.md` 和 `CODEX_HANDOFF.md`，不要继续修改功能代码。
- 背景流星效果先放一边，用户最近重点在“进入生日宇宙”的切换动画。
- 入口切换动画已经从旧的 staging 全屏接替，改为“星尘串行转场”：
  - 点击按钮后添加 `body.is-transitioning` 和 `.gate--stardust`。
  - 倒计时页先星尘退场。
  - 约 3200ms 后隐藏 `.gate` 并添加 `body.is-revealing`。
  - 第二页此时才开始淡入。
  - 约 4700ms 后进入最终 `body.has-entered`。
- 月亮已从 `.gate` 内移出，作为全局背景元素保留，转场前后都可见。
- 已修复 Hero 正文因滚动条出现/消失导致换行跳变的问题：`html` 使用 `scrollbar-gutter: stable` 和 `overflow-y: scroll`。
- 旧的 `universe-staging` / `universe-entered` / `html.universe-transitioning` 机制不应恢复。
- 流星 demo 曾经因为 `window.createMeteor` 与内部函数同名导致递归栈溢出，已改成内部 `spawnMeteor()`，外部保留 `window.createMeteor()` 调试入口。

## 本轮已完成的转场修改

- 将进入动画改成“倒计时页退场 -> 第二页淡入”的串行流程。
- 将月亮从倒计时页中独立出来，避免 `.gate.is-hidden` 时月亮一起消失。
- 拉长转场总时长到约 4.7 秒，突出星尘退场和第二页淡入。
- 避免两个画面同时重叠：第二页只在 `body.is-revealing` 时淡入。
- 保持第二页真实文档流渲染，不再使用 staging 伪布局。
- 添加稳定滚动条占位，避免 Hero 正文在转场前后重新换行。

## 当前还没解决 / 待验证

- 需要在真实手机浏览器上继续验证：
  - iPhone 地址栏变化下 `100svh` 是否稳定。
  - 转场总时长约 4.7 秒是否合适。
  - 月亮常驻后是否会遮挡 Hero、时间线或后续模块。
  - reduced-motion 模式是否仍能直接进入内容。
- 背景流星仍处于调试阶段，正式页效果不要当作完成项。
- 页面内容仍是示例占位，后续需要替换真实照片和文字。

## 下一步优先建议

1. 先只做移动端转场 QA，不开发新功能。
2. 如果转场 QA 通过，再单独处理背景流星。
3. 再替换真实内容：时间线、卡片、生日签、问答、生日信。
4. 最后做完整移动端 QA 和部署准备。

## 下一次 Codex 任务提示词

```text
请先阅读 PROJECT_SPEC.md、TODO.md、CODEX_HANDOFF.md，以及当前 index.html、style.css、script.js。

这是《给你的第1个生日宇宙》生日网页项目。请保持 HTML + CSS + JavaScript，不要改成 React/Vue/Next，不要重构整个项目。

当前入口转场是“星尘串行转场”：点击按钮后倒计时页先退场，月亮作为全局背景保留，倒计时页完全隐藏后第二页再淡入。请不要恢复旧的 universe-staging / universe-entered / html.universe-transitioning 机制，也不要让倒计时页和第二页同时重叠展示。

请一次只处理一个明确问题。修改前先说明准备改哪些文件；修改后说明改了什么、如何测试。不要顺手修改流星、小游戏、留言盒或其他无关模块。
```
