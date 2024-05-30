import { useState } from "react";
import { addZero, classNames } from "../utils";
import SelectTextureModel from "./SelectTextureModel";
import { IModelOptions, IPropsControls } from "./types";

function Controls(props: IPropsControls) {
  const {
    zoom,
    setZoom,
    rows,
    setRows,
    columns,
    setColumns,
    height,
    setHeight,
    width,
    setWidth,
    depth,
    setDepth,
    setFrontDoorTextureUrl,
    setWallsTextureUrl,
  } = props;

  const [modelOptions, setModelOptions] = useState<IModelOptions>({
    isFront: false,
    isOpen: false,
  });

  return (
    <div>
      <div className="">
        <div className="input-container flex cursor-vertical-text items-center text-sm">
          <label
            className={classNames(
              "text-gray-600 hover:bg-gray-800 hover:text-white",
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
            )}
            htmlFor="zoom"
          >
            Set Zoom :-{" "}
          </label>
          <input
            type="range"
            name="zoom"
            value={zoom}
            max={1}
            step={0.1}
            min={0.1}
            onChange={(e) => setZoom(+e.target.value)}
          />
          {addZero(zoom)}
        </div>
        <div className="input-container flex cursor-vertical-text items-center text-sm">
          <label
            className={classNames(
              "text-gray-600 hover:bg-gray-800 hover:text-white",
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
            )}
            htmlFor="rows"
          >
            Total Rows :-{" "}
          </label>
          <input
            type="range"
            name="rows"
            value={rows}
            max={10}
            step={1}
            min={1}
            onChange={(e) => setRows(+e.target.value)}
          />
          {addZero(rows)}
        </div>
        <div className="input-container flex cursor-vertical-text items-center text-sm">
          <label
            className={classNames(
              "text-gray-600 hover:bg-gray-800 hover:text-white",
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
            )}
            htmlFor="columns"
          >
            Total Cols :-{" "}
          </label>
          <input
            type="range"
            name="columns"
            value={columns}
            max={10}
            step={1}
            min={1}
            onChange={(e) => setColumns(+e.target.value)}
          />
          {addZero(columns)}
        </div>

        <div className="input-container flex cursor-vertical-text items-center text-sm">
          <label
            className={classNames(
              "text-gray-600 hover:bg-gray-800 hover:text-white",
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
            )}
            htmlFor="height"
          >
            Height of each compartment :-{" "}
          </label>
          <input
            type="range"
            name="height"
            value={height}
            max={10}
            step={1}
            min={1}
            onChange={(e) => setHeight(+e.target.value)}
          />
          {addZero(height)}
        </div>

        <div className="input-container flex cursor-vertical-text items-center text-sm">
          <label
            className={classNames(
              "text-gray-600 hover:bg-gray-800 hover:text-white",
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
            )}
            htmlFor="width"
          >
            Width of each compartment :-{" "}
          </label>
          <input
            type="range"
            name="width"
            value={width}
            max={10}
            step={1}
            min={1}
            onChange={(e) => setWidth(+e.target.value)}
          />
          {addZero(width)}
        </div>

        <div className="input-container flex cursor-vertical-text items-center text-sm">
          <label
            className={classNames(
              "text-gray-600 hover:bg-gray-800 hover:text-white",
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
            )}
            htmlFor="depth"
          >
            Depth of each compartment :-{" "}
          </label>
          <input
            type="range"
            name="depth"
            value={depth}
            max={3}
            step={1}
            min={1}
            onChange={(e) => setDepth(+e.target.value)}
          />
          {addZero(depth)}
        </div>

        <div className="input-container flex cursor-vertical-text items-center text-sm">
          <label
            className={classNames(
              "text-gray-600 hover:bg-gray-800 hover:text-white",
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
            )}
            htmlFor="frontColor"
          >
            Front Door Texture :-{" "}
          </label>
          <input
            type="button"
            className="my-2 rounded border-b-4 border-blue-700 bg-blue-500 px-2 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
            name="frontColor"
            value={"Open Selector"}
            onClick={() =>
              setModelOptions({
                isOpen: true,
                isFront: true,
                setTexture: setFrontDoorTextureUrl,
              })
            }
          />
        </div>
        <div className="input-container flex cursor-vertical-text items-center text-sm">
          <label
            className={classNames(
              "text-gray-600 hover:bg-gray-800 hover:text-white",
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
            )}
            htmlFor="wallsColor"
          >
            Side Walls Texture :-{" "}
          </label>
          <input
            type="button"
            className="my-2 rounded border-b-4 border-blue-700 bg-blue-500 px-2 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
            name="wallsColor"
            value={"Open Selector"}
            onClick={() =>
              setModelOptions({
                isOpen: true,
                isFront: false,
                setTexture: setWallsTextureUrl,
              })
            }
          />
        </div>
        {/* <div className="input-container flex cursor-vertical-text items-center text-sm">
          <label
            className={classNames(
              "text-gray-600 hover:bg-gray-800 hover:text-white",
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
            )}
            htmlFor="frontColor"
          >
            Front Door Color :-{" "}
          </label>
          <input
            type="color"
            name="frontColor"
            value={frontColor}
            onChange={(e) => setFrontColor(e.target.value)}
          />
          {frontColor}
        </div>
        <div className="input-container flex cursor-vertical-text items-center text-sm">
          <label
            className={classNames(
              "text-gray-600 hover:bg-gray-800 hover:text-white",
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
            )}
            htmlFor="wallsColor"
          >
            Side Walls Color :-{" "}
          </label>
          <input
            type="color"
            name="wallsColor"
            value={wallsColor}
            onChange={(e) => setWallsColor(e.target.value)}
          />
          {wallsColor}
        </div> */}
      </div>
      {modelOptions.isOpen && (
        <SelectTextureModel
          isFront={modelOptions.isFront}
          isOpen={modelOptions.isOpen}
          setModelOptions={setModelOptions}
          setTexture={modelOptions.setTexture}
        />
      )}
    </div>
  );
}

export default Controls;
