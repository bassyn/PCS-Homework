package com.example.bassy.tipcalculating;

import android.icu.text.NumberFormat;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final EditText billAmount = (EditText) findViewById(R.id.billAmount);
        final EditText percentage = (EditText) findViewById(R.id.percentage);
        Button button = (Button) findViewById(R.id.button);
        final TextView result = (TextView) findViewById(R.id.result);

        button.setOnClickListener(new View.OnClickListener(){
            @RequiresApi(api = Build.VERSION_CODES.N)
            public void onClick(View v){
                float bill =  Float.parseFloat(String.valueOf(billAmount.getText()));
                float percent = Float.parseFloat(String.valueOf(percentage.getText()));
                float tip = (bill * percent) / 100;
                //result.setText(NumberFormat.getCurrencyInstance().format(tip));
                result.setText(Float.toString(tip));
            }
        });



    }
}
