// const list = {
//   "treeViewItems": [
//     {
//       "name": "Plants",
//       "children": [
//         {
//           "name": "Trees",
//           "children": [{ "name": "Oak" }, { "name": "Elm" }, { "name": "Ash" }]
//         },
//         {
//           "name": "Bushes",
//           "children": [
//             { "name": "Holley" },
//             { "name": "Hibiscus" },
//             { "name": "Jasmine" }
//           ]
//         },
//         { "name": "My Landscaper" }
//       ]
//     },
//     {
//       "name": "Animals",
//       "children": [
//         {
//           "name": "Mammals",
//           "children": [
//             { "name": "Human" },
//             { "name": "Lion" },
//             { "name": "Tiger" },
//             { "name": "Bear" }
//           ]
//         },
//         {
//           "name": "Reptiles",
//           "children": [{ "name": "Lizard" }, { "name": "Snake" }]
//         },
//         { "name": "Unicorn" },
//         { "name": "Omnicorn" },
//         { "name": "Dragon" }
//       ]
//     }
//   ]
// };

const folderIcon = '<svg class="folder-icon" viewBox="0 0 24 24" width="24px"height="24px"><path d="M12,7,11,5H5A1,1,0,0,0,4,6V18a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V8a1,1,0,0,0-1-1Z"/></svg>';
const arrowIcon = '<svg viewBox="0 0 12 12" width="12px"height="12px" style="margin:6px"><path id="component_tree_expander_small" d="M10,4,6,9,2,4Z"/></svg>';


fetch("data.json")
  .then(function(response)
  {
    console.log('Response:', response);
    return response.json();
  })
  .then(function(data)
  {    
    let treeViewItems = data.treeViewItems;

    let placeholder = document.querySelector('#treeview');

    function growTree(data)
    {
      let htmlBlock = '';

      for (let i = 0; i < data.length; i++) 
      {
        let item = data[i];
        let ID = Math.random().toString(36).substring(2, 5); 
        
        htmlBlock += `
          <div class="branch">
            <input type="checkbox" id="item-${ID}">
            <label for="item-${ID}">
              ${item.children ? folderIcon : ''}
              ${item.name}
              ${item.children ? arrowIcon : ''}
            </label>
            ${item.children ? `<div class="drp-dwn">${growTree(item.children)}</div>` : ''}
          </div>
        `;
      }

      return htmlBlock;
    }

    placeholder.innerHTML = growTree(treeViewItems);
  })
  .catch(function(error)
  {
    console.error('Fetch Error:', error);
  });

      
    //   let childrenEl = '';

      

    //   if (item.children){
    //     for (let j = 0; j < item.children.length; j++){
    //       let child = item.children[j];
    //       let babies = '';
    //       if (child.children)  {
    //           for (let k = 0; k < child.children.length; k++){
    //           babies += `<li>${child.children[k].name}</li>`;
    //         }
    //       }

    //       childrenEl += `<div class="branch">
    //       <input type="checkbox" id="item-${i}-${j}">
    //         <label for="item-${i}-${j}">
    //           ${child.children ? folderIcon : ' '}
    //           ${child.name}
    //           ${child.children ? arrowIcon : ' '}
    //         </label>
    //       ${child.children ? `<div class="drp-dwn" id="drop-down-${i}-${j}">${babies}</div>` : ''}
    //     </div>
    //     `;
    //     }
    //   }

    //   output += `
    //     <div class="branch">
    //       <input type="checkbox" id="item-${i}">
    //         <label for="item-${i}">
    //           ${item.children ? folderIcon : ' '}
    //           ${item.name}
    //           ${item.children ? arrowIcon : ' '}
    //         </label>
    //       ${item.children ? `<div class="drp-dwn" id="drop-down-${i}">${childrenEl}</div>` : ''}
    //     </div>
    //     `;
    // }
    // return(output);

//     }}}
//     $('#treeview').html(addElement(treeViewItems));
  
  
//   })
//   .catch(function(error) {
//     console.error('Fetch Error:', error);
// });



// function buildTreeview(containerDiv, items) {
//   $.each(items, function (index, item) {
//     const branch = $();
//     containerDiv.append(branch);

//     console.log('Building tree for:', item.name);

//     if (item.children) {
//       const leaf = $('<div></div>').addClass('tree-item');
//       containerDiv.append(leaf);
//       buildTreeview(leaf, item.children);
//     }
//   });
// }

$(document).ready(function(){
  console.log("JS is here.");
});

/*

  each.item( =>
    makeDropdown(item);
    if(has kids){
      each(item.kids){
        makeDrpDwn(item.kids);    
      }
    })

  funky makeDrpDwn(where, what){
    const theNewDropDown = $(<div></div>).addClass(makinItADropDown);
    where.append(theNewDropDown);
  }

*/