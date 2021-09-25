# Auto Focus

Auto focus directive for Angular projects

## Installation

```
npm i @sametcelikbicak/auto-focus
```

## Usage

Import `AutoFocusModule` in `AppModule` `imports` array
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AutoFocusModule } from '@sametcelikbicak/auto-focus';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AutoFocusModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

After that you can use auto focus `ngxAutoFocus` directive in template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Auto Focus Usage</title>
    <style>
      .container {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
      }
      input {
        width: 300px;
        margin: 1em;
        height: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <input placeholder="Auto focus directive does not use" />
      <input ngxAutoFocus placeholder="Auto focus directive is using" />
    </div>
  </body>
</html>
```

![Auto Focus](https://github.com/sametcelikbicak/library-workspace/blob/main/assets/auto-focus.png?raw=true)
