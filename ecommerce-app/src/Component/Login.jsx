import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory([]);

    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history.push("/");
        }
    }, []);
    function login() {
        const item = { email, password };

        axios.post("login", item)
            .then(function (response) {
                localStorage.setItem("user-info", JSON.stringify(response.data));
                history.push("/");
            })

            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            <br />
            <br />
            <div class="wrapper">
                <div class="row">
                    <div class="col-xl-7 mx-auto">
                        <div class="card border-top border-0 border-4 border-dark">
                            <div class="card-body p-5">
                                <div class="card-title text-center">
                                    <i class="bx bxs-user-circle text-dark font-50"></i>
                                    <h5 class="mb-5 mt-2 text-dark">Admin Login</h5>
                                </div>
                                <hr />

                                <div class="col-12">
                                    <div class="input-group input-group-lg">

                                        <span class="input-group-text bg-transparent">
                                            <i class="bx bxs-user"></i>
                                        </span>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control border-start-0" id="inputLastEnterUsername" placeholder="Enter UserEmail" />
                                    </div>
                                </div>
                                <br />
                                <div class="col-12">
                                    <div class="input-group input-group-lg">

                                        <span class="input-group-text bg-transparent">
                                            <i class="bx bxs-lock-open"></i>
                                        </span>
                                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control border-start-0" id="inputLastEnterPassword" placeholder="Enter Password" />
                                    </div>
                                </div>
                                <br />

                                <div class="col-12">
                                    <div class="d-grid">
                                        <button type="submit" onClick={login} class="btn btn-dark btn-lg px-5">
                                            <i class="bx bxs-lock-open"></i>Login
                                        </button>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
