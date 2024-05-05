import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { spellsType } from '@/pages/Spells';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  data: spellsType[];
  itemsPerPage: number;
};

const Pagination = ({ data, itemsPerPage }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<spellsType[]>([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(data.slice(startIndex, endIndex));
  }, [data, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {currentItems.map((spell) => (
          <Link to={`/spells/${spell.index}`} key={spell.url}>
            <Card className='flex justify-between items-center'>
              <CardHeader>
                <h1 className='font-semibold text-lg'>{spell.name}</h1>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className='flex gap-5 items-center justify-center mt-10'>
        <Button
          variant={'outline'}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <ArrowLeft className='w-5 h-5' /> Prev
        </Button>
        <p>
          {currentPage} of {totalPages}
        </p>
        <Button
          variant={'outline'}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next <ArrowRight className='w-5 h-5' />
        </Button>
      </div>
    </>
  );
};

export default Pagination;
