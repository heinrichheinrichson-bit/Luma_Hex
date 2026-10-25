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
import android.widget.Toast;
import android.content.Intent;
import android.content.ActivityNotFoundException;
import android.net.Uri;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.ByteArrayOutputStream;
import java.nio.charset.StandardCharsets;
import org.json.JSONObject;

public class MainActivity extends Activity {
 private WebView web;
 private AdGateway ads;
 private boolean destroyed;
 public interface AdGateway { void request(String kind,String id); void cancel(String id); boolean isShowing(); void destroy(); }
 public boolean canShowAd(){return !lifecyclePaused&&!destroyed;}
 public void adEvent(String id,String event){if(destroyed||web==null)return;String payload="{\"id\":"+JSONObject.quote(id)+",\"event\":"+JSONObject.quote(event)+"}";web.evaluateJavascript("window.HexNativeAdEvent&&window.HexNativeAdEvent("+payload+")",null);}

 private boolean lifecyclePaused;
 private String pendingBackup;
 private volatile String language="en";
 private static final int SAVE_BACKUP=900,OPEN_BACKUP=901;
 @Override public void onCreate(Bundle state){
  super.onCreate(state);
  getWindow().setStatusBarColor(Color.rgb(8,15,28));
  getWindow().setNavigationBarColor(Color.rgb(8,15,28));
  FrameLayout frame=new FrameLayout(this);frame.setBackgroundColor(Color.rgb(8,15,28));
  frame.setOnApplyWindowInsetsListener((v,insets)->{android.graphics.Insets bars=insets.getInsets(WindowInsets.Type.systemBars()|WindowInsets.Type.displayCutout());v.setPadding(bars.left,bars.top,bars.right,bars.bottom);return insets;});
  web=new WebView(this);web.setBackgroundColor(Color.rgb(8,15,28));
  web.getSettings().setUseWideViewPort(true);web.getSettings().setLoadWithOverviewMode(true);
  web.getSettings().setJavaScriptEnabled(true);web.getSettings().setDomStorageEnabled(true);
  web.getSettings().setAllowFileAccess(false);web.getSettings().setAllowContentAccess(false);
  web.getSettings().setMediaPlaybackRequiresUserGesture(false);
  web.setWebViewClient(new WebViewClient(){
   @Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest request){
    Uri uri=request.getUrl();
    if(uri.toString().startsWith("file:///android_asset/"))return false;
    if(request.isForMainFrame()&&request.hasGesture())openSource(uri);
    return true;
   }
  });
  try { ads=(AdGateway)Class.forName(getPackageName()+".DemoAdsController").getConstructor(MainActivity.class).newInstance(this); } catch(ClassNotFoundException e) { /* Developer build has no ad SDK. */ } catch(Exception e) { throw new IllegalStateException("Demo ads setup failed",e); }
  web.addJavascriptInterface(new Feedback(),"LumaFeedback");
  frame.addView(web,new FrameLayout.LayoutParams(-1,-1));setContentView(frame);
  web.loadUrl("file:///android_asset/index.html");
  if(android.os.Build.VERSION.SDK_INT>=33)getOnBackInvokedDispatcher().registerOnBackInvokedCallback(android.window.OnBackInvokedDispatcher.PRIORITY_DEFAULT,this::handleBack);
 }
 public class Feedback {
  @JavascriptInterface public boolean isAdMobDemo(){return ads!=null;}
  @JavascriptInterface public void requestAd(String kind,String id){if(id==null||!id.matches("[a-zA-Z0-9_-]{1,100}")||!("rewarded".equals(kind)||"interstitial".equals(kind)))return;runOnUiThread(()->{if(ads==null||destroyed||lifecyclePaused){adEvent(id,"failed");return;}ads.request(kind,id);});}
  @JavascriptInterface public void cancelAd(String id){runOnUiThread(()->{if(ads!=null)ads.cancel(id);});}

  @JavascriptInterface public String getSystemLanguage(){return java.util.Locale.getDefault().toLanguageTag();}
  @JavascriptInterface public void setLanguage(String value){language="de".equals(value)?"de":"en";}
  @JavascriptInterface public void vibrate(){Vibrator v=(Vibrator)getSystemService(VIBRATOR_SERVICE);if(v!=null&&v.hasVibrator())v.vibrate(VibrationEffect.createOneShot(12,VibrationEffect.DEFAULT_AMPLITUDE));}
  @JavascriptInterface public void saveBackup(String text){if(text==null||text.length()>1000000)return;runOnUiThread(()->{if(pendingBackup!=null)return;pendingBackup=text;Intent intent=new Intent(Intent.ACTION_CREATE_DOCUMENT);intent.addCategory(Intent.CATEGORY_OPENABLE);intent.setType("application/json");intent.putExtra(Intent.EXTRA_TITLE,"Luma-Hex-Progress.json");try{startActivityForResult(intent,SAVE_BACKUP);}catch(Exception e){pendingBackup=null;notifyUser("de".equals(language)?"Die Dateiauswahl konnte nicht geöffnet werden.":"The file picker could not be opened.");}});}
  @JavascriptInterface public void openBackup(){runOnUiThread(()->{Intent intent=new Intent(Intent.ACTION_OPEN_DOCUMENT);intent.addCategory(Intent.CATEGORY_OPENABLE);intent.setType("*/*");try{startActivityForResult(intent,OPEN_BACKUP);}catch(Exception e){notifyUser("de".equals(language)?"Die Dateiauswahl konnte nicht geöffnet werden.":"The file picker could not be opened.");}});}
 }
 private void openSource(Uri uri){
  String scheme=uri.getScheme();
  if(!"https".equalsIgnoreCase(scheme)&&!"http".equalsIgnoreCase(scheme))return;
  Intent intent=new Intent(Intent.ACTION_VIEW,uri);
  intent.addCategory(Intent.CATEGORY_BROWSABLE);
  try{startActivity(intent);}catch(ActivityNotFoundException e){notifyUser("de".equals(language)?"Kein Browser zum Öffnen der Quelle gefunden.":"No browser was found to open the source.");}
 }
 private void notifyUser(String text){Toast.makeText(this,text,Toast.LENGTH_LONG).show();}
 @Override protected void onActivityResult(int request,int result,Intent data){
  super.onActivityResult(request,result,data);
  if(request!=SAVE_BACKUP&&request!=OPEN_BACKUP)return;
  if(result!=RESULT_OK||data==null||data.getData()==null){if(request==SAVE_BACKUP)pendingBackup=null;return;}
  if(request==SAVE_BACKUP){String text=pendingBackup;pendingBackup=null;if(text==null)return;try(OutputStream stream=getContentResolver().openOutputStream(data.getData(),"wt")){if(stream==null)throw new Exception();stream.write(text.getBytes(StandardCharsets.UTF_8));notifyUser("de".equals(language)?"Spielstand gesichert.":"Progress backed up.");}catch(Exception e){notifyUser("de".equals(language)?"Die Sicherung konnte nicht gespeichert werden.":"The backup could not be saved.");}}
  else {try(InputStream stream=getContentResolver().openInputStream(data.getData());ByteArrayOutputStream bytes=new ByteArrayOutputStream()){if(stream==null)throw new Exception();byte[] buffer=new byte[8192];int n;while((n=stream.read(buffer))!=-1){if(bytes.size()+n>1000000)throw new Exception();bytes.write(buffer,0,n);}String text=new String(bytes.toByteArray(),StandardCharsets.UTF_8);web.evaluateJavascript("window.LumaReceiveBackup("+JSONObject.quote(text)+")",null);}catch(Exception e){notifyUser("de".equals(language)?"Die Sicherung konnte nicht gelesen werden. Maximale Größe: 1 MB.":"The backup could not be read. Maximum size: 1 MB.");}}
 }
 private void handleBack(){web.evaluateJavascript("window.LumaBack ? window.LumaBack() : false",result->{if(!"true".equals(result))finish();});}
 // Legacy fallback for Android 11/12; API 33+ uses the registered native callback above.
 @android.annotation.SuppressLint("GestureBackNavigation")
 @Override public void onBackPressed(){handleBack();}
 @Override protected void onPause(){lifecyclePaused=true;super.onPause();if(web!=null)web.evaluateJavascript("window.LumaPauseClock&&window.LumaPauseClock()",value->{if(lifecyclePaused&&web!=null)web.onPause();});}
 @Override protected void onResume(){super.onResume();lifecyclePaused=false;if(web!=null){web.onResume();web.evaluateJavascript("window.LumaResumeClock&&window.LumaResumeClock()",null);}}
 @Override protected void onDestroy(){destroyed=true;if(ads!=null)ads.destroy();web.destroy();super.onDestroy();}
}
