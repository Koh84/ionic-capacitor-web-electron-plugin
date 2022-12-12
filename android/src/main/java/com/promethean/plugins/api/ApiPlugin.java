package com.promethean.plugins.api;

import android.util.Log;

public class ApiPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
