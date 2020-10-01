(function(window, undefined) {
  var dictionary = {
    "b1b18c16-68e6-4948-849c-4564fa80035e": "TUTORIAL_2_MENU_LATERALE",
    "1c501dee-dbc8-475f-a450-c76998698dbc": "POPUP_Modifica_Nome_Categoria",
    "6ef2b495-d06b-47f5-adbb-14105089458c": "TUTORIAL_1_HOMEPAGE",
    "22217819-e8ac-4847-b95a-d02ec1c245aa": "Modifica_Categoria",
    "6d124b74-968b-455c-8dc2-f7e0e0bfa51a": "Inserisci_Piatto",
    "dbeccd5d-add0-41fd-8e70-a7cafcc533c4": "Homepage",
    "cfc8e0b8-697b-43af-b503-7ecd54bedfbc": "TUTORIAL_6_Aggiorna_Status_Ordine",
    "cf0993cb-cc60-43bf-ac26-474299ba9bf2": "POPUP_Conferma_Modifiche_Info_Attività",
    "b1b9dcd8-f85f-4104-9df9-4ddb70d23a45": "Popup_Elimina_Categoria",
    "53832c10-2dc9-436c-920d-71ada2ce3122": "Modifica_piatto",
    "547db155-19e0-481f-9a61-f3ad00be1913": "Popup_Elimina_piatti",
    "925a454e-b771-4d5e-8b1d-bfd09f4286da": "App_Open",
    "dc25e352-6423-411b-9792-e241309405e2": "Popup_Modifica_Orari_Apertura",
    "84987089-fd10-4066-884b-2f647837cb8b": "Elimina_Categoria",
    "d47d767a-2798-4a50-bf15-9d1dcb8f87eb": "POPUP_Registrazione",
    "1c4633fa-3162-4ae6-a48f-c2388be4db62": "Accedi",
    "78122709-5096-4cfd-9c77-a3ac7fc97218": "Recensioni",
    "f0895591-e2dc-4d1d-a869-825ad9434138": "Modifica_Nome_Categoria",
    "781c9308-2275-4465-a8f2-feec3af5c6e5": "POPUP_Allergeni_piatto",
    "c5de5a21-2a5e-4b03-883a-ed0d4448c80a": "TUTORIAL_4_Modifica_Categoria",
    "140cdbda-9bbf-4ec7-9701-578da05978a6": "FAQ",
    "c2a878a0-d536-429a-b143-c4af957e1402": "Popup_Aggiungi_Categoria",
    "e225c866-c97e-4f44-b5f8-00f9285bdaf8": "Resetta_Password",
    "d5a1d1d6-8c53-4e6a-80dd-3de19056df3a": "Registrazione",
    "c8decab3-1f91-435a-9550-f7b43e3c1248": "Note_Legali",
    "a0d18e02-42db-4b87-ad52-4f1c4e6d781e": "Modifica_Orari_Apertura",
    "e617a3d9-1462-4baf-b5ca-d914dc8f094b": "Aggiungi_Categoria",
    "90a30181-7d73-4898-aacb-ae80bf7e39a4": "Elimina_piatti",
    "401e5346-7686-4575-94ba-88603c51f45c": "POPUP_Allergeni_Risotto",
    "a77e2eba-13ee-47dc-a583-a778a1144841": "Menù",
    "2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8": "Aggiorna_Status_Ordine",
    "bcbac35e-c56a-40f6-a529-86a288bc5921": "Allergeni_Risotto",
    "120a2592-2b8b-4619-a407-7389801bad8c": "POPUP_Aggiorna_Status_Ordine",
    "91242e48-ccc4-4872-b1fa-9ca816e3af85": "Ingredienti_risotto",
    "3133cbe6-4010-4427-b1df-207cba63ea32": "Modifica_Risotto_Piatto",
    "4edb5cc6-f830-456a-b8ed-d1d7f3a2543a": "Visualizza_Ordine",
    "4797b588-8f59-48cb-b221-6286be5cba60": "Modifica_Info_Attività",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home_Android",
    "ce5c5776-5a8d-4bdc-9b95-b4c9bed36f96": "TUTORIAL_5_Ordini",
    "dbd16b86-5365-4c98-bfaf-b67cdebccdfa": "Impostazioni",
    "b1864084-b54c-49db-b950-338e745ea42e": "Visualizza_Profilo",
    "55ad6387-05ad-4a8b-b057-a79969d5c24a": "Password_Dimenticata",
    "091902b9-e701-4257-99ca-923509c7225e": "Allergeni_piatto",
    "06c95ddc-2e58-49af-9ee2-504129e5d199": "Ordini",
    "b69b845b-170a-49ad-88b2-2ba3a5784036": "Ingredienti_piatto",
    "3e37a864-c5f8-4acb-8b6f-1a77098684c3": "TUTORIAL_3_FRECCIA_INDIETRO",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);