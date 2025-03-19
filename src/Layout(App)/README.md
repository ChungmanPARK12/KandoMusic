```js
import Link from 'next/link';
import { GRID_DATA_ITEMS } from '../data';

export default function Layout({ children }) {
  return (
    
        <div className="w-[1000px] flex flex-col items-center pt-4 pb-4">
          <div className="w-full bg-slate-100 flex flex-col items-center pb-10 pt-10">
            <div className="title">DAVID KANDO MUSIC</div>
            <div className="grid grid-cols-4 gap-1">
              {
                GRID_DATA_ITEMS.map((gridDataItem) => {
                  const {id, attributes } = gridDataItem;

                  return (
                    <Link key={id} href={attributes.href}>
                      <div className={`${attributes.background} w-52 h-52 flex items-end border-black border-[2px]`}>
                        <div className={
                          `bg-slate-200/75 w-full text-center mb-2
                          hover:text-white hover:bg-slate-700/75`
                        }>
                          {attributes.text}
                        </div>
                      </div>
                    </Link>
                  );
                })
              }
            </div>
          </div>
          <br />
          {children}
        </div>
  );
}

```