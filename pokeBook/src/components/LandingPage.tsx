import { SearchBar } from "../widget/SearchBar";
import { useColourStore } from "../ZustansStore/store";
import PokeLogo from "../assets/PokeLogo.png";

export function LandingPage() {
  const theme = useColourStore((state: any) => state.colorTheme.colour_holder);
  return (
    <main
      className={
        "bg-[url('./assets/BackImage.png/')] w-screen h-screen grid grid-col-1   items-center text-center mobile_S:p-2"
      }
    >
      <div className="grid grid-col-1 text-center place-items-center  mobile_S:p-2">
        <img src={PokeLogo} className=""/>
        <svg
          width="245"
          height="35"
          viewBox="0 0 245 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-1 mb-2 laptop:w-64 tablet:w-64"
        >
          <path
            d="M17.72 25.12H3.416V18.64H16.952C18.968 18.64 20.44 18.288 21.368 17.584C22.328 16.848 22.808 15.472 22.808 13.456C22.808 11.504 22.328 10.16 21.368 9.424C20.44 8.688 18.968 8.32 16.952 8.32H3.416V1.84H17.72C20.216 1.84 22.376 2.304 24.2 3.232C26.024 4.128 27.432 5.44 28.424 7.168C29.448 8.896 29.96 10.992 29.96 13.456C29.96 15.92 29.448 18.032 28.424 19.792C27.432 21.52 26.024 22.848 24.2 23.776C22.376 24.672 20.216 25.12 17.72 25.12ZM8.12 34H0.92V1.84H8.12V34ZM45.3298 34.48C42.6098 34.48 40.2098 33.968 38.1298 32.944C36.0818 31.92 34.4818 30.48 33.3298 28.624C32.1778 26.736 31.6018 24.528 31.6018 22C31.6018 19.44 32.1778 17.232 33.3298 15.376C34.4818 13.488 36.0818 12.032 38.1298 11.008C40.2098 9.984 42.6098 9.472 45.3298 9.472C48.0818 9.472 50.4818 9.984 52.5298 11.008C54.5778 12.032 56.1778 13.488 57.3298 15.376C58.4818 17.232 59.0578 19.44 59.0578 22C59.0578 24.528 58.4818 26.736 57.3298 28.624C56.1778 30.48 54.5778 31.92 52.5298 32.944C50.4818 33.968 48.0818 34.48 45.3298 34.48ZM45.3298 28.096C47.7618 28.096 49.4578 27.616 50.4178 26.656C51.4098 25.664 51.9058 24.112 51.9058 22C51.9058 19.856 51.4098 18.288 50.4178 17.296C49.4578 16.304 47.7618 15.808 45.3298 15.808C42.8978 15.808 41.1858 16.304 40.1938 17.296C39.2338 18.288 38.7538 19.856 38.7538 22C38.7538 24.112 39.2338 25.664 40.1938 26.656C41.1858 27.616 42.8978 28.096 45.3298 28.096ZM89.2141 34H80.7181L74.7181 25.312H65.8861V18.88H74.6701L80.8141 9.952H89.3581L80.5741 21.568L89.2141 34ZM69.1981 34H61.9981V1.84H69.1981V34ZM103.876 34.48C101.22 34.48 98.8675 34.032 96.8195 33.136C94.7715 32.24 93.1875 30.864 92.0675 29.008C90.9475 27.152 90.3875 24.816 90.3875 22C90.3875 19.44 90.9475 17.232 92.0675 15.376C93.1875 13.488 94.7395 12.032 96.7235 11.008C98.7395 9.984 101.076 9.472 103.732 9.472C106.356 9.472 108.644 9.92 110.596 10.816C112.58 11.712 114.116 13.04 115.204 14.8C116.292 16.528 116.836 18.64 116.836 21.136C116.836 21.552 116.82 21.936 116.788 22.288C116.756 22.64 116.708 23.024 116.644 23.44H95.0435V19.648H111.556L109.924 22C109.924 21.68 109.924 21.376 109.924 21.088C109.924 20.8 109.924 20.512 109.924 20.224C109.924 18.4 109.428 17.088 108.436 16.288C107.444 15.488 105.828 15.088 103.588 15.088C101.156 15.088 99.4595 15.568 98.4995 16.528C97.5395 17.456 97.0595 18.944 97.0595 20.992V22.816C97.0595 24.864 97.5395 26.368 98.4995 27.328C99.4595 28.256 101.172 28.72 103.636 28.72C105.748 28.72 107.236 28.448 108.1 27.904C108.964 27.36 109.396 26.576 109.396 25.552V25.072H116.596V25.6C116.596 27.328 116.068 28.864 115.012 30.208C113.956 31.552 112.468 32.608 110.548 33.376C108.66 34.112 106.436 34.48 103.876 34.48ZM107.476 7.12H99.6995L105.988 0.879997H116.356L107.476 7.12Z"
            fill="black"
          />
          <path
            d="M143.999 34.48C141.215 34.48 139.023 33.888 137.423 32.704C135.855 31.488 134.847 29.696 134.399 27.328H133.055L133.583 22.144H134.495C134.495 23.52 134.751 24.64 135.263 25.504C135.807 26.336 136.591 26.944 137.615 27.328C138.671 27.712 139.967 27.904 141.503 27.904C143.071 27.904 144.351 27.712 145.343 27.328C146.335 26.944 147.071 26.32 147.551 25.456C148.031 24.592 148.271 23.44 148.271 22C148.271 20.496 148.031 19.328 147.551 18.496C147.071 17.632 146.335 17.008 145.343 16.624C144.351 16.24 143.087 16.048 141.551 16.048C139.215 16.048 137.455 16.48 136.271 17.344C135.087 18.208 134.495 19.68 134.495 21.76H133.583V16.336H134.879C135.295 14.32 136.255 12.672 137.759 11.392C139.295 10.112 141.487 9.472 144.335 9.472C146.735 9.472 148.767 9.984 150.431 11.008C152.095 12.032 153.359 13.488 154.223 15.376C155.119 17.232 155.567 19.44 155.567 22C155.567 24.528 155.119 26.736 154.223 28.624C153.359 30.48 152.063 31.92 150.335 32.944C148.607 33.968 146.495 34.48 143.999 34.48ZM133.967 34H127.295V1.84H134.495V26.272L133.967 26.896V34ZM171.377 34.48C168.657 34.48 166.257 33.968 164.177 32.944C162.129 31.92 160.529 30.48 159.377 28.624C158.225 26.736 157.649 24.528 157.649 22C157.649 19.44 158.225 17.232 159.377 15.376C160.529 13.488 162.129 12.032 164.177 11.008C166.257 9.984 168.657 9.472 171.377 9.472C174.129 9.472 176.529 9.984 178.577 11.008C180.625 12.032 182.225 13.488 183.377 15.376C184.529 17.232 185.105 19.44 185.105 22C185.105 24.528 184.529 26.736 183.377 28.624C182.225 30.48 180.625 31.92 178.577 32.944C176.529 33.968 174.129 34.48 171.377 34.48ZM171.377 28.096C173.809 28.096 175.505 27.616 176.465 26.656C177.457 25.664 177.953 24.112 177.953 22C177.953 19.856 177.457 18.288 176.465 17.296C175.505 16.304 173.809 15.808 171.377 15.808C168.945 15.808 167.233 16.304 166.241 17.296C165.281 18.288 164.801 19.856 164.801 22C164.801 24.112 165.281 25.664 166.241 26.656C167.233 27.616 168.945 28.096 171.377 28.096ZM200.861 34.48C198.141 34.48 195.741 33.968 193.661 32.944C191.613 31.92 190.013 30.48 188.861 28.624C187.709 26.736 187.133 24.528 187.133 22C187.133 19.44 187.709 17.232 188.861 15.376C190.013 13.488 191.613 12.032 193.661 11.008C195.741 9.984 198.141 9.472 200.861 9.472C203.613 9.472 206.013 9.984 208.061 11.008C210.109 12.032 211.709 13.488 212.861 15.376C214.013 17.232 214.589 19.44 214.589 22C214.589 24.528 214.013 26.736 212.861 28.624C211.709 30.48 210.109 31.92 208.061 32.944C206.013 33.968 203.613 34.48 200.861 34.48ZM200.861 28.096C203.293 28.096 204.989 27.616 205.949 26.656C206.941 25.664 207.437 24.112 207.437 22C207.437 19.856 206.941 18.288 205.949 17.296C204.989 16.304 203.293 15.808 200.861 15.808C198.429 15.808 196.717 16.304 195.725 17.296C194.765 18.288 194.285 19.856 194.285 22C194.285 24.112 194.765 25.664 195.725 26.656C196.717 27.616 198.429 28.096 200.861 28.096ZM244.745 34H236.249L230.249 25.312H221.417V18.88H230.201L236.345 9.952H244.889L236.105 21.568L244.745 34ZM224.729 34H217.529V1.84H224.729V34Z"
            fill={theme}
          />
        </svg>
        <p className="text-lg font-sans laptop:w-96 tablet:w-96">
          {
            "Largest Pokémon index with information about every Pokemon you can think of. "
          }
        </p>
      </div>
        <SearchBar />
    </main>
  );
}
