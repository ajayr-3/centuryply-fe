import { useState } from 'react';
import SelectTextureModel from './SelectTextureModel';
import { IModelOptions, IPropsControls } from './types';

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
    frontColor,
    setFrontColor,
    wallsColor,
    setWallsColor,
    setFrontDoorTextureUrl,
    setWallsTextureUrl,
  } = props;

  const [modelOptions, setModelOptions] = useState<IModelOptions>({
    isFront: false,
    isOpen: false,
  });

  return (
    <div>
      <div className='controls-container'>
        <div className='input-group'>
          <label htmlFor='zoom'>Set Zoom :- </label>
          <input
            type='range'
            name='zoom'
            value={zoom}
            max={1}
            step={0.1}
            min={0.1}
            onChange={(e) => setZoom(+e.target.value)}
          />
          {zoom}
        </div>
        <div className='input-group'>
          <label htmlFor='rows'>Total Rows :- </label>
          <input
            type='range'
            name='rows'
            value={rows}
            max={10}
            step={1}
            min={1}
            onChange={(e) => setRows(+e.target.value)}
          />
          {rows}
        </div>
        <div className='input-group'>
          <label htmlFor='columns'>Total Columns :- </label>
          <input
            type='range'
            name='columns'
            value={columns}
            max={10}
            step={1}
            min={1}
            onChange={(e) => setColumns(+e.target.value)}
          />
          {columns}
        </div>

        <div className='input-group'>
          <label htmlFor='height'>Height of each compartment :- </label>
          <input
            type='range'
            name='height'
            value={height}
            max={10}
            step={1}
            min={1}
            onChange={(e) => setHeight(+e.target.value)}
          />
          {height}
        </div>

        <div className='input-group'>
          <label htmlFor='width'>Width of each compartment :- </label>
          <input
            type='range'
            name='width'
            value={width}
            max={10}
            step={1}
            min={1}
            onChange={(e) => setWidth(+e.target.value)}
          />
          {width}
        </div>

        <div className='input-group'>
          <label htmlFor='depth'>Depth of each compartment :- </label>
          <input
            type='range'
            name='depth'
            value={depth}
            max={3}
            step={1}
            min={1}
            onChange={(e) => setDepth(+e.target.value)}
          />
          {depth}
        </div>

        <div className='input-group'>
          <label htmlFor='frontColor'>Front Door Texture :- </label>
          <input
            type='button'
            className='btn'
            name='frontColor'
            value={'Open Selector'}
            onClick={() =>
              setModelOptions({
                isOpen: true,
                isFront: true,
                setTexture: setFrontDoorTextureUrl,
              })
            }
          />
        </div>
        <div className='input-group'>
          <label htmlFor='wallsColor'>Side Walls Texture :- </label>
          <input
            type='button'
            className='btn'
            name='wallsColor'
            value={'Open Selector'}
            onClick={() =>
              setModelOptions({
                isOpen: true,
                isFront: false,
                setTexture: setWallsTextureUrl,
              })
            }
          />
        </div>
        <div className='input-group'>
          <label htmlFor='frontColor'>Front Door Color :- </label>
          <input
            type='color'
            name='frontColor'
            value={frontColor}
            onChange={(e) => setFrontColor(e.target.value)}
          />
          {frontColor}
        </div>
        <div className='input-group'>
          <label htmlFor='wallsColor'>Side Walls Color :- </label>
          <input
            type='color'
            name='wallsColor'
            value={wallsColor}
            onChange={(e) => setWallsColor(e.target.value)}
          />
          {wallsColor}
        </div>
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
