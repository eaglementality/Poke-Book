import { useGetAllPokeMonData } from "../ZustansStore/store";

type prop = {
  text:string;
  changeSearchText: (e: any) => void;
};
export function SearchBar_2({ text, changeSearchText }: prop) {
  const searchFilter = useGetAllPokeMonData((state: any) => state.searchFilter);
  const SetRefresh = useGetAllPokeMonData((state: any) => state.setRefresh);
  return (
    <main className="w-[20%] mt-4 mobile_S:w-full laptop:w-[20%] tablet:w-[50%]">
      <div className="flex w-full space-x-1 border rounded-l-full rounded-r-full shadow-lg mob">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="m-3 cursor-pointer"
          onClick={() => {
            searchFilter(text);
          }}
        >
          <path
            d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
            fill="#DFDFDF"
          />
        </svg>
        <input
          onChange={(e: any) => {
            changeSearchText(e.target.value);
            SetRefresh();
          }}
          className="font-sans w-full h-12 bg-[url('./assets/BackImage.png/')] pl-5 rounded-r-full cursor-default mobile_S:pl-0"
          type="text"
          placeholder="Enter pokemon name"
        />
      </div>
    </main>
  );
}
