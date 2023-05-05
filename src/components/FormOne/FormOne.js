


function FormOne() {
    return (
        <div className="form">
            <form>
                <div>
                <h3>How is your day going?</h3>
                <div className="inventoryForm__radio">
                    <input type="radio" name="status" value="" src="😊" classname="inventoryForm__input" />
                    <label className="inventoryForm__stock">Fantastic</label>
                </div>
                <div className="inventoryForm__radio">
                    <input  type="radio" name="status" value="" classname="inventoryForm__input" />
                    <label className="inventoryForm__stock">Good</label>
                </div>
                <div className="inventoryForm__radio">
                    <input type="radio" name="status" value="" classname="inventoryForm__input" />
                    <label className="inventoryForm__stock">Neutral</label>
                </div>
                

                </div>
            </form>

        </div>
    );
}

export default FormOne;