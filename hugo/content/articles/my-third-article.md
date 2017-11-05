---
title: "My Third Article"
date: 2017-11-04T22:05:59Z
draft: false
---
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




 