import { FC } from 'react';
import './ResponsiveTable.css';

const data: { company: string, contact: string, country: string }[] = [
  { company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
  { company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico' },
  { company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria' },
  { company: 'Island Trading', contact: 'Helen Bennett', country: 'UK' },
  { company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada' },
  { company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy' },
];


const ResponsiveTable: FC = () => {

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mt-6">Responsive table</h1>
      <h3 className="mt-2 text-lg">
        This table transforms on small screen size to make it more user friendly on tablets and phones
      </h3>

      <div className="table-wrapper mt-8">
        <table className="w-full">
          <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          </thead>
          <tbody>
          {
            data.map(d =>
              <tr>
                <td data-cell="Company">{d.company}</td>
                <td data-cell="Contact">{d.contact}</td>
                <td data-cell="Country">{d.country}</td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResponsiveTable;
