---
# You can also start simply with 'default'
theme: default
background: /rolling-girls.webp
# some information about your slides (markdown enabled)
title: 我与 Nix 社区的故事
info: |
  ## 我与 Nix 社区的故事
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  ogImage: auto
  # ogImage: https://cover.sli.dev
---

# 我与 Nix 社区的故事

NixOS & Flakes Book 的由来，以及我如何通过折腾 NixOS 获得约 USD$600 的赞赏

@ryan4yin

---

# 源起

- My Distro Hope Path: Ubuntu -> Linux Mint -> Deepin -> Manjaro -> openSUSE -> EndervourOS.
  - 2019: Manjaro + archlinux-cn: 日常炸动态链接库、炸 VSCode.
  - 2021-2022: openSUSE Tumbleweed:
    - Nvidia + Linux - 原罪
    - KDE 桌面
      - X11 缩放垃圾、plasma wayland 各种 bug.
      - 整个桌面给人一种很脆弱的感觉，健壮性欠佳。
  - 2022：EndervourOS(i3) + archlinux-cn:
    - 整体使用体验很不错

---

# 问题

- <https://x.com/ryan4yin/status/1647302073594298369>
- 买了新 PC，发现新电脑装机很麻烦
  - 直接 rsync Home 目录不可行：遇到各种奇怪的问题，firefox/chrome/mpv 全炸了
  - 得根据旧电脑环境一点点摸索着安装软件、更新配置，非常浪费时间
- 尝试安装 sway 失败，回退到 i3 后遇到各种问题，折腾了很久没能解决
  - Firefox 每次启动都要非常久
  - QQ 莫名奇妙闪退

# 精疲力尽，对传统 OS 感到厌倦

---

# 根本问题

- 版本管理
- 回滚能力

---

# 职业习惯

- 声明式: Kubernetes, Terraform, Pulumi, ...
- 可复现: Docker
- GitOps、基于 infra-as-code 的版本控制与回滚

是否存在拥有这些特性的 SRE/DevOps 的梦中情 OS？

---

## 某群里发现 @Jinser Kafka 在晒他的 NixOS + Hyprland 桌面

激活了我几年前在深圳 PyCon 听人讲 Nix 包管理器的回忆

第一印象：

- Nix: 很有意思的包管理器，很适合用来管理开发环境
- NixOS: 为了这碟醋包了这顿饺子、手上拿着锤子看谁都是钉子

## 直接开搞

---

# NixOS 初体验

- 时间：2023-04-21
- 目标：尽量还原我 EndeavourOS 的桌面环境，以及安装上所有我常用的软件。
- Nix Channel - 不锁版本，那跟 Dockerfile 里跑 apt install 有什么区别？很失望，考虑放弃试用
- @Jinser Kafka: 有个 Flakes 特性你可以研究下，虽然还是实验的
- 我的结论：只有带上了 Flakes 的 NixOS 才符合我对它的期待

---

# NixOS with Flakes

- 完全忽略 Nix Channel, All in Flakes
- 社区几乎没啥 Flake 的资料，疯狂踩坑
- 必须得有笔记，不然大概率隔几个月又把坑全踩一遍
- [2023-04-24 最初的笔记](https://github.com/ryan4yin/knowledge/blob/424ac18dc485dc760484e27173bb87d5806db606/linux/nix/NixOS.md)

---

# 迁移到 NixOS

- [最初的 Release 记录](https://github.com/ryan4yin/nix-config/releases?page=3)
- 两周：使用虚拟机学习 NixOS，还原我旧系统的环境
- 一小时: 在物理机上部署已经写好的配置
  - 最耗时间的部分：nixos-install 下载、Nvidia 硬件配置
- 三天：从 i3 迁移到 hyprland.
- 半年：i3 与 hyprland 混用、无痛切换
- 现在：hyprland only

---

# 第一篇公开分享的博客

- [2023-05-09 在 NixOS 群里分享的第一个版本](https://github.com/ryan4yin/thiscute.world/blob/e147b5c889a712751593df337415308e8d76885d/content/posts/2023/Q2/nixos-and-flake-basics/index.md)
- [文章链接（内容已迁移到单独站点）](https://thiscute.world/posts/nixos-and-flake-basics/)

---

# 后续更新的回顾

- <https://www.zhihu.com/question/20870514/answer/3024654921>

---

# 收到的其他反馈

- [[2023-05-11] NixOS & Nix Flakes - A Guide for Beginners - Reddit](https://www.reddit.com/r/NixOS/comments/13dxw9d/nixos_nix_flakes_a_guide_for_beginners/)
- [[2023-06-22] Updates: NixOS & Nix Flakes - A Guide for Beginners - Reddit](https://www.reddit.com/r/NixOS/comments/14fvz1q/updates_nixos_nix_flakes_a_guide_for_beginners/)
- [[2023-06-24] An unofficial NixOS & Flakes book for beginners - Discourse](https://discourse.nixos.org/t/an-unofficial-nixos-flakes-book-for-beginners/29561)
- [[2023-07-06] This isn't an issue but it has to be said: - Discussions](https://github.com/ryan4yin/nixos-and-flakes-book/discussions/43)
- [[2023-06-24] NixOS 与 Flakes | 一份非官方的新手指南 - 0xffff 社区](https://0xffff.one/d/1547-nixos-yu-flakes-yi-fen-fei-guan)
- [buy me a coffee](https://buymeacoffee.com/ryan4yin)

---

![](/2023-08-13-mail-about-creating-patreon-group.png)

---

![](/2023-08-sponsor-$50.jpg)

---

![](/2024-03-sponsor-$50.jpg)

---

## 赞赏统计

- GitHub Sponsors: $67
- Buy Me A Coffee: $285
- Patreon: $70
- BTC: $100
- 爱发电：RMB 300
