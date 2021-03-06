---
layout: post
title:  "設計更好的資料表格"
date:   2016-08-03
categories: writing translations
language: chinese (traditional)
translations: 
    - ru
    - zh-cn
    - en
---

**可憐的表格。**它們做錯了什麼？

{% include image.html src="/images/tables-0.png" caption="Table tetris" %}

表格是早期網路不可或缺的角色，現在卻被設計師丟在一旁，改用更現代、更流行的排版方式。在今天，它們雖然比較少出現在網路上，資料表格仍然承載、整理許多我們每天進行互動的資訊。

舉例來說，我認為這可以稱為表格之母：美國「調和關稅時間表」(The United States’ “Harmonized Tariff Schedule”)。超過 3,550 頁，列出所有可以輸入進美國的貨品。其中的項目令人震驚，其中像是「男士/男童的大衣、長大衣、帽子、披風、高領禦寒外套（包含滑雪夾克）、風衣以及類似的單品（包含鋪棉的、無袖的夾克）。」

{% include image.html src="/images/tables-1.png" caption="What is a carcoat, anyway?" %}

資料表格引發的怒火，毫無疑問地來自沒有經過良好設計的可怕模樣。表格的設計非常重要：如果做得好，就可以讓複雜的資料輕鬆掃過與比較；如果做得很差，會讓資料混在一起，完全無法閱讀。
讓我們做好吧，好嗎？

### 透析數字格式

數字非皆生而平等。這不是在說 π 和 ∞ 的差別（雖然我常常在派對上說），而是數字有兩種分別方法：不等高 (Oldstyle) 與等高 (Lining)，還有不等寬 (Propotional) 與等寬 (Tabular)。
簡單說明不等高與等高數字的差別：

{% include image.html src="/images/tables-2.png" caption="Oldstyle vs. lining figures" %}

不等高數字在句子裡很適合，它們擅長跟（歐文）小寫字母的大小和間距搭配。等高的數字比較一致，強化表格的網格 (grid) 結構感。

不等寬與等寬數字的差別就沒這麼明顯：

{% include image.html src="/images/tables-3.png" caption="Proportional vs. tabular figures" %}

不等寬數字是為了符合外觀而設計。也就是說，要符合字體的大小和間距。相反地，等寬數字的大小完全一樣，讓每列的數字都能夠剛好靠齊。只有一兩行的情況看不太出來差異，同時也是等高數字的話，在快速瀏覽龐大表格的時候會更輕鬆，也不易因為看錯拖延時間。


### 使用等寬等高 (Tablar Lining) 數字的技術提醒

進行設計的時候，會需要花點時間確認使用正確的數字格式（等高且等寬數字通常不是預設值）。在 Adobe 的產品裡，有 Opentype 面板用來正確設定數字；而在 CSS 提供不是這麼明顯的語法打開此功能。除了以上兩者，從簡單的 google 搜尋就可以引領你踏上正確的道路。

然而，有個壞消息：不是所有的字體都提供真正的等寬等高數字，特別設計的字體又相當昂貴。只有幾個例外：優秀的免費字體 Work Sans 具備真正的等寬等高數字。

如果你遍尋不著適合的字體，方便的妥協方式是等寬字型 (monospace fonts)，它們看起來比較偏向程式碼的感覺，而且也很適合在表格中呈現數字。此外，蘋果最新作業系統的預設字體 San Francisco 也是很傑出的等寬等高數字，即使字級很小也很好看。

### 對齊很重要

有 3½ 條規則要遵守：

* 1. 數字資料是靠右對齊
* 2. 文字資料是靠左對齊
* 3. 標題與它對應的資料對齊
* 3½. 不要使用置中對齊

{% include image.html src="/images/tables-4.png" caption="List of U.S. states by historical population — Wikipedia" %}

數字資料是從右往左閱讀，也就是說，我們第一眼從個位數開始比較數字，然後是十位數、百位數⋯等。這也是人們學習算數的方式：從右邊開始往左移動，逐位計算出來 [^1]。因此在表格中，數字資料應該要靠右對齊。

（英文）文字資料是從左往右閱讀，比較文字元素通常是依照字母排序：如果兩項資料都是同一個字母開頭，那就比第二個字母，然後接著下去。試著快速掃描不是靠左對齊的文字讓人感到煩躁。

一般來說，標題要跟著資料的對齊方向靠左或靠右。這可以讓表格的垂直線條俐落，讓它們一致且符合脈絡。

置中對齊讓表格的垂直線條顯得參差，變得更難掃過資料，也被迫需要額外的分隔線與圖型元素。

### 整齊的有效數字 (Significant Figures) = 更好的對齊

有個讓表格正確對齊的簡單方式：有效數字的數量（通常是小數點之後的數字）在同一欄都一樣。有效數字其實是通往離題的兔子樹洞，所以我的簡短建議是：能不用有效數字就盡量不要以此呈現。

### 精簡、清楚的標籤 (Labels)

資料搭配標籤是非常重要的。這些附帶的脈絡線索讓更多人可以閱讀資料表格，也可以用在更多場合。

{% include image.html src="/images/tables-5.png" caption="Mississippi River Flood Stage Forecast - NOAA" %}


#### 主題 (Titles)

聽起來好像是經年累積慣例形成的智慧，但是讓資料表格有清楚、簡潔的主題，跟其它你做的設計決定一樣重要。如果有好的主題，表格將會容易傳遞：可以用在很多場合，以及讓外部資料引用。

#### 單位 (Units)

表格裡最常見的標籤就是測量資料的單位。通常它重複使用在每個資料點 (data point)。只要在每欄的第一個資料點附上就好，不要重複這個標籤。

#### 標題 (Headers)

讓標題越精簡越好。資料表格的設計應該要專注在資料本身，而冗長的標題會佔據很多視覺空間。

#### 越少「墨水」越好

決定要如何設計表格的圖表元素時，目標應該是在不會失去結構完整度的前提下，減少表格的感覺 (footprint)。其中一個可以做到的方法是使用越少墨水越好 (as little ink as possible)，也就是說，只要有可能，就不要設計元素。

{% include image.html src="/images/tables-6.png" caption="2016 National League Batting Statistics - BaseballReference" %}

### 格線 (Rules)

如果已經正確地讓表格的資料點對齊，格線就顯得多餘。它們主要的好處是可以減少元素之間的空間，但是仍然可以辨別元素之間的差別。即使要使用，格線也應該淡到不干擾視線快速掃過。

水平格線是最有用的，因為可以明顯減少長表格的垂直空間，讓許多數值之間的比較或時間趨勢變化的辨認工作更快速。

對於格線，我有一個未經驗證的個人意見：**斑馬條紋是很差的設計。**真的非常糟糕，這點要不要聽請自便。

### 背景

背景在資料的範圍標出相異點時最有用：在單一數值、總計或平均之間的切換。舉例來說，標明數值，讓資料有額外的意義 (context)，或是標示數值跟前一段時間相比的變動，其實不用背景，使用圖表元素，像是 ✻、†（我的最愛之一）或 ▵ 就可以達成。

此外，表格必須要單一色調呈現。使用多種顏色會產生分類的脈絡 (organizational context) 或額外解讀，都會增加誤解、誤判可能性，也會對視力障礙的人造成易用性 (usability) 問題。

### 結論

表格可能挺無聊的，但是對任何有龐大資料的文件來說，是很重要的元素，因此值得在每個細節盡可能進行設計上的考量。更有效率、簡潔、簡易使用的表格設計可以改善大量資料分析與理解時，總是很痛苦的經驗。

### 延伸閱讀與啟發

[**FiveThirtyEight**](http://fivethirtyeight.com/features/the-rise-and-rise-of-nneka-ogwumike/)一直是很棒的靈感來源。他們的數字資料使用專門為窄小空間擺放大量資料設計的 [Decimal Mono](https://www.myfonts.com/fonts/tipografiaramis/decima-mono/) 字體。

[**Butterick’s Practical Typography**](http://practicaltypography.com/) 是我所有想知道文字編排學 (typography) 的地方，裡面的參考資料會讓你想要做好幾次備份 — 因為太實用了！

最後，如果不是 [**Edward Tufte**](http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=00041I)的意見，討論資料設計的文章就無法完成。他對設計充滿令人啟發的文筆簡直不可或缺。

[^1]: 對於算數有興趣的人，可以看看日本小孩如何使用算盤，或格子乘法 (lattice multiplication) 的規則。