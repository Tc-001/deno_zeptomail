Send mail via ~~Node~~ Deno

Deno port of [zeptomail](https://www.npmjs.com/package/zeptomail) with added types.

```ts
import { SendMailClient } from "https://deno.land/x/deno_zeptomail/mod.ts";

const url = "api.zeptomail.com/";
const token = "<Send mail token>";

let client = new SendMailClient({url, token});
```

(Not perfect, there may be some things wrong, PRs welcome!)

Need help? See:
- https://www.npmjs.com/package/zeptomail
- https://www.zoho.com/zeptomail/help/api/email-sending.html

### Versions
- x.x.x 
    - Upstream update
- x.x.x-y
    - Local update
