require("react");
var $reactdom = require("react-dom");
var $reactjsxruntime = require("react/jsx-runtime");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



//const jsx = <h1>Heading</h1>
const $var$Title = ()=>{
    return  (0, $ractjsxruntime.jsx)("h1", {
        children: "React Course"
    });
};
const $var$Container = ()=>{
    return  (0, $reactjsxruntime.jsxs)("div", {
        id: "container",
        children: [
            17,
             (0, $reactjsxruntime.jsx)($var$Title, {}),
             (0, $reactjsxruntime.jsx)($var$Title, {}),
             (0, $reactjsxruntime.jsx)("p", {
                children: "Hello.......... how r u??"
            })
        ]
    });
};
//const heading = React.createElement("h1", { id: "heading" }, "Hello React world");
const $var$root = (0, ($parcel$interopDefault($reactdom))).createRoot(document.getElementById("root"));
$var$root.render( (0, $reactjsxruntime.jsx)($var$Container, {}));

