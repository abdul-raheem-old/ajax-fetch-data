# ajax-fetch-data
Javascript function to fetch data from another page with reloading it.

## INSTALATION

**Step 1:**

Open Terminal/CMD and type:
```bash
git clone https://github.com/arhex-labs/ajax-fetch-data.git
```
**Step 2:**

Open "ajax-fetch-data" and copy all files to your project.
**Done.**

## USAGE
### Include script in page
```html
<script src="ajax_fetch_data.js"></script>  
```
``````Note: Always include this in **head** of document.``````

### Fetch data
To fetch the data you should call the JS function **fetch_data()**.

#### Syntax:
```js
fetch_data([QUERY], [PAGE TO RENDER], [ID OF DIV IN WHICH DATA WOULD BE DISPLAYED]);
```

#### Example:
```js
fetch_data('john', 'users.php', 'details');
```
