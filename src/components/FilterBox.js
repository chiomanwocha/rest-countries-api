const FilterBox = () => {
    return (
        <select name="countries" id="countries" className="p-4 flex justify-start text-md outline-none" defaultValue={'selected'}>
            <option value="selected" disabled >Filter by Region</option>
            <option value="">Africa</option>
            <option value="">America</option>
            <option value="">Europe</option>
            <option value="">Oceania</option>
        </select>
    );
}
 
export default FilterBox;