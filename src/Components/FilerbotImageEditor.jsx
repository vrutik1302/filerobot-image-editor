import React, { useState } from "react";
import { Fragment } from "react";
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";

function FilerbotImageEditor() {
  const [isImgEditorShown, setIsImgEditorShown] = useState(false);
  const [base64, setBase64] = useState("");

  let editedImage = base64.imageBase64;

  const openImgEditor = () => {
    setIsImgEditorShown(true);
  };
  const closeImgEditor = () => {
    setIsImgEditorShown(false);
  };

  return (
    <Fragment>
      <div>
        <button onClick={openImgEditor}>Open Filerobot image editor</button>
        {isImgEditorShown && (
          <FilerobotImageEditor
            source="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
            onSave={
              (editedImageObject, designState) =>
                setBase64(editedImageObject, designState)
              // console.log("saved", editedImageObject, designState)
            }
            onClose={closeImgEditor}
            annotationsCommon={{
              fill: "#ff0000",
            }}
            Text={{ text: "Filerobot..." }}
            Crop={{
              presetsItems: [
                {
                  titleKey: "classicTv",
                  descriptionKey: "4:3",
                  ratio: 4 / 3,
                  // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
                },
                {
                  titleKey: "cinemascope",
                  descriptionKey: "21:9",
                  ratio: 21 / 9,
                  // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
                },
              ],
              presetsFolders: [
                {
                  titleKey: "socialMedia", // will be translated into Social Media as backend contains this translation key
                  // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                  groups: [
                    {
                      titleKey: "facebook",
                      items: [
                        {
                          titleKey: "profile",
                          width: 180,
                          height: 180,
                          descriptionKey: "fbProfileSize",
                        },
                        {
                          titleKey: "coverPhoto",
                          width: 820,
                          height: 312,
                          descriptionKey: "fbCoverPhotoSize",
                        },
                      ],
                    },
                  ],
                },
              ],
            }}
            tabsIds={[
              TABS.ADJUST,
              TABS.ANNOTATE,
              TABS.WATERMARK,
              TABS.FINETUNE,
              TABS.FILTERS,
              TABS.RESIZE,
            ]} // or {['Adjust', 'Annotate', 'Watermark']}
            defaultTabId={TABS.ANNOTATE} // or 'Annotate'
            defaultToolId={TOOLS.TEXT} // or 'Text'
          />
        )}
      </div>
      {!isImgEditorShown ? null : <img src={editedImage} />}
    </Fragment>
  );
}
export default FilerbotImageEditor;
