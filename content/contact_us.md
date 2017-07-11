+++
description = "お問い合わせはこちらから"
draft = false
date = "2017-07-11T00:00:00+09:00"
title = "お問い合わせ"
+++

<!--more-->

**すべての項目が入力必須です。**

<form name="contact" netlify-honeypot="bot-field" action="../thank-you" netlify>
  <p style="display: none;">
    <label>Don’t fill this out: <input name="bot-field"></label>
  </p>
  <p>
    <label>あなたのお名前: <input type="text" name="name" required></label>
  </p>
  <p>
    <label>email: <input type="email" name="email" required></label>
  </p>
  <p>
    <label>お問い合わせ内容: <textarea name="message" required></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
