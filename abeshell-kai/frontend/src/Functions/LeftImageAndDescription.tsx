import { useState } from "react";
import { MyDropzoneBasic } from "../FileUpload";
import React from "react";

const LeftImageAndDescription = () => {
    const [imageName, setImageName] = useState("abe-top.jpg"); // Default image name

    const handleFileUpload = (file: any) => {
        setImageName(file.name);
    };

    const isImage = /\.(jpg|png)$/.test(imageName); // .test() を使う

    return (
        <td rowSpan={2}>
            {isImage ? (
                <img src={imageName} height="100%" alt="your pic" width="100%" />
            ) : (
                <div>
                    <iframe width="100%" height="100%" src={imageName}></iframe>
                    <br />
                    <br />
                </div>
            )}
            <p>
                {imageName}
                <MyDropzoneBasic onFileUpload={handleFileUpload} />
            </p>
            <table width="256">
                <tbody>
                    <tr>
                        <td width="14"> </td>
                        <td width="230">阿部 寛（あべ ひろし）</td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>生年月日 1964年6月22日<br /></td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td>血液型 A型<br /></td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td><a href="p.htm">プロフィール</a></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <br /> If you have any enquiries regarding my TV drama or film, or would like to make an enquiry concerning future projects, please do not hesitate to contact me through the following email address.
                            <br /> <br /> mail:<a href="mailto:shintani@david.jp" target="_blank">shintani@david.jp</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            所属<b>:</b>
            <br />
            茂田オフィス
            <br />
            000-0000
            <br />
            都内某所
            <br /> 新宿駅前
            <br />
            TEL :+81-3-3333-3333
            <br />
            FAX :+81-3-5333-3333
        </td>
    );
};

export default LeftImageAndDescription;
