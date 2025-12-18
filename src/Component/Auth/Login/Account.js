import "bootstrap/dist/css/bootstrap.min.css";
import "./Account.scss";
import Icon from "../../../Assets/icon_dataprivacy.png";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { RefreshCw, Volume2 } from "lucide-react";

const Account = (props) => {
  // const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("USA");
  const [options, setOptions] = useState("US");
  const [radioDefault, setRadioDefault] = useState(true);
  const [checkChecked, setCheckChecked] = useState(true);
  const [checkDefault, setCheckDefault] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [touched, setTouched] = useState(false);
  // const [message, setMessage] = useState(false);
  // const [announcements, setAnnouncements] = useState(false);

  const [isShowPassword, setIsShowPassword] = useState(false);

  const navigate = useNavigate();

  const months = useMemo(
    () => [
      { value: 1, label: "January" },
      { value: 2, label: "February" },
      { value: 3, label: "March" },
      { value: 4, label: "April" },
      { value: 5, label: "May" },
      { value: 6, label: "June" },
      { value: 7, label: "July" },
      { value: 8, label: "August" },
      { value: 9, label: "September" },
      { value: 10, label: "October" },
      { value: 11, label: "November" },
      { value: 12, label: "December" },
    ],
    []
  );

  const currentYear = new Date().getFullYear();
  const years = useMemo(() => {
    const arr = [];
    for (let y = currentYear; y >= 1900; y--) {
      arr.push({ value: y, label: y });
    }
    return arr;
  }, [currentYear]);

  const daysInMonth = useMemo(() => {
    if (!month || !year) return 31;
    return new Date(year, month, 0).getDate();
  }, [month, year]);

  const isValid = Boolean(month && day && year);
  const showError = touched && !isValid;

  const base = "form-select";
  const normal = "border-slate focus:border-blue-500";
  const error = "border-danger focus:border-red-500";

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const handleRegister = async () => {
    const isvalidEmail = validateEmail(email);

    if (!isvalidEmail) {
      toast.error("Invalid Email");
      // toast.success('Success full')
      // toast.info('Invalid Email')
      return;
    }
    if (!password) {
      toast.error("Invalid Password");
      // toast.success('Success full')
      // toast.info('Invalid Email')
      return;
    }
    // alert("PH")
    // let res = await postRegister(email, password, username);
    // console.log(res)
    // if (res && res.EC === 0) {
    //   toast.success(res.EM);
    //   navigate("/login");
    // }

    // if (res && res.EC !== 0) {
    //   toast.error(res.EM);
    // }
  };

  // const number = () => {
  //   for (const e of setPhone) {
  //     e.value = "";
  //   }
  // }

  return (
    <>
      <div className="account">
        <div className="title">
          <div className="title-nav">
            <h3>Apple Account</h3>
            <div className="menu">
              <p onClick={() => navigate("/signin")}>Sign In</p>
              <p onClick={() => navigate("/account")}>Create Your Apple Account</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
        <div className="content">
          <h2>Create Your Apple Account</h2>
          <p>One Apple Account is all you need to access all Apple services. Already have an Apple Account? <NavLink href="/login" className="color">Sign In</NavLink></p>
          <div className="row row-gap-3 mb-3">
            <div className="col col-6 col-sm-6 col-md-6 col-xl-6">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingFirst" placeholder="First name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                <label htmlFor="floatingfirst">First name</label>
              </div>
            </div>
            <div className="col col-6 col-sm-6 col-md-6 col-xl-6">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatinglast" placeholder="Last name" value={lasttName} onChange={(event) => setLastName(event.target.value)}/>
                <label htmlFor="floatinglast">Last name</label>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12">
              <div className="form-floating">
                <span className="select">Country/Region</span>
                <select className="form-select" aria-label="Default select example" value={country} onChange={(event) => setCountry(event.target.value)}>
                  <option value="AFG">Afghanistan</option>
                  <option value="ALA">Åland Islands</option>
                  <option value="ALB">Albania</option>
                  <option value="DZA">Algeria</option>
                  <option value="ASM">American Samoa</option>
                  <option value="AND">Andorra</option>
                  <option value="AGO">Angola</option>
                  <option value="AIA">Anguilla</option>
                  <option value="ATA">Antarctica</option>
                  <option value="ATG">Antigua And Barbuda</option>
                  <option value="ARG">Argentina</option>
                  <option value="ARM">Armenia</option>
                  <option value="ABW">Aruba</option>
                  <option value="AUS">Australia</option>
                  <option value="AUT">Austria</option>
                  <option value="AZE">Azerbaijan</option>
                  <option value="BHS">Bahamas</option>
                  <option value="BHR">Bahrain</option>
                  <option value="BGD">Bangladesh</option>
                  <option value="BRB">Barbados</option>
                  <option value="BLR">Belarus</option>
                  <option value="BEL">Belgium</option>
                  <option value="BLZ">Belize</option>
                  <option value="BEN">Benin</option>
                  <option value="BMU">Bermuda</option>
                  <option value="BTN">Bhutan</option>
                  <option value="BOL">Bolivia</option>
                  <option value="BIH">Bosnia and Herzegovina</option>
                  <option value="BWA">Botswana</option>
                  <option value="BVT">Bouvet Island</option>
                  <option value="BRA">Brazil</option>
                  <option value="VGB">British Virgin Islands</option>
                  <option value="BRN">Brunei Darussalam</option>
                  <option value="BGR">Bulgaria</option>
                  <option value="BFA">Burkina Faso</option>
                  <option value="BDI">Burundi</option>
                  <option value="KHM">Cambodia</option>
                  <option value="CMR">Cameroon</option>
                  <option value="CAN">Canada</option>
                  <option value="CPV">Cape Verde</option>
                  <option value="BES">Caribbean Netherlands</option>
                  <option value="CYM">Cayman Islands</option>
                  <option value="CAF">Central African Republic</option>
                  <option value="TCD">Chad</option>
                  <option value="IOT">Chagos Archipelago</option>
                  <option value="CHL">Chile</option>
                  <option value="CHN">China mainland</option>
                  <option value="CXR">Christmas Island</option>
                  <option value="CCK">Cocos (Keeling) Islands</option>
                  <option value="COL">Colombia</option>
                  <option value="COM">Comoros</option>
                  <option value="COK">Cook Islands</option>
                  <option value="CRI">Costa Rica</option>
                  <option value="CIV">Côte d'Ivoire</option>
                  <option value="HRV">Croatia</option>
                  <option value="CUW">Curaçao</option>
                  <option value="CYP">Cyprus</option>
                  <option value="CZE">Czechia</option>
                  <option value="COD">Democratic Republic of the Congo</option>
                  <option value="DNK">Denmark</option>
                  <option value="DJI">Djibouti</option>
                  <option value="DMA">Dominica</option>
                  <option value="DOM">Dominican Republic</option>
                  <option value="ECU">Ecuador</option>
                  <option value="EGY">Egypt</option>
                  <option value="SLV">El Salvador</option>
                  <option value="GNQ">Equatorial Guinea</option>
                  <option value="ERI">Eritrea</option>
                  <option value="EST">Estonia</option>
                  <option value="SWZ">Eswatini</option>
                  <option value="ETH">Ethiopia</option>
                  <option value="FLK">Falkland Islands</option>
                  <option value="FRO">Faroe Islands</option>
                  <option value="FJI">Fiji</option>
                  <option value="FIN">Finland</option>
                  <option value="FRA">France</option>
                  <option value="GUF">French Guiana</option>
                  <option value="PYF">French Polynesia</option>
                  <option value="ATF">French Southern Territories</option>
                  <option value="GAB">Gabon</option>
                  <option value="GMB">Gambia</option>
                  <option value="GEO">Georgia</option>
                  <option value="DEU">Germany</option>
                  <option value="GHA">Ghana</option>
                  <option value="GIB">Gibraltar</option>
                  <option value="GRC">Greece</option>
                  <option value="GRL">Greenland</option>
                  <option value="GRD">Grenada</option>
                  <option value="GLP">Guadeloupe</option>
                  <option value="GUM">Guam</option>
                  <option value="GTM">Guatemala</option>
                  <option value="GGY">Guernsey</option>
                  <option value="GIN">Guinea</option>
                  <option value="GNB">Guinea-Bissau</option>
                  <option value="GUY">Guyana</option>
                  <option value="HTI">Haiti</option>
                  <option value="HMD">Heard And Mc Donald Islands</option>
                  <option value="HND">Honduras</option>
                  <option value="HKG">Hong Kong</option>
                  <option value="HUN">Hungary</option>
                  <option value="ISL">Iceland</option>
                  <option value="IND">India</option>
                  <option value="IDN">Indonesia</option>
                  <option value="IRQ">Iraq</option>
                  <option value="IRL">Ireland</option>
                  <option value="IMN">Isle of Man</option>
                  <option value="ISR">Israel</option>
                  <option value="ITA">Italy</option>
                  <option value="JAM">Jamaica</option>
                  <option value="JPN">Japan</option>
                  <option value="JEY">Jersey</option>
                  <option value="JOR">Jordan</option>
                  <option value="KAZ">Kazakhstan</option>
                  <option value="KEN">Kenya</option>
                  <option value="KIR">Kiribati</option>
                  <option value="XKS">Kosovo</option>
                  <option value="KWT">Kuwait</option>
                  <option value="KGZ">Kyrgyzstan</option>
                  <option value="LAO">Laos</option>
                  <option value="LVA">Latvia</option>
                  <option value="LBN">Lebanon</option>
                  <option value="LSO">Lesotho</option>
                  <option value="LBR">Liberia</option>
                  <option value="LBY">Libya</option>
                  <option value="LIE">Liechtenstein</option>
                  <option value="LTU">Lithuania</option>
                  <option value="LUX">Luxembourg</option>
                  <option value="MAC">Macao</option>
                  <option value="MDG">Madagascar</option>
                  <option value="MWI">Malawi</option>
                  <option value="MYS">Malaysia</option>
                  <option value="MDV">Maldives</option>
                  <option value="MLI">Mali</option>
                  <option value="MLT">Malta</option>
                  <option value="MHL">Marshall Islands</option>
                  <option value="MTQ">Martinique</option>
                  <option value="MRT">Mauritania</option>
                  <option value="MUS">Mauritius</option>
                  <option value="MYT">Mayotte</option>
                  <option value="MEX">Mexico</option>
                  <option value="FSM">Micronesia</option>
                  <option value="MDA">Moldova</option>
                  <option value="MCO">Monaco</option>
                  <option value="MNG">Mongolia</option>
                  <option value="MNE">Montenegro</option>
                  <option value="MSR">Montserrat</option>
                  <option value="MAR">Morocco</option>
                  <option value="MOZ">Mozambique</option>
                  <option value="MMR">Myanmar</option>
                  <option value="NAM">Namibia</option>
                  <option value="NRU">Nauru</option>
                  <option value="NPL">Nepal</option>
                  <option value="NLD">Netherlands</option>
                  <option value="NCL">New Caledonia</option>
                  <option value="NZL">New Zealand</option>
                  <option value="NIC">Nicaragua</option>
                  <option value="NER">Niger</option>
                  <option value="NGA">Nigeria</option>
                  <option value="NIU">Niue</option>
                  <option value="NFK">Norfolk Island</option>
                  <option value="MNP">Northern Mariana Islands</option>
                  <option value="MKD">North Macedonia</option>
                  <option value="NOR">Norway</option>
                  <option value="OMN">Oman</option>
                  <option value="PAK">Pakistan</option>
                  <option value="PLW">Palau</option>
                  <option value="PSE">Palestinian Territories</option>
                  <option value="PAN">Panama</option>
                  <option value="PNG">Papua New Guinea</option>
                  <option value="PRY">Paraguay</option>
                  <option value="PER">Peru</option>
                  <option value="PHL">Philippines</option>
                  <option value="PCN">Pitcairn</option>
                  <option value="POL">Poland</option>
                  <option value="PRT">Portugal</option>
                  <option value="PRI">Puerto Rico</option>
                  <option value="QAT">Qatar</option>
                  <option value="COG">Republic of the Congo</option>
                  <option value="REU">Réunion</option>
                  <option value="ROU">Romania</option>
                  <option value="RUS">Russia</option>
                  <option value="RWA">Rwanda</option>
                  <option value="BLM">Saint Barthélemy</option>
                  <option value="SHN">Saint Helena</option>
                  <option value="KNA">Saint Kitts And Nevis</option>
                  <option value="LCA">Saint Lucia</option>
                  <option value="MAF">Saint Martin</option>
                  <option value="VCT">Saint Vincent and the Grenadines</option>
                  <option value="WSM">Samoa</option>
                  <option value="SMR">San Marino</option>
                  <option value="STP">Sao Tome And Principe</option>
                  <option value="SAU">Saudi Arabia</option>
                  <option value="SEN">Senegal</option>
                  <option value="SRB">Serbia</option>
                  <option value="SYC">Seychelles</option>
                  <option value="SLE">Sierra Leone</option>
                  <option value="SGP">Singapore</option>
                  <option value="SXM">Sint Maarten</option>
                  <option value="SVK">Slovakia</option>
                  <option value="SVN">Slovenia</option>
                  <option value="SLB">Solomon Islands</option>
                  <option value="SOM">Somalia</option>
                  <option value="ZAF">South Africa</option>
                  <option value="SGS">South Georgia and South Sandwich Islands</option>
                  <option value="KOR">South Korea</option>
                  <option value="SSD">South Sudan</option>
                  <option value="ESP">Spain</option>
                  <option value="LKA">Sri Lanka</option>
                  <option value="SPM">St. Pierre And Miquelon</option>
                  <option value="SDN">Sudan</option>
                  <option value="SUR">Suriname</option>
                  <option value="SJM">Svalbard And Jan Mayen Islands</option>
                  <option value="SWE">Sweden</option>
                  <option value="CHE">Switzerland</option>
                  <option value="TWN">Taiwan</option>
                  <option value="TJK">Tajikistan</option>
                  <option value="TZA">Tanzania</option>
                  <option value="THA">Thailand</option>
                  <option value="TLS">Timor-Leste</option>
                  <option value="TGO">Togo</option>
                  <option value="TKL">Tokelau</option>
                  <option value="TON">Tonga</option>
                  <option value="TTO">Trinidad and Tobago</option>
                  <option value="TUN">Tunisia</option>
                  <option value="TUR">Türkiye</option>
                  <option value="TKM">Turkmenistan</option>
                  <option value="TCA">Turks and Caicos Islands</option>
                  <option value="TUV">Tuvalu</option>
                  <option value="UGA">Uganda</option>
                  <option value="UKR">Ukraine</option>
                  <option value="ARE">United Arab Emirates</option>
                  <option value="GBR">United Kingdom</option>
                  <option value="USA">United States</option>
                  <option value="UMI">United States Minor Outlying Islands</option>
                  <option value="URY">Uruguay</option>
                  <option value="UZB">Uzbekistan</option>
                  <option value="VUT">Vanuatu</option>
                  <option value="VAT">Vatican</option>
                  <option value="VEN">Venezuela</option>
                  <option value="VNM">Vietnam</option>
                  <option value="VIR">Virgin Islands (U.S.)</option>
                  <option value="WLF">Wallis And Futuna Islands</option>
                  <option value="ESH">Western Sahara</option>
                  <option value="YEM">Yemen</option>
                  <option value="ZMB">Zambia</option>
                  <option value="ZWE">Zimbabwe</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="m-0">
              <div className="pb-3">
                <p className="m-0">Birthday <span className="form-tooltip"><HiQuestionMarkCircle /> <span className="form-tooltip-content">This information is used to determine the services available for your account</span></span></p>
              </div>
              {/* <div className="row year">
                <div className="col col-md-4 form-floating">
                  <select className="form-select" placeholder="Month" aria-label="Month">
                    <option value="00" disabled selected>Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
                <div className="col col-md-4 form-floating">
                  <select className="form-select" aria-label="Day">
                    <option value="00" disabled selected>Day</option>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
                <div className="col col-md-4 form-floating">
                  <select className="form-select" aria-label="Year">
                    <option value="0000" disabled selected>Year</option>
                    <option value="2055">2055</option>
                    <option value="2054">2054</option>
                    <option value="2053">2053</option>
                    <option value="2052">2052</option>
                    <option value="2051">2051</option>
                    <option value="2050">2050</option>
                    <option value="2049">2049</option>
                    <option value="2048">2048</option>
                    <option value="2047">2047</option>
                    <option value="2046">2046</option>
                    <option value="2045">2045</option>
                    <option value="2044">2044</option>
                    <option value="2043">2043</option>
                    <option value="2042">2042</option>
                    <option value="2041">2041</option>
                    <option value="2040">2040</option>
                    <option value="2039">2039</option>
                    <option value="2038">2038</option>
                    <option value="2037">2037</option>
                    <option value="2036">2036</option>
                    <option value="2035">2035</option>
                    <option value="2034">2034</option>
                    <option value="2033">2033</option>
                    <option value="2032">2032</option>
                    <option value="2031">2031</option>
                    <option value="2030">2030</option>
                    <option value="2029">2029</option>
                    <option value="2028">2028</option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                    <option value="1929">1929</option>
                    <option value="1928">1928</option>
                    <option value="1927">1927</option>
                    <option value="1926">1926</option>
                    <option value="1925">1925</option>
                    <option value="1924">1924</option>
                    <option value="1923">1923</option>
                    <option value="1922">1922</option>
                    <option value="1921">1921</option>
                    <option value="1920">1920</option>
                    <option value="1919">1919</option>
                    <option value="1918">1918</option>
                    <option value="1917">1917</option>
                    <option value="1916">1916</option>
                    <option value="1915">1915</option>
                    <option value="1914">1914</option>
                    <option value="1913">1913</option>
                    <option value="1912">1912</option>
                    <option value="1911">1911</option>
                    <option value="1910">1910</option>
                    <option value="1909">1909</option>
                    <option value="1908">1908</option>
                    <option value="1907">1907</option>
                    <option value="1906">1906</option>
                    <option value="1905">1905</option>
                  </select>
                </div>
              </div> */}
              <div className="row year">
                <div className="col col-md-4 form-floating">
                  <select
                    className={`${base} ${showError && !month ? error : normal}`}
                    // value={months}
                    onChange={(event) => setMonth(event.target.value)}
                    onBlur={() => setTouched(true)}
                  >
                    <option value="" disabled selected>Month</option>
                    {months.map((m) => (
                      <option key={m.label} value={m.value}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col col-md-4 form-floating">
                  <select
                    className={`${base} ${showError && !day ? error : normal}`}
                    // value={"day"}
                    onChange={(event) => setDay(event.target.value)}
                    onBlur={() => setTouched(true)}
                  >
                    <option value="day" disabled selected>Day</option>
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col col-md-4 form-floating">
                  <select
                    className={`${base} ${showError && !year ? error : normal}`}
                    // value={"year"}
                    onChange={(event) => setYear(event.target.value)}
                    onBlur={() => setTouched(true)}
                  >
                    <option value="year" disabled selected>Year</option>
                    {years.map((y) => (
                      <option key={y.label} value={y.value}>
                        {y.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {showError && (
                <p className="text-danger mt-3 mb-0"><span className="rounded-full border-danger">!</span>Enter a valid birthday.</p>
              )}
            </div>
          </div>

          <hr/>

          <div className="row gap-3 my-4">
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12">
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingemail" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)}/>
                <label htmlFor="floatingemail">name@example.com</label>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingpassword" placeholder="name@example.com" value={password} onChange={(event) => setPassword(event.target.value)}/>
                <label htmlFor="floatingpassword">Password</label>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12">
              <div className="form-floating">
                <input type="text" className="form-control" id="floatingconfirmpassword" placeholder="name@example.com" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}/>
                <label htmlFor="floatingconfirmpassword">Confirm Password</label>
              </div>
            </div>
          </div>

          <hr/>

          <div className="row gap-3 my-4">
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12">
              <div className="form-floating">
                <span className="select">Country Options</span>
                <select className="form-select" aria-label="Default select example" value={options} onChange={(event) => setOptions(event.target.value)}>
                  <option value="AF">+93 (Afghanistan)</option>
                  <option value="AX">+358 (Åland Islands)</option>
                  <option value="AL">+355 (Albania)</option>
                  <option value="DZ">+213 (Algeria)</option>
                  <option value="AS">+1 (American Samoa)</option>
                  <option value="AD">+376 (Andorra)</option>
                  <option value="AO">+244 (Angola)</option>
                  <option value="AI">+1 (Anguilla)</option>
                  <option value="AQ">+672 (Antarctica)</option>
                  <option value="AG">+1 (Antigua And Barbuda)</option>
                  <option value="AR">+54 (Argentina)</option>
                  <option value="AM">+374 (Armenia)</option>
                  <option value="AW">+297 (Aruba)</option>
                  <option value="AU">+61 (Australia)</option>
                  <option value="AT">+43 (Austria)</option>
                  <option value="AZ">+994 (Azerbaijan)</option>
                  <option value="BS">+1 (Bahamas)</option>
                  <option value="BH">+973 (Bahrain)</option>
                  <option value="BD">+880 (Bangladesh)</option>
                  <option value="BB">+1 (Barbados)</option>
                  <option value="BY">+375 (Belarus)</option>
                  <option value="BE">+32 (Belgium)</option>
                  <option value="BZ">+501 (Belize)</option>
                  <option value="BJ">+229 (Benin)</option>
                  <option value="BM">+1 (Bermuda)</option>
                  <option value="BT">+975 (Bhutan)</option>
                  <option value="BO">+591 (Bolivia)</option>
                  <option value="BA">+387 (Bosnia and Herzegovina)</option>
                  <option value="BW">+267 (Botswana)</option>
                  <option value="BV">+47 (Bouvet Island)</option>
                  <option value="BR">+55 (Brazil)</option>
                  <option value="VG">+1 (British Virgin Islands)</option>
                  <option value="BN">+673 (Brunei Darussalam)</option>
                  <option value="BG">+359 (Bulgaria)</option>
                  <option value="BF">+226 (Burkina Faso)</option>
                  <option value="BI">+257 (Burundi)</option>
                  <option value="KH">+855 (Cambodia)</option>
                  <option value="CM">+237 (Cameroon)</option>
                  <option value="CA">+1 (Canada)</option>
                  <option value="CV">+238 (Cape Verde)</option>
                  <option value="BQ">+599 (Caribbean Netherlands)</option>
                  <option value="KY">+1 (Cayman Islands)</option>
                  <option value="CF">+236 (Central African Republic)</option>
                  <option value="TD">+235 (Chad)</option>
                  <option value="IO">+246 (Chagos Archipelago)</option>
                  <option value="CL">+56 (Chile)</option>
                  <option value="CN">+86 (China mainland)</option>
                  <option value="CX">+61 (Christmas Island)</option>
                  <option value="CC">+61 (Cocos (Keeling) Islands)</option>
                  <option value="CO">+57 (Colombia)</option>
                  <option value="KM">+269 (Comoros)</option>
                  <option value="CK">+682 (Cook Islands)</option>
                  <option value="CR">+506 (Costa Rica)</option>
                  <option value="CI">+225 (Côte d'Ivoire)</option>
                  <option value="HR">+385 (Croatia)</option>
                  <option value="CW">+599 (Curaçao)</option>
                  <option value="CY">+357 (Cyprus)</option>
                  <option value="CZ">+420 (Czechia)</option>
                  <option value="CD">+243 (Democratic Republic of the Congo)</option>
                  <option value="DK">+45 (Denmark)</option>
                  <option value="DJ">+253 (Djibouti)</option>
                  <option value="DM">+1 (Dominica)</option>
                  <option value="DO">+1 (Dominican Republic)</option>
                  <option value="EC">+593 (Ecuador)</option>
                  <option value="EG">+20 (Egypt)</option>
                  <option value="SV">+503 (El Salvador)</option>
                  <option value="GQ">+240 (Equatorial Guinea)</option>
                  <option value="ER">+291 (Eritrea)</option>
                  <option value="EE">+372 (Estonia)</option>
                  <option value="SZ">+268 (Eswatini)</option>
                  <option value="ET">+251 (Ethiopia)</option>
                  <option value="FK">+500 (Falkland Islands)</option>
                  <option value="FO">+298 (Faroe Islands)</option>
                  <option value="FJ">+679 (Fiji)</option>
                  <option value="FI">+358 (Finland)</option>
                  <option value="FR">+33 (France)</option>
                  <option value="GF">+594 (French Guiana)</option>
                  <option value="PF">+689 (French Polynesia)</option>
                  <option value="TF">+262 (French Southern Territories)</option>
                  <option value="GA">+241 (Gabon)</option>
                  <option value="GM">+220 (Gambia)</option>
                  <option value="GE">+995 (Georgia)</option>
                  <option value="DE">+49 (Germany)</option>
                  <option value="GH">+233 (Ghana)</option>
                  <option value="GI">+350 (Gibraltar)</option>
                  <option value="GR">+30 (Greece)</option>
                  <option value="GL">+299 (Greenland)</option>
                  <option value="GD">+1 (Grenada)</option>
                  <option value="GP">+590 (Guadeloupe)</option>
                  <option value="GU">+1 (Guam)</option>
                  <option value="GT">+502 (Guatemala)</option>
                  <option value="GG">+44 (Guernsey)</option>
                  <option value="GN">+224 (Guinea)</option>
                  <option value="GW">+245 (Guinea-Bissau)</option>
                  <option value="GY">+592 (Guyana)</option>
                  <option value="HT">+509 (Haiti)</option>
                  <option value="HM">+61 (Heard And Mc Donald Islands)</option>
                  <option value="HN">+504 (Honduras)</option>
                  <option value="HK">+852 (Hong Kong)</option>
                  <option value="HU">+36 (Hungary)</option>
                  <option value="IS">+354 (Iceland)</option>
                  <option value="IN">+91 (India)</option>
                  <option value="ID">+62 (Indonesia)</option>
                  <option value="IQ">+964 (Iraq)</option>
                  <option value="IE">+353 (Ireland)</option>
                  <option value="IM">+44 (Isle of Man)</option>
                  <option value="IL">+972 (Israel)</option>
                  <option value="IT">+39 (Italy)</option>
                  <option value="JM">+1 (Jamaica)</option>
                  <option value="JP">+81 (Japan)</option>
                  <option value="JE">+44 (Jersey)</option>
                  <option value="JO">+962 (Jordan)</option>
                  <option value="KZ">+7 (Kazakhstan)</option>
                  <option value="KE">+254 (Kenya)</option>
                  <option value="KI">+686 (Kiribati)</option>
                  <option value="XK">+383 (Kosovo)</option>
                  <option value="KW">+965 (Kuwait)</option>
                  <option value="KG">+996 (Kyrgyzstan)</option>
                  <option value="LA">+856 (Laos)</option>
                  <option value="LV">+371 (Latvia)</option>
                  <option value="LB">+961 (Lebanon)</option>
                  <option value="LS">+266 (Lesotho)</option>
                  <option value="LR">+231 (Liberia)</option>
                  <option value="LY">+218 (Libya)</option>
                  <option value="LI">+423 (Liechtenstein)</option>
                  <option value="LT">+370 (Lithuania)</option>
                  <option value="LU">+352 (Luxembourg)</option>
                  <option value="MO">+853 (Macao)</option>
                  <option value="MG">+261 (Madagascar)</option>
                  <option value="MW">+265 (Malawi)</option>
                  <option value="MY">+60 (Malaysia)</option>
                  <option value="MV">+960 (Maldives)</option>
                  <option value="ML">+223 (Mali)</option>
                  <option value="MT">+356 (Malta)</option>
                  <option value="MH">+692 (Marshall Islands)</option>
                  <option value="MQ">+596 (Martinique)</option>
                  <option value="MR">+222 (Mauritania)</option>
                  <option value="MU">+230 (Mauritius)</option>
                  <option value="YT">+262 (Mayotte)</option>
                  <option value="MX">+52 (Mexico)</option>
                  <option value="FM">+691 (Micronesia)</option>
                  <option value="MD">+373 (Moldova)</option>
                  <option value="MC">+377 (Monaco)</option>
                  <option value="MN">+976 (Mongolia)</option>
                  <option value="ME">+382 (Montenegro)</option>
                  <option value="MS">+1 (Montserrat)</option>
                  <option value="MA">+212 (Morocco)</option>
                  <option value="MZ">+258 (Mozambique)</option>
                  <option value="MM">+95 (Myanmar)</option>
                  <option value="NA">+264 (Namibia)</option>
                  <option value="NR">+674 (Nauru)</option>
                  <option value="NP">+977 (Nepal)</option>
                  <option value="NL">+31 (Netherlands)</option>
                  <option value="NC">+687 (New Caledonia)</option>
                  <option value="NZ">+64 (New Zealand)</option>
                  <option value="NI">+505 (Nicaragua)</option>
                  <option value="NE">+227 (Niger)</option>
                  <option value="NG">+234 (Nigeria)</option>
                  <option value="NU">+683 (Niue)</option>
                  <option value="MP">+1 (Northern Mariana Islands)</option>
                  <option value="MK">+389 (North Macedonia)</option>
                  <option value="NO">+47 (Norway)</option>
                  <option value="OM">+968 (Oman)</option>
                  <option value="PK">+92 (Pakistan)</option>
                  <option value="PW">+680 (Palau)</option>
                  <option value="PS">+970 (Palestinian Territories)</option>
                  <option value="PA">+507 (Panama)</option>
                  <option value="PG">+675 (Papua New Guinea)</option>
                  <option value="PY">+595 (Paraguay)</option>
                  <option value="PE">+51 (Peru)</option>
                  <option value="PH">+63 (Philippines)</option>
                  <option value="PN">+870 (Pitcairn)</option>
                  <option value="PL">+48 (Poland)</option>
                  <option value="PT">+351 (Portugal)</option>
                  <option value="PR">+1 (Puerto Rico)</option>
                  <option value="QA">+974 (Qatar)</option>
                  <option value="CG">+242 (Republic of the Congo)</option>
                  <option value="RE">+262 (Réunion)</option>
                  <option value="RO">+40 (Romania)</option>
                  <option value="RU">+7 (Russia)</option>
                  <option value="RW">+250 (Rwanda)</option>
                  <option value="BL">+590 (Saint Barthélemy)</option>
                  <option value="SH">+290 (Saint Helena)</option>
                  <option value="KN">+1 (Saint Kitts And Nevis)</option>
                  <option value="LC">+1 (Saint Lucia)</option>
                  <option value="MF">+1 (Saint Martin)</option>
                  <option value="VC">+1 (Saint Vincent and the Grenadines)</option>
                  <option value="WS">+685 (Samoa)</option>
                  <option value="SM">+378 (San Marino)</option>
                  <option value="ST">+239 (Sao Tome And Principe)</option>
                  <option value="SA">+966 (Saudi Arabia)</option>
                  <option value="SN">+221 (Senegal)</option>
                  <option value="RS">+381 (Serbia)</option>
                  <option value="SC">+248 (Seychelles)</option>
                  <option value="SL">+232 (Sierra Leone)</option>
                  <option value="SG">+65 (Singapore)</option>
                  <option value="SX">+1 (Sint Maarten)</option>
                  <option value="SK">+421 (Slovakia)</option>
                  <option value="SI">+386 (Slovenia)</option>
                  <option value="SB">+677 (Solomon Islands)</option>
                  <option value="SO">+252 (Somalia)</option>
                  <option value="ZA">+27 (South Africa)</option>
                  <option value="KR">+82 (South Korea)</option>
                  <option value="SS">+211 (South Sudan)</option>
                  <option value="ES">+34 (Spain)</option>
                  <option value="LK">+94 (Sri Lanka)</option>
                  <option value="PM">+508 (St. Pierre And Miquelon)</option>
                  <option value="SD">+249 (Sudan)</option>
                  <option value="SR">+597 (Suriname)</option>
                  <option value="SJ">+47 (Svalbard And Jan Mayen Islands)</option>
                  <option value="SE">+46 (Sweden)</option>
                  <option value="CH">+41 (Switzerland)</option>
                  <option value="TW">+886 (Taiwan)</option>
                  <option value="TJ">+992 (Tajikistan)</option>
                  <option value="TZ">+255 (Tanzania)</option>
                  <option value="TH">+66 (Thailand)</option>
                  <option value="TL">+670 (Timor-Leste)</option>
                  <option value="TG">+228 (Togo)</option>
                  <option value="TK">+690 (Tokelau)</option>
                  <option value="TO">+676 (Tonga)</option>
                  <option value="TT">+1 (Trinidad and Tobago)</option>
                  <option value="TN">+216 (Tunisia)</option>
                  <option value="TR">+90 (Türkiye)</option>
                  <option value="TM">+993 (Turkmenistan)</option>
                  <option value="TC">+1 (Turks and Caicos Islands)</option>
                  <option value="TV">+688 (Tuvalu)</option>
                  <option value="UG">+256 (Uganda)</option>
                  <option value="UA">+380 (Ukraine)</option>
                  <option value="AE">+971 (United Arab Emirates)</option>
                  <option value="GB">+44 (United Kingdom)</option>
                  <option value="US">+1 (United States)</option>
                  <option value="UY">+598 (Uruguay)</option>
                  <option value="UZ">+998 (Uzbekistan)</option>
                  <option value="VU">+678 (Vanuatu)</option>
                  <option value="VA">+39 (Vatican)</option>
                  <option value="VE">+58 (Venezuela)</option>
                  <option value="VN">+84 (Vietnam)</option>
                  <option value="VI">+1 (Virgin Islands (U.S.))</option>
                  <option value="WF">+681 (Wallis And Futuna Islands)</option>
                  <option value="EH">+212 (Western Sahara)</option>
                  <option value="YE">+967 (Yemen)</option>
                  <option value="ZM">+260 (Zambia)</option>
                  <option value="ZW">+263 (Zimbabwe)</option>
                </select>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12">
              <div className="form-floating number">
                <input type="tel" className="form-control" name="telNo" id="floatingphone" placeholder="123-4567-8901" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={phone} onChange={(event) => setPhone(event.target.value)}/>
                <label htmlFor="floatingphone">Phone Number</label>
                <span className="form-tooltip"><HiQuestionMarkCircle /> <span className="form-tooltip-content">This phone number will be used to verify your identity and reset your password if you ever forget it.</span></span>
              </div>
            </div>
            <p className="m-0"><small>Be sure to enter a phone number you can always access. It will be used to verify your identity any time you sign in on a new device or web browser.   Messaging or data rates may apply.</small></p>
            <p className="m-0">Verify with:</p>
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12">
              <div className="form-check mb-2">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" checked={radioDefault} onChange={(event) => setRadioDefault(!radioDefault)} />
                <label className="form-check-label" htmlFor="radioDefault1">Text message</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked={!radioDefault} onChange={(event) => setRadioDefault(!radioDefault)}/>
                <label className="form-check-label" htmlFor="radioDefault2">Phone call</label>
              </div>
            </div>
          </div>

          <hr/>

          <div className="row gap-3 my-4">
            <div className="col col-12 col-sm-12 col-md-12 col-xl-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="checkChecked" checked={checkChecked} onChange={(event) => setCheckChecked(!checkChecked)} />
                <label className="form-check-label" htmlFor="checkChecked">
                  Announcements
                  <small>Receive Apple emails and communications including announcements, marketing, recommendations, and updates about Apple products, services and software.</small>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="checkDefault" checked={checkDefault} onChange={(event) => setCheckDefault(!checkDefault)} />
                <label className="form-check-label" htmlFor="checkDefault">
                  Apps, Music, TV, and More
                  <small>Receive Apple emails and communications including new releases, exclusive content, special offers, and marketing and recommendations for apps, music, movies, TV, books, podcasts, Apple Pay, Apple Card and more.</small>
                </label>
              </div>
            </div>
          </div>

          <hr/>

          <div className="bg-white">
            <div className="row row-gap-3">
              {/* Captcha Image */}
              <div className="col col-4 col-sm-4 col-md-4 col-xl-4">
                <div className="rounded"><img src="/captcha.png" alt="captcha" className="h-12 object-contain"/></div>
              </div>
              {/* Input + Actions */}
              <div className="col col-8 col-sm-8 col-md-8 col-xl-8 flex flex-col gap-2">
                <div className="form-floating">
                  <input id="floatingimage" type="text" placeholder="Type the characters in the image" className="form-control"/>
                  <label htmlFor="floatingimage">Type the characters in the image</label>
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-xl-12 button">
                <button className="flex">
                  <RefreshCw size={16} />
                  New Code
                </button>
                <button className="flex">
                  <Volume2 size={16} />
                  Vision Impaired
                </button>
              </div>
            </div>
          </div>

          <hr/>
        
          <div className="mt-4 pb-5">
            <figure><img src={Icon} alt="Dataprivacy" /></figure>
            <p className="font">Your Apple Account information is used to allow you to sign in securely and access your data. Apple records certain data for security, support and reporting purposes. If you agree, Apple may also use your Apple Account information to send you marketing emails and communications, including based on your use of Apple services. <NavLink to="/" className="color">See how your data is managed</NavLink>.</p>
            <div className="d-flex justify-content-center"><button type="submit" className="btn btn-primary" name="websubmit">Continue</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
