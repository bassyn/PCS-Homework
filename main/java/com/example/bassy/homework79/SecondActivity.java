package com.example.bassy.homework79;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

public class SecondActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);


        TextView textView = (TextView)findViewById(R.id.textView);

        Bundle bundle = getIntent().getExtras();
        if (bundle == null) {
            return;
        }

        String text = (String)bundle.get("Text");
        textView.setText(text);
    }

}
