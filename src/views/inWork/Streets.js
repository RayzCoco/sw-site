import BottomMotto from "../../components/BottomMotto";
import ImageGrid from "../../components/ImageGrid";
import TopMotto from "../../components/TopMotto";

const Streets = () => {
    const name = 'STREET'

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
 
export default Streets;