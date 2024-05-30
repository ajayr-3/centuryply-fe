import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { classNames } from "../utils";
import CabinetCanvas from "./CabinetCanvas";
import Controls from "./Controls";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

const Cabinet = () => {
  const canvasRef = useRef(null);
  const [zoom, setZoom] = useState<number>(0.4);
  const [rows, setRows] = useState<number>(3);
  const [columns, setColumns] = useState<number>(3);
  const [height, setHeight] = useState<number>(1);
  const [width, setWidth] = useState<number>(1);
  const [depth, setDepth] = useState<number>(1);
  const [frontColor, setFrontColor] = useState<string>("#966F33");
  const [wallsColor, setWallsColor] = useState<string>("lightgray");

  const [frontDoorTextureUrl, setFrontDoorTextureUrl] = useState<string>("");
  const [wallsTextureUrl, setWallsTextureUrl] = useState<string>("");

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white">
        <Transition show={sidebarOpen}>
          <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <TransitionChild
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-white/80" />
            </TransitionChild>

            <div className="fixed inset-0 flex">
              <TransitionChild
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <TransitionChild
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </TransitionChild>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="logo.png"
                        alt="Century Ply"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <ul role="list" className="-mx-2 space-y-1">
                          <Controls
                            zoom={zoom}
                            rows={rows}
                            columns={columns}
                            height={height}
                            width={width}
                            depth={depth}
                            setZoom={setZoom}
                            setRows={setRows}
                            setColumns={setColumns}
                            setHeight={setHeight}
                            setWidth={setWidth}
                            setDepth={setDepth}
                            setFrontColor={setFrontColor}
                            setWallsColor={setWallsColor}
                            frontColor={frontColor}
                            wallsColor={wallsColor}
                            frontDoorTextureUrl={frontDoorTextureUrl}
                            wallsTextureUrl={wallsTextureUrl}
                            setFrontDoorTextureUrl={setFrontDoorTextureUrl}
                            setWallsTextureUrl={setWallsTextureUrl}
                          />
                        </ul>
                      </ul>
                    </nav>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className="lg:w-70 hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img className="h-8 w-auto" src="logo.png" alt="Century Ply" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <ul role="list" className="-mx-2 space-y-1">
                  <Controls
                    zoom={zoom}
                    rows={rows}
                    columns={columns}
                    height={height}
                    width={width}
                    depth={depth}
                    setZoom={setZoom}
                    setRows={setRows}
                    setColumns={setColumns}
                    setHeight={setHeight}
                    setWidth={setWidth}
                    setDepth={setDepth}
                    setFrontColor={setFrontColor}
                    setWallsColor={setWallsColor}
                    frontColor={frontColor}
                    wallsColor={wallsColor}
                    frontDoorTextureUrl={frontDoorTextureUrl}
                    wallsTextureUrl={wallsTextureUrl}
                    setFrontDoorTextureUrl={setFrontDoorTextureUrl}
                    setWallsTextureUrl={setWallsTextureUrl}
                  />
                </ul>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          {/* Top navigation bar */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-white/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="border-1 block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-white/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50 object-cover"
                      src="logo.png"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        Testing User
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </MenuButton>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          {({ focus }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                focus ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900",
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <main>
            <div>
              <Canvas
                ref={canvasRef}
                className="canvas"
                // camera={{ position: [-5, 5, 10] }}
              >
                <Suspense fallback={null}>
                  <CabinetCanvas
                    zoom={zoom}
                    rows={rows}
                    columns={columns}
                    height={height}
                    width={width}
                    depth={depth}
                    frontColor={frontColor}
                    wallsColor={wallsColor}
                    frontDoorTextureUrl={frontDoorTextureUrl}
                    wallsTextureUrl={wallsTextureUrl}
                  />
                </Suspense>
              </Canvas>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Cabinet;
