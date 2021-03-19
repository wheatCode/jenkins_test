import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";

const api = axios.create({
  baseURL: "http://4b4619ff6741.ngrok.io"
});

const PersonalPageLogic = (info = null) => {
  const [isLoading, setisLoading] = useState(info ? false : true);
  const [personalInfo, setpersonalInfo] = useState(info ? info : {});
  const [nameValidation, setnameValidation] = useState("");
  const [genderValidation, setgenderValidation] = useState("");
  const [phoneValidation, setphoneValidation] = useState("");
  const [birthValidation, setbirthValidation] = useState("");
  const [countyValidation, setcountyValidation] = useState("");

  useEffect(() => {
    if (!info) getPersonalInfo(1);
  }, [info]);
  const getPersonalInfo = async id => {
    console.log("getting");
    await api.get("/api/user/" + id).then(res => {
      setisLoading(false);
      res.data.gender = res.data.gender ? "男" : "女";
      setpersonalInfo(res.data);
    });
  };

  const handleNameChange = event => {
    const value = event.target.value;
    setpersonalInfo({ ...personalInfo, name: value });
    if (value == "") {
      setnameValidation("姓名不可為空");
    } else {
      setnameValidation("");
    }
  };

  const handleSexChange = event => {
    const value = event.target.value;
    setpersonalInfo({ ...personalInfo, gender: value });
    if (value == "男" || value == "女") {
      setgenderValidation("");
    } else {
      setgenderValidation("請填入 男 或 女");
    }
  };

  const handleTelChange = event => {
    const value = event.target.value;
    setpersonalInfo({ ...personalInfo, phone_number: value });
    let reg = new RegExp(/^\d*$/).test(value);
    if (reg) {
      setphoneValidation("");
    } else {
      setphoneValidation("只允許數字");
    }
  };
  const handleBirthChange = event => {
    setpersonalInfo({ ...personalInfo, birth: event.target.value });
  };

  const handleCountyChange = event => {
    const value = event.target.value;
    setpersonalInfo({
      ...personalInfo,
      county: { ...personalInfo.county, name: value }
    });
  };
  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const updateInfo = async (id, data) => {
    setisLoading(true);
    console.log(data);
    if (data.croppedImage) {
      let blob = await fetch(data.croppedImage).then(r => r.blob());
      const file = new File([blob], "1234567890.jpg", {
        lastModified: new Date(),
        type: "image/jpeg"
      });
      const b64 = await getBase64(file);
      console.log(b64);
      data.croppedImage = b64;
      // console.log(file);
      // var fd = new FormData();
      // fd.append("image", file);
      // axios
      //   .post("https://api.imgur.com/3/image", fd, {
      //     headers: {
      //       Authorization: "Client-ID 6bdc55894336124"
      //     }
      //   })
      //   .then(res => {
      //     console.log(res);
      //   });
    }
    return api
      .put("/api/user/" + id, {
        name: data.name,
        gender: data.gender,
        phone_number: data.phone_number,
        birth: data.birth,
        // profile_photo_url: data.croppedImage ? data.croppedImage : data.image,
        image: "https://i.imgur.com/X7whEnq.jpg",
        county: data.county
      })
      .then(res => {
        console.log(res);
        return res.status;
      });
  };

  return {
    isLoading,
    personalInfo,
    handleNameChange,
    handleSexChange,
    handleTelChange,
    handleBirthChange,
    handleCountyChange,
    updateInfo,
    getPersonalInfo,
    validations: {
      nameValidation,
      genderValidation,
      phoneValidation,
      birthValidation,
      countyValidation
    }
  };
};
export default PersonalPageLogic;
