+++
description = "お問い合わせはこちらから"
draft = false
date = "2017-03-09T00:00:00+09:00"
title = "お問い合わせ"
+++

<!--more-->

**すべての項目が入力必須です。**

<div class="hh-form">
  <form name="contact" netlify-honeypot="bot-field" action="../thank-you" netlify>
    <p style="display: none;">
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>
    <p>
      <label>あなたのお名前: <input type="text" name="name" required></label>
    </p>
    <p>
      <label>返信先メールアドレス: <input type="email" name="email" required></label>
    </p>
    <p>
      <label>件名: <input type="text" name="subject" required></label>
    </p>
    <p>
      <label>お問い合わせ内容: <textarea name="message" required></textarea></label>
    </p>
    <p class="hh-form__submit">
      <button type="submit">送信</button>
    </p>
  </form>
</div>
