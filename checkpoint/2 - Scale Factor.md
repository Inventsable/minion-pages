## Scale factor

To ensure the live preview works for artwork of all sizes, the panel UI has a draggable number input at the top left of wide layouts:

![](https://raw.githubusercontent.com/Inventsable/minion-pages/master/checkpoint/assets/Scale-Factor-1.png)

Since default values are set to small artwork, using large numbers in values can cause the panel's live preview to clip or look distorted:

![](https://raw.githubusercontent.com/Inventsable/minion-pages/master/checkpoint/assets/Scale-Factor-2.png)

This can be fixed by lowering the `scale` of the live preview effects:

![](https://raw.githubusercontent.com/Inventsable/minion-pages/master/checkpoint/assets/Scale-Factor-3.png)

The range of `scale` can be anywhere between a minimum `10` and maximum `250`.
