import { ConfigProvider, Modal } from "antd";
import backgroundImage from "../assets/BackImage.png";
import { useColourStore } from "../ZustansStore/store";
import { useState } from "react";
type prop = {
    isModalOpen:boolean;
    setIsModalOpen:(e:boolean) => void;
}
export const ModalTemplate = ({isModalOpen,setIsModalOpen}:prop) =>{
    const [themeBorder, setThemeBorder] = useState({
        pink_Border: false,
        blue_Border: false,
        yellow_Border: false,
      });
    const changeTheme = useColourStore((state: any) => state.changeColour);
    const modalStyles = {
        header: {
          borderLeft: ``,
          borderRadius: 5,
          paddingInlineStart: 0,
          padding: "5px",
        },
        body: {
          boxShadow: "border",
          borderRadius: 5,
          outerHeight: "70px",
          outerWidth: "70px",
        },
        mask: {
          backdropFilter: "blur(3px)",
          backgroundImage: `URL(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
        content: {
          padding: "0px",
        },
      };
    return(<ConfigProvider
        modal={{
          styles: modalStyles,
        }}
      >
        <Modal
          title={`Choose Theme`}
          open={isModalOpen}
          centered
          footer={null}
          maskClosable={true}
          closeIcon={null}
          mask={true}
          onCancel={() => setIsModalOpen(false)}
          className="text-2xl font-mono text-center"
          width={"427px"}
        >
          <div className="left-0 right-0  py-10 flex justify-center gap-2 bg-[url('./assets/BackImage.png/')] ">
            {" "}
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-4 w-[15%] h-[15%] cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setThemeBorder((prev) => ({
                  ...prev,
                  pink_Border: true,
                  blue_Border: false,
                  yellow_Border: false,
                }));
                changeTheme("pink");
              }}
            >
              <rect
                x="5.09424"
                y="5.09433"
                width="34.8113"
                height="34.8113"
                rx="17.4057"
                fill={"#E85382"}
              />
              <rect
                x="0.5"
                y="0.5"
                width="44"
                height="44"
                rx="22"
                stroke={`${themeBorder.pink_Border && "#868686"}`}
              />
            </svg>{" "}
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-4 w-[15%] h-[15%] cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setThemeBorder((prev) => ({
                  ...prev,
                  pink_Border: false,
                  blue_Border: true,
                  yellow_Border: false,
                }));
                changeTheme("blue");
              }}
            >
              <rect
                x="5.09424"
                y="5.09433"
                width="34.8113"
                height="34.8113"
                rx="17.4057"
                fill={"#39BADF"}
              />
              <rect
                x="0.5"
                y="0.5"
                width="44"
                height="44"
                rx="22"
                stroke={`${themeBorder.blue_Border && "#868686"} `}
              />
            </svg>{" "}
            <svg
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-4 w-[15%] h-[15%] cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setThemeBorder((prev) => ({
                  ...prev,
                  pink_Border: false,
                  blue_Border: false,
                  yellow_Border: true,
                }));
                changeTheme("yellow");
              }}
            >
              <rect
                x="5.09424"
                y="5.09433"
                width="34.8113"
                height="34.8113"
                rx="17.4057"
                fill={`#E1A725`}
              />
              <rect
                x="0.5"
                y="0.5"
                width="44"
                height="44"
                rx="22"
                stroke={`${themeBorder.yellow_Border && "#868686"} `}
              />
            </svg>
          </div>
        </Modal>
      </ConfigProvider>)
}