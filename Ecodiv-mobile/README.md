Ecodiv export template 4 Zim-wiki
==============================

## Description
Template to export your [Zim wiki](http://www.zim-wiki.org/) notebook as a website with mobile theme. See the [Zim manual](http://zim-wiki.org/manual/Help/Export.html) for more information on exporting your notebook. 

The template uses jquery and jquerymobile to create responsive webpages with an index in a side panel. It is a mobile-first design which however also looks good on your desktop. The template offers some pointers to customize the design to fit the users need.  

## Version
The current template has been updated to work with Zim 0.61. If you are using Zim 0.60 you (1) may want to consider upgrading your Zim, or (2) use the [Ecodiv60-mobile](https://github.com/ecodiv/Ecodiv60-mobile) template.

## Example
For examples of websites created using this template, see:
* http://www.penwatch.net/morrowind_dnd_zim/

## Adapting the template for your own use
The template can be used as it is, but most likely you will want to make some changes. If you open the ecodiv.html file, you will see a number of comments (text between <!--  -->) with suggestions for changes to consider.

## Installing the template

### Option 1: use the web & file browser
1. Download the files 
2. Copy or move the ecodiv.html and ecodiv folder from there to the ~/.local/share/zim/templates/html

### Option 2: use the command line
Use the commands below (works on Linux)

```bash
cd
mkdir tempzim
cd tempzim
git clone https://github.com/ecodiv/Zim-export-template-responsive.git
cd Zim-export-template-responsive
mv ecodiv-mobile.html ~/.local/share/zim/templates/html
mv ecodiv-mobile ~/.local/share/zim/templates/html
cd
rm -r ./tempzim
```
### Note
* You do not need to move the ecodiv.html and ecodiv folder to the ~/.local/share/zim/templates/html folder. It is convenient as it makes the template available through the drop down menu (File --> Export) and it is available through Edit --> Template. However, when exporting you can always select a template from any location on your computer. So, if you copy the ecodiv.html and ecodiv folder to e.g., your Documents folder, you can then select the ecodiv.html from there using File --> Export menu.

* But whatever solution you go for, just make sure to copy the folder ecodiv to the same folder as the ecodiv.html file, otherwise the result will not be as intended.

### Issues
When you run the website from your computer in Chrome and click on a link, you may see the message "cannot load page". You can however open the link in a new tab using the context menu (right click). This is only a problem when running the website from your computer (i.e., when using the file:/// protocol). It will run without problem from your webserver (i.e., when using the http:// protocol).

The problem is that Chrome does not seem to handle Ajax based links used in JqueryMobile when running from the local computer. This is mainly a problem when you want to test or further develop your website from your computer using Chrome. 
This issue maybe solved in future releases of jquerymobile, but for now the easiest solution is to use Firefox instead. And if you have few links only, you can remedy this by adding rel="external" as an attribute into the link anchor tag. For example:

```<a href="./Home/Test_1.html" title="+Test 1" class="page" rel="external">```

This needs to be done manually after creating the website in Zim, so not really a solution if you have many pages and many links.

If you really want to use Chrome for local testing / developing your website, you can perhaps force Chrome in accepting local file links. I am not even sure if that is possible, but see e.g., https://forum.jquery.com/topic/chrome-do-not-handle-ajax-based-jquery-mobile-single-page-navigation-model.

If you have suggestions or tips to solve this issue, please leave your comments here: https://github.com/ecodiv/Ecodiv-mobile/issues/2
