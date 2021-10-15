import BottomMotto from "../../components/BottomMotto";
import ImageGrid from "../../components/ImageGrid";
import TopMotto from "../../components/TopMotto";

const Portraits = () => {
    const name = 'PORTRAITS'

    return (
        <div className="container mx-auto">
            <TopMotto name={name} />
            <div className="px-6 py-16">
                <ImageGrid />
            </div>
            <BottomMotto />
        </div>
    );
}
 
export default Portraits;