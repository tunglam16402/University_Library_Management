// import { Button } from "@/components/ui/button";
// import Image from "next/image";

import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2));
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
