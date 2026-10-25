package com.thinkheim.hexandjoy;

import android.os.Handler;
import android.os.Looper;
import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.rewarded.RewardedAd;
import com.google.android.gms.ads.rewarded.RewardedAdLoadCallback;
import com.google.android.gms.ads.interstitial.InterstitialAd;
import com.google.android.gms.ads.interstitial.InterstitialAdLoadCallback;

/** Internal test provider. No publisher IDs, mediation, banners or live mode. */
public final class DemoAdsController implements MainActivity.AdGateway {
    private static final String REWARDED = "ca-app-pub-3940256099942544/5224354917";
    private static final String INTERSTITIAL = "ca-app-pub-3940256099942544/1033173712";
    private final MainActivity activity;
    private final Handler handler = new Handler(Looper.getMainLooper());
    private String token;
    private boolean initialized, initializing, destroyed, showing, rewarded;
    private String kind;
    private Runnable timeout;

    public DemoAdsController(MainActivity activity) { this.activity = activity; }
    public void request(String format, String id) {
        if (destroyed || token != null) { activity.adEvent(id, "failed"); return; }
        token = id; kind = format; rewarded = false;
        timeout = () -> fail(id);
        handler.postDelayed(timeout, 20000);
        if (initialized) load(id);
        else if (!initializing) {
            initializing = true;
            // Initialize only following an actual ad request, never automatically at startup.
            MobileAds.initialize(activity, status -> handler.post(() -> {
                initializing = false; initialized = true;
                if (token != null && !destroyed) load(token);
            }));
        }
    }
    private boolean current(String id) { return !destroyed && id.equals(token); }
    private FullScreenContentCallback callbacks(String id) {
        return new FullScreenContentCallback() {
            @Override public void onAdShowedFullScreenContent() {
                if (!current(id)) return;
                showing = true; handler.removeCallbacks(timeout); activity.adEvent(id, "shown");
            }
            @Override public void onAdDismissedFullScreenContent() {
                if (!current(id)) return;
                finish(id, "closed");
            }
            @Override public void onAdFailedToShowFullScreenContent(AdError error) { fail(id); }
        };
    }
    private void load(String id) {
        if (!current(id)) return;
        if ("rewarded".equals(kind)) {
            RewardedAd.load(activity, REWARDED, new AdRequest.Builder().build(), new RewardedAdLoadCallback() {
                @Override public void onAdLoaded(RewardedAd ad) {
                    if (!current(id) || activity.isFinishing() || activity.isDestroyed() || !activity.canShowAd()) { fail(id); return; }
                    ad.setFullScreenContentCallback(callbacks(id));
                    showing = true;
                    ad.show(activity, item -> {
                        if (!current(id) || rewarded) return;
                        rewarded = true; activity.adEvent(id, "reward");
                    });
                }
                @Override public void onAdFailedToLoad(LoadAdError error) { fail(id); }
            });
        } else {
            InterstitialAd.load(activity, INTERSTITIAL, new AdRequest.Builder().build(), new InterstitialAdLoadCallback() {
                @Override public void onAdLoaded(InterstitialAd ad) {
                    if (!current(id) || activity.isFinishing() || activity.isDestroyed() || !activity.canShowAd()) { fail(id); return; }
                    ad.setFullScreenContentCallback(callbacks(id));
                    showing = true; ad.show(activity);
                }
                @Override public void onAdFailedToLoad(LoadAdError error) { fail(id); }
            });
        }
    }
    private void fail(String id) { if (current(id)) finish(id, "failed"); }
    private void finish(String id, String event) {
        handler.removeCallbacks(timeout); token = null; showing = false;
        activity.adEvent(id, event);
    }
    public void cancel(String id) { if (current(id) && !showing) finish(id, "cancelled"); }
    public boolean isShowing() { return showing; }
    public void destroy() { destroyed = true; if (timeout != null) handler.removeCallbacks(timeout); token = null; }
}
