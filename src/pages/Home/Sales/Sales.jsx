import Item from "../../../components/Item";
import Title from "../../../components/Title";

 
const Sales = ({endpoint}) => {
    const {title, items} = endpoint;
    return (
        <div className="nike-container">
           <div>
              <Title title={title}></Title>
           </div>
           <div className="grid items-center justify-items-center grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 lg:gap-5 mt-7">
              {
                items?.map((item, i) => <Item key={i} item={item}></Item>)
              }
           </div>
        </div>
    );
};

export default Sales;