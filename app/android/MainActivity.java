package com.lumahex.prototype;
import android.app.Activity;
import android.os.Bundle;
import android.os.Vibrator;
import android.os.VibrationEffect;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebResourceRequest;
import android.webkit.JavascriptInterface;
import android.view.View;
import android.view.WindowInsets;
import android.graphics.Color;
import android.widget.FrameLayout;

public class MainActivity extends Activity {
 private WebView web;
 @Override public void onCreate(Bundle state){
  super.onCreate(state);
  getWindow().setStatusBarColor(Color.rgb(7,21,30));
  getWindow().setNavigationBarColor(Color.rgb(7,21,30));
  FrameLayout frame=new FrameLayout(this);frame.setBackgroundColor(Color.rgb(7,21,30));
  frame.setOnApplyWindowInsetsListener((v,insets)->{android.graphics.Insets bars=insets.getInsets(WindowInsets.Type.systemBars()|WindowInsets.Type.displayCutout());v.setPadding(bars.left,bars.top,bars.right,bars.bottom);return insets;});
  web=new WebView(this);web.setBackgroundColor(Color.rgb(7,21,30));
  web.getSettings().setJavaScriptEnabled(true);web.getSettings().setDomStorageEnabled(true);
  web.getSettings().setAllowFileAccess(false);web.getSettings().setAllowContentAccess(false);
  web.getSettings().setMediaPlaybackRequiresUserGesture(false);
  web.setWebViewClient(new WebViewClient(){@Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest request){return !request.getUrl().toString().startsWith("file:///android_asset/");}});
  web.addJavascriptInterface(new Feedback(),"LumaFeedback");
  frame.addView(web,new FrameLayout.LayoutParams(-1,-1));setContentView(frame);
  web.loadUrl("file:///android_asset/index.html");
 }
 public class Feedback {@JavascriptInterface public void vibrate(){Vibrator v=(Vibrator)getSystemService(VIBRATOR_SERVICE);if(v!=null&&v.hasVibrator())v.vibrate(VibrationEffect.createOneShot(12,VibrationEffect.DEFAULT_AMPLITUDE));}}
 @Override public void onBackPressed(){web.evaluateJavascript("(()=>{const d=document.querySelector('dialog[open]');if(d){d.close();return true;}return false;})()",result->{if(!"true".equals(result))super.onBackPressed();});}
 @Override protected void onPause(){super.onPause();web.onPause();}
 @Override protected void onResume(){super.onResume();if(web!=null)web.onResume();}
 @Override protected void onDestroy(){web.destroy();super.onDestroy();}
}
