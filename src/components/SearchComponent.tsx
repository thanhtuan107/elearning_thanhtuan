import { Button, Dropdown, TextInput } from "flowbite-react";
import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

function SearchComponent() {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Search Input */}
      <TextInput
        id="search"
        type="text"
        placeholder="Search..."
        icon={MagnifyingGlassIcon}
        className="w-full max-w-md"
      />

      {/* Dropdown for additional options */}
      <Dropdown label="Options" inline={true}>
        <Dropdown.Item>
          <ArrowPathIcon className="w-5 h-5 inline-block mr-2" />
          Refresh
        </Dropdown.Item>
        <Dropdown.Item>
          <MagnifyingGlassIcon className="w-5 h-5 inline-block mr-2" />
          Search
        </Dropdown.Item>
      </Dropdown>

      {/* Empty State */}
      <div className="text-center">
        <p className="text-gray-500">No results found.</p>
        <Button color="gray" className="mt-4">
          Try Again
        </Button>
      </div>
    </div>
  );
}

export default SearchComponent;
