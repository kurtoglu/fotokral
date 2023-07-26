import { lazy } from "react";

const Login = lazy(() => import("../moduls/login/login"));
const RandevAl = lazy(() => import("../moduls/personel/randevual"));
const PersonelLayout = lazy(() => import("../moduls/personel/personellayout"));
const RadnevuList = () => import("../moduls/personel/randevulist");

export { Login, RadnevuList, PersonelLayout, RandevAl };
