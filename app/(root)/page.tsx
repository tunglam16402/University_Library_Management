// import { Button } from "@/components/ui/button";
// import Image from "next/image";

import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => {
  return (
    <div>
      <BookOverview {...sampleBooks[6]} />
      <BookList
        title="Lastest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </div>
  );
};

export default Home;
