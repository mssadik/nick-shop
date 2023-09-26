import Item from "../../../components/Item";
import Title from "../../../components/Title";

 
const Sales = ({endpoint, ifExists}) => {
    const {title, items} = endpoint;
    return (
        <div className="nike-container">
           <div>
              <Title title={title}></Title>
           </div>
           <div className={`grid items-center justify-items-center  gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
              {
                items?.map((item, i) => <Item key={i} ifExists={ifExists} item={item}></Item>)
              }
           </div>
        </div>
    );
};

export default Sales;