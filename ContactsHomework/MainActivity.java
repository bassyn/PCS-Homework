package com.example.slubo.contacts;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.Collections;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final String[] contacts = new String[] {
            "Donald Trump",
            "Mike Pence",
            "Warren Buffet",
            "Jared Kushner",
            "Ivanka Kushner",
            "Hillary Clinton",
            "Donald Trump",
            "Mike Pence",
            "Warren Buffet",
            "Jared Kushner",
            "Ivanka Kushner",
            "Hillary Clinton",
            "Donald Trump",
            "Mike Pence",
            "Warren Buffet",
            "Jared Kushner",
            "Ivanka Kushner",
            "Hillary Clinton"
        };

        ArrayList contactsList = new ArrayList();
        contactsList.add("Hillary Clinton");
        contactsList.add("Donald Trump");
        final ListView contactsListView = (ListView)findViewById(R.id.contactsListView);
        //ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, contacts);
        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, R.layout.contact_list_item, R.id.contactNameTextView, contactsList);
        contactsListView.setAdapter(adapter);

        final Button addContactButton = (Button)findViewById(R.id.addContactButton);
        final EditText newContact = (EditText)findViewById(R.id.newContact);

        addContactButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                String contactName = String.valueOf(newContact.getText());
                adapter.add(contactName);
                newContact.setText("");
            }
        });
    }
}
