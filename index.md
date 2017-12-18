---

---

<header class="l--mar-btm-m">
    <h1 class="t--size-xxl c--blue t--family-display t--leading-small t--tracking-tight t--weight-bold">
Hi, my name is Matthew Ström.
    </h1>
    <h2>
I'm a designer &amp; developer living in Brooklyn, NY.
    </h2>

<div class="l--mar-top-s">
    <a href="https://twitter.com/ilikescience" target="_blank">Twitter</a>
    <span>&nbsp;·&nbsp;</span>
    <a href="https://github.com/ilikescience" target="_blank">Github</a>
    <span>&nbsp;·&nbsp;</span>
    <a href="https://instagram.com/ilikescience" target="_blank">Instagram</a>
    <span>&nbsp;·&nbsp;</span>
    <a href="https://medium.com/@ilikescience" target="_blank">Medium</a>
</div>
</header>

〰

**Projects I've worked on:**  
[SoundCloud Go](https://soundcloud.com/go), SoundCloud's premium subscription offering.  
[Spacetime](/projects/spacetime), an app for remote teams.  
[Argos](/projects/argos), a content marketing analytics platform.  
[SAP Fiori](/projects/sap), software powering large-scale commercial operations.  
[The Architect's Newspaper](/projects/archpaper), a redesign and rearchitecture of an online publication.  

〰

**Side projects I maintain:**

[Datum Ipsum](http://datumipsum.com), a placeholder data generator.<br/>
[Airframe](https://planetary.github.io/airframe), a frontend prototyping kit.<br/>

〰

**Companies I've started:**

[Eleven](/companies/eleven), a free monthly music magazine.<br/>
[CTY](/companies/cty), a civic technology company.<br/>
[Planetary](https://planetary.io), a digital product development agency.<br/>

〰

**Things I've written:**
{% assign posts = site.posts | where: "categories", "writing" %}

<table>
    {% for post in posts %}
        {% if post.categories contains "translations" %}
        {% else if %}
            <tr>
                <td>
                    <span class="c--gray l--mar-right-s">{{ post.date | date: "%d/%m/%y" }}</span>
                </td>
                <td>
                    <a href="{{ post.url }}"> {{ post.title }} </a>

                </td>
            </tr>
        {% endif %}
    {% endfor %}
</table>

〰

**Talks I've given:**

|-|-|
|<span class="c--gray l--mar-right-s">11/02/16</span> | Graphical Web 2016: Tiny Data Visualizations [(slides)](slides.com/matthewstrom/tinycharts) |
|<span class="c--gray l--mar-right-s">10/09/16</span> | OpenCamp 2016: Datum Ipsum [(slides)](http://slides.com/matthewstrom/datumipsum) |
|<span class="c--gray l--mar-right-s">07/21/16</span> | Brooklyn.JS: WebVR with aframe.js |
|<span class="c--gray l--mar-right-s">01/25/16</span> | D3.js NYC: Tiny Data visualizations [(video)](https://www.youtube.com/watch?v=Gtlb8VIszrU) |
|<span class="c--gray l--mar-right-s">04/18/13</span> | Pecha Kucha: The Creatives Must Be Crazy [(video)](https://www.youtube.com/watch?v=xpb_0Tadu6g) |

〰
