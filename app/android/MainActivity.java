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
import java.io.InputStream;
import java.io.OutputStream;
import java.io.ByteArrayOutputStream;
import java.nio.charset.StandardCharsets;
import org.json.JSONObject;

public class MainActivity extends Activity {
 private WebView web;
 private String pendingBackup;
 private static final int SAVE_BACKUP=900,OPEN_BACKUP=901;
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
 public class Feedback {
  @JavascriptInterface public void vibrate(){Vibrator v=(Vibrator)getSystemService(VIBRATOR_SERVICE);if(v!=null&&v.hasVibrator())v.vibrate(VibrationEffect.createOneShot(12,VibrationEffect.DEFAULT_AMPLITUDE));}
  @JavascriptInterface public void saveBackup(String text){if(text==null||text.length()>1000000)return;runOnUiThread(()->{if(pendingBackup!=null)return;pendingBackup=text;Intent intent=new Intent(Intent.ACTION_CREATE_DOCUMENT);intent.addCategory(Intent.CATEGORY_OPENABLE);intent.setType("application/json");intent.putExtra(Intent.EXTRA_TITLE,"Luma-Hex-Spielstand.json");try{startActivityForResult(intent,SAVE_BACKUP);}catch(Exception e){pendingBackup=null;notifyUser("Die Dateiauswahl konnte nicht geöffnet werden.");}});}
  @JavascriptInterface public void openBackup(){runOnUiThread(()->{Intent intent=new Intent(Intent.ACTION_OPEN_DOCUMENT);intent.addCategory(Intent.CATEGORY_OPENABLE);intent.setType("*/*");try{startActivityForResult(intent,OPEN_BACKUP);}catch(Exception e){notifyUser("Die Dateiauswahl konnte nicht geöffnet werden.");}});}
 }
 private void notifyUser(String text){Toast.makeText(this,text,Toast.LENGTH_LONG).show();}
 @Override protected void onActivityResult(int request,int result,Intent data){
  super.onActivityResult(request,result,data);
  if(request!=SAVE_BACKUP&&request!=OPEN_BACKUP)return;
  if(result!=RESULT_OK||data==null||data.getData()==null){if(request==SAVE_BACKUP)pendingBackup=null;return;}
  if(request==SAVE_BACKUP){String text=pendingBackup;pendingBackup=null;if(text==null)return;try(OutputStream stream=getContentResolver().openOutputStream(data.getData(),"wt")){if(stream==null)throw new Exception();stream.write(text.getBytes(StandardCharsets.UTF_8));notifyUser("Spielstand gesichert.");}catch(Exception e){notifyUser("Die Sicherung konnte nicht gespeichert werden.");}}
  else {try(InputStream stream=getContentResolver().openInputStream(data.getData());ByteArrayOutputStream bytes=new ByteArrayOutputStream()){if(stream==null)throw new Exception();byte[] buffer=new byte[8192];int n;while((n=stream.read(buffer))!=-1){if(bytes.size()+n>1000000)throw new Exception();bytes.write(buffer,0,n);}String text=new String(bytes.toByteArray(),StandardCharsets.UTF_8);web.evaluateJavascript("window.LumaReceiveBackup("+JSONObject.quote(text)+")",null);}catch(Exception e){notifyUser("Die Sicherung konnte nicht gelesen werden. Maximale Größe: 1 MB.");}}
 }
 @Override public void onBackPressed(){web.evaluateJavascript("(()=>{const d=document.querySelector('dialog[open]');if(d){d.close();return true;}return false;})()",result->{if(!"true".equals(result))super.onBackPressed();});}
 @Override protected void onPause(){super.onPause();web.onPause();}
 @Override protected void onResume(){super.onResume();if(web!=null)web.onResume();}
 @Override protected void onDestroy(){web.destroy();super.onDestroy();}
}
