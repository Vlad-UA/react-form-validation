import React from "react";

export default class Step3Fields extends React.Component {
    onChangeAvatar = (event) => {
        event.persist();

        const reader = new FileReader();
        reader.onload = (event) => {
            this.props.onChangeAvatar(event.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
    };

    render() {
        const {fields: {avatar: avatarSrc=''}, errors: {avatar: avatarError=''}} = this.props;
        return (
            <React.Fragment>
                <img className="mb-4" width="100%" alt="Avatar"
                     src={avatarSrc ? avatarSrc : "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png"}/>

                <div className="mb-4">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" name="avatar" onChange={this.onChangeAvatar} />
                        <label className={"custom-file-label" + (avatarError ? " invalid" : "")} htmlFor="customFile">Choose avatar</label>
                    </div>
                    {avatarError && <div className="invalid-feedback">Required</div>}
                </div>
            </React.Fragment>
        );
    }
}
