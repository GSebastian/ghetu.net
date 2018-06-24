---
title: My Third Article
date: 2017-11-04 22:05:59 +0000
draft: true
thumbnail: img/superman-min.jpg
thumbnailalt: Superman
description: This is a test description. Does it work?
tags:
- test
- sample

---

![Example image](/img/superman-min.jpg)

Hi there. This is a random **test article**. What do you think _about_ it?

#### Here's some Java code for you to check out ####

{{< highlight java >}}
private BroadcastReceiver mPermissionGrantedReceiver = new BroadcastReceiver() {
    @Override
    public void onReceive(Context context, Intent intent) {
        setupNextButton();

        Integer missingPermissionIndex = hasAllNecessaryPermissions();
        if (missingPermissionIndex != null) {
            mViewPager.setCurrentItem(missingPermissionIndex);
        }
    }
};
{{< / highlight >}}

<!--more-->




 