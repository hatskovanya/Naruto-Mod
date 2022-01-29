"use strict";(self.webpackChunknaruto_mod_docs=self.webpackChunknaruto_mod_docs||[]).push([[970],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,b=p["".concat(l,".").concat(m)]||p[m]||s[m]||r;return t?a.createElement(b,o(o({ref:n},u),{},{components:t})):a.createElement(b,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8503:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},scale:function(){return p},BackgroundImg:function(){return m},capitaliseName:function(){return b},ItemRender:function(){return k},RowRender:function(){return h},ItemGrid:function(){return g},CraftingRecipe:function(){return y},ItemView:function(){return f},default:function(){return v}});var a=t(7462),i=t(3366),r=t(7294),o=t(3905),d=["components"],l={sidebar_position:10,description:"Information about the main items and recipes."},c="Items & Blocks",u={unversionedId:"items_and_blocks",id:"items_and_blocks",title:"Items & Blocks",description:"Information about the main items and recipes.",source:"@site/docs/items_and_blocks.mdx",sourceDirName:".",slug:"/items_and_blocks",permalink:"/docs/items_and_blocks",editUrl:"https://github.com/sekwah41/Naruto-Mod/edit/website/docs/items_and_blocks.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"Information about the main items and recipes."},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/faq"},next:{title:"Jutsus",permalink:"/docs/jutsus"}},s=[{value:"Weapons",id:"weapons",children:[{value:"Kunai",id:"kunai",children:[],level:3},{value:"Senbon",id:"senbon",children:[],level:3},{value:"Explosive Kunai",id:"explosive-kunai",children:[],level:3},{value:"Shuriken",id:"shuriken",children:[],level:3},{value:"Paper Bomb",id:"paper-bomb",children:[],level:3}],level:2},{value:"Armour",id:"armour",children:[{value:"Anbu Mask",id:"anbu-mask",children:[{value:"Red",id:"red",children:[],level:4},{value:"Yellow",id:"yellow",children:[],level:4},{value:"Green",id:"green",children:[],level:4},{value:"Blue",id:"blue",children:[],level:4},{value:"Mist",id:"mist",children:[],level:4}],level:3},{value:"Headbands",id:"headbands",children:[],level:3}],level:2},{value:"Decoration",id:"decoration",children:[],level:2},{value:"Other",id:"other",children:[{value:"Lonely March",id:"lonely-march",children:[],level:3}],level:2}],p=2,m=function(e){var n=e.clazz,t=e.style;return(0,o.kt)("div",{className:n,style:Object.assign({background:"url(/img/mc/gui/crafting_table.png)",imageRendering:"pixelated",backgroundSize:256*p},t)})};function b(e){return void 0===e&&(e=""),e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}var k=function(e){var n=e.item,t=e.style,a=e.count;return n?(0,o.kt)("div",{className:"item-render",style:Object.assign({background:n?"url(/img/mc/item/"+n+".png)":void 0,backgroundSize:16*p,width:16*p,height:16*p,imageRendering:"pixelated"},t),title:b(n)+(a?" ("+a+")":"")},a&&(0,o.kt)("div",{style:{position:"absolute",fontFamily:"Minecraft Regular",fontWeight:"normal",transform:"translateX(-50%)",filter:"drop-shadow("+1*p+"px "+1*p+"px 0px #0009)",fontSize:9*p,color:"#fff",left:14*p,top:7*p}},a)):(0,o.kt)("div",{style:Object.assign({width:16*p,height:16*p},t)})},h=function(e){var n=e.row,t=e.keyMap;return(0,o.kt)(r.Fragment,null,n&&n.split("").map((function(e,n){return(0,o.kt)(k,{key:n,item:t[e],style:{margin:1*p},mdxType:"ItemRender"})})))},g=function(e){var n=e.keyMap,t=e.grid,a=e.style;return(0,o.kt)("div",{style:Object.assign({},a)},t&&t.map((function(e,t){return(0,o.kt)("div",{key:t,style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}},(0,o.kt)(h,{keyMap:n,row:e,mdxType:"RowRender"}))})))},y=function(e){var n=e.keyMap,t=void 0===n?{}:n,a=e.grid,i=e.result,r=e.count;return(0,o.kt)("div",{style:{position:"relative",width:146*p,height:72*p}},(0,o.kt)(m,{className:"top",style:{width:143*p,height:3*p},mdxType:"BackgroundImg"}),(0,o.kt)(m,{className:"center",style:{marginLeft:3*p,width:140*p,height:65*p,backgroundPositionX:-20*p,backgroundPositionY:-9*p},mdxType:"BackgroundImg"}),(0,o.kt)(m,{className:"bottom",style:{width:143*p,height:4*p,backgroundPositionY:-162*p},mdxType:"BackgroundImg"}),(0,o.kt)(m,{className:"left",style:{position:"absolute",width:3*p,height:65*p,backgroundPositionY:-3*p,top:3*p},mdxType:"BackgroundImg"}),(0,o.kt)(m,{className:"right",style:{position:"absolute",width:3*p,height:69*p,backgroundPositionX:-173*p,right:0*p,top:0},mdxType:"BackgroundImg"}),(0,o.kt)(m,{className:"bottomright",style:{position:"absolute",width:3*p,height:3*p,backgroundPositionX:-173*p,backgroundPositionY:-163*p,right:0*p,top:69*p},mdxType:"BackgroundImg"}),(0,o.kt)(g,{keyMap:t,grid:a,style:{position:"absolute",left:12*p,top:10*p},mdxType:"ItemGrid"}),(0,o.kt)(k,{item:i,style:{position:"absolute",left:107*p,top:29*p},count:r,mdxType:"ItemRender"}))},f=function(e){var n=e.src;return(0,o.kt)("img",{src:n,width:"100",style:{imageRendering:"pixelated"}})},w={toc:s,scale:p,BackgroundImg:m,capitaliseName:b,ItemRender:k,RowRender:h,ItemGrid:g,CraftingRecipe:y,ItemView:f};function v(e){var n=e.components,t=(0,i.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"items--blocks"},"Items & Blocks"),(0,o.kt)("p",null,"Crafting recipes can be found in game in the vanilla crafting recipes menu in the crafting bench and can be unlocked by finding the required materials."),(0,o.kt)("p",null,"If you want to see all in game by default you can also install ",(0,o.kt)("a",{parentName:"p",href:"https://www.curseforge.com/minecraft/mc-mods/jei"},"JEI"),". If you want to search all items and blocks relating to the naruto mod you can search ",(0,o.kt)("inlineCode",{parentName:"p"},"@narutomod"),"."),(0,o.kt)("h2",{id:"weapons"},"Weapons"),(0,o.kt)("h3",{id:"kunai"},"Kunai"),(0,o.kt)(y,{keyMap:{I:"iron_ingot",S:"stick"},grid:[" I","S "],result:"kunai",count:8,mdxType:"CraftingRecipe"}),(0,o.kt)("h3",{id:"senbon"},"Senbon"),(0,o.kt)(y,{keyMap:{I:"iron_nugget"},grid:["  I"," I ","I  "],result:"senbon",count:16,mdxType:"CraftingRecipe"}),(0,o.kt)("h3",{id:"explosive-kunai"},"Explosive Kunai"),(0,o.kt)(y,{keyMap:{k:"kunai",p:"paper_bomb"},grid:["kp"],result:"explosive_kunai",mdxType:"CraftingRecipe"}),(0,o.kt)("h3",{id:"shuriken"},"Shuriken"),(0,o.kt)(y,{keyMap:{I:"iron_nugget"},grid:[" I ","I I"," I "],result:"shuriken",count:4,mdxType:"CraftingRecipe"}),(0,o.kt)("h3",{id:"paper-bomb"},"Paper Bomb"),(0,o.kt)(y,{keyMap:{g:"gunpowder",p:"paper"},grid:["ggg","ppp","ggg"],result:"paper_bomb",mdxType:"CraftingRecipe"}),(0,o.kt)("h2",{id:"armour"},"Armour"),(0,o.kt)("h3",{id:"anbu-mask"},"Anbu Mask"),(0,o.kt)("p",null,"This item has multiple variations but they all do the same."),(0,o.kt)("h4",{id:"red"},"Red"),(0,o.kt)(y,{keyMap:{w:"white_terracotta",r:"red_dye"},grid:["wrw","www"," w "],result:"red_anbu_mask",mdxType:"CraftingRecipe"}),(0,o.kt)("h4",{id:"yellow"},"Yellow"),(0,o.kt)(y,{keyMap:{w:"white_terracotta",y:"yellow_dye"},grid:["wyw","www"," w "],result:"yellow_anbu_mask",mdxType:"CraftingRecipe"}),(0,o.kt)("h4",{id:"green"},"Green"),(0,o.kt)(y,{keyMap:{w:"white_terracotta",g:"green_dye"},grid:["wgw","www"," w "],result:"green_anbu_mask",mdxType:"CraftingRecipe"}),(0,o.kt)("h4",{id:"blue"},"Blue"),(0,o.kt)(y,{keyMap:{w:"white_terracotta",b:"blue_dye"},grid:["wbw","www"," w "],result:"blue_anbu_mask",mdxType:"CraftingRecipe"}),(0,o.kt)("h4",{id:"mist"},"Mist"),(0,o.kt)(y,{keyMap:{w:"white_terracotta",r:"red_dye"},grid:["www","wrw"," w "],result:"mist_anbu_mask",mdxType:"CraftingRecipe"}),(0,o.kt)("h3",{id:"headbands"},"Headbands"),(0,o.kt)(r.Fragment,null,[{name:"Blank Blue Headband",icon:"headband_blue_blank",recipe:"none"},{name:"Blank Black Headband",icon:"headband_black_blank",recipe:"none"},{name:"Blank Red Headband",icon:"headband_red_blank",recipe:"none"},{name:"Custard Headband",icon:"headband_custard",recipe:"none"},{name:"Hidden In The Leaves Headband (Blue Variant)",icon:"headband_blue",recipe:"none"},{name:"Hidden In The Leaves Headband (Black Variant)",icon:"headband_black",recipe:"none"},{name:"",icon:"headband_blue",recipe:"none"},{name:"Hidden In The Stone Headband",icon:"headband_rock",recipe:"none"},{name:"Hidden In The Sand Headband",icon:"headband_black_rev",recipe:"none"},{name:"Hidden In The Sound Headband",icon:"headband_sound",recipe:"none"},{name:"Hidden In The Mist Headband",icon:"headband_black_block",recipe:"none"},{name:"Hidden In The Waterfall Headband",icon:"headband_black_block",recipe:"none"},{name:"Hidden In The Clouds Headband",icon:"headband_black_block",recipe:"none"},{name:"Hidden In The Rain Headband",icon:"headband_black_block",recipe:"none"},{name:"Hidden In The Grass Headband",icon:"headband_black_block",recipe:"none"},{name:"Hidden In The Pride Headband",icon:"headband_rainbow",recipe:"none"},{name:"Hidden In The Memes Headband",icon:"headband_youtube",recipe:"none"},{name:"Lava Headband",icon:"headband_lava",recipe:"none"}].map((function(e){return(0,o.kt)("div",{key:e.name},(0,o.kt)("h4",null,e.name),(0,o.kt)(f,{src:"/img/mc/item/"+e.icon+".png",mdxType:"ItemView"}),(0,o.kt)("div",null,"Current Recipe: ",e.recipe))}))),(0,o.kt)("h2",{id:"decoration"},"Decoration"),(0,o.kt)("h2",{id:"other"},"Other"),(0,o.kt)("h3",{id:"lonely-march"},"Lonely March"),(0,o.kt)(f,{src:"/img/mc/item/lonely_march.png",mdxType:"ItemView"}),(0,o.kt)("p",null,"How to obtain: Unobtainable."),(0,o.kt)("p",null,"Crafting recipe: None."))}v.isMDXComponent=!0}}]);