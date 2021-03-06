import React from 'react';

const template = (component) => {
    return (
        <form id="hashTagForm" onSubmit={(e) => {
            component.processSubmit(e); 
        }}>
            <fieldset className="clearFix">
                <p className="txtWhite fw800 block p0-15 height60 txtUpperCase left fs200 mr10 borderBox">#</p>
                <input type="text" name="hashtag" placeholder="Enter a hashtag here!" required="true" className="bgTransparent border borderWidth3 borderRadius3 txtWhite 
                    fs150 left mr15 p0-25 height60 borderBox widthHalf" autoComplete="off" autoCorrect="off" autoCapitalize="off" onChange={(e) => {
                        component.textFieldChange(e);
                    }} />
                <button className="bgWhite txtBlue fw800 block p0-25 height60 txtUpperCase left fs125 borderBox cursor border borderWidth3" disabled={component.state.form.button.disabled}>
                    {component.state.form.button.text}
                </button>
            </fieldset>
        </form>
    )
};
module.exports = template;