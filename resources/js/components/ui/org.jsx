import React, { useState } from "react";
import * as go from "gojs";
import { ReactDiagram } from "gojs-react";

const OrgChart = () => {
    const [nodeDataArray, setNodeDataArray] = useState([
        {
            key: 1,
            position: "CEO",
            source: "https://via.placeholder.com/50",
            name: "John Doe",
            nip: "0000001",
        },
        {
            key: 2,
            parent: 1,
            position: "CTO",
            name: "John Doe",
            nip: "0000001",

            source: "https://via.placeholder.com/50",
        },
        {
            key: 3,
            parent: 1,
            position: "CFO",
            name: "John Doe",
            nip: "0000001",

            source: "https://via.placeholder.com/50",
        },
        {
            key: 4,
            parent: 2,
            position: "Dev Manager",
            name: "John Doe",
            nip: "0000001",
            source: "https://via.placeholder.com/50",
        },
        {
            key: 5,
            parent: 2,
            position: "QA Manager",
            name: "John Doe",
            nip: "0000001",

            source: "https://via.placeholder.com/50",
        },
        {
            key: 6,
            parent: 3,
            position: "Finance Manager",
            name: "John Doe",
            nip: "0000001",
            source: "https://via.placeholder.com/50",
        },
        {
            key: 7,
            parent: 3,
            position: "HR Manager",
            name: "John Doe",
            nip: "0000001",
            source: "https://via.placeholder.com/50",
        },
        {
            key: 8,
            parent: 3,
            position: "Anggota",
            name: "John Doe",
            nip: "0000001",
            source: "https://via.placeholder.com/50",
        },
        {
            key: 9,
            parent: 3,
            position: "Anggota",
            name: "John Doe",
            nip: "0000001",
            source: "https://via.placeholder.com/50",
        },
    ]);

    const initDiagram = () => {
        const $ = go.GraphObject.make;

        const diagram = $(go.Diagram, {
            "undoManager.isEnabled": true, // Aktifkan Undo & Redo
            layout: $(go.TreeLayout, { angle: 90, layerSpacing: 35 }),
            model: $(go.TreeModel, {
                nodeDataArray,
            }),
        });
        diagram.nodeTemplate = $(
            go.Node,
            "Horizontal",
            $(
                go.Panel,
                "Horizontal", // Panel vertikal untuk menampung foto dan teks
                { margin: 5, background: "#cbcbcb" },
                $(
                    go.Picture,
                    {
                        width: 50,
                        height: 50,
                        margin: 5,
                    },
                    new go.Binding("source")
                ),
                $(
                    go.Panel,
                    "Vertical", // Panel vertikal untuk menampung dua kolom teks
                    { margin: 5, width: 150 }, // Sesuaikan lebar panel sesuai kebutuhan
                    $(
                        go.TextBlock,
                        {
                            margin: 2,
                            stroke: "black",
                            font: "bold 12px sans-serif",
                        },
                        new go.Binding("text", "position")
                    ),
                    $(
                        go.TextBlock,
                        {
                            margin: 2,
                            stroke: "black",
                            font: "12px sans-serif",
                            textAlign: "start",
                        },
                        new go.Binding("text", "name")
                    ),
                    $(go.TextBlock, {
                        margin: 2,
                        stroke: "black",
                        font: "10px sans-serif",
                        textAlign: "center",
                    }).bindTwoWay("text", "nip", (v) => "NIP : " + v)
                )
            )
        );

        // diagram.nodeTemplate = new go.Node(go.Panel.Spot, {
        //     isShadowed: true,
        //     shadowOffset: new go.Point(0, 2),
        //     selectionObjectName: "BODY",
        // })
        //     .add(
        //         new go.Panel(go.Panel.Auto, { name: "BODY" }).add(
        //             // define the node's outer shape
        //             new go.Shape("RoundedRectangle", {
        //                 name: "SHAPE",
        //                 strokeWidth: 0,
        //                 portId: "",
        //                 spot1: go.Spot.TopLeft,
        //                 spot2: go.Spot.BottomRight,
        //             }).theme("fill", "background"),
        //             new go.Panel(go.Panel.Table, {
        //                 margin: 0.5,
        //                 defaultRowSeparatorStrokeWidth: 0.5,
        //             })
        //                 .theme("defaultRowSeparatorStroke", "divider")
        //                 .add(
        //                     new go.Panel(go.Panel.Table, {
        //                         padding: new go.Margin(18, 18, 18, 24),
        //                     })
        //                         .addColumnDefinition(0, { width: 240 })
        //                         .add(
        //                             new go.Panel(go.Panel.Table, {
        //                                 column: 0,
        //                                 alignment: go.Spot.Left,
        //                                 stretch: go.Stretch.Vertical,
        //                                 defaultAlignment: go.Spot.Left,
        //                             }).add(
        //                                 new go.Panel(go.Panel.Horizontal, {
        //                                     row: 0,
        //                                 }).add(
        //                                     new go.TextBlock({
        //                                         editable: true,
        //                                         minSize: new go.Size(10, 14),
        //                                     })
        //                                         .bindTwoWay("text", "name")
        //                                         .theme("stroke", "text")
        //                                         .theme("font", "name"),
        //                                     new go.Panel(go.Panel.Auto, {
        //                                         margin: new go.Margin(
        //                                             0,
        //                                             0,
        //                                             0,
        //                                             10
        //                                         ),
        //                                     }).add(
        //                                         new go.Shape("Capsule", {
        //                                             parameter1: 6,
        //                                             parameter2: 6,
        //                                         })
        //                                             .theme("fill", "badge")
        //                                             .theme(
        //                                                 "stroke",
        //                                                 "badgeBorder"
        //                                             ),
        //                                         new go.TextBlock({
        //                                             editable: true,
        //                                             minSize: new go.Size(
        //                                                 10,
        //                                                 12
        //                                             ),
        //                                             margin: new go.Margin(
        //                                                 2,
        //                                                 -1
        //                                             ),
        //                                         })
        //                                             .bindTwoWay("text", "dept")
        //                                             .theme(
        //                                                 "stroke",
        //                                                 "badgeText"
        //                                             )
        //                                             .theme("font", "badge")
        //                                     )
        //                                 ),
        //                                 new go.TextBlock({
        //                                     row: 1,
        //                                     editable: true,
        //                                     minSize: new go.Size(10, 14),
        //                                 })
        //                                     .bindTwoWay("text", "title")
        //                                     .theme("stroke", "subtext")
        //                                     .theme("font", "normal")
        //                             ),
        //                             new go.Panel(go.Panel.Spot, {
        //                                 isClipping: true,
        //                                 column: 1,
        //                             }).add(
        //                                 new go.Shape("Circle", {
        //                                     desiredSize: new go.Size(50, 50),
        //                                     strokeWidth: 0,
        //                                 }),
        //                                 new go.Picture({
        //                                     name: "PICTURE",
        //                                     source: "",
        //                                     desiredSize: new go.Size(50, 50),
        //                                 }).bind("source", "source")
        //                             )
        //                         ),
        //                     new go.Panel(go.Panel.Table, {
        //                         row: 1,
        //                         stretch: go.Stretch.Horizontal,
        //                         defaultColumnSeparatorStrokeWidth: 0.5,
        //                     })
        //                         .theme(
        //                             "defaultColumnSeparatorStroke",
        //                             "divider"
        //                         )
        //                         .add(
        //                             makeBottomButton("EMAIL"),
        //                             makeBottomButton("PHONE")
        //                         )
        //                 )
        //         ), // end Auto Panel
        //         new go.Shape("RoundedLeftRectangle", {
        //             alignment: go.Spot.Left,
        //             alignmentFocus: go.Spot.Left,
        //             stretch: go.Stretch.Vertical,
        //             width: 6,
        //             strokeWidth: 0,
        //         }),
        //         // .themeObject("fill", "", "levels", findLevelColor),
        //         go.GraphObject.build("Button", {
        //             name: "BUTTON",
        //             alignment: go.Spot.Right,
        //             opacity: 0, // initially not visible
        //             click: (e, button) => addEmployee(button.part),
        //         })
        //             // button is visible either when node is selected or on mouse-over
        //             .bindObject("opacity", "isSelected", (s) => (s ? 1 : 0))
        //             .add(
        //                 new go.Shape("PlusLine", {
        //                     width: 8,
        //                     height: 8,
        //                     stroke: "#0a0a0a",
        //                     strokeWidth: 2,
        //                 })
        //             ),
        //         go.GraphObject.build("TreeExpanderButton", {
        //             _treeExpandedFigure: "LineUp",
        //             _treeCollapsedFigure: "LineDown",
        //             name: "BUTTONX",
        //             alignment: go.Spot.Bottom,
        //             opacity: 0, // initially not visible
        //         })
        //             // button is visible either when node is selected or on mouse-over
        //             .bindObject("opacity", "isSelected", (s) => (s ? 1 : 0))
        //     )
        //     .theme("shadowColor", "shadow")
        //     // for sorting, have the Node.text be the data.name
        //     .bind("text", "name")
        //     // bind the Part.layerName to control the Node's layer depending on whether it isSelected
        //     .bindObject("layerName", "isSelected", (sel) =>
        //         sel ? "Foreground" : ""
        //     )
        //     .bindTwoWay("isTreeExpanded");

        // function makeBottomButton(name) {
        //     const phonePath =
        //         "F M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z";
        //     const emailPath =
        //         "F M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3zM19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z";
        //     const convertSelectedToThemeProp = (s) =>
        //         s ? "textHighlight" : "text";
        //     const isEmail = name === "EMAIL";
        //     return new go.Panel(go.Panel.Table, {
        //         mouseEnter: (e, obj) =>
        //             diagram.model.set(obj.part.data, name, true),
        //         mouseLeave: (e, obj) =>
        //             diagram.model.set(obj.part.data, name, false),
        //         name,
        //         background: "transparent",
        //         cursor: "Pointer",
        //         column: isEmail ? 0 : 1,
        //         width: 140,
        //         height: 40,
        //         // toolTip: toolTip,
        //         click: (e, obj) => {
        //             dialog.firstElementChild.firstElementChild.innerHTML =
        //                 // the modal's span
        //                 `You clicked to ${isEmail ? "send email to" : "call"} ${
        //                     obj.part.data.name
        //                 } at ${obj.part.data[name.toLowerCase()]}`;
        //             dialog.showModal();
        //         },
        //     }).add(
        //         new go.Panel(go.Panel.Horizontal).add(
        //             new go.Shape({
        //                 geometryString: isEmail ? emailPath : phonePath,
        //                 strokeWidth: 0,
        //                 desiredSize: isEmail
        //                     ? new go.Size(20, 16)
        //                     : new go.Size(20, 20),
        //                 margin: new go.Margin(0, 12, 0, 0),
        //             })
        //                 .theme("fill", "text")
        //                 .themeData(
        //                     "fill",
        //                     name,
        //                     null,
        //                     convertSelectedToThemeProp
        //                 ),
        //             new go.TextBlock(isEmail ? "Email" : "Phone")
        //                 .theme("stroke", "text")
        //                 .themeData(
        //                     "stroke",
        //                     name,
        //                     null,
        //                     convertSelectedToThemeProp
        //                 )
        //                 .theme("font", "link")
        //         )
        //     );
        // }

        // pertamakan diagram

        // diagram.nodeTemplate = $(
        //     go.Node,
        //     "Auto",
        //     $(go.Shape, "RoundedRectangle", {
        //         fill: "lightblue",
        //         strokeWidth: 1,
        //     }),
        //     $(
        //         go.Panel,
        //         "Horizontal",
        //         { margin: 0 },
        //         $(
        //             go.Picture,
        //             { margin: 0, width: 50, height: 50 },
        //             new go.Binding("source", "source")
        //         ),
        //         $(
        //             go.TextBlock,
        //             { margin: 2, font: "bold 12pt sans-serif" },
        //             new go.Binding("text", "position")
        //         )
        //     )
        // );

        diagram.linkTemplate = $(
            go.Link,
            { routing: go.Link.Orthogonal, corner: 20 },
            $(go.Shape, { strokeWidth: 1.5, stroke: "#929292" })
        );

        return diagram;
    };

    return (
        <div className="w-full h-full">
            <ReactDiagram
                initDiagram={initDiagram}
                divClassName="diagram-component"
                nodeDataArray={nodeDataArray}
                onModelChange={(changes) => setNodeDataArray(changes)}
                skipsDiagramUpdate={false}
            />
        </div>
    );
};

export default OrgChart;
