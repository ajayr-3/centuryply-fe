import { FormEvent, useState } from "react";
import { IModelOptions, ITexture } from "./types";

const SelectTextureModel = (props: IModelOptions) => {
  const { isFront, setTexture, setModelOptions } = props;
  const [selectedTexture, setSelectedTexture] = useState<ITexture | null>(null);

  const allTextures: ITexture[] = [
    {
      id: 1,
      name: "Texture-1",
      url: "Wood021_1K-JPG/Wood021_1K-JPG_Color.jpg",
    },
    {
      id: 2,
      name: "Texture-2",
      url: "Wood006_1K-JPG/Wood006_1K-JPG_Color.jpg",
    },
    {
      id: 3,
      name: "Texture-3",
      url: "Wood026_1K-JPG/Wood026_1K-JPG_Color.jpg",
    },
    {
      id: 4,
      name: "Texture-4",
      url: "Wood027_1K-JPG/Wood027_1K-JPG_Color.jpg",
    },
    {
      id: 5,
      name: "Texture-5",
      url: "Wood028_1K-JPG/Wood028_1K-JPG_Color.jpg",
    },
    {
      id: 6,
      name: "Texture-6",
      url: "Wood030_1K-JPG/Wood030_1K-JPG_Color.jpg",
    },
    {
      id: 7,
      name: "Texture-7",
      url: "Wood048_1K-JPG/Wood048_1K-JPG_Color.jpg",
    },
    {
      id: 8,
      name: "Texture-8",
      url: "Wood049_1K-JPG/Wood049_1K-JPG_Color.jpg",
    },
    {
      id: 9,
      name: "Texture-9",
      url: "Wood050_1K-JPG/Wood050_1K-JPG_Color.jpg",
    },
    {
      id: 10,
      name: "Texture-10",
      url: "Wood051_1K-JPG/Wood051_1K-JPG_Color.jpg",
    },
    {
      id: 11,
      name: "Texture-11",
      url: "Wood058_1K-JPG/Wood058_1K-JPG_Color.jpg",
    },
    {
      id: 12,
      name: "Texture-12",
      url: "Wood052_1K-JPG/Wood052_1K-JPG_Color.jpg",
    },
    {
      id: 13,
      name: "Texture-13",
      url: "Wood060_1K-JPG/Wood060_1K-JPG_Color.jpg",
    },
    {
      id: 14,
      name: "Texture-14",
      url: "Wood062_1K-JPG/Wood062_1K-JPG_Color.jpg",
    },
    {
      id: 15,
      name: "Texture-15",
      url: "Wood067_1K-JPG/Wood067_1K-JPG_Color.jpg",
    },
    {
      id: 16,
      name: "Texture-16",
      url: "Wood066_1K-JPG/Wood066_1K-JPG_Color.jpg",
    },
    {
      id: 17,
      name: "Texture-17",
      url: "WoodFloor007_1K-JPG/WoodFloor007_1K-JPG_Color.jpg",
    },
    {
      id: 18,
      name: "Texture-18",
      url: "WoodFloor040_1K-JPG/WoodFloor040_1K-JPG_Color.jpg",
    },
    {
      id: 19,
      name: "Texture-19",
      url: "WoodFloor041_1K-JPG/WoodFloor041_1K-JPG_Color.jpg",
    },
    {
      id: 20,
      name: "Texture-20",
      url: "WoodFloor043_1K-JPG/WoodFloor043_1K-JPG_Color.jpg",
    },
    {
      id: 21,
      name: "Texture-21",
      url: "WoodFloor051_1K-JPG/WoodFloor051_1K-JPG_Color.jpg",
    },
  ];

  const setInnerTexture = (texture: ITexture) => {
    console.log(texture);
    setSelectedTexture(texture);
  };

  const closeDialogAndSetTexture = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTexture?.(selectedTexture?.url || "");
    setModelOptions?.({ isOpen: false, isFront: false });
  };

  return (
    <dialog
      open
      style={{
        backgroundImage: `url(${selectedTexture?.url})`,
      }}
    >
      <div>
        <h3 className="bold my-3 text-3xl">
          Select the texture for {isFront ? "Front Door" : "Walls"}
        </h3>
        <form className="dialog-form" onSubmit={closeDialogAndSetTexture}>
          <div className="allTextures">
            {allTextures.map((texture) => (
              <div
                className={`dialog-form-item ${
                  selectedTexture?.id === texture.id ? "active" : ""
                }`}
                key={texture.id}
                onClick={() => setInnerTexture(texture)}
              >
                <input type="radio" value={texture.url} radioGroup="texture" />
                <div className="img-container">
                  <img src={texture.url} />
                </div>
                <span>{texture.name}</span>
              </div>
            ))}
          </div>

          <button
            className="my-5 rounded border-b-4 border-blue-700 bg-blue-500 p-3 text-lg font-bold text-white hover:border-blue-500 hover:bg-blue-400"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default SelectTextureModel;
